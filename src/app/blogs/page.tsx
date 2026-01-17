import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Blog | Sonu Sharma",
    description: "Thoughts on software development, design, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="blog">
                <div className="mx-auto w-full max-w-3xl px-4 py-12">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="space-y-2 mb-8">
                            <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
                            <p className="text-muted-foreground">Thoughts on software development, design, and more.</p>
                        </div>
                    </BlurFade>
                    <div className="flex flex-col gap-4">
                        {DATA.blogs.map((blog, id) => (
                            <BlurFade
                                key={blog.title}
                                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                                inView
                            >
                                <Link href={blog.href} className="block group">
                                    <div className="rounded-lg text-card-foreground flex flex-col overflow-hidden border border-muted p-4 bg-card/50 transition-all duration-300 hover:bg-muted/30 hover:shadow-lg dark:hover:shadow-neutral-900/50 h-full">
                                        <div className="flex flex-col gap-2 h-full">
                                            <div className="flex items-center justify-between gap-2">
                                                <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">
                                                    {blog.title}
                                                </h3>
                                                <span className="text-xs text-muted-foreground tabular-nums shrink-0">
                                                    {blog.dates}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-auto">
                                                {blog.description}
                                            </p>
                                            <div className="flex items-center text-xs text-muted-foreground group-hover:text-primary transition-colors mt-4">
                                                Read more
                                                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
