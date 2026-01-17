import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "AI Coding Assistants | Sonu Sharma",
    description: "AI coding assistants: Productivity boost or crutch?",
};

export default function AIProductivityBlogPage() {
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
                        AI coding assistants: Productivity boost or crutch?
                    </h1>
                    <div className="flex justify-between items-center mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
                        <p className="text-sm">2026-01-03</p>
                    </div>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        By 2026, AI coding assistants like GitHub Copilot and newer, more autonomous agents have become ubiquitous. But as adoption hits near 100%, a polarizing debate has emerged: <em>Are we building better software, or just generating more of it?</em>
                    </p>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        The "Super-Senior" Effect
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        For experienced developers, AI has been a massive multiplier. It acts as a tireless junior developer—writing boilerplate, generating unit tests, and refactoring legacy functions in seconds.
                    </p>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        The productivity gains are real. Studies in 2025 showed that senior engineers using AI assistants shipped features <strong>40% faster</strong> with fewer regression bugs.
                    </p>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        The "Junior Trap"
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        However, for new developers, the story is more complex. There is a growing risk of the "Junior Trap"—where developers learn to <em>prompt</em> rather than <em>program</em>.
                    </p>
                    <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-400 marker:text-neutral-400">
                        <li className="mb-1"><strong>Illusion of Competence:</strong> Generating working code doesn't mean understanding it.</li>
                        <li className="mb-1"><strong>Debugging Difficulty:</strong> When AI-generated code breaks, you need deep knowledge to fix it.</li>
                        <li className="mb-1"><strong>Security Blindspots:</strong> Accepting AI suggestions without scrutiny can introduce subtle vulnerabilities.</li>
                    </ul>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        Balancing the Scale
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        The verdict? AI is a power tool. In the hands of a craftsman, it builds skyscrapers. In the hands of a novice without guidance, it builds a house of cards.
                    </p>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        The most successful developers in 2026 aren't those who reject AI, nor those who blindly follow it. They are the ones who treat AI as a peer to be reviewed, not an oracle to be obeyed.
                    </p>
                </article>
            </main>
            <Footer />
        </div>
    );
}
