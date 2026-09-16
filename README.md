# Webixlinks.com — Site Audit & Next.js Reconstruction Brief

Compiled from the rendered HTML and RSC payloads of all seven public pages.

**Last updated:** 16 September 2026
**Source:** static HTML dumps (server-rendered + hydrated) of `https://webixlinks.com`
**Build ID observed:** `R7o-qkzA56zZU6BhGZqj2`

---

## Table of contents

1. [Stack fingerprint](#1-stack-fingerprint)
2. [Page inventory](#2-page-inventory)
3. [Design system](#3-design-system)
4. [Content inventory](#4-content-inventory)
5. [Media & static resources](#5-media--static-resources)
6. [Contact form](#6-contact-form)
7. [SEO & structured data](#7-seo--structured-data)
8. [Known issues](#8-known-issues)
9. [Reconstruction plan](#9-reconstruction-plan)
10. [What's still needed](#10-whats-still-needed)
11. [Reconstruction status (this repo)](#11-reconstruction-status-this-repo)

---

## 1. Stack fingerprint

The site is **already a Next.js application**. The RSC stream (`self.__next_f.push`) exposes the component graph directly.

| Item | Value |
|---|---|
| Framework | Next.js, App Router, React Server Components |
| Bundler | Turbopack (`turbopack-0-2.l_zqr94y7.js`) |
| Build ID | `R7o-qkzA56zZU6BhGZqj2` |
| Styling | Tailwind CSS — single stylesheet `/_next/static/chunks/05tph2cfielf1.css` |
| Theming | `next-themes` — class strategy, storage key `theme`, default `light`, system detection **disabled** |
| Fonts | Geist + Geist Mono, self-hosted, two woff2 files preloaded |
| Icons | `lucide-react`, rendered inline as SVG |
| Images | `next/image` optimizer (`/_next/image?url=…&w=384&q=75`) |
| Animation | Framer Motion or equivalent (inline `opacity:0; transform:translateY(20px)` on hero) |
| PWA | `manifest.json` + full icon set |

**Named client components recovered from the RSC payload:**

```
ThemeProvider   Navbar        Hero          FaqAccordion
ContactForm     IconMark      Image (next)  Link (next)
```

Chunk filenames are non-standard and scrambled (`13oxph5y.~hos.js`, `0or0qufd-cbtz.js`, `0_0~rnnrex59q.js`), as is the favicon query string (`?favicon.0x3dzn~oxb6tn.ico`). This looks like deliberate build-output obfuscation.

---

## 2. Page inventory

Seven public routes. Nav and footer link lists are identical.

| Route | `<title>` | H1 | Meta description |
|---|---|---|---|
| `/` | Webixlinks \| AI Agents & Enterprise Cloud Engineering | Engineering Intelligent AI Agents & *Enterprise Cloud Infrastructure* | Engineering intelligent AI agents and enterprise cloud infrastructure. MERN, MEAN, NestJS, and multi-cloud systems across AWS, GCP, and Azure. |
| `/services` | Services \| Webixlinks | Technical capabilities index | Deep technical capabilities: Generative AI, custom development stacks, and UI/UX design studio services. |
| `/portfolio` | Portfolio \| Webixlinks | Engineering case studies | Engineering case studies in autonomous AI, secure cloud delivery, and enterprise booking platforms. |
| `/articles` | Insights \| Webixlinks | Engineering insights | Technical articles on autonomous agent networks, cloud security, and enterprise backend architecture. |
| `/faq` | Frequently Asked Questions \| Webixlinks | Technical specifications index | Direct technical answers on AI agents, NestJS backend architecture, multi-cloud setups, and data isolation strategies. |
| `/about` | About \| Webixlinks | Built by architects, not account managers | Our engineering philosophy, security standards, and high-performance culture at Webixlinks. |
| `/contact` | Contact \| Webixlinks | Technical consultation | Book a technical consultation with Webixlinks engineering leads. |

Nav label note: `/articles` is displayed as **"Insights"**, not "Articles".

**Routes referenced but not captured** (article detail pages):

- `/articles/architecting-autonomous-agent-networks`
- `/articles/securing-nestjs-direct-s3-uploads`
- `/articles/modular-nestjs-vs-monolithic-express`

Active-nav highlighting (`text-red-500 dark:text-red-400`) works correctly on all six inner pages.

---

## 3. Design system

### Colour

Zinc greyscale for all structure, a single red accent.

| Token | Usage |
|---|---|
| `red-400` | Eyebrow labels, icon glyphs, footer accent links |
| `red-500` | Bullet dots, active nav, hover borders, metric numbers |
| `red-500/10` | Icon chip backgrounds |
| `red-500/20` | Metric card borders, button shadows |
| `red-500/30` | Card hover border (capability cards) |
| `red-500/5` | Hero gradient wash, metric card fill |
| `zinc-200` / `zinc-800` | Borders, light / dark |
| `zinc-50/80` | Page header band, alternating section tint |
| `zinc-900/40` | Dark card fill |

Two custom utilities carry the brand and are **defined in the stylesheet, not in the markup**:

- `bg-brand-gradient` — primary button fill
- `text-brand-gradient` — second half of the homepage H1

Also custom: `bg-grid` (root wrapper background) and `animate-marquee`.

### Layout

- Containers: `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`
- Sections: `py-16 md:py-24`, separated by `border-t` / `border-y`
- Header: `fixed inset-x-0 top-0 z-50 h-16`, `backdrop-blur-md`, `bg-white/80 dark:bg-black/70`
- Main offset: `pt-16`
- Alternating section tints (`zinc-50/50`, `zinc-50/80`, `zinc-950/30`) break vertical rhythm

### Typography

- Headings: `font-semibold tracking-tight`
- H1 homepage: `text-4xl md:text-5xl lg:text-6xl`
- H1 inner pages: `text-3xl md:text-4xl lg:text-5xl`
- H2: `text-3xl md:text-4xl`
- Body: `text-zinc-600 dark:text-zinc-400 leading-relaxed`
- **Signature device — the eyebrow:** `mb-3 font-mono text-xs uppercase tracking-widest text-red-400`

Eyebrow strings in use: `AI & Cloud Engineering Studio`, `Technical Stack`, `Core Capabilities`, `Execution Model`, `Security Posture`, `Core Pillars`, `Webixlinks` (inner page headers), `Quick Links`, `Get in Touch`, `Tech Stack`, `Latest Insight`, `More Articles`.

### Components

| Component | Classes |
|---|---|
| Card | `rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40` |
| Service card | same, `p-8 md:p-10`, `dark:bg-zinc-900/30` |
| Button base | `rounded-xl px-5 py-2.5 text-sm font-medium transition-all` |
| Button primary | `bg-brand-gradient text-white shadow-lg shadow-red-500/20 hover:brightness-110` |
| Button secondary | `border border-zinc-300 bg-zinc-100 text-zinc-900 hover:bg-zinc-200` |
| Icon chip | `flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400` |
| Tech pill | `rounded-lg border px-5 py-2.5 font-mono text-sm` |
| Tag chip | `rounded-full border px-3 py-1 font-mono text-xs` |
| Bullet dot | `mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500` |

Focus states are correct throughout: `focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2` with offset colour flipping for dark mode.

### Inner-page header pattern

Every page except `/` opens with an identical band:

```
zinc-50/80 background · border-b · py-16 md:py-20
  ├─ eyebrow "Webixlinks" (red, mono, uppercase)
  ├─ H1 (max-w-3xl)
  └─ lead paragraph (max-w-2xl, text-lg)
```

---

## 4. Content inventory

### Homepage

**Hero** — eyebrow "AI & Cloud Engineering Studio". H1: *Engineering Intelligent AI Agents & **Enterprise Cloud Infrastructure*** (second half gradient). Sub: "From custom MERN/MEAN architectures to autonomous Agentic AI workflows across AWS, GCP, and Azure—we build the secure, scalable digital foundations for modern enterprises." CTAs: **Build Your System** → `/contact`, **View Stack** → scrolls to `#tech-stack`.

**Tech marquee** — 12 items, duplicated to 24 for a seamless loop:
React · Node.js · NestJS · Angular · PHP · Python · MongoDB · PostgreSQL · AWS · GCP · Azure · OpenAI / LLMs

**The Capability Matrix** — three cards, four bullets each:

| Card | Icon | Bullets |
|---|---|---|
| GenAI & Agentic Workflows | `brain` | Autonomous goal-driven agents · Proprietary LLM tuning & evaluation · Custom RAG pipelines · Vector database engineering |
| Full-Stack & Mobile Engineering | `layers` | MERN & MEAN architectures · Secure NestJS microservices · Enterprise PHP modernization · Cross-platform native mobile |
| Cloud DevOps & Security | `shield` | AWS S3 private modules, EC2, CloudFront · GCP & Azure multi-region deploys · System auditing & hardening · Isolated data boundaries |

**The Engagement Blueprint** — four numbered phases (icons: `compass`, `sparkles`, `server`, `rocket`):

1. Architectural Discovery & Spec Definition
2. Rapid Component Prototyping & Schema Design
3. Cloud Infrastructure Hardening & Multi-Region Deploy
4. Continuous Evaluation & Agentic Optimization

**System Hardening & Compliance Matrix** — four items (icons: `gauge`, `shield`, `key`, `git-branch`):

- Automated Rate-Limiting
- Strict Data Isolation Boundaries
- Secure Tokenization
- Pre-commit Husky Code Security

### `/services`

Three numbered blocks, five bullets each.

**01 · Generative AI & LLMs** (`sparkles`)
QLoRA/LoRA/PEFT fine-tuning · LangGraph, LangChain, LlamaIndex · Pinecone, Milvus, Qdrant, pgvector · hybrid RAG · Guardrails AI

**02 · Custom Development Stacks** (`code-xml`)
Modular NestJS with strict DI · MERN & MEAN · legacy PHP → TypeScript microservices · REST, GraphQL, gRPC · PostgreSQL RLS + MongoDB atomic sessions

**03 · UI/UX Design Studio** (`palette`)
Figma design systems & token governance · WCAG 2.2 auditing · dashboards & real-time canvas UX · rapid prototyping · Framer Motion micro-interactions

### `/portfolio`

Three case studies. Internal keys: `autonomous-lead-engine`, `secure-s3-delivery`, `salonx-platform` — **no detail pages exist**.

| # | Title | Sector | Metric | Stack |
|---|---|---|---|---|
| 01 | Autonomous Agent Networks for Automated Lead Engine | B2B Sales & Revenue Operations | **+40%** ops efficiency | OpenAI GPT-4, LangGraph, Node.js, PostgreSQL, Redis, HubSpot API, TypeScript |
| 02 | Secure Cloud-Native Object Delivery Architecture | Media & Digital Asset Management | **65%** compute reduction | AWS S3, CloudFront, NestJS, IAM Policies, AWS SDK v3, TypeScript, Presigned URLs |
| 03 | SalonX: Enterprise Resource & Booking Platform | Beauty & Wellness SaaS | **10k+** appointments | React, NestJS, MongoDB, Redis, Docker, Microservices, REST & WebSockets |

Each carries a *Challenge* and an *Architectural Solution* paragraph. Notable claims embedded in the copy: 10,000+ inbound leads/month, 99.8% DB sync accuracy, 5GB media payloads, 300-second presigned TTL, 500+ physical locations, 50,000+ concurrent monthly reservations, sub-10ms dashboard updates.

### `/articles`

Three category chips (AI Engineering, Cloud Architecture, Backend Engineering) — **non-functional, see issues**.

| Slug | Title | Category | Date | Read |
|---|---|---|---|---|
| `architecting-autonomous-agent-networks` | Architecting Autonomous Agent Networks for Complex Enterprise Workflows | AI Engineering | 2026-03-12 | 8 min |
| `securing-nestjs-direct-s3-uploads` | Securing Cloud Infrastructure: Implementing Direct-to-S3 Presigned URL Components in NestJS | Cloud Architecture | 2026-02-28 | 6 min |
| `modular-nestjs-vs-monolithic-express` | Why We Choose NestJS Over Standard Express for Enterprise Backend Architectures | Backend Engineering | 2026-02-14 | 7 min |

### `/faq`

Five Q&As in an accordion, each tagged with a service category. Answers are present in the DOM while collapsed (`max-h-0` + `overflow-hidden`), so they are indexable.

1. What is an autonomous AI agent network and how does it improve operations? — *Generative AI & LLMs*
2. Why choose NestJS over standard Express.js for enterprise backend development? — *Custom Development Stacks*
3. What are the benefits of direct-to-S3 presigned uploads in cloud architectures? — *Cloud DevOps & Security*
4. How does Webixlinks ensure isolated data boundaries in multi-tenant SaaS systems? — *Cloud DevOps & Security*
5. Which cloud platforms do you support and how do you manage deployments? — *Cloud DevOps & Security*

### `/about`

Three philosophy paragraphs, then **Core Pillars** — Performance First (`zap`), Ironclad Security (`lock`), Accountability (`eye`).

The Engagement Blueprint and Security Matrix sections that follow are **byte-identical to the homepage**. Roughly 40% of this page is duplicate content.

### Footer (global)

Tagline: "Elite AI agents and enterprise cloud infrastructure for forward-thinking organizations."
Quick Links: Services, Portfolio, Insights, FAQ, About, Contact, Request Consultation.
Get in Touch: "Ready to architect your next system? Submit a technical brief and our engineering leads will respond within one business day." → **Start a project →**
Bottom: `© 2026 Webixlinks. All rights reserved.` and "Your IP and data safety matter. All project specifications are handled under strict confidentiality."

---

## 5. Media & static resources

The site contains **exactly one raster image**.

| Asset | Notes |
|---|---|
| `/logo/webixlinks.png` | Served via `next/image` at 256w and 384w, `q=75`. Header 160×40 → rendered `h-8 sm:h-9`. Footer 140×36 → `h-8`. |
| `/_next/static/media/797e433ab948586e-s.p.08e28id.o-okb.woff2` | Geist (preloaded) |
| `/_next/static/media/caa3a2e1cccd8315-s.p.09~u27dqhyhd6.woff2` | Geist Mono (preloaded) |
| `/_next/static/chunks/05tph2cfielf1.css` | The entire stylesheet |
| `/manifest.json` | PWA manifest |
| Favicons | `favicon.ico` (256), 16, 32, 96, `android-icon-192`, `ms-icon-144` |
| Apple touch icons | 57, 60, 72, 76, 114, 120, 144, 152, 180 |

**Every other visual is an inline Lucide SVG.** 20 distinct icons: `menu`, `moon`, `arrow-down`, `arrow-right`, `brain`, `layers`, `shield`, `compass`, `sparkles`, `server`, `rocket`, `gauge`, `key`, `git-branch`, `code-xml`, `palette`, `bot`, `cloud-upload`, `calendar`, `clock`, `zap`, `lock`, `eye`, `chevron-down`.

**Absent:** photography, team headshots, client logos, product screenshots, case-study visuals, OG share images, video, downloadable PDFs.

---

## 6. Contact form

`components/ContactForm` — client component, logic in `/_next/static/chunks/0_0~rnnrex59q.js`.

### Fields

| Field | id | Type | Placeholder | autocomplete |
|---|---|---|---|---|
| Name | `name` | text | `Jane Chen` | `name` |
| Corporate Email | `email` | email | `jane@company.com` | `email` |
| Company Name | `company` | text | `Acme Corp` | `organization` |
| Project Type | — | radiogroup, `name="projectType"` | — | — |
| Project Overview *(optional)* | `message` | textarea, 4 rows | `Describe your architecture goals, timeline, and constraints...` | — |

**Project Type options** (`sr-only` radios inside styled card labels):

| Value | Label | Description |
|---|---|---|
| `agentic-ai` | Agentic AI / LLMs | Autonomous agents, RAG, and custom model pipelines |
| `full-stack` | Full-Stack App Development | MERN, MEAN, NestJS, and mobile applications |
| `cloud-devops` | Cloud Infrastructure & DevOps | AWS, GCP, Azure deployment and security |
| `ui-ux` | UI/UX Product Design | Design systems, wireframes, and product UX |

Submit: **Submit Technical Brief** (`w-full sm:w-auto`).
Notice below: "NDA available upon request. Data protected under strict end-to-end encryption protocols."

### Technical observations

- `noValidate` is set → browser validation disabled, all validation is React-managed.
- `aria-invalid="false"` on the radiogroup confirms custom error handling exists.
- **No `name` attributes** on the three text inputs or the textarea; **no `required`** anywhere. Only the radios carry a `name`. Without JS the form submits nothing.
- Submit endpoint is not present in the HTML — it lives inside the JS chunk.
- No visible spam protection (no honeypot, no captcha), no consent checkbox, no privacy-policy link.
- **No email address, phone number, postal address, or calendar link exists anywhere on the site.** The form is the sole contact channel.

---

## 7. SEO & structured data

### Present on all pages

`title` · `description` · `keywords` (identical sitewide) · `theme-color: #ffffff` · `manifest` · `msapplication-TileColor` / `TileImage` · full favicon set · `lang="en"` · `viewport`.

### JSON-LD coverage

| Page | Schema |
|---|---|
| `/` | `ProfessionalService` — name, image, description, url, `addressCountry: "US"`, `sameAs` (github.com/webixlinks, linkedin.com/company/webixlinks), 12-item `knowsAbout` |
| `/services` | `ItemList` of three `Service` items with `provider` |
| `/faq` | `FAQPage` with five `Question` / `acceptedAnswer` pairs |
| `/portfolio` | ❌ none |
| `/articles` | ❌ none |
| `/about` | ❌ none |
| `/contact` | ❌ none |

The `knowsAbout` array is more specific than any visible copy: Generative AI & LLMs, Autonomous AI Agent Networks, LangGraph & LangChain Orchestration, Vector Database Engineering, Hybrid RAG Pipelines, NestJS Framework Architecture, MERN & MEAN Stack Development, Microservices & Event-Driven Architecture, AWS/GCP/Azure Multi-Cloud Engineering, Direct-to-S3 Presigned Upload Architectures, Data Isolation & Multi-Tenant SaaS Security, Figma Design Systems & WCAG 2.2 Accessibility.

### Missing sitewide

- ❌ `rel="canonical"` — on every page
- ❌ Open Graph tags — on every page
- ❌ Twitter card tags — on every page
- ❌ `og:image`
- ❌ `robots` meta
- ❌ `Organization`, `BreadcrumbList`, `Blog` / `Article`, `ContactPage` schemas

---

## 8. Known issues

Ordered by business impact.

| # | Severity | Issue |
|---|---|---|
| 1 | **High** | **No OG / Twitter / canonical tags on any page.** Every LinkedIn or Slack share renders as a bare grey link. For a B2B studio whose funnel runs through LinkedIn, this is the costliest single item. |
| 2 | **High** | **Insights category filters are dead.** The three chips are plain `<span>` elements — no `<button>`, no `<a>`, no handler. They look interactive and do nothing. |
| 3 | **High** | **No trust signals anywhere.** No named team member, no founding date, no location, no client logos, no testimonials. `/about` claims "elite collective of technical leads" without naming one. |
| 4 | **High** | **No contact details.** Form-only. No email, phone, or address on the site; JSON-LD gives only `addressCountry: "US"`. |
| 5 | Medium | **404 page is the Next.js default** — system fonts, no header, no footer, no route back. Off-brand. |
| 6 | Medium | **Form inputs lack `name` and `required`.** Fragile, and the form is fully non-functional without JS. |
| 7 | Medium | **Hero ships at `opacity: 0`.** If the animation JS fails or is slow, the H1 and both CTAs are invisible. `motion-reduce:` covers reduced-motion users but not JS failure. |
| 8 | Medium | **Marquee is read twice by screen readers.** The 12 duplicated pills need `aria-hidden="true"` on the second set, plus `prefers-reduced-motion` handling (the hero has it, the marquee doesn't). |
| 9 | Medium | **Duplicate content between `/` and `/about`.** Two full sections repeat verbatim. |
| 10 | Low | **"View Stack" is a `<button>`, not `<a href="#tech-stack">`.** The section isn't linkable and the jump fails without JS. |
| 11 | Low | **FAQ accordion buttons** have `aria-expanded` but no `aria-controls` / panel `id` pairing. |
| 12 | Low | **Portfolio case slugs exist but lead nowhere.** `autonomous-lead-engine`, `secure-s3-delivery`, `salonx-platform` are keys only. |
| 13 | Low | **JSON-LD address is country-only.** No locality, no phone, no email — little for Google to work with. |

**Not bugs:** the `chrome-extension://…/recordConsoleEvents.js` and `.imageye-selected` style block in some dumps are a browser extension, not the site. Several hydrated snapshots carry an RSC payload whose route segment still reads `"services"` — leftover from client-side navigation during capture.

### Structural things done right

One `<h1>` per page · correct heading descent · `aria-label` on both icon buttons · `aria-expanded` on the mobile toggle · `aria-hidden` on decorative SVGs · `aria-label="Main navigation"` on `<nav>` · `<time dateTime>` on article dates · proper `<fieldset>` / `<legend>` on the radio group · `role="radiogroup"` · label `for` / input `id` pairing throughout · full light + dark coverage on every element · focus-visible rings with correct offset colours.

---

## 9. Reconstruction plan

> The site is already Next.js. What follows is a **source reconstruction** from rendered output — useful if the original repo is lost, if this is a rebuild of someone else's site, or if you want a clean rewrite with the issues above fixed. **If the repo exists, use it.**

### Recoverable without further input

The RSC payload leaked component names, props, and data objects, so the following can be written verbatim rather than guessed:

```
app/
  layout.tsx              fonts, ThemeProvider, Navbar, Footer, metadata, icons
  page.tsx                homepage
  services/page.tsx
  portfolio/page.tsx
  articles/page.tsx
  faq/page.tsx
  about/page.tsx
  contact/page.tsx
  not-found.tsx           ← needs writing; current one is the Next.js default

components/
  Navbar.tsx              active-link logic, theme toggle, mobile menu
  Footer.tsx
  Hero.tsx                animated, motion-reduce fallback
  Section.tsx             eyebrow + heading + lead wrapper
  Card.tsx
  Button.tsx              primary / secondary variants
  TechMarquee.tsx
  FaqAccordion.tsx
  ContactForm.tsx
  IconMark.tsx

data/
  navLinks.ts      techStack.ts     capabilities.ts
  blueprint.ts     security.ts      services.ts
  caseStudies.ts   articles.ts      faqs.ts
  pillars.ts       projectTypes.ts

lib/
  schema.ts               JSON-LD builders
```

Every string, class, metric, tech chip, slug, and date is already captured above.

### Gaps that need real input

| Gap | Blocks |
|---|---|
| Stylesheet | `bg-grid`, `bg-brand-gradient`, `text-brand-gradient`, `animate-marquee` keyframes, `--background` / `--foreground` tokens, exact brand hex values |
| Tailwind version | v3 (`tailwind.config.ts`) vs v4 (`@theme` in CSS) — changes the whole config approach |
| Article bodies | Three full posts, plus whether they're MDX, a data array, or a CMS |
| Form endpoint | API route? Resend? Formspree? And zod + react-hook-form vs hand-rolled |
| Animation package | `framer-motion` vs the newer `motion` — different import paths |
| Versions | Next.js and React majors from `package.json` |

---

## 10. What's still needed

In priority order:

1. **`/_next/static/chunks/05tph2cfielf1.css`** — the single most valuable file. Without it, brand colours and the gradient angle are guesswork.
2. **The three article pages** — the entire long-form content library, currently unassessed.
3. **`0_0~rnnrex59q.js`**, or simply a description of where the contact form posts and how it validates.
4. **`package.json`** — Next.js version, React version, animation library, form library.
5. **`robots.txt` and `sitemap.xml`** — to confirm crawl and indexing coverage.
6. **`manifest.json`** — PWA name, theme colours, display mode.
7. **`/logo/webixlinks.png`** — the only raster asset.

### Suggested first fixes

Independent of any reconstruction, these five are cheap and high-return:

1. Add `openGraph`, `twitter`, and `alternates.canonical` to every page's `metadata` export; generate an `og:image` (static or `opengraph-image.tsx`).
2. Make the Insights category chips real filters, or remove them.
3. Write a branded `not-found.tsx`.
4. Publish a real contact channel — an email address at minimum.
5. Add `aria-hidden="true"` to the duplicated marquee set and wire up `prefers-reduced-motion`.

---

## 11. Reconstruction status (this repo)

This project is the actual rebuild, done directly from the live site rather than from guesswork:

- Fetched raw HTML for all 7 pages + 3 article detail pages, the production stylesheet, `manifest.json`, `robots.txt`, `sitemap.xml`, and the logo directly from `webixlinks.com` — see `.fetch/` for the originals.
- All "gaps that need real input" from section 9 are resolved from that fetch: Tailwind v4 confirmed (`@theme` tokens in the CSS), exact brand values pulled straight from the stylesheet (`red-500: #fb2c36`, brand gradient `#ef4444 → #b91c1c`, grid/background tokens, marquee keyframes).
- Logo supplied directly by the site owner (`.fetch/logo/`).

*Document compiled from rendered HTML only. No server-side code, environment configuration, or private repository contents were accessible.*
