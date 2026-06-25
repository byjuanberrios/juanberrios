import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bottom-4 md:bottom-auto md:top-12 z-20">
      <div className="w-full header-lateral-spacing flex justify-center items-center mx-auto">
        <div className="relative overflow-hidden text-sm font-sans w-full rounded-3xl flex flex-wrap bg-stone-300/50 dark:bg-zinc-900/50 backdrop-blur-xs px-4.5 md:px-5 py-2.5 border border-neutral-400/20 dark:border-zinc-200/10 after:-z-10 after:h-full after:top-0 after:left-0 after:absolute after:w-full after:bg-linear-to-tr after:from-stone-400/20 after:via-neutral-500/10 after:to-zinc-400/20 after:blur-3xl">
          <div className="flex justify-between w-full items-center order-2 md:order-1">
            <div className="flex items-center gap-4">
              <button
                className="font-medium h-5 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="menu"
              >
                {menuOpen ? (
                  "Cerrar Menú"
                ) : (
                  <>
                    <span className="flex items-center gap-1">
                      <span className="grid grid-cols-2 w-3 h-3 items-center">
                        <span className="block w-1 h-1 bg-neutral-800 dark:bg-stone-200"></span>
                        <span className="block w-1 h-1 bg-neutral-800 dark:bg-stone-200"></span>
                        <span className="block w-1 h-1 bg-neutral-800 dark:bg-stone-200"></span>
                        <span className="block w-1 h-1 bg-neutral-800 dark:bg-stone-200"></span>
                      </span>
                      <span>Menú</span>
                    </span>
                  </>
                )}
              </button>
            </div>
            <ToggleThemeButton />
          </div>

          <div
            id="menu"
            role="navigation"
            aria-label="Navegación principal"
            className={`w-full overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"} order-1 md:order-2 transition-all ease-in-out duration-300 grid gap-1.5 md:gap-1`}
          >
            <a
              href="/"
              className="mt-1.5 md:mt-1.5 opacity-80 hover:opacity-100 flex items-center"
            >
              Inicio
            </a>
            <a
              href="/posts"
              className="opacity-80 hover:opacity-100 flex items-center"
            >
              Posts
            </a>
            <a
              href="https://juanberrios.dev"
              className="opacity-80 hover:opacity-100 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portafolio
            </a>
            <a
              href="/playlists"
              className="opacity-80 hover:opacity-100 flex items-center"
            >
              Playlists
            </a>
            <a
              href="/bookmarks"
              className="mb-3 md:mb-1 opacity-80 hover:opacity-100 flex items-center"
            >
              Marcadores
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
