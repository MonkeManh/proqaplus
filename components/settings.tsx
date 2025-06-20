"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { usePathname } from "next/navigation";
import { IPreferences } from "@/models/interfaces/IPreferences";

const defaultPreferences: IPreferences = {
  advancedMode: false,
  soundEffects: true,
};

export function SettingsMenu() {
  const [preferences, setPreferences] =
    useState<IPreferences>(defaultPreferences);
  const pathname = usePathname();

  useEffect(() => {
    loadPreferences();
  }, []);

  function loadPreferences() {
    try {
      const rawPrefs = localStorage.getItem("PREFERENCES");
      if (!rawPrefs) {
        savePreferences(defaultPreferences);
        return;
      }
      const loadedPrefs = JSON.parse(rawPrefs) as IPreferences;
      setPreferences(loadedPrefs);
    } catch (error) {
      console.error("Failed to load preferences:", error);
      savePreferences(defaultPreferences);
    }
  }

  function savePreferences(prefs: IPreferences) {
    try {
      localStorage.setItem("PREFERENCES", JSON.stringify(prefs));
      setPreferences(prefs);
      // Dispatch storage event to notify other components
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error("Failed to save preferences:", error);
    }
  }

  function changePreference(name: keyof IPreferences, value: boolean) {
    const updatedPreferences = {
      ...preferences,
      [name]: value,
    };
    savePreferences(updatedPreferences);
  }

  if (pathname === "/" || pathname === "/about" || pathname === "/start") {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2">
          <div className="flex items-center justify-between space-x-2 py-2">
            <Label htmlFor="advanced-mode" className="flex-1 cursor-pointer">
              Advanced Mode
            </Label>
            <Switch
              id="advanced-mode"
              checked={preferences.advancedMode}
              onCheckedChange={(checked: boolean) =>
                changePreference("advancedMode", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between space-x-2 py-2">
            <Label htmlFor="sound-effects" className="flex-1 cursor-pointer">
              Sound Effects
            </Label>
            <Switch
              id="sound-effects"
              checked={preferences.soundEffects}
              onCheckedChange={(checked: boolean) =>
                changePreference("soundEffects", checked)
              }
            />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
