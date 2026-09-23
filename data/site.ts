export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const techStack = [
  "WordPress",
  "React",
  "Next.js",
  "Laravel",
  "PHP",
  "ACF",
  "WooCommerce",
  "Shopify",
  "GoHighLevel",
  "HubSpot",
  "Zapier",
  "Node.js",
  "MySQL",
  "Figma",
  "Google Analytics",
];

export const capabilities = [
  {
    icon: "code",
    title: "Web Development",
    description: "Fast, secure, conversion-focused websites built to your business — not dropped onto a template.",
    bullets: [
      "Custom website development",
      "Frontend — React & Next.js",
      "Backend — PHP & Laravel",
      "Speed & Core Web Vitals",
    ],
  },
  {
    icon: "layers",
    title: "CMS Development",
    description:
      "Content systems your team can actually use — update pages, publish posts, manage products without calling a developer.",
    bullets: [
      "WordPress builds & customisation",
      "Custom plugin & theme development",
      "WooCommerce & eCommerce",
      "Headless CMS with Next.js",
    ],
  },
  {
    icon: "workflow",
    title: "CRM & Automation",
    description:
      "Sales systems that follow up instantly, book appointments, and collect payments while you sleep.",
    bullets: [
      "GoHighLevel setup & funnels",
      "Email & SMS automation",
      "Pipelines & lead management",
      "HubSpot, Zapier & Mailchimp",
    ],
  },
  {
    icon: "trending-up",
    title: "SEO & Content",
    description:
      "Technical SEO, content strategy, and authority building that moves you up Google and keeps you there.",
    bullets: [
      "Technical SEO audits & fixes",
      "On-page & content optimisation",
      "Guest posting & link building",
      "Local SEO & Google Business",
    ],
  },
];

export const blueprint = [
  {
    icon: "compass",
    title: "Discovery & Strategy",
    description:
      "We start with your business, not your website. Goals, audience, competitors, and what success actually looks like — then a clear proposal with fixed scope, timeline, and price before any work begins.",
  },
  {
    icon: "sparkles",
    title: "Design & Prototype",
    description:
      "Wireframes and high-fidelity designs in Figma, reviewed with you before development starts. You see and approve the finished look while changes are still cheap and quick.",
  },
  {
    icon: "server",
    title: "Build & Integrate",
    description:
      "Clean, fast development with regular check-ins. Your CMS, CRM, payment systems, and third-party tools are connected and tested — not bolted on afterwards.",
  },
  {
    icon: "rocket",
    title: "Launch & Grow",
    description:
      "We handle deployment, speed testing, and SEO setup. Then we stay on — monitoring performance, running campaigns, and improving what the data tells us to improve.",
  },
];

export const security = [
  {
    icon: "gauge",
    title: "Speed That Converts",
    description:
      "Every site we build is optimised for Core Web Vitals and mobile performance. Faster pages mean lower bounce rates, better Google rankings, and more enquiries from the traffic you already have.",
  },
  {
    icon: "shield",
    title: "Security & Maintenance Included",
    description:
      "SSL, backups, updates, and security hardening as standard — plus ongoing maintenance so your site stays fast and protected long after launch.",
  },
  {
    icon: "message-square",
    title: "One Team, One Point of Contact",
    description:
      "Design, development, CRM, and SEO handled by the same team. No handoffs between agencies, no finger-pointing when something breaks, no repeating yourself to three different people.",
  },
  {
    icon: "file-check",
    title: "Fixed Pricing, No Surprises",
    description:
      "You get a clear proposal with full scope, timeline, and cost before we begin. No hourly creep, no mid-project invoices you didn't expect.",
  },
];

export const services = [
  {
    icon: "code-xml",
    number: "01",
    title: "Web Development",
    description:
      "Custom websites and web applications built for performance, security, and conversion — engineered around your business goals rather than a template's limitations.",
    bullets: [
      "Custom website design and development from scratch",
      "Frontend development with React and Next.js",
      "Backend systems with PHP, Laravel, and Node.js",
      "Responsive, mobile-first builds tested across every device",
      "Speed optimisation and Core Web Vitals engineering",
    ],
  },
  {
    icon: "layout-dashboard",
    number: "02",
    title: "CMS Development",
    description:
      "Content management systems your team can actually use. Update pages, publish content, and manage products without needing a developer for every small change.",
    bullets: [
      "WordPress development — custom themes and page builder work",
      "Custom plugin development and plugin customisation",
      "Advanced Custom Fields (ACF) and custom post types",
      "PHP-based custom functionality and theme customisation",
      "WooCommerce stores with payments, shipping, and product management",
      "Headless WordPress powering React and Next.js frontends",
      "Platform migrations — Wix, Squarespace, or legacy systems to WordPress",
      "Ongoing CMS maintenance, updates, and security",
    ],
  },
  {
    icon: "workflow",
    number: "03",
    title: "CRM & Automation",
    description:
      "Sales and marketing systems that run without you. Capture leads, follow up instantly, book appointments, and collect payments — all automated, all connected.",
    bullets: [
      "GoHighLevel setup — funnels, pipelines, and full account configuration",
      "Email and SMS automation sequences that nurture leads over time",
      "Appointment booking with automated reminders and follow-ups",
      "Payment integration, invoicing, and membership or course delivery",
      "HubSpot, Zapier, ActiveCampaign, and Mailchimp integrations",
    ],
  },
  {
    icon: "trending-up",
    number: "04",
    title: "SEO & Content",
    description:
      "Getting found on Google takes more than keywords. We handle the technical foundations, the content that ranks, and the authority signals that keep you there.",
    bullets: [
      "Technical SEO audits — crawlability, indexing, speed, and schema",
      "On-page optimisation and keyword-driven content strategy",
      "Guest posting and link building on relevant, high-authority sites",
      "Local SEO and Google Business Profile optimisation",
      "Monthly reporting on rankings, traffic, and conversions",
    ],
  },
];

export const caseStudies = [
  {
    slug: "eosis-recovery",
    icon: "layout-dashboard",
    case: "01",
    title: "EOSIS Recovery",
    sector: "Healthcare · Addiction & Mental Health Treatment",
    metric: "15+ Locations",
    metricLabel: "treatment facilities managed on one platform",
    stack: ["WordPress", "PHP", "ACF", "Custom Post Types"],
    url: "https://eosisrecovery.com",
    challenge:
      "EOSIS operates addiction and mental health treatment facilities across Minnesota and needed to manage content for 15+ locations, insurance information, and clinical staff credentials without duplicating work across dozens of near-identical pages.",
    solution:
      "We built a custom WordPress platform using Advanced Custom Fields and custom post types to structure facility data, treatment programs, and staff profiles as reusable content — letting the EOSIS team publish new locations and update program details without touching code.",
  },
  {
    slug: "lazat",
    icon: "shopping-cart",
    case: "02",
    title: "Lazat Artisanal Kitchen",
    sector: "Food & Beverage · Home-Cooked Meal Delivery",
    metric: "3 Order Types",
    metricLabel: "ready-to-eat, ready-to-cook & made-to-order",
    stack: ["WordPress", "WooCommerce", "Elementor"],
    url: "https://lazat.pk",
    challenge:
      "Lazat needed an online ordering system for a home-kitchen food delivery business spanning three different order types across a full Pakistani menu, with delivery limited to a defined radius and combo packages for group orders.",
    solution:
      "We built a WooCommerce storefront on WordPress with Elementor for the marketing pages, structured around the three order types and combo packages, giving the Lazat team a catalogue they can update themselves as the menu changes.",
  },
  {
    slug: "cosegic",
    icon: "file-check",
    case: "03",
    title: "Cosegic",
    sector: "Legal & Regulatory Compliance · Financial Services",
    metric: "1,000+ Firms",
    metricLabel: "financial firms served globally, per Cosegic",
    stack: ["WordPress", "Elementor"],
    url: "https://www.cosegic.com",
    challenge:
      "Cosegic needed a credible, content-heavy site to present a wide range of regulatory compliance services — FCA and SEC authorisations, cryptoasset registration, financial crime prevention — to financial firms worldwide, backed by a resource library and team pages that build trust with a technical, risk-conscious audience.",
    solution:
      "We built a structured WordPress site on Elementor organised around service categories and target sectors, with a resource library, team pages, and consultation forms designed to move visitors from research to a booked call.",
  },
  {
    slug: "jude-academy",
    icon: "graduation-cap",
    case: "04",
    title: "Jude Academy",
    sector: "Education · Online Course Sales",
    metric: "156+ Nationalities",
    metricLabel: "students served, per Jude Academy",
    stack: ["WordPress", "WooCommerce", "TutorLMS"],
    url: "https://judeacademy.com",
    challenge:
      "Jude Academy needed to sell structured, accredited Arabic-language courses online with proper course delivery, progress tracking, and certification — not just a page describing classes.",
    solution:
      "We built the platform on WordPress with TutorLMS for course delivery and progress tracking and WooCommerce for checkout, giving Jude Academy a full path from course discovery to purchase to completion certificate.",
  },
];

export const articleCategories = ["Web Development", "CMS & WordPress", "CRM & Automation", "SEO"];

export const articles = [
  {
    slug: "why-your-website-is-slow",
    title: "Why Your Website Is Slow (And What It's Costing You)",
    description:
      "Slow pages don't just annoy visitors — they quietly cost you rankings, conversions, and ad spend. Here's what's usually to blame and how to fix it.",
    category: "Web Development",
    date: "2026-08-18",
    dateLabel: "August 18, 2026",
    dateShort: "Aug 18, 2026",
    readTime: "6 min read",
    body: `<p>Most site owners find out their website is slow from a customer complaint, not from checking Google's own numbers first. By then the damage — lost enquiries, wasted ad spend, a lower ranking — has already happened quietly in the background.</p>

<h2>What "slow" actually costs you</h2>
<p>Google uses Core Web Vitals — loading speed, interactivity, and visual stability — as a direct ranking factor. A slower competitor with worse content can still outrank you if their site loads faster. On top of that, every extra second of load time measurably increases bounce rate, which means you're paying for clicks that never convert.</p>

<h2>The usual suspects</h2>
<ul>
<li><strong>Unoptimised images.</strong> A single uncompressed hero image can be heavier than the rest of the page combined.</li>
<li><strong>Bloated plugins and page builders.</strong> Every added plugin ships its own CSS and JavaScript, whether the page needs it or not.</li>
<li><strong>No caching or CDN.</strong> Your server rebuilds the same page from scratch for every visitor instead of serving a cached copy.</li>
<li><strong>Render-blocking scripts.</strong> Tracking pixels and chat widgets loaded before the page content, delaying everything behind them.</li>
</ul>

<h2>What actually moves the needle</h2>
<p>Image compression and modern formats (WebP/AVIF), a proper caching layer, trimming unused plugins, and loading non-critical scripts after the page renders. On a custom-built site these are handled at the architecture level rather than patched on with more plugins — which is also why custom builds tend to outperform template-based ones on the same content.</p>

<h2>How to check where you stand</h2>
<p>Run your homepage through Google's PageSpeed Insights. Anything under 50 on mobile is actively hurting your rankings and conversions. A score in the 90s isn't vanity — it's the difference between a visitor waiting and a visitor leaving.</p>

<p>If your site is slow, it's rarely one thing — it's usually five small things stacked on top of each other. Fixing them is a technical SEO audit, not a redesign.</p>`,
  },
  {
    slug: "wordpress-vs-headless",
    title: "WordPress vs Headless: Which One Does Your Business Actually Need?",
    description:
      "Headless CMS setups get a lot of hype. For most businesses, traditional WordPress is still the right call — here's how to tell which one you actually are.",
    category: "CMS & WordPress",
    date: "2026-07-30",
    dateLabel: "July 30, 2026",
    dateShort: "Jul 30, 2026",
    readTime: "6 min read",
    body: `<p>"Headless" gets pitched as the modern, faster way to run a website. Sometimes it is. But for a lot of businesses, a well-built traditional WordPress site does the job better, cheaper, and with less ongoing overhead.</p>

<h2>What "headless" actually means</h2>
<p>A headless setup splits the content management system from the front end that visitors see. WordPress (or another CMS) still manages your content in the backend, but a separate framework — usually React or Next.js — renders the actual pages. That separation buys speed and flexibility, at the cost of complexity.</p>

<h2>When traditional WordPress is the right call</h2>
<ul>
<li>You or your team need to edit pages, add products, or publish posts without touching code.</li>
<li>You rely on WordPress plugins for things like WooCommerce, membership systems, or booking forms.</li>
<li>Your budget and timeline favour a proven, well-documented platform over a custom build.</li>
</ul>

<h2>When headless is worth the extra complexity</h2>
<ul>
<li>Performance is business-critical — high-traffic sites where every 100ms of load time is measured against revenue.</li>
<li>You're publishing the same content across multiple channels: web, app, kiosk, or a separate marketing site.</li>
<li>You have (or are hiring) the technical resource to maintain two connected systems instead of one.</li>
</ul>

<h2>The honest answer</h2>
<p>Most small and mid-sized businesses don't have a performance problem that headless solves — they have a content and conversion problem that a well-optimised, properly caching WordPress build solves just as well, for a fraction of the ongoing maintenance cost. Headless earns its complexity at scale, not by default.</p>

<p>If you're not sure which camp you're in, the questions above usually settle it in five minutes.</p>`,
  },
  {
    slug: "the-follow-up-problem",
    title: "The Follow-Up Problem: Why Most Businesses Lose Leads They Already Paid For",
    description:
      "You paid for the click, the visitor filled in the form — and then nothing happened for six hours. Here's where that lead actually goes, and how to stop losing it.",
    category: "CRM & Automation",
    date: "2026-07-11",
    dateLabel: "July 11, 2026",
    dateShort: "Jul 11, 2026",
    readTime: "5 min read",
    body: `<p>The most expensive lead you'll ever lose isn't the one who never filled in your form. It's the one who did — and then waited six hours for a reply while your competitor answered in six minutes.</p>

<h2>Where leads actually die</h2>
<p>Response speed is the single biggest predictor of whether an inbound lead converts. Studies on lead response consistently show conversion odds drop sharply after the first five minutes, and keep falling every hour after that. Most businesses aren't losing leads to bad marketing — they're losing them to a slow or missing follow-up.</p>

<h2>Why manual follow-up fails</h2>
<ul>
<li>Forms land in an inbox nobody checks outside business hours.</li>
<li>The person meant to follow up is on a call, in a meeting, or simply busy with something else.</li>
<li>There's no system tracking who was contacted, when, or what happens if they don't reply.</li>
</ul>
<p>None of this is a discipline problem — it's a systems problem. Manual follow-up works until volume, or a busy week, breaks it.</p>

<h2>What automated follow-up actually looks like</h2>
<p>An instant auto-response the moment a form is submitted. A text message within minutes, not hours. A structured email sequence that keeps nurturing a lead who isn't ready yet, instead of letting them go cold. A pipeline that shows exactly where every lead sits, so nothing silently falls through.</p>
<p>None of this replaces a real conversation — it makes sure a real conversation actually happens, while the lead is still warm.</p>

<h2>The fix is usually smaller than it sounds</h2>
<p>You don't need a full CRM overhaul to fix this. A properly configured automation — instant response, a short follow-up sequence, and a visible pipeline — closes most of the gap on its own. The businesses that respond fastest aren't working harder; they've just removed the point where a lead could sit and go cold.</p>`,
  },
];

export const faqs = [
  {
    category: "Services",
    question: "What services does Webixlinks offer?",
    answer:
      "We cover four areas: web development (custom sites, web applications, frontend and backend), CMS development (WordPress, WooCommerce, headless setups), CRM and automation (GoHighLevel, HubSpot, Zapier, email and SMS sequences), and SEO (technical audits, content, link building). Most clients start with one and add others as they grow.",
  },
  {
    category: "Process",
    question: "How do we get started?",
    answer:
      "Send us a brief through the contact form or email us directly. We'll arrange a call to understand your goals, then come back with a written proposal covering scope, timeline, and a fixed price. Nothing starts until you've approved it.",
  },
  {
    category: "Timelines",
    question: "How long does a project take?",
    answer:
      "A standard business website is typically two to four weeks. A WooCommerce store or a more complex build runs four to eight. A full CRM setup is usually one to two weeks. SEO is ongoing — meaningful ranking movement generally takes three to six months. You get a specific timeline in your proposal, not a range.",
  },
  {
    category: "Pricing",
    question: "How does pricing work?",
    answer:
      "Projects are quoted at a fixed price based on scope. Ongoing work — maintenance, SEO, CRM management — runs on a monthly retainer. You'll always know the cost before work starts, and we don't bill for scope we didn't agree.",
  },
  {
    category: "Working Together",
    question: "Do you work with clients internationally?",
    answer:
      "Yes. We work remotely with clients across the US, UK, Europe, Australia, and the Middle East. Projects are managed online with regular check-ins, and we schedule calls around your time zone.",
  },
  {
    category: "Support",
    question: "What happens after launch?",
    answer:
      "We don't disappear. Every project includes a post-launch support period, and most clients continue with us on maintenance, SEO, or CRM management. Your site keeps getting updates, monitoring, and improvements.",
  },
];

export const pillars = [
  {
    icon: "zap",
    title: "Performance First",
    description:
      "Every site is built for speed — optimised assets, clean code, caching, and Core Web Vitals tuning. A fast site ranks better, converts better, and costs you less in ad spend.",
  },
  {
    icon: "lock",
    title: "Secure & Maintained",
    description:
      "SSL, backups, updates, and security hardening come as standard. We keep sites protected and current rather than leaving you to discover a problem the hard way.",
  },
  {
    icon: "eye",
    title: "Straight Answers",
    description:
      "Clear scope, clear pricing, clear timelines — and honest advice when the cheapest option isn't the right one. You'll always know where your project stands.",
  },
];

export const projectTypes = [
  {
    value: "web-development",
    label: "Web Development",
    description: "New website, redesign, or web application",
  },
  {
    value: "cms-development",
    label: "CMS Development",
    description: "WordPress, WooCommerce, or a platform migration",
  },
  {
    value: "crm-automation",
    label: "CRM & Automation",
    description: "GoHighLevel, funnels, email and SMS automation",
  },
  {
    value: "seo-content",
    label: "SEO & Content",
    description: "Technical SEO, content strategy, link building",
  },
];

export const contactDetails = {
  email: "hello@webixlinks.com",
  phone: "0027263808",
  responseTime: "Typically within a few hours, Monday to Saturday",
};
