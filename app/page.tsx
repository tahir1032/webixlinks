import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { CapabilityMatrix } from "@/components/CapabilityMatrix";
import { EngagementBlueprint } from "@/components/EngagementBlueprint";
import { SecurityMatrix } from "@/components/SecurityMatrix";

export const metadata: Metadata = {
  title: "Webixlinks | Web Development, CMS, CRM & SEO",
  description:
    "Full-service web development, CMS builds, CRM automation, and SEO. We build websites that load fast, convert visitors, and grow with your business.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webixlinks",
  image: "https://webixlinks.com/logo/webixlinks.png",
  description:
    "Full-service web development, CMS builds, CRM automation, and SEO. We build websites that load fast, convert visitors, and grow with your business.",
  url: "https://webixlinks.com",
  address: { "@type": "PostalAddress", addressCountry: "US" },
  sameAs: ["https://github.com/webixlinks", "https://linkedin.com/company/webixlinks"],
  knowsAbout: [
    "Web Development",
    "WordPress Development",
    "WooCommerce & eCommerce Development",
    "Headless CMS Architecture",
    "React & Next.js Development",
    "PHP & Laravel Development",
    "GoHighLevel CRM Implementation",
    "Marketing Automation & Email Campaigns",
    "Technical SEO & Site Audits",
    "Link Building & Content Strategy",
    "Core Web Vitals & Performance Optimisation",
    "Third-Party API Integration",
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
