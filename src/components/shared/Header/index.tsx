import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bottom-3 md:bottom-auto md:top-12 z-20">
      <div className="w-full header-lateral-spacing flex justify-center items-center mx-auto xl:px-0 xl:max-w-7xl">
        {/* <MenuDesktop /> */}
        <div className="text-sm font-sans w-full rounded-3xl flex flex-wrap bg-stone-200/30 dark:bg-neutral-800/30 backdrop-blur-md px-4.5 py-2.5 border border-neutral-300/50 dark:border-stone-700/50">
          <div className="flex justify-between w-full items-center order-2 md:order-1">
            <div className="flex items-center">
              <button
                className="font-medium h-5 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? "Cerrar Menú" : "Menú"}
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

        {/* <MenuButton /> */}
      </div>
    </header>
  );
};

export default Header;
