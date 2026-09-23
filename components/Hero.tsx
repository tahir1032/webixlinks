"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button, ButtonAsButton } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="motion-reduce:opacity-100 motion-reduce:transform-none"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-red-400">
            Web Development · CMS · CRM · SEO
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-white md:text-5xl lg:text-6xl">
            Websites That Work Harder{" "}
            <span className="text-brand-gradient">Than Your Competition</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            From custom websites and CMS platforms to CRM automation and SEO that actually ranks—we
            build the digital foundations that turn visitors into customers and keep them coming back.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact">Start Your Project</Button>
            <ButtonAsButton
              variant="secondary"
              onClick={() =>
                document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See Our Work
              <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonAsButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
