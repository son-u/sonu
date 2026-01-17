import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "SSR vs CSR | Sonu Sharma",
    description: "Server-side rendering vs. client-side rendering: When to use what?",
};

export default function SSRvsCSRBlogPage() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12 flex-1">
                <article className="mx-auto w-full max-w-3xl bg-background prose dark:prose-invert">
                    <Link
                        className="no-underline hover:text-foreground text-muted-foreground transition-colors inline-flex items-center gap-2 mb-8 text-sm"
                        href="/blogs"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-left h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>{" "}
                        Back to all posts
                    </Link>
                    <h1 className="title font-bold text-3xl tracking-tight mb-2">
                        Server-side rendering vs. client-side rendering: When to use what?
                    </h1>
                    <div className="flex justify-between items-center mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
                        <p className="text-sm">2026-01-03</p>
                    </div>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        The debate of SSR (Server-Side Rendering) vs. CSR (Client-Side Rendering) isn't new, but in 2026, the lines have blurred significantly. With the mainstream adoption of <strong>React Server Components (RSC)</strong> and sophisticated hybrid frameworks, we seldom choose purely one or the other.
                    </p>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        The 2026 Standard: Hybrid & Server First
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Modern meta-frameworks like Next.js 16+ have popularized a "Server First" default. Components run on the server unless explicitly opted into the client. This shift has redefined the decision matrix.
                    </p>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        Server-Side Rendering (SSR) & RSC
                    </h2>
                    <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-400 marker:text-neutral-400">
                        <li className="mb-1"><strong>Best for:</strong> Marketing pages, blogs, e-commerce listings, and dashboards with heavy data fetching.</li>
                        <li className="mb-1"><strong>Why:</strong> Instant FCP (First Contentful Paint), superior SEO, and zero bundle size for server-only components.</li>
                        <li className="mb-1"><strong>2026 Nuance:</strong> With RSC, you can stream UI parts from the server without sending hydration JavaScript, acting like a supercharged dynamic HTML.</li>
                    </ul>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        Client-Side Rendering (CSR)
                    </h2>
                    <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-400 marker:text-neutral-400">
                        <li className="mb-1"><strong>Best for:</strong> Highly interactive widgets, complex state management (like a Trello board), and offline-first PWAs.</li>
                        <li className="mb-1"><strong>Why:</strong> Immediate feedback on user interaction (clicks, drags) without a network round-trip.</li>
                    </ul>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        The Verdict: Context is King
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Stop asking "Which is better?" and start asking "Where does this state belong?".
                    </p>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        If it's static or data-heavy, keep it on the server. If it requires instant user feedback or browser APIs, ship it to the client. In 2026, the best applications effortlessly mix both.
                    </p>
                </article>
            </main>
            <Footer />
        </div>
    );
}
