import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

/** Shared shell for inner pages: solid navigation + footer. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation solid />
      {children}
      <FooterSection />
    </main>
  );
}

/** Inner-page header in the landing sections' idiom. */
export function PageHeader({
  eyebrow,
  title,
  titleMuted,
  lead,
}: {
  eyebrow: string;
  title: string;
  titleMuted?: string;
  lead?: string;
}) {
  return (
    <section className="relative pt-36 lg:pt-44 pb-12 lg:pb-16 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
          <span className="w-12 h-px bg-primary" />
          {eyebrow}
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.9] text-foreground">
          <span className="block">{title}</span>
          {titleMuted && (
            <span className="block text-muted-foreground">{titleMuted}</span>
          )}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

/** Standard content section wrapper. */
export function PageSection({
  children,
  muted = false,
  className = "",
}: {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`py-16 lg:py-24 ${muted ? "bg-secondary" : "bg-background"} ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}
