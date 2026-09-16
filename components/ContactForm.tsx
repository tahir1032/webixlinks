"use client";

import { useState } from "react";
import { projectTypes } from "@/data/site";

const inputClasses =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:placeholder:text-zinc-600";

export function ContactForm() {
  const [projectType, setProjectType] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white px-6 py-10 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Brief received</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Our engineering leads will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} placeholder="Jane Chen" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Corporate Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className={inputClasses}
          placeholder="Acme Corp"
          autoComplete="organization"
        />
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Project Type
        </legend>
        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          role="radiogroup"
          aria-label="Project type"
          aria-invalid={projectType === null}
        >
          {projectTypes.map((type) => {
            const active = projectType === type.value;
            return (
              <label
                key={type.value}
                className={`cursor-pointer rounded-xl border p-4 transition-all ${
                  active
                    ? "border-red-500/50 bg-red-500/5 dark:border-red-500/40 dark:bg-red-500/10"
                    : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                }`}
              >
                <input
                  type="radio"
                  className="sr-only"
                  name="projectType"
                  value={type.value}
                  checked={active}
                  onChange={() => setProjectType(type.value)}
                  required
                />
                <span className="block text-sm font-medium text-zinc-900 dark:text-white">{type.label}</span>
                <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                  {type.description}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Project Overview <span className="text-zinc-500 dark:text-zinc-600">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClasses} resize-y`}
          placeholder="Describe your architecture goals, timeline, and constraints..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-black bg-brand-gradient text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:brightness-110 sm:w-auto"
      >
        Submit Technical Brief
      </button>

      <p className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-500">
        NDA available upon request. Data protected under strict end-to-end encryption protocols.
      </p>
    </form>
  );
}
