"use client";

import * as React from "react";
import { Switch } from "@headlessui/react";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

type ModeProps = {
  navToggle: boolean;
};

const ModeToggle: React.FC<ModeProps> = ({ navToggle }) => {
  const { theme, toggleTheme } = useTheme();
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    setEnabled(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    toggleTheme();
    setEnabled((prev) => !prev);
  };

  if (enabled === null) {
    return null;
  }

  return (
    <div className="flex items-center">
      {navToggle ? (
        <Switch
          checked={enabled}
          onChange={handleToggle}
          className="relative border border-border inline-flex h-12 w-[90px] items-center rounded-[10px]"
        >
          <span className="sr-only">Enable theme toggle</span>
          <span
            className={`${
              enabled ? "translate-x-11" : "translate-x-1"
            } inline-block p-2 h-10 w-10 transform rounded-[10px] bg-primary text-white transition`}
          >
            {enabled ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </span>
        </Switch>
      ) : (
        <Switch
          checked={enabled}
          onChange={handleToggle}
          className="relative inline-flex items-center bg-primary rounded-[10px] hover:border hover:bg-secondary hover:border-primary text-white"
        >
          <span className="sr-only">Enable theme toggle</span>
          <span
            className={`p-2 h-10 w-10 transform rounded-full`}
          >
            {enabled ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </span>
        </Switch>
      )}
    </div>
  );
};

export default ModeToggle;
