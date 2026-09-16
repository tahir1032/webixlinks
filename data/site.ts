export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const techStack = [
  "React",
  "Node.js",
  "NestJS",
  "Angular",
  "PHP",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "GCP",
  "Azure",
  "OpenAI / LLMs",
];

export const capabilities = [
  {
    icon: "brain",
    title: "GenAI & Agentic Workflows",
    description: "Autonomous systems that reason, plan, and execute across your enterprise stack.",
    bullets: [
      "Autonomous goal-driven agents",
      "Proprietary LLM tuning & evaluation",
      "Custom RAG pipelines",
      "Vector database engineering",
    ],
  },
  {
    icon: "layers",
    title: "Full-Stack & Mobile Engineering",
    description: "Production-grade applications engineered for scale, security, and maintainability.",
    bullets: [
      "MERN & MEAN architectures",
      "Secure NestJS microservices",
      "Enterprise PHP modernization",
      "Cross-platform native mobile",
    ],
  },
  {
    icon: "shield",
    title: "Cloud DevOps & Security",
    description: "Multi-cloud infrastructure with rigorous isolation and audit-ready boundaries.",
    bullets: [
      "AWS S3 private modules, EC2, CloudFront",
      "GCP & Azure multi-region deploys",
      "System auditing & hardening",
      "Isolated data boundaries",
    ],
  },
];

export const blueprint = [
  {
    icon: "compass",
    title: "Architectural Discovery & Spec Definition",
    description:
      "We map system boundaries, data flows, threat models, and success metrics into a signed technical specification before implementation begins.",
  },
  {
    icon: "sparkles",
    title: "Rapid Component Prototyping & Schema Design",
    description:
      "High-fidelity prototypes and database schemas are validated against real workloads—eliminating architectural surprises in production.",
  },
  {
    icon: "server",
    title: "Cloud Infrastructure Hardening & Multi-Region Deploy",
    description:
      "IAM policies, isolated environments, CI/CD pipelines, and multi-region failover are configured with infrastructure-as-code discipline.",
  },
  {
    icon: "rocket",
    title: "Continuous Evaluation & Agentic Optimization",
    description:
      "Post-launch telemetry, LLM evaluation harnesses, and performance regression gates keep systems improving under production load.",
  },
];

export const security = [
  {
    icon: "gauge",
    title: "Automated Rate-Limiting",
    description:
      "Edge and application-layer throttling protect APIs from abuse, credential stuffing, and burst traffic without degrading legitimate users.",
  },
  {
    icon: "shield",
    title: "Strict Data Isolation Boundaries",
    description:
      "Tenant-scoped storage, row-level access controls, and environment separation ensure no cross-client data leakage at rest or in transit.",
  },
  {
    icon: "key",
    title: "Secure Tokenization",
    description:
      "Short-lived JWTs, rotated API keys, and vault-backed secrets replace hardcoded credentials across every service boundary.",
  },
  {
    icon: "git-branch",
    title: "Pre-commit Husky Code Security",
    description:
      "Git hooks enforce linting, secret scanning, and dependency audits before code reaches shared branches or production pipelines.",
  },
];

export const services = [
  {
    icon: "sparkles",
    number: "01",
    title: "Generative AI & LLMs",
    description:
      "Architecting autonomous agent networks and semantic retrieval pipelines using state-of-the-art open-source and proprietary foundation models.",
    bullets: [
      "Fine-tuning models using QLoRA, LoRA, and PEFT techniques",
      "Orchestration via LangGraph, LangChain, and LlamaIndex frameworks",
      "Vector database engineering (Pinecone, Milvus, Qdrant, pgvector)",
      "Advanced hybrid RAG (Retrieval-Augmented Generation) pipelines",
      "Evaluations, safety frameworks, and model guardrails (Guardrails AI)",
    ],
  },
  {
    icon: "code-xml",
    number: "02",
    title: "Custom Development Stacks",
    description:
      "Engineering production-grade backend APIs, microservices architectures, and full-stack web platforms optimized for high throughput and sub-second latency.",
    bullets: [
      "Modular NestJS architectures with strict dependency injection",
      "MERN (MongoDB, Express, React, Node.js) & MEAN (Angular) stacks",
      "Modernizing legacy PHP and monolithic systems into TypeScript microservices",
      "High-performance RESTful, GraphQL, and gRPC API designs",
      "Transactional schema designs (PostgreSQL RLS, MongoDB atomic sessions)",
    ],
  },
  {
    icon: "palette",
    number: "03",
    title: "UI/UX Design Studio",
    description:
      "Designing scalable, WCAG-compliant design systems and high-fidelity interactive wireframes verified against user workflows.",
    bullets: [
      "Figma design system creation and cross-team token governance",
      "WCAG 2.2 accessibility auditing and semantic HTML layouts",
      "Complex dashboard visual designs and real-time canvas UX",
      "Rapid interactive prototyping and low-friction user flows",
      "Smooth micro-interactions and Framer Motion transitions",
    ],
  },
];

export const caseStudies = [
  {
    slug: "autonomous-lead-engine",
    icon: "bot",
    case: "01",
    title: "Autonomous Agent Networks for Automated Lead Engine",
    sector: "B2B Sales & Revenue Operations",
    metric: "+40%",
    metricLabel: "operations efficiency improvement",
    stack: ["OpenAI GPT-4", "LangGraph", "Node.js", "PostgreSQL", "Redis", "HubSpot API", "TypeScript"],
    challenge:
      "A high-growth B2B enterprise required automation for processing 10,000+ unstructured inbound leads monthly, eliminating manual HubSpot qualification and updating CRM pipeline state without API rate-limiting bottlenecks or conversational state hallucinations.",
    solution:
      "We engineered a hierarchical multi-agent orchestration layer using LangGraph and OpenAI GPT-4. The network coordinates role-specific agents (Planner, Researcher, and CRM Executor) bounded by strict JSON schema contracts. Redis manages transient session states, while PostgreSQL persists transactional records. Dynamic HubSpot updates are executed via idempotent webhooks, resulting in a 99.8% database sync accuracy rate.",
  },
  {
    slug: "secure-s3-delivery",
    icon: "cloud-upload",
    case: "02",
    title: "Secure Cloud-Native Object Delivery Architecture",
    sector: "Media & Digital Asset Management",
    metric: "65%",
    metricLabel: "reduction in compute overhead",
    stack: ["AWS S3", "CloudFront", "NestJS", "IAM Policies", "AWS SDK v3", "TypeScript", "Presigned URLs"],
    challenge:
      "A digital asset management platform routing media payloads up to 5GB through Express application servers suffered from high network latency, memory starvation, elevated EC2 compute bills, and a lack of tenant-scoped network boundaries.",
    solution:
      "We implemented a direct-to-S3 secure ingestion module using NestJS and the AWS SDK v3 to generate short-lived, client-specific presigned PUT URLs with a 300-second TTL. Network ingress was offloaded directly to AWS S3, while AWS CloudFront delivered content globally. Tenant-prefixed S3 keys were secured via strict IAM policies and monitored by AWS CloudTrail, reducing compute overhead and enhancing overall security.",
  },
  {
    slug: "salonx-platform",
    icon: "calendar",
    case: "03",
    title: "SalonX: Enterprise Resource & Booking Platform",
    sector: "Beauty & Wellness SaaS",
    metric: "10k+",
    metricLabel: "active appointments scaled",
    stack: ["React", "NestJS", "MongoDB", "Redis", "Docker", "Microservices", "REST & WebSockets"],
    challenge:
      "An enterprise beauty SaaS franchise managing 500+ brick-and-mortar locations experienced concurrency booking locks, database write deadlocks, and stale analytics during peak marketing campaigns.",
    solution:
      "We delivered an event-driven microservices architecture using NestJS and React. The system utilizes atomic MongoDB transactions to ensure race-free seat allocations, paired with Redis caching layers to enable sub-10ms dashboard data updates. The entire infrastructure is containerized via Docker and scales automatically to handle 50,000+ concurrent monthly reservations.",
  },
];

export const articleCategories = ["AI Engineering", "Cloud Architecture", "Backend Engineering"];

export const articles = [
  {
    slug: "architecting-autonomous-agent-networks",
    title: "Architecting Autonomous Agent Networks for Complex Enterprise Workflows",
    description:
      "How multi-agent collaboration, shared state management, and self-correcting logic loops enable reliable autonomous systems at enterprise scale.",
    category: "AI Engineering",
    date: "2026-03-12",
    dateLabel: "March 12, 2026",
    dateShort: "Mar 12, 2026",
    readTime: "8 min read",
    body: `<p>Enterprise teams are moving beyond single-shot LLM prompts toward <strong>autonomous agent networks</strong>—systems where specialized agents collaborate, delegate, and recover from failure without human intervention on every step.</p>

<h2>Why single agents fail at scale</h2>
<p>A monolithic agent handling planning, retrieval, tool execution, and validation in one context window degrades quickly. Token limits compress reasoning quality, tool outputs pollute memory, and error recovery becomes non-deterministic.</p>

<h2>Multi-agent collaboration patterns</h2>
<p>We decompose workflows into role-bound agents:</p>
<ul>
<li><strong>Planner agents</strong> translate goals into directed acyclic task graphs.</li>
<li><strong>Researcher agents</strong> retrieve and rank context from vector stores and APIs.</li>
<li><strong>Executor agents</strong> invoke tools with strict JSON-schema contracts.</li>
<li><strong>Critic agents</strong> validate outputs against business rules before commit.</li>
</ul>

<h2>State management across agents</h2>
<p>Shared state lives outside the LLM—in PostgreSQL or Redis—with explicit versioning per workflow run. Each agent reads immutable snapshots and writes append-only events, enabling replay, audit trails, and rollback without re-inference costs.</p>

<pre><code>// Workflow state snapshot (simplified)
{
  "runId": "wf_8f2a",
  "phase": "execution",
  "artifacts": { "crmLeadId": "ld_4491" },
  "agentHistory": ["planner:v2", "researcher:v1"]
}</code></pre>

<h2>Self-correcting logic loops</h2>
<p>When a critic agent rejects an output, the orchestrator routes back to the responsible agent with structured failure context—not a generic retry. This bounded loop prevents infinite hallucination cycles while preserving autonomy for recoverable errors.</p>

<p>The result: agent networks that behave like disciplined engineering teams rather than improvisational chatbots.</p>`,
  },
  {
    slug: "securing-nestjs-direct-s3-uploads",
    title: "Securing Cloud Infrastructure: Implementing Direct-to-S3 Presigned URL Components in NestJS",
    description:
      "Bypass server upload bottlenecks with signed storage policies, Helmet.js hardening, and defense-in-depth API security.",
    category: "Cloud Architecture",
    date: "2026-02-28",
    dateLabel: "February 28, 2026",
    dateShort: "Feb 28, 2026",
    readTime: "6 min read",
    body: `<p>Routing file uploads through application servers is an architectural anti-pattern at scale. <strong>Direct-to-S3 presigned URLs</strong> shift bandwidth to object storage while your API retains full authorization control.</p>

<h2>The presigned URL flow</h2>
<ol>
<li>Client requests an upload slot from your NestJS API with file metadata.</li>
<li>API validates auth, tenant scope, and MIME allowlists.</li>
<li>Server returns a short-TTL presigned <code>PUT</code> URL scoped to a single object key.</li>
<li>Client uploads directly to S3; API receives an event via SQS for post-processing.</li>
</ol>

<pre><code>@Post('uploads/presign')
@UseGuards(JwtAuthGuard)
async presign(@Body() dto: PresignDto, @User() user: AuthUser) {
  const key = \`tenants/\${user.tenantId}/\${uuid()}\`;
  const url = await this.s3.getSignedUrl('putObject', {
    Bucket: process.env.ASSETS_BUCKET,
    Key: key,
    Expires: 300,
    ContentType: dto.mimeType,
  });
  return { url, key };
}</code></pre>

<h2>Helmet.js and API hardening</h2>
<p>Every NestJS deployment ships with Helmet for security headers, strict CORS origins, and request size limits on metadata endpoints. Upload authorization never trusts client-supplied paths—keys are server-generated exclusively.</p>

<h2>CloudFront and IAM least privilege</h2>
<p>Delivery uses CloudFront with origin access controls. IAM policies grant the application role <code>s3:PutObject</code> only on tenant prefixes, never bucket-wide wildcards. Access logs feed SIEM pipelines for compliance review.</p>`,
  },
  {
    slug: "modular-nestjs-vs-monolithic-express",
    title: "Why We Choose NestJS Over Standard Express for Enterprise Backend Architectures",
    description:
      "Dependency injection, strong typing, and modular boundaries that scale with team size and system complexity.",
    category: "Backend Engineering",
    date: "2026-02-14",
    dateLabel: "February 14, 2026",
    dateShort: "Feb 14, 2026",
    readTime: "7 min read",
    body: `<p>Express remains a capable HTTP layer, but enterprise backends demand structure that emerges from convention—not convention scattered across hundreds of middleware files.</p>

<h2>Dependency injection as an architectural primitive</h2>
<p>NestJS treats DI as a first-class concern. Services declare dependencies explicitly; testing swaps implementations without module rewiring. This eliminates the hidden global singletons that plague large Express codebases.</p>

<h2>Strong typing end to end</h2>
<p>DTOs with <code>class-validator</code> decorators enforce request contracts at the boundary. TypeScript interfaces propagate from controllers through services to repositories—catching integration mismatches at compile time, not in production logs.</p>

<pre><code>@Module({
  imports: [BookingModule, NotificationsModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, SlotReservationService],
})
export class AppointmentsModule {}</code></pre>

<h2>Maintainability at team scale</h2>
<p>Feature modules map to bounded contexts. Teams ship independently behind stable module interfaces. Express projects often accrete shared utility folders that become undeletable dependency graphs—NestJS module boundaries prevent this by design.</p>

<h2>Enterprise scaling patterns</h2>
<p>Microservice extraction, GraphQL federation, and queue-based workers integrate through official NestJS packages with consistent lifecycle hooks. The framework grows with the system instead of being replaced by it.</p>

<p>When architecture is the product, NestJS is the engineering substrate we trust.</p>`,
  },
];

export const faqs = [
  {
    category: "Generative AI & LLMs",
    question: "What is an autonomous AI agent network and how does it improve operations?",
    answer:
      "An autonomous AI agent network is a system where multiple role-specific AI agents (such as planners, researchers, executors, and critics) collaborate to execute multi-step workflows. Unlike single-shot chatbot prompts that suffer from context loss and memory degradation, agent networks operate under strict tool-calling contracts, maintain a persistent external state (using Redis or PostgreSQL), and execute self-correcting logic loops to validate outputs against business rules before committing changes.",
  },
  {
    category: "Custom Development Stacks",
    question: "Why choose NestJS over standard Express.js for enterprise backend development?",
    answer:
      "We choose NestJS because it provides a highly structured, modular architecture out-of-the-box, leveraging Dependency Injection (DI) as a first-class primitive. This structure enforces clean, maintainable boundaries between modules, unlike raw Express projects that frequently suffer from messy dependency graphs. Additionally, NestJS has native integration with TypeScript and official ecosystem packages for queues, microservices, and WebSockets, making it ideal for scaling development teams.",
  },
  {
    category: "Cloud DevOps & Security",
    question: "What are the benefits of direct-to-S3 presigned uploads in cloud architectures?",
    answer:
      "Direct-to-S3 uploads bypass application servers by allowing clients to ingest binary files directly into object storage. This reduces compute overhead (CPU/bandwidth) on EC2 instances or serverless containers by 60%+ and eliminates upload bottlenecks. Security is maintained by having the NestJS backend issue short-lived, tenant-scoped presigned URLs with strict IAM least-privilege policies, preventing unauthorized bucket mutations.",
  },
  {
    category: "Cloud DevOps & Security",
    question: "How does Webixlinks ensure isolated data boundaries in multi-tenant SaaS systems?",
    answer:
      "We implement defense-in-depth data isolation across all stack layers. This includes tenant-scoped database schemas, row-level access controls (RLS) in PostgreSQL, tenant-prefixed S3 keys, and JWT verification inside NestJS controllers that validate the client's tenant authorization at every API boundary. This architecture ensures no cross-client data leakage at rest or in transit.",
  },
  {
    category: "Cloud DevOps & Security",
    question: "Which cloud platforms do you support and how do you manage deployments?",
    answer:
      "Webixlinks architects and deploys enterprise systems across AWS, Google Cloud Platform (GCP), and Microsoft Azure. We use Infrastructure as Code (IaC) principles with Terraform and GitHub Actions CI/CD pipelines. This ensures environment consistency, automated testing, isolated staging and production boundaries, and multi-region failover configurations.",
  },
];

export const pillars = [
  {
    icon: "zap",
    title: "Performance First",
    description:
      "We engineer for minimal overhead—optimized serverless workflows, edge caching strategies, and sub-second perceived load times. Every architectural decision is measured against real-world latency and throughput benchmarks.",
  },
  {
    icon: "lock",
    title: "Ironclad Security",
    description:
      "Deep system audits, rate-limiting, secure object storage modules, and strict data isolation are non-negotiable. We implement Helmet.js hardening, secure API gateways, and defense-in-depth patterns across every layer.",
  },
  {
    icon: "eye",
    title: "Accountability",
    description:
      "No vague promises—absolute architectural transparency. You receive clear documentation, decision logs, and honest trade-off analysis so your engineering leadership stays in control.",
  },
];

export const projectTypes = [
  {
    value: "agentic-ai",
    label: "Agentic AI / LLMs",
    description: "Autonomous agents, RAG, and custom model pipelines",
  },
  {
    value: "full-stack",
    label: "Full-Stack App Development",
    description: "MERN, MEAN, NestJS, and mobile applications",
  },
  {
    value: "cloud-devops",
    label: "Cloud Infrastructure & DevOps",
    description: "AWS, GCP, Azure deployment and security",
  },
  {
    value: "ui-ux",
    label: "UI/UX Product Design",
    description: "Design systems, wireframes, and product UX",
  },
];
