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
import { navbarBottom, navbarTop } from "@/lib/utils";
import Boutton from "../Boutton";
import { Menu, User } from "lucide-react";

const NavBarMobile = () => {

  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <Boutton
              className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary"
              Icon={Menu}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px] mr-7">
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
                    Ctrl+{keyword} | ⌘+{keyword}
                  </DropdownMenuShortcut>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a
                className="flex items-center justify-between w-full"
                href="/profil"
              >
                {" "}
                <span className="mr-5">
                  <User />
                </span>{" "}
                Profil
                <DropdownMenuShortcut>Ctrl+p | ⌘+p</DropdownMenuShortcut>
              </a>
            </DropdownMenuItem>
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
                  Ctrl+{keyword} | ⌘+{keyword}
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
