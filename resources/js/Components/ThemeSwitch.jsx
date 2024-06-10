import React, { createContext, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./Custom/button";

export default function ThemeSwitch() {
    const storedValue = localStorage.getItem("vite-ui-theme");
    const [theme, setTheme] = useState(() =>
        storedValue !== null ? storedValue : "light"
    );

    useEffect(() => {
        const themeColor = theme === "dark" ? "#020817" : "#fff";
        const metaThemeColor = document.querySelector(
            "meta[name='theme-color']"
        );

        metaThemeColor && metaThemeColor.setAttribute("content", themeColor);

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("vite-ui-theme", theme);
    }, [theme]);

    const handleTheme = (value) => {
        setTheme(value);
    };

    return (
        <Button
            onClick={() =>
                theme === "light" ? handleTheme("dark") : handleTheme("light")
            }
            variant="ghost"
            size="icon"
            className="rounded-full"
        >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </Button>
    );
}
