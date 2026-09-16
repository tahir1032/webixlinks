import { IconMark } from "@/components/IconMark";
import { SectionIntro } from "@/components/Section";
import { blueprint } from "@/data/site";

export function EngagementBlueprint() {
  return (
    <section className="py-16 md:py-24 border-t border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/30">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Execution Model"
          title="The Engagement Blueprint"
          lead="A disciplined four-phase path from architectural discovery to continuous agentic optimization—designed for CTOs who need predictable delivery."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blueprint.map((phase, i) => (
            <div
              key={phase.title}
              className="relative rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-red-500/20 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              {i < blueprint.length - 1 ? (
                <span
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-zinc-800 lg:block"
                  aria-hidden="true"
                />
              ) : null}
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-red-400">0{i + 1}</span>
                <IconMark icon={phase.icon} size="sm" />
              </div>
              <h3 className="text-sm font-semibold leading-snug text-zinc-900 dark:text-white">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
