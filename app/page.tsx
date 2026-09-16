import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { CapabilityMatrix } from "@/components/CapabilityMatrix";
import { EngagementBlueprint } from "@/components/EngagementBlueprint";
import { SecurityMatrix } from "@/components/SecurityMatrix";

export const metadata: Metadata = {
  title: "Webixlinks | AI Agents & Enterprise Cloud Engineering",
  description:
    "Engineering intelligent AI agents and enterprise cloud infrastructure. MERN, MEAN, NestJS, and multi-cloud systems across AWS, GCP, and Azure.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webixlinks",
  image: "https://webixlinks.com/logo/webixlinks.png",
  description:
    "Engineering intelligent AI agents and enterprise cloud infrastructure. Specialized in NestJS, MERN, MEAN, and multi-cloud solutions across AWS, GCP, and Azure.",
  url: "https://webixlinks.com",
  address: { "@type": "PostalAddress", addressCountry: "US" },
  sameAs: ["https://github.com/webixlinks", "https://linkedin.com/company/webixlinks"],
  knowsAbout: [
    "Generative AI & LLMs",
    "Autonomous AI Agent Networks",
    "LangGraph & LangChain Orchestration",
    "Vector Database Engineering",
    "Hybrid RAG Pipelines",
    "NestJS Framework Architecture",
    "MERN & MEAN Stack Development",
    "Microservices & Event-Driven Architecture",
    "AWS, GCP, & Microsoft Azure Multi-Cloud Engineering",
    "Direct-to-S3 Presigned Upload Architectures",
    "Data Isolation & Multi-Tenant SaaS Security",
    "Figma Design Systems & WCAG 2.2 Accessibility",
  ],
};

export default function HomePage() {
  return (
    <main className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TechMarquee />
      <CapabilityMatrix />
      <EngagementBlueprint />
      <SecurityMatrix />
    </main>
  );
}
