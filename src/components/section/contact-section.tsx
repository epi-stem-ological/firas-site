import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-background/80 p-8 shadow-2xl shadow-foreground/10 backdrop-blur sm:p-12">
      <div className="absolute -top-px left-1/2 z-10 -translate-x-1/2 rounded-b-lg border border-t-0 bg-primary px-4 py-1">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          maxOpacity={0.16}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          The most reliable paths are{" "}
          <Link
            href={DATA.contact.social.email.url}
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            email
          </Link>{" "}
          or{" "}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            LinkedIn
          </Link>
          . Please include the context, decision needed, and any timing constraints.
        </p>
      </div>
    </div>
  );
}

