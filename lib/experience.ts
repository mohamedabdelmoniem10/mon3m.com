export type Role = {
  company: string;
  title: string;
  period: string;
  place?: string;
  points: string[];
  projects?: string[]; // project slugs
};

export const experience: Role[] = [
  {
    company: "AZM X",
    title: "Senior Frontend Engineer",
    period: "Dec 2025 – Sep 2026",
    place: "Riyadh · remote",
    points: [
      "Core engineer on the Al Rajhi Group design system: 160+ Stencil.js components, six brand themes from one token pipeline.",
      "Shipped updates across the 147-component Saudi National Design System and its docs.",
      "Owned the Screening module of Colab, a multi-tenant user-research platform on Next.js 16.",
    ],
    projects: ["al-rajhi-group-design-system", "saudi-national-design-system", "colab-screening"],
  },
  {
    company: "ProBuy",
    title: "Team Lead · Senior Frontend Engineer",
    period: "Oct 2024 – Nov 2025",
    place: "Riyadh",
    points: [
      "Promoted after six months to lead frontend, backend, QA and DevOps for a fintech platform.",
      "Checkout npm package cut integration time by ~60%; docs portal cut partner support requests by 40%+.",
    ],
    projects: ["probuy"],
  },
  {
    company: "AZM X",
    title: "Senior Frontend Engineer",
    period: "Nov 2023 – Sep 2024",
    place: "Riyadh · remote",
    points: [
      "Introduced Stencil.js and led implementation of the Saudi National Design System, three weeks ahead of schedule.",
      "Built the bilingual docs site for 98 components; onboarding went from two weeks to three days.",
    ],
    projects: ["saudi-national-design-system"],
  },
  {
    company: "Dafater",
    title: "Senior Frontend Engineer",
    period: "Aug 2021 – Oct 2023",
    points: [
      "Led frontend for three large enterprise apps in Vue 3, from requirements to deployment.",
      "Payfort payments, Azure AD B2C auth (SSO, MFA, RBAC), and an email system that renders in 15+ clients.",
    ],
  },
  {
    company: "EG Coder",
    title: "Frontend Developer",
    period: "Aug 2019 – Jun 2021",
    points: [
      "Started on the MEAN stack. Shipped WordPress sites, an Angular coworking-space app and a Hyperpay integration in React Native.",
    ],
  },
];

export const alongside = {
  title: "Alongside full-time work",
  period: "2021 – now",
  text: "Technical partner at Dar Ahlullah, contributor at MyEx, and my own products: Taskeen, Bonyan ERP, Bunyan CRM, Hugaira and Jozour. Earlier client work includes GoldenBlood (a React app for a German healthcare client, 95+ PageSpeed), Bluepages, and 20+ React Native screens for apps rated 4.5+ in the stores.",
};

export const capabilities = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue 3", "Angular", "Stencil.js", "React Native / Expo", "TypeScript", "Tailwind", "SCSS"],
  },
  {
    title: "Design systems",
    items: ["Web components", "Design tokens (Style Dictionary)", "Multi-brand theming", "Storybook", "Visual regression", "Accessibility", "RTL & Arabic/English"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "NestJS", "Express", "Prisma", "PostgreSQL", "Redis / BullMQ", "REST", "Socket.io"],
  },
  {
    title: "Delivery",
    items: ["Turborepo + pnpm", "DDD", "Docker", "GitHub Actions", "Kubernetes", "Azure", "NGINX / Caddy", "Playwright"],
  },
];
