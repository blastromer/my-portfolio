import { Icon, type IconName } from "@/components/icons";
import { CV_DOWNLOAD_NAME, CV_HREF, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const checks = [
  "System Design & Architecture",
  "Full-Stack Engineering",
  "Marketplace Integrations",
  "Cloud & Infrastructure",
  "Data / Auth with Supabase",
  "Business-focused Delivery",
  "Clear stakeholder communication",
];

const groups = [
  {
    title: "Next.js Stack",
    items: [
      ["Nx", "bg-[#111827]", "Next.js"],
      ["TS", "bg-[#3178c6]", "TypeScript"],
      ["Re", "bg-[#149eca]", "React"],
      ["TW", "bg-[#38bdf8]", "Tailwind"],
    ],
  },
  {
    title: "Data / Backend",
    items: [
      ["PG", "bg-[#336791]", "PostgreSQL"],
      ["Sb", "bg-[#3ecf8e]", "Supabase"],
      ["SQL", "bg-[#00758f]", "MySQL"],
      ["Mg", "bg-[#10aa50]", "MongoDB"],
      ["Rd", "bg-[#d82c20]", "Redis"],
    ],
  },
  {
    title: "Languages",
    items: [
      ["JS", "bg-[#f7df1e] text-[#222]", "JavaScript"],
      ["TS", "bg-[#3178c6]", "TypeScript"],
      ["PHP", "bg-[#777bb4]", "PHP"],
      ["Go", "bg-[#00add8]", "Go"],
      ["Py", "bg-[#3776ab]", "Python"],
      ["Nd", "bg-[#3c873a]", "Node.js"],
    ],
  },
  {
    title: "Backend Frameworks",
    items: [
      ["La", "bg-[#ff2d20]", "Laravel"],
      ["Sy", "bg-[#1a171b]", "Symfony"],
      ["Ne", "bg-[#e0234e]", "NestJS"],
      ["Gi", "bg-[#00add8]", "Gin"],
      ["AP", "bg-[#6d5efc]", "REST / GraphQL"],
    ],
  },
  {
    title: "Integrations",
    items: [
      ["Am", "bg-[#ff9900] text-[#1b1b1b]", "Amazon SP-API"],
      ["eB", "bg-[#e53238]", "eBay"],
      ["Sh", "bg-[#95bf47]", "Shopify"],
      ["Hz", "bg-[#4bbf73]", "Houzz"],
      ["St", "bg-[#635bff]", "Stripe"],
    ],
  },
  {
    title: "DevOps / Cloud",
    items: [
      ["AWS", "bg-[#ff9900] text-[#1b1b1b]", "AWS EC2/RDS"],
      ["Dk", "bg-[#2496ed]", "Docker"],
      ["Ng", "bg-[#009639]", "Nginx"],
      ["Li", "bg-[#111]", "Linux"],
      ["Ve", "bg-[#111827]", "Vercel"],
    ],
  },
];

const roles = [
  {
    title: "Full-Cycle Software Engineer",
    company: "Pacific Prep WMS",
    when: "2025 – Present",
    current: true,
    meta: "https://pacificprepwms.com · 3PL / Amazon FBA",
    points: [
      "Develop and maintain a custom 3PL/WMS for Amazon FBA and e-commerce fulfillment: receiving, bins/locations, LPN, pick/pack/ship, returns, billing, and client operations.",
      "Build Amazon SP-API workflows for FBA inbound shipments, inventory sync, Seller Central, orders/shipments, auth, and rate-limit handling.",
      "Integrate Shopify, ShipStation, and ScanPower; support scanning, packing, Amazon labels, tracking, and shipment confirmation.",
      "Run Laravel/PHP APIs, queues, and scheduled jobs on AWS (EC2, RDS) with Docker, Nginx, Linux/Ubuntu, Supervisor, CI/CD, and production troubleshooting.",
    ],
  },
  {
    title: "Senior & Full Stack Developer",
    company: "G. O. Green Enterprises, Inc. · PlumbersStock",
    when: "Apr 2023 – Present",
    current: true,
    meta: "www.plumbersstock.com · Remote · Bacolod, PH",
    points: [
      "Lead full-stack delivery for a U.S. plumbing-supply e-commerce platform with a Next.js frontend and Golang / Symfony microservice APIs.",
      "Design and maintain microservice backends in Golang and Symfony for catalog, orders, inventory, and marketplace data exchange across Amazon SP-API, eBay, and Houzz.",
      "Ship Next.js storefront and admin experiences; integrate Redis caching, queues, and MySQL/MongoDB workflows with production monitoring for high-volume traffic.",
    ],
  },
  {
    title: "Junior Web Developer → Senior Full Stack Web Developer",
    company: "Codedaddy.ph",
    when: "Apr 2012 – Mar 2023",
    current: false,
    meta: "Philippines · Remote",
    points: [
      "Progressed from frontend (HTML5, CSS3, Bootstrap, JavaScript, jQuery, AJAX) to senior Laravel backend and full-stack delivery.",
      "Built REST APIs, secure admin dashboards, role-based auth, and Amazon/eBay/Houzz/Shopify integrations for production systems.",
    ],
  },
] as const;

const production: { icon: IconName; title: string; text: string }[] = [
  { icon: "rocket", title: "Performance", text: "Caching, queues, and database workflows for high-volume traffic." },
  { icon: "check", title: "Reliability", text: "Workers, scheduled jobs, retries, and production monitoring." },
  { icon: "cloud", title: "Infrastructure", text: "AWS EC2/RDS, Docker, Nginx, Linux, Supervisor, CI/CD." },
  { icon: "code", title: "Troubleshooting", text: "Root-cause analysis across application and infrastructure layers." },
  { icon: "plug", title: "Integrations", text: "SP-API rate limits, marketplace sync, webhooks, and OAuth flows." },
];

const panel = "rounded-2xl border border-line bg-card p-5 shadow-[0_18px_40px_rgb(3_6_22/0.12)]";

export function AboutSection() {
  return (
    <>
      <section id="experience" className="mx-auto w-full max-w-[1180px] scroll-mt-24 px-5 pt-12">
        <div className={`${panel} flex flex-col gap-5`}>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold text-[#b7a6ff]">12+ Years in Software Development</p>
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <p className="text-sm text-muted">Aligned with the current resume — Pacific Prep WMS, PlumbersStock / Green Enterprises, and Codedaddy.</p>
          </div>
          <ol className="relative flex flex-col gap-6 border-l border-line pl-5">
            {roles.map((role) => (
              <li key={`${role.company}-${role.when}`} className="relative flex flex-col gap-2">
                <span className={`absolute top-1 -left-[1.55rem] size-2.5 rounded-full ${role.current ? "bg-[#8b74ff] ring-4 ring-[#8b74ff]/25" : "bg-[#8d9ad0]"}`} />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <strong className="text-sm sm:text-base">{role.title}</strong>
                  <span className="text-xs font-bold text-[#7c5cff] dark:text-[#c4b6ff]">{role.when}</span>
                </div>
                <p className="text-sm font-semibold text-muted">{role.company}</p>
                <p className="text-xs text-muted">{role.meta}</p>
                <ul className="flex flex-col gap-1.5">
                  {role.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 pt-8">
        <div className={`${panel} flex flex-col gap-4`}>
          <div className="flex max-w-3xl flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Production Engineering</h2>
            <p className="text-sm leading-relaxed text-muted">
              Building software is only part of the job. I also work with systems after deployment — diagnosing failures, monitoring resources, optimizing workloads, managing containers, tuning workers, and resolving production issues.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {production.map((item) => (
              <article key={item.title} className="flex flex-col gap-2 rounded-xl border border-line bg-soft p-3">
                <Icon name={item.icon} className="size-4 text-[#b7a6ff]" />
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 pt-8 lg:grid-cols-[0.95fr_1.25fr]">
        <article id="about" className={`${panel} scroll-mt-24`}>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted">
              <p>
                I&apos;m a Senior Full Stack Developer from the Philippines with 12+ years building production web applications, APIs, and business systems for U.S. and international clients.
              </p>
              <p>
                Strong focus on Next.js with PostgreSQL and Supabase for data, auth, storage, and tenant-aware access — complemented by Laravel/PHP, React, Vue.js, Node.js, and Go.
              </p>
              <p>
                I also work across marketplace integrations (Amazon SP-API, eBay, Shopify), role-based dashboards, cloud deployments, and clear communication with non-technical stakeholders.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <Icon name="check" className="size-4 text-good" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article id="skills" className={`${panel} scroll-mt-24`}>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <h3 className="text-xs font-bold tracking-wide text-muted uppercase">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map(([mark, tone, name]) => (
                    <li key={`${group.title}-${name}`} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-soft py-1 pr-2.5 pl-1 text-xs font-semibold">
                      <span className={`grid h-5 min-w-5 place-items-center rounded px-0.5 text-[8px] font-extrabold text-white ${tone}`}>{mark}</span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-[#5a46f0] via-[#6a56ff] to-[#3d6dff] px-4 py-5 text-white shadow-[0_16px_36px_rgb(70_70_220/0.28)]">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white/15">
              <Icon name="code" className="size-5" />
            </span>
            <div>
              <strong className="block">Have a complex system to build or scale?</strong>
              <p className="text-sm text-white/90">I can help take it from architecture and development to deployment and production.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#2a2158]">
              Let&apos;s Talk
              <Icon name="arrow" />
            </a>
            <a href={CV_HREF} download={CV_DOWNLOAD_NAME} className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2.5 text-sm font-bold text-white">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid w-full max-w-[1180px] scroll-mt-24 gap-4 px-5 pt-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={panel}>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="text-sm text-muted">
              Open to full-time, part-time, and contract remote work. Email is the best way to reach me.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                Email:{" "}
                <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/romer-necesario-642599146
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  github.com/blastromer
                </a>
              </li>
              <li>Location: Bacolod City, Philippines</li>
              <li>Availability: Immediate · Remote</li>
            </ul>
          </div>
        </div>
        <div className={`${panel} flex flex-col justify-between gap-4`}>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Ready to talk?</h3>
            <p className="text-sm text-muted">
              Send a short note about the system, stack, and what you need owned — Next.js delivery, marketplace integrations, WMS, or production support.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-linear-to-b from-[#8d72ff] to-[#6a4dff] px-4 py-2.5 text-sm font-bold text-white">
              Email Me
              <Icon name="arrow" />
            </a>
            <a href={CV_HREF} download={CV_DOWNLOAD_NAME} className="inline-flex items-center rounded-full border border-line bg-soft px-4 py-2.5 text-sm font-bold text-foreground">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-line">
        <p className="mx-auto w-full max-w-[1180px] px-5 py-6 text-sm text-muted">
          Built by Romer Necesario · Senior Full Stack Developer
        </p>
      </footer>
    </>
  );
}
