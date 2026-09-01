import { useState, type ReactNode } from "react";
import { X } from "lucide-react";
import ToggleThemeButton from "./ToggleThemeButton";

const MenuLink = ({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    className={`flex items-center opacity-80 hover:opacity-100 transition-opacity ease-smooth duration-600 ${className}`}
  >
    {children}
  </a>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bottom-4 md:bottom-auto md:top-12 z-20">
      <div className="w-full header-lateral-spacing flex justify-center items-center mx-auto">
        <div className="relative overflow-hidden text-sm font-sans w-full rounded-3xl flex flex-wrap bg-stone-300/50 dark:bg-zinc-900/50 backdrop-blur-xs px-4.5 md:px-5 py-2.5 border border-neutral-400/20 dark:border-zinc-200/10 after:-z-10 after:h-full after:top-0 after:left-0 after:absolute after:w-full after:bg-linear-to-tr after:from-stone-400/20 after:via-neutral-500/10 after:to-zinc-400/20 after:blur-3xl">
          <div className="flex justify-between w-full items-center order-2 md:order-1">
            <div className="flex items-center gap-4">
              <button
                className="relative font-medium h-5 cursor-pointer before:content-[''] before:absolute before:-inset-x-1 before:-inset-y-3"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="menu"
              >
                <span className="flex items-center gap-1">
                  <span className="relative grid w-4 h-4 place-items-center">
                    <span
                      className={`col-start-1 row-start-1 grid grid-cols-2 w-3 h-3 items-center transition-all ease-smooth duration-400 ${menuOpen ? "opacity-0 scale-75 rotate-45" : "opacity-100 scale-100 rotate-0"}`}
                    >
                      <span className="block w-1 h-1 bg-vivid"></span>
                      <span className="block w-1 h-1 bg-vivid"></span>
                      <span className="block w-1 h-1 bg-vivid"></span>
                      <span className="block w-1 h-1 bg-vivid"></span>
                    </span>
                    <X
                      className={`col-start-1 row-start-1 w-4 h-4 text-vivid transition-all ease-smooth duration-400 ${menuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-45"}`}
                      strokeWidth={2.5}
                    />
                  </span>
                  <span>{menuOpen ? "Cerrar Menú" : "Menú"}</span>
                </span>
              </button>
            </div>
            <ToggleThemeButton />
          </div>

          <div
            className={`w-full grid order-1 md:order-2 transition-[grid-template-rows,opacity] ease-smooth duration-500 ${menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div
              id="menu"
              role="navigation"
              aria-label="Navegación principal"
              className="overflow-hidden grid gap-1.5 md:gap-1"
            >
              <MenuLink href="/" className="mt-1.5 md:mt-1.5">
                Inicio
              </MenuLink>
              <MenuLink href="/posts">Posts</MenuLink>
              <MenuLink href="/playlists">Playlists</MenuLink>
              <MenuLink href="/bookmarks" className="mb-3 md:mb-1">
                Marcadores
              </MenuLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
