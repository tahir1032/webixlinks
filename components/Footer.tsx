import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/site";
import logoLight from "@/public/logo/webixlinks.webp";
import logoDark from "@/public/logo/webixlinks-dark.webp";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link className="inline-block" href="/">
              <Image
                src={logoLight}
                alt="Webixlinks"
                width={140}
                height={36}
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src={logoDark}
                alt="Webixlinks"
                width={140}
                height={36}
                className="hidden h-8 w-auto dark:block"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              Web development, CMS, CRM automation, and SEO for businesses that want measurable growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                >
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              Get in Touch
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ready to start? Send us a message and we&apos;ll come back within one business day with a
              clear plan and an honest quote.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-red-400 transition-colors hover:text-red-300"
            >
              Start a project →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-600 dark:text-zinc-500">© 2026 Webixlinks. All rights reserved.</p>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            Your IP and data safety matter. All project specifications are handled under strict
            confidentiality.
          </p>
        </div>
      </div>
    </footer>
  );
}
