"use client";

import React from "react";
import { navbarTop, navbarBottom } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[400px] flex col bg-muted justify-between h-screen font-lufgaMedium">
      <div className="flex flex-col justify-between w-full mx-5 my-10">
        <div>
          {navbarTop.map(({ label, link, icon: Icon }, index) => (
            <a
              className={`cursor-pointer ${
                pathname === link ? "bg-primary text-background" : "text-black"
              } hover:bg-muted-foreground hover:text-background mx-1 my-1 p-[10px] rounded-[10px] items-center flex flex-row`}
              key={index}
              href={link}
            >
              <span className="mr-5">{Icon && <Icon />}</span> {label}
            </a>
          ))}
        </div>
        <div>
          {navbarBottom.map(({ label, link, icon: Icon }, index) => {
            const isActive = pathname === link;
            const baseClasses =
              "cursor-pointer mx-1 my-1 p-[10px] rounded-[10px] items-center flex flex-row";
            const activeClasses = isActive
              ? "bg-primary text-background"
              : "text-black hover:bg-muted-foreground hover:text-background";
            const labelSpecificClasses =
              label === "Help"
                ? "hover:text-white hover:bg-warning"
                : label === "Log Out"
                ? "hover:text-white hover:bg-red-500"
                : "text-red-500";

            return (
              <a
                className={`${baseClasses} ${activeClasses} ${labelSpecificClasses}`}
                key={index}
                href={link}
              >
                {Icon && (
                  <span className="mr-5">
                    <Icon />
                  </span>
                )}{" "}
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
