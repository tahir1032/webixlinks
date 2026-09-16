import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { articles } from "@/data/site";
import { Button } from "@/components/Button";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Webixlinks`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Webixlinks", url: "https://webixlinks.com" },
    publisher: {
      "@type": "Organization",
      name: "Webixlinks",
      logo: { "@type": "ImageObject", url: "https://webixlinks.com/logo/webixlinks.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://webixlinks.com/articles/${article.slug}` },
  };

  return (
    <main className="flex-1 pt-16 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-3xl py-12 md:py-16">
          <Link
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-red-400"
            href="/articles"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Insights
          </Link>

          <header className="border-b border-zinc-800 pb-8">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-400">
              {article.category}
            </span>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">{article.description}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-500">
              <time dateTime={article.date}>{article.dateLabel}</time>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readTime}
              </span>
            </div>
          </header>

          <div
            className="prose-article mt-10"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          <aside className="mt-16 rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-zinc-900/50 p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-red-400">Work With Us</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Ready to architect your next system?</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Our engineering leads partner directly with CTOs on agentic AI, cloud infrastructure, and
              full-stack platforms. Submit a technical brief to begin discovery.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact">Request Consultation</Button>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                All insights
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
