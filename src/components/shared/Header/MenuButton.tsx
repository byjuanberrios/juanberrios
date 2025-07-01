import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const MenuButton = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="w-7 h-7 flex flex-wrap gap-1 justify-center items-center content-center cursor-pointer"
            aria-label="Abrir menú"
          >
            <span className="block bg-black dark:bg-white w-7 h-[0.17em] transition-all"></span>
            <span className="block bg-black dark:bg-white w-7 h-[0.17em] transition-all"></span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="px-8 pt-14 pb-10 md:px-12 md:py-18 w-2/3 md:w-1/4 max-w-full bg-zinc-900 text-zinc-50"
        >
          <nav className="list-none flex flex-col gap-2 md:gap-2.5 mb-4 md:mb-5">
            <div>
              <a
                href="/"
                className="font-sans text-base font-semibold tracking-tight underline underline-offset-6 decoration-dashed decoration-zinc-500 hover:decoration-transparent"
              >
                Inicio
              </a>
            </div>
            <div>
              <a
                href="/posts"
                className="font-sans text-base font-semibold tracking-tight underline underline-offset-6 decoration-dashed decoration-zinc-500 hover:decoration-transparent"
              >
                Posts
              </a>
            </div>
            <div>
              <a
                href="https://juanberrios.dev"
                rel="noopener noreferrer"
                target="_blank"
                className="font-sans text-base font-semibold tracking-tight underline underline-offset-6 decoration-dashed decoration-zinc-500 hover:decoration-transparent"
              >
                Portafolio
              </a>
            </div>
          </nav>
          <nav className="list-none flex flex-col gap-2 md:gap-2.5">
            <div>
              <a
                href="/bookmarks"
                className="font-sans text-base font-semibold tracking-tight underline underline-offset-6 decoration-dashed decoration-zinc-500 hover:decoration-transparent"
              >
                Marcadores
              </a>
            </div>
            <div>
              <a
                href="/playlists"
                className="font-sans text-base font-semibold tracking-tight underline underline-offset-6 decoration-dashed decoration-zinc-500 hover:decoration-transparent"
              >
                Playlists
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuButton;
