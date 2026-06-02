/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Network,
  ShieldCheck,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const focusIcons = [Building2, BrainCircuit, Network, ShieldCheck];

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-16 sm:gap-20">
      <section id="hero" className="relative py-8 sm:py-10">
        <div className="grid min-w-0 items-center gap-8 lg:min-h-[calc(100dvh-9rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="order-1 flex min-w-0 flex-col gap-8 lg:col-start-1 lg:row-start-1">
            <div className="flex flex-col gap-5">
              <h1 className="max-w-3xl text-4xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
                {DATA.name}
              </h1>
              <p className="max-w-2xl text-balance text-xl leading-8 text-muted-foreground sm:text-2xl">
                Technology systems for high-stakes operations.
              </p>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="grid min-w-0 gap-3 sm:flex sm:flex-row">
                <Link
                  href="#work-impact"
                  className="inline-flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
                >
                  Explore impact
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-lg border border-border bg-background/70 px-5 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
                >
                  Get in touch
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 3} className="relative order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative mx-auto mt-2 w-full max-w-[460px] pb-10 lg:mt-0 lg:pb-0">
              <div className="absolute -inset-3 rounded-lg border border-border/70 bg-background/35 shadow-2xl shadow-foreground/10 backdrop-blur-md" />
              <div className="relative overflow-hidden rounded-lg border border-border bg-background shadow-2xl shadow-foreground/10">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px w-1/2 animate-data-scan bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
                <img
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  className="aspect-[4/5] w-full object-cover object-[center_35%]"
                />
              </div>
              <div className="absolute bottom-0 left-3 right-3 rounded-lg border border-border bg-background/90 p-4 shadow-xl backdrop-blur sm:left-4 sm:right-4 lg:-bottom-5">
                <div className="flex min-w-0 items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Current operating layer
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-5">
                      Enterprise IT, AI adoption, cloud, cybersecurity
                    </p>
                  </div>
                  <div className="hidden h-10 w-10 flex-none rounded-lg border border-emerald-400/40 bg-emerald-400/10 p-2 text-emerald-600 dark:text-emerald-300 min-[380px]:block">
                    <Network className="size-full" aria-hidden />
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 5} className="order-3 lg:col-start-1 lg:row-start-2">
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {DATA.impact.map((item) => (
                <div
                  key={item.value}
                  className="group min-w-0 rounded-lg border border-border/80 bg-background/70 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <div className="text-2xl font-semibold tracking-tight">
                    {item.value}
                  </div>
                  <p className="mt-1 break-words text-sm leading-5 text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about" className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="sticky top-8 flex min-h-0 flex-col gap-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Practical strategy, operational depth, and delivery discipline.
            </h2>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-lg border border-border bg-background/75 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="prose max-w-none text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="focus">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DATA.focusAreas.map((area, id) => {
            const Icon = focusIcons[id] ?? Building2;
            return (
              <BlurFade key={area} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
                <div className="group relative min-h-36 overflow-hidden rounded-lg border border-border bg-background/75 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-xl hover:shadow-foreground/5">
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-400 via-cyan-400 to-amber-400 opacity-80" />
                  <Icon className="size-6 text-foreground" aria-hidden />
                  <h3 className="mt-8 text-lg font-semibold tracking-tight">
                    {area}
                  </h3>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>

      <section id="work" className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Work Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Systems leadership across strategy, execution, and support.
            </h2>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="rounded-lg border border-border bg-background/75 p-5 shadow-sm backdrop-blur sm:p-6">
            <WorkSection />
          </div>
        </BlurFade>
      </section>

      <section id="education" className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Education
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Business, finance, and technology foundations.
            </h2>
          </BlurFade>
        </div>
        <div className="flex flex-col gap-4">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-x-3 rounded-lg border border-border bg-background/75 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
        </div>
      </section>

      <section id="credentials" className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-background/75 p-6 shadow-sm backdrop-blur">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>
          </BlurFade>
          <div className="mt-5 flex flex-wrap gap-2">
            {DATA.certifications.map((certification, id) => (
              <BlurFade
                key={certification}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <div className="flex min-h-8 w-fit items-center rounded-lg border border-border bg-background px-4 py-1.5">
                  <span className="text-foreground text-sm font-medium">
                    {certification}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-background/75 p-6 shadow-sm backdrop-blur">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-semibold tracking-tight">Capabilities</h2>
          </BlurFade>
          <div className="mt-5 flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <div className="flex h-8 w-fit items-center gap-2 rounded-lg border border-border bg-background px-4">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="languages" className="rounded-lg border border-border bg-background/75 p-6 shadow-sm backdrop-blur">
        <div className="flex min-h-0 flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-semibold tracking-tight">Languages</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.languages.map((language, id) => (
              <BlurFade
                key={language}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <div className="flex h-8 w-fit items-center rounded-lg border border-border bg-background px-4">
                  <span className="text-foreground text-sm font-medium">
                    {language}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work-impact" className="scroll-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="leadership" className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building systems, trust, and capability at the same time.
            </h2>
          </BlurFade>
        </div>
        <div className="grid gap-3">
          {DATA.leadership.map((item, id) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
              <div className="rounded-lg border border-border bg-background/75 p-5 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="speaking" className="rounded-lg border border-border bg-background/75 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Speaking
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Topics for executive, technical, and cross-functional audiences.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Available for presentations, panels, workshops, and internal
                enablement sessions when the audience and goals are clearly defined.
              </p>
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.speakingTopics.map((topic, id) => (
              <BlurFade key={topic} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                <div className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium">
                  {topic}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
