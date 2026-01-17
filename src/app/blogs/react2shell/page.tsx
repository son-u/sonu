import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "React2Shell Vulnerability | Sonu Sharma",
    description: "React2Shell: The 10.0 CVSS Nightmare",
};

export default function React2ShellBlogPage() {
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
                        React2Shell: The 10.0 CVSS Nightmare in React Server Components
                    </h1>
                    <div className="flex justify-between items-center mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
                        <p className="text-sm">2026-01-03</p>
                    </div>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        The cybersecurity world was shaken on December 3, 2025, with the disclosure of <strong>CVE-2025-55182</strong>, ominously dubbed <strong>React2Shell</strong>.
                    </p>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        With a maximum <strong className="text-red-500">CVSS score of 10.0</strong>, this vulnerability allows unauthenticated remote code execution (RCE) on servers running vulnerable versions of React Server Components (RSC).
                    </p>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        What is React2Shell?
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        React2Shell stems from an unsafe deserialization flaw in the React Flight protocol. When a server processes a malicious HTTP request targeting a Server Function endpoint, the flawed deserialization logic can be manipulated to execute arbitrary code.
                    </p>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Because this exploit requires <strong>no authentication</strong> and can be triggered remotely, it poses an existential threat to modern web applications built on the React ecosystem.
                    </p>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        Who is Affected?
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Use specific versions of the following packages are at risk:
                    </p>
                    <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-400 marker:text-neutral-400">
                        <li className="mb-1"><strong>React</strong>: Versions 19.0.0, 19.1.0, 19.1.1, 19.2.0</li>
                        <li className="mb-1"><strong>react-server-dom-webpack</strong></li>
                        <li className="mb-1"><strong>react-server-dom-parcel</strong></li>
                        <li className="mb-1"><strong>Next.js</strong>: Versions 15.x and 16.x (using App Router)</li>
                    </ul>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        Immediate Mitigation
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        To protect your infrastructure, you must upgrade immediately:
                    </p>
                    <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-md mb-4 overflow-x-auto">
                        <code className="text-sm font-mono">
                            npm install react@19.2.1 react-dom@19.2.1
                        </code>
                    </div>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        If you are using Next.js, ensure you are on the latest patch release that addresses CVE-2025-66478.
                    </p>

                    <h2 className="font-semibold text-xl mb-3 mt-8 tracking-tighter">
                        Conclusion
                    </h2>
                    <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                        React2Shell serves as a stark reminder that even the most modern and robust frameworks are not immune to critical flaws. If you are running RSCs in production, <strong>patch now</strong>.
                    </p>
                </article>
            </main>
            <Footer />
        </div>
    );
}
