import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { ArticlesIndex } from "@/components/ArticlesIndex";

export const metadata: Metadata = {
  title: "Insights | Webixlinks",
  description:
    "Practical articles on web development, CMS platforms, CRM automation, and SEO—written for business owners, not developers.",
};

export default function ArticlesPage() {
  return (
    <main className="flex-1 pt-16">
      <PageHeader
        title="Insights & guides"
        lead="Practical writing on websites, content systems, automation, and search—the things that actually move the needle for a growing business."
      />
      <ArticlesIndex />
    </main>
  );
}
