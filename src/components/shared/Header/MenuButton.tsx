import { useStore } from "@nanostores/react";
import { $isMobileMenuOpen } from "../../../store";

const MenuButton = () => {
  const isMobileMenuOpen = useStore($isMobileMenuOpen);

  const setMobileMenuOpen = () => {
    $isMobileMenuOpen.set(!isMobileMenuOpen);
  };

  return (
    <button
      className="w-7 h-7 flex md:hidden flex-wrap gap-1 justify-center items-center content-center"
      onClick={setMobileMenuOpen}
    >
      <span
        className={`block bg-black dark:bg-white w-7 h-[0.17em] transition-all ${
          isMobileMenuOpen && "-rotate-45 translate-y-1"
        }`}
      ></span>
      <span
        className={`block bg-black dark:bg-white w-7 h-[0.17em] transition-all ${
          isMobileMenuOpen && "rotate-45 -translate-y-1"
        }`}
      ></span>
    </button>
  );
};

export default MenuButton;
