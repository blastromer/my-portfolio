import Image from "next/image";
import { Icon } from "@/components/icons";

const card = "overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_40px_rgb(3_6_22/0.12)]";

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-line bg-soft px-2 py-0.5 text-xs font-bold text-[#31406e] dark:text-[#d7def8]">
          {item}
        </span>
      ))}
    </div>
  );
}

function Chrome() {
  return (
    <div className="flex gap-1 px-2.5 pt-2" aria-hidden="true">
      <span className="size-1.5 rounded-full bg-[#ff6b6b]" />
      <span className="size-1.5 rounded-full bg-[#ffd166]" />
      <span className="size-1.5 rounded-full bg-[#51e08a]" />
    </div>
  );
}

const services = ["Users Service", "Catalog Service", "Cart Service", "Orders Service", "Shipping Service"];

export function Projects() {
  return (
    <section id="projects" className="mx-auto flex w-full max-w-[1180px] scroll-mt-24 flex-col gap-4 px-5 pt-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-sm text-muted">Selected projects that highlight my experience in building and scaling real-world systems.</p>
        </div>
        <a href="#all-projects" className="inline-flex items-center gap-1 text-sm font-bold text-[#3550d6] dark:text-[#9eb6ff]">
          View All Projects
          <Icon name="arrow" />
        </a>
      </div>

      <div className="grid items-stretch gap-4 xl:grid-cols-[1.45fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <article className={card}>
            <div className="h-[148px] border-b border-line bg-[#eef3ff]" aria-hidden="true">
              <Chrome />
              <div className="grid grid-cols-3 gap-1.5 px-2.5 pt-2 text-[#1d2748]">
                {[["140K", "Items"], ["98%", "Sync"], ["24", "Queues"]].map(([value, label]) => (
                  <div key={label} className="rounded-lg bg-white px-2 py-1.5">
                    <b className="block text-sm">{value}</b>
                    <small className="text-[#7080a8]">{label}</small>
                  </div>
                ))}
              </div>
              <div className="mx-2.5 mt-2 flex h-12 items-end gap-1.5 rounded-lg bg-white px-2 py-2">
                {["42%", "68%", "50%", "84%", "60%", "74%", "48%", "90%"].map((height) => (
                  <i key={height} className="block flex-1 rounded-t bg-linear-to-b from-[#7c8cff] to-[#5b6cf0]" style={{ height }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold">Amazon Marketplace Platform</h3>
              <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">Laravel · Golang · SB-API · Queues</p>
              <p className="text-sm text-muted">Large-scale marketplace integration handling listings, pricing, inventory, and orders.</p>
              <Tags items={["140K+ Items", "Automation"]} />
            </div>
          </article>

          <article className={card}>
            <div className="h-[148px] border-b border-line bg-[#eef3ff]" aria-hidden="true">
              <Chrome />
              <div className="grid h-[118px] grid-cols-[42px_1fr] gap-2 px-2.5 pt-2">
                <div className="rounded-lg bg-[#dfe6fb]" />
                <div className="flex flex-col gap-1.5">
                  <div className="h-4 rounded-md bg-white" />
                  <div className="h-4 rounded-md bg-white" />
                  <div className="h-4 w-1/2 rounded-md bg-white" />
                  <div className="flex gap-1.5">
                    <i className="h-3.5 w-9 rounded-full bg-[#d9e2ff]" />
                    <i className="h-3.5 w-9 rounded-full bg-[#d9e2ff]" />
                    <i className="h-3.5 w-9 rounded-full bg-[#d9e2ff]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold">
                <a href="https://pacificprepwms.com" target="_blank" rel="noopener noreferrer" className="text-foreground">Pacific Prep WMS</a>
              </h3>
              <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">Yii · React · Multi-tenant</p>
              <p className="text-sm text-muted">Multi-tenant warehouse management system for inventory, orders, and fulfillment operations.</p>
              <Tags items={["Multi-tenant", "Warehouse Ops"]} />
            </div>
          </article>

          <article className={card}>
            <div className="relative h-[148px] border-b border-line bg-[#eef3ff]">
              <Image src="/assets/plumbersstock.jpg" alt="PlumbersStock storefront showing a Moen shower campaign" fill sizes="(min-width: 1280px) 360px, 100vw" className="object-cover object-top" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold">
                <a href="https://www.plumbersstock.com" target="_blank" rel="noopener noreferrer" className="text-foreground">PlumbersStock</a>
              </h3>
              <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">Laravel · Vue.js · MySQL</p>
              <p className="text-sm text-muted">E-commerce platform with backend integrations and workflow automation.</p>
              <Tags items={["E-commerce", "Integrations"]} />
            </div>
          </article>

          <article className={card}>
            <div className="flex h-[148px] flex-col gap-1.5 border-b border-line bg-[#eef3ff] p-2.5 text-center text-xs font-bold text-[#31406e]" aria-hidden="true">
              <span className="grid flex-1 place-items-center rounded-lg bg-white">Next.js</span>
              <span className="grid flex-1 place-items-center rounded-lg bg-[#ece7ff]">API</span>
              <span className="grid flex-1 grid-cols-3 gap-1.5">
                <span className="grid place-items-center rounded-lg bg-white">Users</span>
                <span className="grid place-items-center rounded-lg bg-white">Orders</span>
                <span className="grid place-items-center rounded-lg bg-white">Kafka</span>
              </span>
              <span className="grid flex-1 place-items-center rounded-lg bg-white">MySQL</span>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold">Microservices Commerce</h3>
              <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">Laravel · Symfony · Next.js · Kubernetes</p>
              <p className="text-sm text-muted">API-driven commerce platform using microservices for backend and Next.js for the frontend.</p>
              <Tags items={["Microservices", "Kubernetes"]} />
            </div>
          </article>
        </div>

        <aside id="architecture" className="flex h-full scroll-mt-24 flex-col gap-4 rounded-2xl border border-line bg-card p-4 shadow-[0_18px_40px_rgb(3_6_22/0.12)]">
          <h2 className="text-lg font-bold tracking-tight">
            System Architecture <span className="text-sm font-semibold text-muted">(Example)</span>
          </h2>
          <div className="flex flex-1 flex-col items-center justify-between gap-2">
            <div className="grid w-full grid-cols-2 gap-2">
              <div className="flex items-center justify-center gap-2 rounded-xl border border-line px-2 py-3 text-center text-xs font-bold">
                <b className="grid size-6 place-items-center rounded-md bg-[#111827] text-white">N</b>
                <span>Next.js<small className="block font-semibold text-muted">Frontend</small></span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl border border-line px-2 py-3 text-center text-xs font-bold">
                <b className="grid size-6 place-items-center rounded-md bg-[#41b883] text-white">V</b>
                <span>Vue.js<small className="block font-semibold text-muted">Admin / App</small></span>
              </div>
            </div>
            <div className="min-h-4 w-0.5 flex-1 bg-[#96a8ff]/55" />
            <div className="w-[78%] rounded-xl border border-[#9682ff]/40 bg-[#6d5efc]/15 px-3 py-3 text-center text-xs font-bold">
              API Gateway
              <small className="block font-semibold text-muted">Symfony / Laravel</small>
            </div>
            <div className="min-h-4 w-0.5 flex-1 bg-[#96a8ff]/55" />
            <div className="grid w-full grid-cols-3 gap-1.5 sm:grid-cols-5">
              {services.map((name) => (
                <div key={name} className="flex flex-col items-center gap-1 rounded-xl border border-line bg-teal-400/10 px-1 py-2 text-center text-[10px] leading-tight font-bold">
                  <span className="h-2 w-4 rounded-full bg-teal-300" />
                  {name}
                </div>
              ))}
            </div>
            <div className="min-h-4 w-0.5 flex-1 bg-[#96a8ff]/55" />
            <div className="grid w-full grid-cols-2 gap-2">
              <div className="rounded-xl border border-line bg-[#8b5cf6]/15 px-2 py-3 text-center text-xs font-bold">Kafka / Queues</div>
              <div className="rounded-xl border border-line bg-[#3b82f6]/15 px-2 py-3 text-center text-xs font-bold">MySQL / MongoDB</div>
            </div>
          </div>
        </aside>
      </div>

      <div id="all-projects" className="flex scroll-mt-24 flex-col gap-3 pt-4">
        <h2 className="text-2xl font-bold tracking-tight">More Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className={card}>
            <div className="relative h-[148px] border-b border-line">
              <Image src="/assets/plumbersstock-ph.jpg" alt="PlumbersStock PH homepage" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold"><a className="text-foreground" href="https://www.plumbersstock.ph" target="_blank" rel="noopener noreferrer">PlumbersStock PH</a></h3>
              <p className="text-sm text-muted">Localized commerce operations and full-stack implementation.</p>
            </div>
          </article>
          <article className={card}>
            <div className="relative h-[148px] border-b border-line">
              <Image src="/assets/pos-system.jpg" alt="POS System marketing page" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold"><a className="text-foreground" href="https://pos-synchronous-main-vilglr.laravel.cloud/" target="_blank" rel="noopener noreferrer">POS System</a></h3>
              <p className="text-sm text-muted">Point-of-sale solution with inventory, reporting, and multi-user workflows.</p>
            </div>
          </article>
          <article className={card}>
            <div className="flex min-h-28 flex-col gap-2 p-4">
              <h3 className="font-bold"><a className="text-foreground" href="https://craftdirect.com" target="_blank" rel="noopener noreferrer">CraftDirect</a></h3>
              <p className="text-sm text-muted">E-commerce platform support and operational engineering work.</p>
            </div>
          </article>
          <article className={card}>
            <div className="flex min-h-28 flex-col gap-2 p-4">
              <h3 className="font-bold"><a className="text-foreground" href="https://plumbersstockexpress.com" target="_blank" rel="noopener noreferrer">PlumbersStock Express</a></h3>
              <p className="text-sm text-muted">Web operations, integrations, and ongoing improvements.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
