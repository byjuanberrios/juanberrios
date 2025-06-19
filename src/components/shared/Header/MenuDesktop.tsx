import { Menus } from "@/lib/Menus";

const MenuDesktop = () => {
  return (
    <div className="hidden md:flex grow-1 justify-end items-center gap-10">
      <nav className="flex gap-6 list-none">
        {Menus.map((menu, i) => (
          <li className="relative flex group" key={i}>
            <a
              href={menu.link ? menu.link : ""}
              rel={menu.link?.startsWith("http") ? "noopener noreferrer" : ""}
              target={menu.link?.startsWith("http") ? "_blank" : "_self"}
              className="text-black dark:text-white bg-transparent group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-2.5 py-1.5"
            >
              {menu.name}
            </a>
            {menu.submenus && (
              <ul className="absolute hidden group-hover:block top-full bg-zinc-100 dark:dark:bg-zinc-900 w-full min-w-max">
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
                      className="p-2.5 py-1.5 bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700 block"
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

export default MenuDesktop;
