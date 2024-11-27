"use client";

import * as React from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [ currentTheme, setCurrentTheme ] = useState("")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border px-4 py-3 border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary cursor-pointer">
          {currentTheme === "light" ? (
            <Sun className="h-6 w-6" />
          ) : currentTheme === "dark" ? (
            <Moon className="h-6 w-6" />
          ) : (
            <SunMoon className="h-6 w-6" />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {
          setTheme("light");
          setCurrentTheme("light")
        }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          setTheme("dark");
          setCurrentTheme("dark")
        }}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          setTheme("system");
          setCurrentTheme("system")
        }}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
