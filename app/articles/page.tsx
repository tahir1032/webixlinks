import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import { ArticlesIndex } from "@/components/ArticlesIndex";

export const metadata: Metadata = {
  title: "Insights | Webixlinks",
  description:
    "Technical articles on autonomous agent networks, cloud security, and enterprise backend architecture.",
};

export default function ArticlesPage() {
  return (
    <main className="flex-1 pt-16">
      <PageHeader
        title="Engineering insights"
        lead="Deep technical writing from our architects—covering AI systems, cloud infrastructure, and backend engineering at scale."
      />
      <ArticlesIndex />
    </main>
  );
}
