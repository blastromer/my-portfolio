import { Icon, type IconName } from "@/components/icons";

const services: { icon: IconName; tone: string; title: string; text: string }[] = [
  { icon: "window", tone: "bg-[#6d5efc]", title: "Enterprise Web Apps", text: "Business platforms, portals, and internal tools" },
  { icon: "plug", tone: "bg-[#d946ef]", title: "API & Integrations", text: "Marketplace and third-party API integrations (Amazon, eBay, Shopify, etc.)" },
  { icon: "nodes", tone: "bg-[#3b82f6]", title: "Microservices", text: "Scalable, service-oriented applications with queue processing" },
  { icon: "cart", tone: "bg-[#14b8a6]", title: "E-commerce Platforms", text: "Marketplace, inventory, pricing, and order management" },
  { icon: "cloud", tone: "bg-[#8b5cf6]", title: "Cloud & DevOps", text: "Docker, Kubernetes, AWS, CI/CD, and infrastructure automation" },
];

export function WhatIBuild() {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 pt-10">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[200px_repeat(5,minmax(0,1fr))]">
        <div className="flex flex-col gap-2 md:col-span-2 xl:col-span-1">
          <h2 className="text-2xl font-bold tracking-tight">What I Build</h2>
          <p className="text-sm text-muted">
            Turning complex business requirements into reliable, scalable, and high-performance software solutions.
          </p>
        </div>
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
