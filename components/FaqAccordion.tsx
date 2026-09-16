"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div
            key={faq.question}
            className="rounded-xl border border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <button
              id={buttonId}
              className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <div className="pr-4">
                <span className="mb-1.5 inline-block rounded-md bg-red-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-red-500 dark:text-red-400">
                  {faq.category}
                </span>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white md:text-lg">
                  {faq.question}
                </h3>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="border-t border-zinc-100 px-6 py-5 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800/50 dark:text-zinc-300 md:text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
