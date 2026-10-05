import type { Loader } from "astro/loaders";
import { createHash } from "node:crypto";
import { mkdir, writeFile, access, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGE_DIR = "public/wishlist-img";
const IMAGE_URL_PREFIX = "/wishlist-img";

type CmsItem = {
  id: string;
  name: string;
  category: string;
  image?: string;
  note?: string;
  price?: string;
  links: { label: string; url: string }[];
};

// Los loaders no reciben las variables sin prefijo PUBLIC_, así que se lee
// .env a mano; process.env (p. ej. en Cloudflare) tiene prioridad.
const readEnv = async (name: string) => {
  if (process.env[name]) return process.env[name];
  try {
    const dotenv = await readFile(path.join(process.cwd(), ".env"), "utf8");
    const line = dotenv.split("\n").find((l) => l.startsWith(`${name}=`));
    return line?.slice(name.length + 1).trim().replace(/^["']|["']$/g, "");
  } catch {
    return undefined;
  }
};

// Copia la imagen del CMS al build, redimensionada. Queda en un directorio
// gitignored, así el sitio publicado no depende del CMS para mostrarlas.
const cacheImage = async (id: string, url: string): Promise<string | null> => {
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 8);
  const file = `${id}-${hash}.webp`;
  const target = path.join(process.cwd(), IMAGE_DIR, file);

  try {
    await access(target);
  } catch {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[wishlist] no se pudo descargar la imagen (${res.status})`);
      return null;
    }
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(
      target,
      await sharp(Buffer.from(await res.arrayBuffer()))
        .resize({ width: 256, height: 256, fit: "inside" })
        .webp({ quality: 82 })
        .toBuffer(),
    );
  }
  return `${IMAGE_URL_PREFIX}/${file}`;
};

export const cmsWishlistLoader = (): Loader => ({
  name: "cms-wishlist",
  load: async ({ store, logger, parseData, generateDigest }) => {
    const cmsUrl = (await readEnv("CMS_URL"))?.replace(/\/$/, "");

    if (!cmsUrl) {
      const message = "Falta CMS_URL para cargar la wishlist.";
      if (import.meta.env.PROD) throw new Error(message);
      logger.warn(`${message} La wishlist quedará vacía.`);
      store.clear();
      return;
    }

    const res = await fetch(`${cmsUrl}/api/public/wishlist`);
    if (!res.ok) throw new Error(`CMS wishlist: ${res.status} ${await res.text()}`);
    const { items } = (await res.json()) as { items: CmsItem[] };

    store.clear();
    for (const [position, item] of items.entries()) {
      const data = await parseData({
        id: item.id,
        data: {
          name: item.name,
          category: item.category,
          image: item.image ? await cacheImage(item.id, item.image) : null,
          note: item.note,
          price: item.price,
          links: item.links.map((l) => ({ store: l.label, url: l.url })),
          position,
        },
      });
      store.set({ id: item.id, data, digest: generateDigest(data) });
    }
    logger.info(`Wishlist: ${items.length} ítems desde el CMS`);
  },
});
