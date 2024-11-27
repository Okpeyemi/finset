"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Profil from "../Profil";
import { navbarBottom, navbarTop } from "@/lib/utils";

const NavBarMobile = () => {
  return (
    <div className="xl:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex border border-border text-foreground rounded-[10px] items-center px-2 cursor-pointer">
            <Profil />
            <div className="mx-3 my-[2px]">
              <h6>Maqsoud TAWALIOU</h6>
              <p>maqsoudt9@gmail.com</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px]">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {navbarTop.map(({ label, link, icon: Icon, keyword }, index) => (
              <DropdownMenuItem key={index}>
                <a
                  className="flex items-center justify-between w-full"
                  href={link}
                >
                  <span className="mr-5">{Icon && <Icon />}</span> {label}
                  <DropdownMenuShortcut>
                    Ctrl{keyword} | ⌘{keyword}
                  </DropdownMenuShortcut>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {navbarBottom.map(({ label, link, icon: Icon, keyword }, index) => (
            <DropdownMenuItem key={index}>
              <a
                className={`flex items-center justify-between w-full ${
                  label === "Help"
                    ? "text-warning hover:text-foreground"
                    : label === "Log Out"
                    ? "text-destructive hover:text-foreground"
                    : ""
                }`}
                href={link}
              >
                <span className="mr-5">{Icon && <Icon />}</span> {label}
                <DropdownMenuShortcut>
                  Ctrl{keyword} | ⌘{keyword}
                </DropdownMenuShortcut>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBarMobile;
