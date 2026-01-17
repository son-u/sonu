"use client";

import { useEffect, useState } from "react";

export function Footer() {
    const [time, setTime] = useState("");
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        // Fetch from internal proxy to avoid ad-blockers
        const BASE_VISITORS = 117;
        const hasVisited = sessionStorage.getItem("visited");

        // Only increment if not visited in this session
        const endpoint = hasVisited ? "/api/visitors" : "/api/visitors?increment=true";

        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                if (data.count) {
                    setVisitors(data.count + BASE_VISITORS);
                    if (!hasVisited) {
                        sessionStorage.setItem("visited", "true");
                    }
                }
            })
            .catch((err) => console.error("Error fetching visitors:", err));

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="py-8 text-xs text-muted-foreground border-t border-border mt-12 w-full max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
                    <p>
                        Designed & Developed by{" "}
                        <span className="font-semibold text-foreground">Sonu</span>
                    </p>
                    <p className="opacity-70">
                        &copy; {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-center sm:items-end text-center sm:text-right">
                    <p className="font-mono tabular-nums opacity-70">
                        Visitors <span className="font-semibold text-foreground">#{visitors}</span>
                    </p>
                    <p className="font-mono tabular-nums">
                        India, {time}
                    </p>
                </div>
            </div>
        </footer>
    );
}
