import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { PageShell, PageSection } from "@/components/site/page-shell";
import { formatDate } from "@/lib/content";
import { NEWS, getArticle } from "@/lib/news-data";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: `${article.title}`, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <PageShell>
      <section className="relative pt-36 lg:pt-44 pb-8 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
            <span className="w-12 h-px bg-primary" />
            {article.type === "announcement" ? "Official Announcement" : "News"}
          </span>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono text-muted-foreground">
              {formatDate(article.date)}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-secondary px-2 py-0.5 rounded-full">
              {article.tag}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display tracking-tight leading-[0.95] text-foreground max-w-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      <PageSection>
        <div className="max-w-2xl space-y-5">
          {article.body.map((block, i) =>
            block.type === "p" ? (
              <p key={i} className="text-muted-foreground leading-relaxed text-[1.05rem]">
                {block.text}
              </p>
            ) : (
              <ul key={i} className="space-y-3 py-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
        <div className="mt-14 pt-8 border-t border-border">
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to the Newsroom
          </Link>
        </div>
      </PageSection>
    </PageShell>
  );
}
