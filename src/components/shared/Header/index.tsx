import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bottom-4 md:bottom-auto md:top-12 z-20">
      <div className="w-full header-lateral-spacing flex justify-center items-center mx-auto">
        <div className="relative text-sm font-sans w-full rounded-3xl flex flex-wrap bg-stone-200/10 dark:bg-stone-900/10 backdrop-blur-md px-4.5 py-2.5 border border-neutral-400/30 dark:border-stone-700/70">
          <div className="flex justify-between w-full items-center order-2 md:order-1">
            <div className="flex items-center gap-4">
              <button
                className="font-medium h-5 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
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
            className={`w-full overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"} order-1 md:order-2 transition-all ease-in-out duration-300 grid gap-1.5 md:gap-1`}
          >
            <a
              href="/"
              className="mt-1.5 md:mt-1.5 opacity-60 hover:opacity-100"
            >
              Inicio
            </a>
            <a href="/posts" className="opacity-60 hover:opacity-100">
              Posts
            </a>
            <a
              href="https://juanberrios.dev"
              className="opacity-60 hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portafolio
            </a>
            <a href="/playlists" className="opacity-60 hover:opacity-100">
              Playlists
            </a>
            <a
              href="/bookmarks"
              className="mb-3 md:mb-1 opacity-60 hover:opacity-100"
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
