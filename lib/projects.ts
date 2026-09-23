export type ProjectGroup = "design-systems" | "products" | "teams";

export type CoverKind = "themes" | "screener" | "erp" | "crm" | "commerce";

export type Shot = { desktop: string; mobile: string; caption: string; /** Address shown in the browser frame. */ host?: string };

export type Project = {
  slug: string;
  name: string;
  group: ProjectGroup;
  /** One line, shown on cards and in meta descriptions. */
  summary: string;
  role: string;
  org: string;
  period: string;
  status?: "Live" | "Internal" | "In progress" | "Offline";
  stack: string[];
  links?: { label: string; href: string }[];
  shots?: Shot[];
  cover?: CoverKind;
  /** Short paragraphs of context. */
  context: string[];
  /** What I actually did. */
  work: string[];
  /** Results that are true and checkable. */
  outcomes?: string[];
  note?: string;
};

export const groups: Record<ProjectGroup, { title: string; blurb: string }> = {
  "design-systems": {
    title: "Design systems",
    blurb:
      "Component libraries that whole governments and banks build on. Framework-agnostic, bilingual, themed from tokens.",
  },
  products: {
    title: "Products I own",
    blurb:
      "Where I'm the technical partner or founder: architecture, code, infrastructure and the product calls.",
  },
  teams: {
    title: "Team & client products",
    blurb: "Shipped inside product teams, from a single module to leading the whole dev team.",
  },
};

export const projects: Project[] = [
  {
    slug: "saudi-national-design-system",
    name: "Saudi National Design System",
    group: "design-systems",
    summary:
      "The component library and documentation behind Saudi government digital platforms, built with the DGA core team.",
    role: "Core frontend engineer",
    org: "AZM X for the Digital Government Authority (DGA)",
    period: "2023 – 2024, 2026",
    status: "Live",
    stack: ["Stencil.js", "Web Components", "React", "TypeScript", "Storybook", "Tailwind", "i18n / RTL"],
    links: [
      { label: "Docs site", href: "https://design.dga.gov.sa" },
    ],
    shots: [
      {
        desktop: "/work/dga/desktop.webp",
        mobile: "/work/dga/mobile.webp",
        caption: "Button docs in Storybook: every variant, size and state as a live control.",
        host: "Storybook · DGA NDS",
      },
    ],
    context: [
      "Saudi government platforms were each building their own UI. The National Design System gives every ministry and agency one shared, accessible, bilingual component library.",
      "Consumer teams use React, Angular and plain HTML, so the components had to work everywhere without being rewritten for each framework.",
    ],
    work: [
      "Proposed and introduced Stencil.js so every component ships once as a web component, with React output targets generated from the same source.",
      "Led the technical implementation of the component library and delivered it three weeks ahead of schedule.",
      "Set up Storybook (70+ stories at launch) as the visual contract between design, QA and engineering.",
      "Built the documentation site: usage, code and style-spec pages for 98 components, in Arabic and English with full RTL.",
      "Came back in 2026 to ship updates across the now 147-component library, its Storybook and the React docs site.",
    ],
    outcomes: [
      "Developer onboarding went from two weeks to three days.",
      "One source of truth for components across government platforms, in both reading directions.",
    ],
  },
  {
    slug: "al-rajhi-group-design-system",
    name: "Al Rajhi Group Design System",
    group: "design-systems",
    summary:
      "160+ Stencil.js web components and a token pipeline that themes six financial brands from one codebase.",
    role: "Core frontend engineer",
    org: "AZM X for Al Rajhi Group",
    period: "2025 – 2026",
    status: "Internal",
    stack: ["Stencil.js", "Style Dictionary", "Design tokens", "React", "Angular", "Storybook", "TypeScript"],
    cover: "themes",
    context: [
      "Al Rajhi Group runs six brands: Al Rajhi Bank, Al Rajhi Capital, Emkan, Neoleap, Takaful and urpay. Each needed its own look without each team maintaining its own component library.",
    ],
    work: [
      "Built and maintained components in a 160+ component Stencil.js library with React and Angular output targets.",
      "Worked on the Style Dictionary token pipeline that compiles one set of design decisions into six brand themes.",
      "Kept components accessible and bilingual (Arabic/English, RTL) across every brand theme.",
    ],
    outcomes: ["Six brands ship from one component codebase: a new theme is a token change, not a fork."],
    note: "Internal banking system. The cover is an illustration of the theming model, not a screenshot.",
  },
  {
    slug: "dar-ahlullah-quran-academy",
    name: "Dar Ahlullah Quran Academy",
    group: "products",
    summary:
      "An online Quran academy for English-speaking students. I'm the technical partner and built the whole platform.",
    role: "Technical partner & lead engineer",
    org: "Dar Ahlullah",
    period: "Ongoing",
    status: "Live",
    stack: ["React", "Vite", "Astro", "NestJS", "Prisma", "PostgreSQL", "Socket.io", "Docker", "GitHub Actions", "NGINX"],
    links: [
      { label: "Website", href: "https://dar-ahlullah.com" },
      { label: "Student app", href: "https://app.dar-ahlullah.com" },
    ],
    shots: [
      {
        desktop: "/work/dar-ahlullah/desktop.webp",
        mobile: "/work/dar-ahlullah/mobile.webp",
        caption: "The Astro landing site: fast, content-first, built to rank.",
      },
      {
        desktop: "/work/dar-ahlullah/desktop-2.webp",
        mobile: "/work/dar-ahlullah/mobile-2.webp",
        caption: "Pricing: three plans, priced per teaching hour.",
      },
    ],
    context: [
      "One-to-one Zoom Quran lessons with native Arabic-speaking teachers, for students who start from the Arabic alphabet.",
      "I'm a partner in the academy, not a contractor. I own every technical decision and sit in the product decisions with the founders.",
    ],
    work: [
      "Built the full LMS: Zoom-integrated live sessions, teacher availability and shift scheduling, homework, progress and evaluation tracking, and session reports.",
      "Structured it as a TurboRepo + pnpm monorepo: Astro landing, React/Vite app and NestJS API sharing types.",
      "Set up CI/CD with GitHub Actions, Docker and NGINX across dev, staging and production.",
      "Own SEO and analytics: GA4 and Search Console, a content hub of about 60 articles, and title and meta rewrites based on click data.",
      "Now leading the V2 rebuild, based on what we learned from real students and teachers.",
    ],
  },
  {
    slug: "taskeen",
    name: "Taskeen",
    group: "products",
    summary:
      "Bed-by-bed rental and residence management for shared student and staff housing in Nasr City, Cairo.",
    role: "Solo engineer",
    org: "Bunyan Makkah",
    period: "2026",
    status: "Live",
    stack: ["Next.js 16", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "TanStack Query", "Leaflet", "Docker", "Caddy"],
    links: [{ label: "Website", href: "https://taskeen.bunyan-makkah.com" }],
    shots: [
      {
        desktop: "/work/taskeen/desktop.webp",
        mobile: "/work/taskeen/mobile.webp",
        caption: "The Arabic RTL marketing site that Facebook campaigns land on.",
      },
    ],
    context: [
      "Bunyan Makkah rents beds in furnished shared apartments to women studying or working away from home. Leads come from Facebook ads, and operations used to run on WhatsApp and paper.",
    ],
    work: [
      "One Next.js app with three surfaces on shared auth: a statically generated marketing site, a resident portal and an admin dashboard.",
      "Role-based access for owner, admin, staff and resident roles.",
      "Prisma schema for apartments, rooms, beds, residents and payments, with realistic seed data for demos.",
      "Map-based apartment browsing with Leaflet, fully in Arabic RTL.",
      "Self-hosted with Docker Compose behind Caddy with automatic HTTPS.",
    ],
  },
  {
    slug: "bonyan-erp",
    name: "Bonyan ERP",
    group: "products",
    summary:
      "A multi-tenant ERP for real estate developers: projects, contracts, installments, treasury and reminders.",
    role: "Architect & lead engineer",
    org: "Bunyan Makkah",
    period: "2025 – 2026",
    status: "In progress",
    stack: ["NestJS", "DDD", "Prisma", "PostgreSQL", "React", "Vite", "shadcn/ui", "TanStack Query", "i18next", "Turborepo"],
    cover: "erp",
    context: [
      "Egyptian real estate developers track projects, buyers and installment plans across spreadsheets. Bonyan puts the whole lifecycle in one system, from feasibility to handover.",
    ],
    work: [
      "Designed a NestJS modular monolith with DDD boundaries and schema-per-tenant isolation.",
      "Modules for projects, customers, contracts with flexible installment plans, suppliers, treasury and expenses.",
      "Smart reminders for upcoming payments and deadlines, plus PDF generation for contracts.",
      "A bilingual Arabic/English React frontend on a shared shadcn/ui design package.",
    ],
    outcomes: ["Running with a pilot client."],
    note: "Private product. The cover is an illustration, not a screenshot.",
  },
  {
    slug: "bunyan-crm",
    name: "Bunyan CRM",
    group: "products",
    summary:
      "An AI-assisted real estate CRM that reads WhatsApp and Facebook leads, qualifies them and matches them to properties.",
    role: "Co-builder (with Islam Awad)",
    org: "Bunyan Makkah",
    period: "2026",
    status: "In progress",
    stack: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "Prisma", "React", "WhatsApp Cloud API", "Meta Graph API", "LLMs"],
    cover: "crm",
    context: [
      "Real estate leads arrive as WhatsApp messages and Facebook comments at all hours, and most go cold before an agent replies.",
    ],
    work: [
      "A multi-tenant CRM where every table is scoped to a company, with JWT auth and owner, admin and agent roles.",
      "A separate BullMQ worker that listens to WhatsApp Business and Facebook, extracts lead details and replies in the customer's language.",
      "A pluggable LLM provider layer, so the model can be swapped without touching the workflow.",
      "Property matching that notifies an agent when a new listing fits a stored lead.",
    ],
    note: "Co-built. The cover is an illustration of the lead flow, not real customer data.",
  },
  {
    slug: "bunyan-makkah",
    name: "Bunyan Makkah",
    group: "products",
    summary: "The Arabic website for a real estate developer and marketer working in Cairo and Assiut.",
    role: "Design & build",
    org: "Bunyan Makkah",
    period: "2026",
    status: "Live",
    stack: ["HTML", "CSS", "JavaScript", "RTL", "SEO"],
    links: [{ label: "Website", href: "https://bunyan-makkah.com" }],
    shots: [
      {
        desktop: "/work/bunyan-makkah/desktop.webp",
        mobile: "/work/bunyan-makkah/mobile.webp",
        caption: "Two audiences on one page: property marketing in Nasr City and development in Assiut.",
      },
    ],
    context: ["The public face of the company whose internal systems (Taskeen, Bonyan ERP, Bunyan CRM) I also build."],
    work: [
      "Designed and built a fast, RTL-first landing site that splits visitors into two clear paths.",
      "WhatsApp as the primary call to action, since that's where the company actually closes deals.",
    ],
  },
  {
    slug: "jozour",
    name: "Jozour",
    group: "products",
    summary: "My own perfume brand in Egypt: product, brand, content and an online store with cash on delivery.",
    role: "Founder",
    org: "Jozour",
    period: "2026",
    status: "Live",
    stack: ["Multi-tenant commerce", "Arabic RTL", "Cash on delivery", "Meta ads", "AI-assisted content"],
    links: [{ label: "Store", href: "https://jozour.store" }],
    shots: [
      {
        desktop: "/work/jozour/desktop.webp",
        mobile: "/work/jozour/mobile.webp",
        caption: "The storefront: one Arabic word per scent, sold in four sizes.",
      },
    ],
    context: [
      "A side venture I run with a partner who handles formulation. I own the brand, the product line-up, pricing and go-to-market.",
    ],
    work: [
      "Named and positioned the line: each scent is one Arabic word for a moment, not a copy of a designer perfume.",
      "Launched the store in September 2026 with around 30 scents, cash on delivery and shipping to every Egyptian governorate.",
      "The store runs as a tenant on a partner's multi-tenant commerce platform. I contributed to the storefront and set up the catalogue, content and reviews.",
      "Produce the campaign visuals and copy myself with an AI-assisted pipeline.",
    ],
  },
  {
    slug: "hugaira",
    name: "Hugaira",
    group: "products",
    summary:
      "A full e-commerce platform built solo: storefront, admin, API and mobile app in one monorepo.",
    role: "Solo engineer",
    org: "Personal product",
    period: "2025",
    status: "Offline",
    stack: ["Next.js 14", "React", "NestJS", "Prisma", "PostgreSQL", "Expo", "React Native", "Paymob", "Playwright", "Turborepo"],
    cover: "commerce",
    context: [
      "A complete, independently deployable store with its own admin and mobile app, later turned into a template for generating new stores.",
    ],
    work: [
      "Turborepo monorepo with shared types and UI packages across four apps.",
      "Next.js storefront with advanced filtering, secure checkout through Paymob and order tracking.",
      "React admin with tables and charts, a NestJS + Prisma API with Swagger, and an Expo mobile app.",
      "Playwright end-to-end tests over the checkout flow.",
      "Built EStore Factory, an Electron app that generates a branded store from this template and exports it as a Docker image.",
    ],
    note: "The production deployment is offline right now. The cover is an illustration.",
  },
  {
    slug: "probuy",
    name: "ProBuy",
    group: "teams",
    summary:
      "A Riyadh fintech offering flexible financing to SMEs. I was promoted to lead the full development team.",
    role: "Team lead · Senior frontend engineer",
    org: "ProBuy",
    period: "Oct 2024 – Nov 2025",
    status: "Live",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Docker", "Kubernetes", "Azure", "Alibaba Cloud", "CI/CD"],
    links: [{ label: "Website", href: "https://probuy.me" }],
    shots: [
      {
        desktop: "/work/probuy/desktop.webp",
        mobile: "/work/probuy/mobile.webp",
        caption: "The Next.js marketing site I built, with SSR and SEO.",
      },
    ],
    context: [
      "ProBuy sells split payments and invoice financing to businesses. I joined as a senior frontend engineer and after six months was leading frontend, backend, QA and DevOps.",
    ],
    work: [
      "Owned technical direction and delivery for a team of six across four disciplines.",
      "Architected the admin portal: configuration, analytics and role-based access control.",
      "Built a reusable checkout-workflow npm package for merchant integrations.",
      "Built the Next.js marketing site with SSR and SEO.",
      "Ran environments on Azure and Alibaba Cloud (Kubernetes) with Docker and CI/CD.",
      "Wrote the integration documentation portal with live examples and API references.",
    ],
    outcomes: [
      "The checkout package cut integration time across projects by about 60%.",
      "The docs portal cut partner support requests by over 40%.",
    ],
  },
  {
    slug: "colab-screening",
    name: "Colab Screening",
    group: "teams",
    summary:
      "The screening and scheduling module of a multi-tenant user-research platform, from screener builder to session calendar.",
    role: "Frontend engineer (module owner)",
    org: "AZM X",
    period: "2026",
    status: "Internal",
    stack: ["Next.js 16", "React", "TypeScript", "Storybook 9", "Visual regression", "a11y testing"],
    cover: "screener",
    context: [
      "Colab helps teams recruit participants for user research. Screening decides who gets in, so it has to be flexible for researchers and simple for participants.",
    ],
    work: [
      "A screener form builder with qualify and disqualify logic per answer.",
      "A participant flow through unique links, then shortlisting with scheduling status.",
      "The session calendar for booking research sessions.",
      "Pixel-matched to Figma, with Storybook 9 accessibility and visual-regression tests on every component.",
    ],
    note: "Client product under NDA. The cover is an illustration.",
  },
  {
    slug: "myex",
    name: "MyEx",
    group: "teams",
    summary:
      "An Arabic-first video review platform where people film real product experiences and get paid for them.",
    role: "Core frontend contributor",
    org: "MyEx",
    period: "Ongoing",
    status: "Live",
    stack: ["Next.js 15", "React 19", "TypeScript", "i18n (21 locales)", "Storybook", ".NET", "GTM", "Search Console"],
    links: [{ label: "Website", href: "https://my-ex.app" }],
    shots: [
      {
        desktop: "/work/myex/desktop.webp",
        mobile: "/work/myex/mobile.webp",
        caption: "English explore page, with the app-style bottom navigation on mobile.",
      },
      {
        desktop: "/work/myex/desktop-2.webp",
        mobile: "/work/myex/mobile-2.webp",
        caption: "The same page in Arabic: the layout mirrors, nothing breaks.",
      },
    ],
    context: ["Users upload short video reviews of products they own, across 28+ categories, and earn cash."],
    work: [
      "Core contributor on the Next.js 15 / React 19 web app with 21-locale i18n and Storybook.",
      "Built the Academy module end to end, including the .NET backend part.",
      "Own the site's SEO and conversion tracking: Search Console analysis and Google Ads conversions through GTM.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
