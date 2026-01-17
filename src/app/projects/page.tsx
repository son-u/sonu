import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Projects | Sonu Sharma",
    description: "My projects and portfolio.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="projects">
                <div className="mx-auto w-full max-w-3xl px-4 py-12">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="space-y-2 mb-8">
                            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                            <p className="text-muted-foreground">A collection of projects I&apos;ve worked on.</p>
                        </div>
                    </BlurFade>
                    <div className="flex flex-col gap-4 w-full max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                                inView
                            >
                                <div className="rounded-lg text-card-foreground flex flex-col overflow-hidden border border-border/50 dark:border-muted p-3 bg-sky-50/50 dark:bg-card/50 shadow-sm sm:flex-row sm:items-start transition-all duration-300 hover:shadow-md dark:hover:shadow-neutral-900/50">
                                    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted sm:w-64 sm:shrink-0">
                                        <div className="h-full w-full relative">
                                            {project.image && (
                                                <img
                                                    alt={project.title}
                                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                                    src={project.image}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-3 p-4 sm:pt-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="font-semibold text-lg tracking-tight">{project.title}</h3>
                                            <div className="flex gap-2">
                                                {project.links?.map((link, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors border px-2 py-1 rounded-md bg-background/50 hover:bg-background/80"
                                                    >
                                                        {link.type === 'Live' && <LuSquareArrowOutUpRight className="h-3 w-3" />}
                                                        {link.type === 'GitHub' && <FaGithub className="h-3 w-3" />}
                                                        {link.type}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                                            {project.technologies?.map((tech, idx) => (
                                                <div key={idx} className="inline-flex items-center rounded-md border focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 dark:focus:ring-stone-300 dark:bg-stone-800 dark:text-stone-50 dark:hover:bg-stone-800/80 px-2 py-0.5 text-[10px] bg-secondary/50 hover:bg-secondary/70 text-secondary-foreground border-secondary-foreground/10 transition-colors font-medium">
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
