"use client";

import * as React from "react";
import { Switch } from "@headlessui/react";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const ModeToggleMobile = () => {
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
    <div className="items-center hidden max-lg:flex mr-2">
      <Switch
          checked={enabled}
          onChange={handleToggle}
          className="relative inline-flex items-center bg-primary rounded-[10px] hover:border hover:bg-secondary hover:border-primary text-white"
        >
          <span className="sr-only">Enable theme toggle</span>
          <span
            className={`p-[7.4px] h-[38px] w-[38px] transform rounded-full`}
          >
            {enabled ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </span>
        </Switch>
    </div>
  );
};

export default ModeToggleMobile;
