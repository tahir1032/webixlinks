import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Webixlinks",
  description: "Book a technical consultation with Webixlinks engineering leads.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-16">
      <PageHeader
        title="Technical consultation"
        lead="Share your architecture requirements. Our engineering leads work directly with CTOs and founders on high-stakes systems."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
