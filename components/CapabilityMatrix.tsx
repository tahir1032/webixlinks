import { IconMark } from "@/components/IconMark";
import { SectionIntro } from "@/components/Section";
import { capabilities } from "@/data/site";

export function CapabilityMatrix() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Core Capabilities"
          title="The Capability Matrix"
          lead="Three engineering pillars that power every engagement—from autonomous AI to hardened cloud infrastructure."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-red-500/30 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none dark:hover:border-zinc-700"
            >
              <IconMark icon={cap.icon} className="mb-4 transition-colors group-hover:bg-red-500/20" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {cap.description}
              </p>
              <ul className="mt-4 flex-1 space-y-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                {cap.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
