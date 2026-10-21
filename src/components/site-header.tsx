import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { nav, site } from "@/data/site";
import Link from "next/link";

const links = nav;

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="inline-flex min-h-11 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl leading-none tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <NavLinks className="flex items-center gap-1" />
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
