import { IconMark } from "@/components/IconMark";
import { SectionIntro } from "@/components/Section";
import { security } from "@/data/site";

export function SecurityMatrix() {
  return (
    <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Security Posture"
          title="System Hardening & Compliance Matrix"
          lead="Every Webixlinks deployment is engineered against a non-negotiable security baseline—applied from API gateways to commit hooks."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {security.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-red-500/20 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <IconMark icon={item.icon} size="security" />
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
