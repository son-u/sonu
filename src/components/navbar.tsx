"use client";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blogs", label: "Blog" },
    ];

    return (
        <header className="sticky top-0 z-50 mb-8 flex items-center justify-between border-b border-border/20 bg-background/75 py-2 backdrop-blur-xs">
            <nav className="flex items-center gap-x-6">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <div key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-foreground",
                                    isActive ? "text-foreground" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground rounded-full" />
                                )}
                            </Link>
                        </div>
                    );
                })}
            </nav>
            <div className="flex items-center">
                <ModeToggle />
            </div>
        </header>
    );
}
