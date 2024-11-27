"use client";

import React, { useEffect, useState } from "react";
import { navbarTop, navbarBottom } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ModeToggle from "../ModeToggle";

const NavBar = () => {
  const pathname = usePathname();
  const [navToggle, setNavToggle] = useState(true);

  useEffect(() => {
    setNavToggle(true)
  }, [])

  return (
    <div
      className={`${
        navToggle ? "w-[400px]" : "w-fit"
      } max-md:w-[300px] hidden lg:flex col bg-muted justify-between h-screen font-lufgaMedium transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col justify-between w-full mx-5 my-10">
        <div>
          <div className="my-5 flex justify-end">
            <button onClick={() => setNavToggle(!navToggle)}>
              {navToggle ? (
                <ChevronLeft className="border border-border rounded-[10px]" />
              ) : (
                <ChevronRight className="border border-border rounded-[10px]" />
              )}
            </button>
          </div>
          <div>
            <TooltipProvider>
              {navbarTop.map(({ label, link, icon: Icon }, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger className="flex flex-col w-full">
                    <a
                      className={`cursor-pointer ${
                        pathname === link
                          ? "bg-primary text-white"
                          : "text-foreground"
                      } ${navToggle ? "w-full" : "w-fit"} hover:bg-secondary hover:text-foreground mx-1 my-1 p-[10px] rounded-[10px] items-center flex flex-row transition-all duration-300 ease-in-out`}
                      key={index}
                      href={link}
                    >
                      <span
                        className={`${
                          navToggle ? "mr-5" : ""
                        } transition-all duration-300`}
                      >
                        {Icon && <Icon />}
                      </span>{" "}
                      <span
                        className={`${
                          navToggle ? "opacity-100 w-auto" : "opacity-0 w-0"
                        } transition-all duration-300 ease-in-out overflow-hidden`}
                      >
                        {label}
                      </span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-foreground">
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
        <div className={`flex flex-col h-[200px] justify-between ${navToggle ? "" : "items-center"}`}>
        <div>
          <TooltipProvider>
            {navbarBottom.map(({ label, link, icon: Icon }, index) => {
              const isActive = pathname === link;
              const baseClasses =
                "cursor-pointer mx-1 my-1 p-[10px] rounded-[10px] items-center flex flex-row";
              const activeClasses = isActive
                ? "bg-primary text-foreground"
                : "text-foreground hover:bg-secondary hover:text-foreground";
              const labelSpecificClasses =
                label === "Help"
                  ? "hover:text-white hover:bg-warning"
                  : label === "Log Out"
                  ? "hover:text-white hover:bg-[#E83838]"
                  : "";

              return (
                <Tooltip key={index}>
                  <TooltipTrigger className="flex flex-col w-full">
                    <a
                      className={`${baseClasses} ${activeClasses} ${labelSpecificClasses}  ${navToggle ? "w-full" : "w-fit"} `}
                      key={index}
                      href={link}
                    >
                      {Icon && (
                        <span className={`${navToggle ? "mr-5" : ""}`}>
                          <Icon />
                        </span>
                      )}{" "}
                      {navToggle ? `${label}` : ""}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-foreground">
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
        <ModeToggle navToggle={navToggle} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;