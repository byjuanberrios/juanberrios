import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { $isMobileMenuOpen } from "../../../store";
import { Menus } from "@/lib/Menus";

const MenuMobile = () => {
  const isMobileMenuOpen = useStore($isMobileMenuOpen);

  useEffect(() => {
    $isMobileMenuOpen.set(false);
  }, []);

  return (
    <div
      className={`w-full overflow-hidden ${
        isMobileMenuOpen ? "h-full" : "h-0"
      } md:hidden`}
    >
      <nav className="list-none">
        {Menus.map((menu, i) => (
          <li key={i}>
            <a
              href={menu.link ? menu.link : ""}
              rel={menu.link?.startsWith("http") ? "noopener noreferrer" : ""}
              target={menu.link?.startsWith("http") ? "_blank" : "_self"}
              className="text-black dark:text-white bg-transparent"
              onClick={() => $isMobileMenuOpen.set(false)}
            >
              {menu.name}
            </a>
            {menu.submenus && (
              <ul>
                {menu.submenus.map((submenu, i) => (
                  <li key={i}>
                    <a
                      href={submenu.link}
                      rel={
                        submenu.link?.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      target={
                        submenu.link?.startsWith("http") ? "_blank" : "_self"
                      }
                      className="block"
                      onClick={() => $isMobileMenuOpen.set(false)}
                    >
                      {submenu.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default MenuMobile;
