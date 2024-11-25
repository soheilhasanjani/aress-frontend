"use client";

import React, { useState } from "react";
import Link from "next/link";
import menuItems from "../configs/menu-items";
import DotsNineIcon from "@/features/landing-layout/components/dots-nine-icon";
import { cn } from "@/utils/cn";
import XIcon from "@/features/landing-layout/components/x-icon";

const MainMenu = () => {
  //
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //
  return (
    <>
      <ul className="lg:flex items-center gap-10 hidden">
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
      <button className="lg:hidden" onClick={() => setIsOpenMenu(true)}>
        <DotsNineIcon className="size-9" />
      </button>
      <div
        className={cn(
          "w-[100dvw] h-[100dvh] bg-white fixed top-0 start-0 transition-transform",
          isOpenMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <XIcon
          className="absolute top-5 start-5 cursor-pointer"
          onClick={() => setIsOpenMenu(false)}
        />
        <ul className="flex flex-col justify-center items-center gap-10 h-full">
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-[#3B3C4A] text-base"
                  onClick={() => setIsOpenMenu(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
