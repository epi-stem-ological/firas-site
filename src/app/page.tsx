import { beliefs, impact, site, speaking } from "@/data/site";
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

export default function Page() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32">
      <section id="hero" className="grid items-stretch gap-10 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-0">
        <div className="flex flex-col justify-center gap-8 py-6 lg:py-16 lg:pr-12">
          <p className="hero-rise text-xs font-medium uppercase tracking-[0.28em] text-copper">
            {site.role}
            <span className="text-muted-foreground"> · {site.location}</span>
          </p>
          <h1 className="hero-rise delay-1 font-display text-[clamp(3.1rem,7.4vw,6.6rem)] leading-[0.88] tracking-tight text-balance">
            {site.headline}
          </h1>
          <p className="hero-rise delay-2 max-w-xl font-display text-[clamp(1.7rem,3vw,2.6rem)] italic leading-tight text-balance text-foreground/90">
            {site.thesis}
          </p>
          <p className="hero-rise delay-3 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {site.name} runs technology for one of the busiest convention centers
            in the United States. That means live events at massive scale, AI
            adoption and governance, and turning technology into business results.
          </p>
          <div className="hero-rise delay-4 flex flex-col gap-3 sm:flex-row">
            <ExternalLink href={site.linkedin} variant="solid">
              Connect on LinkedIn
            </ExternalLink>
            <a
              href="#speaking"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-semibold tracking-wide transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              Invite me to speak
            </a>
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
              alt="Firas Freajah"
              width={400}
              height={400}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full rounded-[1.4rem] object-cover object-[center_20%] shadow-2xl shadow-black/40"
            />
            <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#e7dccb]">
              <span>{site.name}</span>
              <span>{site.location}</span>
            </figcaption>
          </figure>
          <p className="relative z-10 max-w-xs font-display text-3xl leading-none">
            10+
            <span className="mt-2 block font-sans text-sm font-normal uppercase tracking-[0.18em] text-[#e7dccb]">
              years leading enterprise technology
            </span>
          </p>
        </aside>
      </section>

      <section id="impact" className="reveal scroll-mt-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-copper">Proof</p>
          <h2 className="mt-3 font-display text-5xl leading-none tracking-tight sm:text-6xl">
            Selected impact
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Published proof points only. Anything still unconfirmed is marked TODO.
          </p>
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((item) => (
            <div
              key={item.label}
              className={
                item.pending
                  ? "flex min-h-48 flex-col justify-between rounded-[1.5rem] border border-dashed border-copper/80 bg-copper/5 p-6"
                  : "flex min-h-48 flex-col justify-between rounded-[1.5rem] border border-border bg-card p-6"
              }
            >
              <dt
                className={
                  item.pending
                    ? "font-display text-4xl tracking-tight text-copper"
                    : "font-display text-6xl leading-none tracking-tight"
                }
              >
                {item.value}
              </dt>
              <dd className="mt-6 text-sm leading-6 text-muted-foreground">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="beliefs" className="reveal scroll-mt-24 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-copper">Point of view</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl">
            What I believe
          </h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
            On AI and personalized software.
          </p>
        </div>
        <ol className="flex flex-col">
          {beliefs.map((belief) => (
            <li key={belief.index} className="border-t border-border py-8 first:border-t-0 first:pt-0">
              <p className="text-xs uppercase tracking-[0.24em] text-copper">{belief.index}</p>
              <h3 className="mt-3 font-display text-4xl tracking-tight">{belief.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{belief.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="speaking" className="reveal scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-[#14110e] px-6 py-12 text-[#f4efe6] sm:px-10 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#e0b48a]">Stage</p>
        <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.92] tracking-tight sm:text-7xl">
          Speaking & media
        </h2>
        <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <article>
            <p className="text-sm uppercase tracking-[0.22em] text-[#e7dccb]">{speaking.status}</p>
            <h3 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{speaking.show}</h3>
            <ul className="mt-6 space-y-2 text-base text-[#e7dccb]">
              <li>{speaking.titleTodo}</li>
              <li>{speaking.linkTodo}</li>
            </ul>
          </article>
          <div className="flex flex-col gap-4 lg:items-start">
            <p className="max-w-sm text-base leading-7 text-[#e7dccb]">
              For conference hosts and podcast producers. The episode slot is open until the title and link are ready.
            </p>
            <ExternalLink href={site.linkedin} variant="stage">
              Invite me to speak
            </ExternalLink>
          </div>
        </div>
      </section>

      <section id="bio" className="reveal scroll-mt-24 grid gap-10 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-copper">Profile</p>
          <h2 className="mt-3 font-display text-5xl leading-none tracking-tight sm:text-6xl">Short bio</h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-8 text-foreground">
            {site.name} is {site.role} at the {site.organization}, one of the
            busiest convention centers in the United States. He runs technology
            for live events at massive scale, leads AI adoption and governance,
            and treats technology as a source of business results.
          </p>
          <p className="text-base leading-7 text-muted-foreground">
            His work covers enterprise technology strategy, service delivery, and
            technology aligned to revenue, with executive teams across operations,
            sales, and finance. He holds a B.S. in Business Administration from
            the University of South Carolina’s Moore School of Business and a
            Fintech Revolution Certificate from the Wharton School. Credentials:
            CISSP, CCNA, and CompTIA Security+. He works between {site.location}. Languages:
            English, Spanish, and Arabic.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ExternalLink href={site.linkedin} variant="solid">
              Connect on LinkedIn
            </ExternalLink>
            <a
              href="#speaking"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-semibold tracking-wide transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              Invite me to speak
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-display text-3xl tracking-tight">{site.name}</p>
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">{site.location}</p>
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
