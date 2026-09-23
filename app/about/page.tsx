import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { IconMark } from "@/components/IconMark";
import { EngagementBlueprint } from "@/components/EngagementBlueprint";
import { SecurityMatrix } from "@/components/SecurityMatrix";
import { pillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About | Webixlinks",
  description:
    "A full-service digital team covering web development, CMS, CRM automation, and SEO—built around delivery, not sales talk.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-16">
      <PageHeader
        title="Built by people who do the work"
        lead="A small team covering web development, CMS, CRM, and SEO—so you get specialists without managing four different agencies."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
              How We Work
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                Webixlinks isn&apos;t a sales team that outsources the build. We&apos;re developers, CMS
                specialists, CRM architects, and SEO strategists who do the work ourselves and answer for
                it directly.
              </p>
              <p>
                Every project starts with the business question, not the technical one: what does success
                look like, who are we reaching, and what has to change for this to pay for itself. The
                technology decisions follow from that—not the other way round.
              </p>
              <p>
                We work in fixed scopes with fixed prices, share progress as we go, and say so plainly when
                something you&apos;ve asked for isn&apos;t the right call. Clients stay with us because the
                work holds up, not because they&apos;re locked into a contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/30">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">What We Stand For</p>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
              Three things we don&apos;t compromise on
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-red-500/20 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none dark:hover:border-zinc-700"
              >
                <IconMark icon={pillar.icon} className="mb-4" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EngagementBlueprint />
      <SecurityMatrix />
    </main>
  );
}
