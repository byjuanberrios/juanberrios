import { Moon, Sun } from "lucide-react";

const ToggleThemeButton = () => {
  return (
    <button
      className="theme-btn relative cursor-pointer flex justify-center items-center p-1 min-h-[20px] min-w-[20px]"
      title="Cambia el tema claro/oscuro"
      aria-label="Cambiar tema"
    >
      <Moon className="dark:hidden block w-5 h-5" />
      <Sun className="dark:block hidden w-5 h-5" />
    </button>
  );
};

export default ToggleThemeButton;
