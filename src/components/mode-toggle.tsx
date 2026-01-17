"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="px-2">
                <span className="sr-only">Toggle theme</span>
            </Button>
        );
    }

    const isDark = theme === "dark";

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        if (!document.startViewTransition) {
            setTheme(isDark ? "light" : "dark");
            return;
        }

        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        // @ts-ignore
        const transition = document.startViewTransition(() => {
            setTheme(isDark ? "light" : "dark");
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];
            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-2"
            onClick={toggleTheme}
        >
            <Sun
                className={`h-[1.2rem] w-[1.2rem] transition-all text-foreground ${isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
                    }`}
            />
            <Moon
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all text-foreground ${isDark ? "rotate-0 scale-100" : "90 scale-0"
                    }`}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
