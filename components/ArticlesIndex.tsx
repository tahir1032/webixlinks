"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { articleCategories, articles } from "@/data/site";

export function ArticlesIndex() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory ? articles.filter((a) => a.category === activeCategory) : articles;
  const [featured, ...rest] = filtered;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {articleCategories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(active ? null : category)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                  active
                    ? "border-red-500/50 bg-red-500/10 text-red-500 dark:text-red-400"
                    : "border-zinc-200 text-zinc-500 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {featured ? (
          <Link
            className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40 transition-all hover:border-zinc-300 dark:hover:border-red-500/30"
            href={`/articles/${featured.slug}`}
          >
            <div className="grid md:grid-cols-2">
              <div className="border-b border-zinc-200 bg-gradient-to-br from-red-500/5 to-transparent p-8 md:border-b-0 md:border-r md:border-zinc-200 dark:border-zinc-800 dark:bg-gradient-to-br dark:from-red-500/10 dark:to-transparent dark:md:border-zinc-800">
                <span className="font-mono text-xs uppercase tracking-widest text-red-500 dark:text-red-400">
                  Latest Insight
                </span>
                <span className="ml-3 rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-500 dark:text-red-400">
                  {featured.category}
                </span>
                <h2 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-white transition-colors group-hover:text-red-500 dark:group-hover:text-red-300 md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {featured.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-red-500 dark:text-red-400">
                  Read article
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <time dateTime={featured.date}>{featured.dateLabel}</time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-12">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
              More Articles
            </h3>
            <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {rest.map((article) => (
                <li key={article.slug}>
                  <Link
                    className="group flex flex-col gap-3 p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50 sm:flex-row sm:items-center sm:justify-between"
                    href={`/articles/${article.slug}`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border px-3 py-1 font-mono text-xs transition-colors border-zinc-200 text-zinc-500 dark:border-zinc-800">
                          {article.category}
                        </span>
                        <time className="text-xs text-zinc-500 dark:text-zinc-600" dateTime={article.date}>
                          {article.dateShort}
                        </time>
                      </div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white transition-colors group-hover:text-red-500 dark:group-hover:text-red-300">
                        {article.title}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-500">
                        {article.description}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-2 text-sm text-zinc-500">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {article.readTime}
                      <ArrowRight
                        className="h-4 w-4 text-red-500 dark:text-red-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {filtered.length === 0 ? (
          <p className="mt-12 text-sm text-zinc-500">No articles in this category yet.</p>
        ) : null}
      </div>
    </section>
  );
}
