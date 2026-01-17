import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronUp, ChevronDown, ChevronRight, ArrowRight, Plus } from "lucide-react";
import {
  FaGithub,
  FaWhatsapp,
  FaPython,
  FaJava,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiFigma,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

import { MdVerified } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BLUR_FADE_DELAY = 0.04;



export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="w-full">
        <div className="w-full aspect-[3/1] bg-muted relative overflow-hidden">
          <img
            src="/cover.png"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability if anything overlaps later */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
        <div className="mx-auto w-full max-w-3xl px-4">
          <div className="flex flex-row items-start justify-start gap-4 sm:gap-8">
            <div className="relative shrink-0 -mt-5 sm:-mt-9">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 sm:h-45 sm:w-45 ring-2 ring-border ring-offset-2 ring-offset-background">
                <Avatar className="h-full w-full object-cover">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </span>
            </div>
            <div className="flex-1 space-y-2 text-left pt-2 sm:pt-6">
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold sm:text-5xl tracking-tight">
                    {DATA.name}
                  </h1>
                  <MdVerified className="text-blue-500 size-6" />
                </div>
                <p className="hidden sm:block text-muted-foreground font-mono text-sm">
                  Engineer • Web Developer • Freelancer
                </p>
              </div>
              <div className="flex items-center gap-x-3 text-muted-foreground hidden sm:flex print:hidden py-1">
                {Object.entries(DATA.contact.social).map(([name, social]) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={name}
                      href={social.url}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="size-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex sm:hidden flex-col items-start gap-2 mt-2">
            <p className="text-muted-foreground font-mono text-sm whitespace-pre-line">
              Engineer • Web Developer • Freelancer
            </p>
            <div className="flex items-center gap-x-3 text-muted-foreground">
              {Object.entries(DATA.contact.social).map(([name, social]) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="size-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="text-pretty font-mono text-sm text-muted-foreground">
                {DATA.summary}
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="mx-auto w-full max-w-3xl">
              <h2 className="text-xl font-bold mb-4">Work Experience</h2>
              <Accordion type="single" collapsible className="w-full">
                {DATA.work.map((work, id) => (
                  <BlurFade
                    key={work.company}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  >
                    <AccordionItem value={work.company} className="border-b-0">
                      <AccordionTrigger className="hover:no-underline py-3 hover:bg-muted/30 rounded-lg px-2 -mx-2 transition-colors duration-200 group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-2 gap-1 text-left">
                          <div className="flex items-center gap-2">
                            <span className="relative flex overflow-hidden rounded-full h-8 w-8 border shrink-0">
                              <Avatar className="h-full w-full object-cover">
                                <AvatarImage
                                  src={work.logoUrl}
                                  alt={work.company}
                                  className="object-cover"
                                />
                                <AvatarFallback>{work.company[0]}</AvatarFallback>
                              </Avatar>
                            </span>
                            <div className="flex items-center gap-x-1.5 overflow-hidden min-w-0 flex-1 justify-between">
                              <span className="font-semibold text-base whitespace-nowrap truncate">
                                {work.company}
                              </span>
                              <span className="text-muted-foreground text-xs font-mono sm:text-sm whitespace-nowrap truncate shrink-0">
                                <span className="hidden sm:inline">/ </span>
                                {work.title}
                              </span>
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground tabular-nums whitespace-nowrap pl-10 sm:pl-0">
                            {work.start} - {work.end ?? "Present"}
                          </div>
                        </div>
                        <div className="shrink-0 transition-transform duration-200">
                          <div className="flex flex-col items-center justify-center gap-0.5">
                            <ChevronUp className="h-3 w-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 pl-2 text-sm text-muted-foreground">
                          <ul className="list-disc pl-4 space-y-1.5">
                            {work.description.split("\n").map((point, index) => (
                              <li key={index} className="leading-relaxed text-foreground/80">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </BlurFade>
                ))}
              </Accordion>
            </div>
          </BlurFade>
        </div>
      </section>
      <div className="w-auto h-8 mb-8 mt-2 border-y border-muted/30 overflow-hidden relative opacity-100 -mx-4 md:-mx-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)",
            opacity: 0.15,
          }}
        ></div>
      </div>
      <section id="projects">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Projects</h2>
            </BlurFade>
            <div className="space-y-4">
              {DATA.projects.slice(0, 3).map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                  inView
                >
                  <div className="rounded-lg text-card-foreground flex flex-col overflow-hidden border border-border/50 dark:border-muted p-3 bg-sky-50/50 dark:bg-card/50 shadow-sm sm:flex-row sm:items-start transition-all duration-300 hover:shadow-md dark:hover:shadow-neutral-900/50">
                    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted sm:w-64 sm:shrink-0">
                      <div className="h-full w-full relative">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <div className="flex justify-center mt-6">
              <Link href="/projects">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 gap-2 group"
                >
                  Show All Projects
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-auto h-8 my-8 border-y border-muted/30 overflow-hidden relative opacity-100 -mx-4 md:-mx-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)",
            opacity: 0.15,
          }}
        ></div>
      </div>
      <section id="blogs">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Blogs</h2>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DATA.blogs.slice(0, 2).map((blog, id) => (
                <BlurFade
                  key={blog.title}
                  delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                  inView
                >
                  <Link href={blog.href} className="block group h-full">
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
            <div className="flex justify-center mt-6">
              <Link href="/blogs">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 gap-2 group"
                >
                  Show All Posts
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-auto h-8 my-8 border-y border-muted/30 overflow-hidden relative opacity-100 -mx-4 md:-mx-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)",
            opacity: 0.15,
          }}
        ></div>
      </div>
      <section id="skills">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => {
                const iconMap: Record<string, React.ReactNode> = {
                  TypeScript: <SiTypescript className="size-3 text-blue-500" />,
                  JavaScript: <SiJavascript className="size-3 text-yellow-500" />,
                  React: <SiReact className="size-3 text-blue-500" />,
                  "Next.js": <SiNextdotjs className="size-3 dark:text-white text-black" />,
                  "Node.js": <SiNodedotjs className="size-3 text-green-600" />,
                  Express: <SiExpress className="size-3 text-current" />,
                  Python: <FaPython className="size-3 text-blue-500" />,
                  PostgreSQL: <SiPostgresql className="size-3 text-blue-400" />,
                  MongoDB: <SiMongodb className="size-3 text-green-500" />,
                  "Tailwind CSS": <SiTailwindcss className="size-3 text-blue-400" />,
                  Java: <FaJava className="size-3 text-orange-500" />,
                  HTML: <SiHtml5 className="size-3 text-orange-600" />,
                  Figma: <SiFigma className="size-3 text-purple-500" />,
                  PHP: <SiPhp className="size-3 text-indigo-500" />,
                  MySQL: <SiMysql className="size-3 text-blue-500" />,
                };

                const icon = iconMap[skill];

                return (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05} inView>
                    <div className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors">
                      {icon}
                      {skill}
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="w-auto h-8 my-8 border-y border-muted/30 overflow-hidden relative opacity-100 -mx-4 md:-mx-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)",
            opacity: 0.15,
          }}
        ></div>
      </div>
      <section id="contact">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 border-y px-4 py-8 dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
          <Plus className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6 text-muted-foreground" />
          <Plus className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6 text-muted-foreground" />
          <Plus className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6 text-muted-foreground" />
          <Plus className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6 text-muted-foreground" />

          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l"></div>
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r"></div>
          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed"></div>

          <h2 className="text-center font-semibold text-xl md:text-3xl">Let&apos;s work together</h2>
          <p className="text-balance text-center font-medium text-muted-foreground text-sm md:text-base">
            Have a project in mind? Let&apos;s create something amazing.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              Email Me
            </Link>
            <Link
              href={DATA.contact.social.WhatsApp.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              WhatsApp
              <FaWhatsapp className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
