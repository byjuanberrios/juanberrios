import type { MenuListProps } from "@/@types";

export const Menus: MenuListProps[] = [
  {
    name: "Posts",
    link: "/posts",
  },
  {
    name: "Portafolio",
    link: "http://juanberrios.dev",
  },
];

const MenuDesktop = () => {
  return (
    <div className="hidden md:flex items-center gap-10 font-sans">
      <nav className="flex gap-6 list-none">
        {Menus.map((menu, i) => (
          <li className="relative flex group" key={i}>
            <a
              href={menu.link ? menu.link : ""}
              rel={menu.link?.startsWith("http") ? "noopener noreferrer" : ""}
              target={menu.link?.startsWith("http") ? "_blank" : "_self"}
              className="text-sm lg:text-base text-black dark:text-white bg-transparent font-medium px-2.5 py-1.5"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default MenuDesktop;
