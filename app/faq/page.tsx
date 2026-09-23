import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ | Webixlinks",
  description: "Common questions about working with Webixlinks—services, timelines, pricing, and process.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <main className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Questions, answered"
        lead="The things clients ask most often, answered straight—no vague sales language."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
