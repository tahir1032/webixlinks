import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { IconMark } from "@/components/IconMark";
import { EngagementBlueprint } from "@/components/EngagementBlueprint";
import { SecurityMatrix } from "@/components/SecurityMatrix";
import { pillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About | Webixlinks",
  description:
    "Our engineering philosophy, security standards, and high-performance culture at Webixlinks.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-16">
      <PageHeader
        title="Built by architects, not account managers"
        lead="We are an elite engineering studio focused on performance, security, and absolute architectural transparency."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
              Engineering Philosophy
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                Webixlinks is not a generic marketing agency—we are an elite collective of technical
                leads, full-stack software architects, and cloud engineers who ship production systems
                under real constraints.
              </p>
              <p>
                Every engagement begins with architecture: understanding your data boundaries, threat
                model, and performance requirements before a single line of application code is written.
                We partner with CTOs and founders who demand precision, not platitudes.
              </p>
              <p>
                Our culture is built on deep craft—code reviews that matter, documentation that survives
                handoffs, and honest assessments when the right answer is to refactor rather than rush.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/30">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">Core Pillars</p>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
              How we engineer every system
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
