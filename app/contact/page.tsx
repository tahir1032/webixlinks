import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Webixlinks",
  description:
    "Tell us about your project and we'll come back within one business day with a clear plan and an honest quote.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-16">
      <PageHeader
        title="Let's talk about your project"
        lead="Tell us what you're building or what's not working. We'll come back within one business day with a clear plan and an honest quote—no pressure, no sales call."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
