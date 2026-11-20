import { Icon, type IconName } from "@/components/icons";

const services: { icon: IconName; tone: string; title: string; text: string }[] = [
  {
    icon: "layers",
    tone: "bg-[#6d5efc]",
    title: "Architecture",
    text: "Design scalable APIs, services, databases, integrations, and distributed systems around real business requirements.",
  },
  {
    icon: "code",
    tone: "bg-[#d946ef]",
    title: "Full-Stack Engineering",
    text: "Build production apps with Next.js, React, Vue.js, Laravel/PHP, Node.js, and Golang.",
  },
  {
    icon: "cloud",
    tone: "bg-[#3b82f6]",
    title: "Cloud & Infrastructure",
    text: "Deploy and operate workloads on AWS EC2/RDS with Docker, Nginx, Linux, Supervisor, and CI/CD.",
  },
  {
    icon: "plug",
    tone: "bg-[#14b8a6]",
    title: "Marketplace Integrations",
    text: "Connect systems with Amazon SP-API, eBay, Shopify, Houzz, ShipStation, ScanPower, and Stripe.",
  },
  {
    icon: "nodes",
    tone: "bg-[#8b5cf6]",
    title: "Data & Async Processing",
    text: "Build queue-driven workflows with Redis, workers, scheduled jobs, PostgreSQL, MySQL, and MongoDB.",
  },
  {
    icon: "rocket",
    tone: "bg-[#f59e0b]",
    title: "Production Engineering",
    text: "Monitor, troubleshoot, optimize, deploy, and support production systems after release.",
  },
];

export function WhatIBuild() {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 pt-10">
      <div className="mb-4 flex max-w-2xl flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">What I Do</h2>
        <p className="text-sm text-muted">
          Capability-focused engineering across Next.js apps, APIs, marketplace integrations, cloud infrastructure, and production operations.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="flex flex-col gap-3 rounded-2xl border border-line bg-card p-4 shadow-[0_18px_40px_rgb(3_6_22/0.12)]">
            <span className={`grid size-8 place-items-center rounded-lg text-white ${service.tone}`}>
              <Icon name={service.icon} />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-sm font-bold">{service.title}</h3>
              <p className="text-xs leading-relaxed text-muted">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
