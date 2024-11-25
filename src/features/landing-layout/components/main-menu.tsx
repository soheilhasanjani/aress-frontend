import React from "react";
import Link from "next/link";
import menuItems from "../configs/menu-items";

const MainMenu = () => {
  return (
    <ul className="flex items-center gap-10">
      {menuItems.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.href} className="text-[#3B3C4A] text-base">
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
