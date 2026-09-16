import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { IconMark } from "@/components/IconMark";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services | Webixlinks",
  description:
    "Deep technical capabilities: Generative AI, custom development stacks, and UI/UX design studio services.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: { "@type": "ProfessionalService", name: "Webixlinks", url: "https://webixlinks.com" },
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Technical capabilities index"
        lead="Granular engineering services across AI, full-stack development, and product design—built for production environments."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/30 p-8 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 md:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                  <div className="flex shrink-0 items-start gap-4 md:w-72">
                    <IconMark icon={service.icon} size="lg" />
                    <div>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-600">
                        {service.number}
                      </span>
                      <h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-white md:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
