import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const shouldIncrement = searchParams.get("increment") === "true";

        // Determine endpoint based on increment flag
        // Standard CounterAPI: /visits returns count, /visits/up increments
        const endpoint = shouldIncrement
            ? "https://api.counterapi.dev/v1/sonu-portfolio-2026/visits/up"
            : "https://api.counterapi.dev/v1/sonu-portfolio-2026/visits";

        const res = await fetch(endpoint);
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}
