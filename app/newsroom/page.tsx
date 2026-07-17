import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { formatDate } from "@/lib/content";
import { NEWS } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "Newsroom — NCDC",
  description:
    "News and official announcements from the North Central Development Commission.",
};

function ArticleList({ items }: { items: typeof NEWS }) {
  return (
    <div className="border-t border-border">
      {items.map((article) => (
        <Link
          key={article.slug}
          href={`/newsroom/${article.slug}`}
          className="group grid md:grid-cols-12 gap-2 md:gap-8 py-8 border-b border-border items-baseline hover:bg-secondary/50 md:px-4 md:-mx-4 transition-colors duration-300"
        >
          <div className="md:col-span-3 flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground">
              {formatDate(article.date)}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-secondary px-2 py-0.5 rounded-full">
              {article.tag}
            </span>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-xl lg:text-2xl font-display text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
              {article.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-2xl">
              {article.excerpt}
            </p>
          </div>
          <div className="hidden md:flex md:col-span-1 justify-end">
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function NewsroomPage() {
  const news = NEWS.filter((n) => n.type === "news");
  const announcements = NEWS.filter((n) => n.type === "announcement");

  return (
    <PageShell>
      <PageHeader
        eyebrow="Newsroom"
        title="News &"
        titleMuted="announcements."
        lead="Editorial coverage of the Commission's work, and official notices — kept separate, so you always know which is which."
      />
      <PageSection>
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
          <span className="w-12 h-px bg-primary" />
          Latest News
        </span>
        <ArticleList items={news} />
      </PageSection>
      {announcements.length > 0 && (
        <PageSection muted>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
            <span className="w-12 h-px bg-primary" />
            Official Announcements
          </span>
          <ArticleList items={announcements} />
        </PageSection>
      )}
    </PageShell>
  );
}
