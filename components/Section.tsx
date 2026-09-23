export function SectionIntro({
  eyebrow,
  title,
  lead,
  center = true,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className={`mt-4 text-zinc-600 dark:text-zinc-400 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="border-b border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-400">Webixlinks</p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{lead}</p>
      </div>
    </div>
  );
}
