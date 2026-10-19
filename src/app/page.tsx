import { InquiryForm } from "@/components/inquiry-form";
import { UpdatesSignup } from "@/components/updates-signup";
import { about, contact, inquiries, site, speaking, updates } from "@/data/site";
import { cn } from "@/lib/utils";

function ExternalLink({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant: "solid" | "stage";
}) {
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-copper hover:text-background"
      : "bg-[#f4efe6] text-[#14110e] hover:bg-[#e0b48a] focus-visible:ring-offset-[#14110e]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto",
        styles
      )}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function InquiryLink({ variant }: { variant: "outline" | "stage" }) {
  const styles =
    variant === "stage"
      ? "bg-[#f4efe6] text-[#14110e] hover:bg-[#e0b48a] focus-visible:ring-offset-[#14110e]"
      : "border border-foreground/20 hover:border-foreground focus-visible:ring-offset-background";

  return (
    <a
      href="#inquiries"
      className={cn(
        "inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto",
        styles
      )}
    >
      {contact.secondary}
    </a>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32">
      <section id="hero" className="grid items-stretch gap-10 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-0">
        <div className="flex flex-col justify-center gap-8 py-6 lg:py-16 lg:pr-12">
          <p className="hero-rise text-xs font-medium uppercase tracking-[0.28em] text-copper">
            {site.role}
          </p>
          <h1 className="hero-rise delay-1 font-display text-[clamp(3.1rem,7.4vw,6.6rem)] leading-[0.88] tracking-tight text-balance">
            {site.headline}
          </h1>
          <div className="hero-rise delay-4 flex flex-col gap-3 sm:flex-row">
            <ExternalLink href={site.linkedin} variant="solid">
              {contact.primary}
            </ExternalLink>
            <InquiryLink variant="outline" />
          </div>
        </div>
        <aside className="hero-rise delay-2 relative flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#14110e] p-6 text-[#f4efe6] sm:p-8 lg:min-h-0 lg:rounded-none lg:p-10">
          <div
            aria-hidden
            className="stage-glow pointer-events-none absolute -right-16 -top-20 size-72 rounded-full"
          />
          <div className="draw-line h-px w-24 bg-[#e0b48a]" />
          <figure className="relative z-10 mx-auto w-full max-w-xs">
            {/* Portrait is already a small progressive JPEG. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.avatar}
              alt={site.name}
              width={400}
              height={400}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full rounded-[1.4rem] object-cover object-[center_20%] shadow-2xl shadow-black/40"
            />
            <figcaption className="mt-4 text-xs uppercase tracking-[0.22em] text-[#e7dccb]">
              {site.name}
            </figcaption>
          </figure>
          <p className="relative z-10 max-w-xs font-display text-4xl leading-none">
            There are no do-overs.
          </p>
        </aside>
      </section>

      <section id="about" className="reveal scroll-mt-24 grid gap-10 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl">
          {site.headline}
        </h2>
        <div className="flex max-w-2xl flex-col gap-6">
          {about.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section id="speaking" className="reveal scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-[#14110e] px-6 py-12 text-[#f4efe6] sm:px-10 sm:py-16">
        <h2 className="max-w-3xl font-display text-5xl leading-[0.92] tracking-tight sm:text-7xl">
          {speaking.heading}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#e7dccb]">{speaking.intro}</p>
        <div className="mt-10 grid gap-10 border-t border-white/15 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article>
            <h3 className="font-display text-4xl tracking-tight sm:text-5xl">{speaking.show}</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#e7dccb]">{speaking.status}</p>
            <div className="mt-8">
              <InquiryLink variant="stage" />
            </div>
          </article>
          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-[#e0b48a]">{speaking.topicsHeading}</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[#f4efe6]">
              {speaking.topics.map((topic) => (
                <li key={topic} className="border-t border-white/15 pt-3">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="inquiries" className="reveal scroll-mt-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl">
            {inquiries.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{inquiries.intro}</p>
        </div>
        <InquiryForm />
      </section>

      <section id="updates" className="reveal scroll-mt-24 border-t border-border pt-12">
        <p className="max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {updates.blurb}
        </p>
        <UpdatesSignup />
      </section>

      <section id="contact" className="reveal scroll-mt-24 grid gap-8 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-display text-5xl leading-none tracking-tight sm:text-6xl">{contact.heading}</h2>
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-lg leading-8">{contact.body}</p>
          <p className="text-base leading-7 text-muted-foreground">
            {contact.linkedinNote} {contact.formNote}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ExternalLink href={site.linkedin} variant="solid">
              {contact.primary}
            </ExternalLink>
            <InquiryLink variant="outline" />
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-display text-3xl tracking-tight">{site.name}</p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </footer>
    </div>
  );
}
