import { Moon, Sun } from "lucide-react";

const ToggleThemeButton = () => {
  return (
    <button
      className="theme-btn relative cursor-pointer flex justify-center items-center p-1"
      title="Cambia el tema claro/oscuro"
      aria-label="auto"
      aria-live="polite"
    >
      <Moon className="dark:hidden block w-5 h-5" />
      <Sun className="dark:block hidden w-5 h-5" />
    </button>
  );
};

export default ToggleThemeButton;
