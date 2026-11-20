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

const services = ["Catalog", "Orders", "Inventory", "Marketplace", "Fulfillment"];

export function Projects() {
  return (
    <section id="projects" className="mx-auto flex w-full max-w-[1180px] scroll-mt-24 flex-col gap-4 px-5 pt-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-sm text-muted">Selected systems from the current resume — e-commerce, WMS, SaaS, and marketplace integrations.</p>
        </div>
        <a href="#all-projects" className="inline-flex items-center gap-1 text-sm font-bold text-[#3550d6] dark:text-[#9eb6ff]">
          View All Projects
          <Icon name="arrow" />
        </a>
      </div>

      <article className={`${card} p-5 sm:p-6`}>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[0.08em] text-[#b7a6ff] uppercase">Primary Case Study</p>
            <h3 className="text-2xl font-bold tracking-tight">
              <a href="https://www.plumbersstock.com" target="_blank" rel="noopener noreferrer" className="text-foreground">
                PlumbersStock
              </a>
            </h3>
            <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">
              Next.js · Golang · Symfony · Amazon SP-API · eBay · Shopify
            </p>
            <p className="text-sm text-muted">
              U.S. plumbing-supply e-commerce platform with a Next.js frontend and Golang / Symfony microservice APIs for catalog, orders, inventory, and marketplace data exchange.
            </p>
            <Tags items={["eCommerce", "Microservices", "Amazon SP-API", "SKU mapping"]} />
            <div className="grid gap-3 pt-1 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-soft p-3">
                <h4 className="text-sm font-bold">Scope</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Marketplace and inventory platform covering Amazon SP-API, eBay, and Shopify connectors, order flows, product feeds, and SKU mapping.
                </p>
              </div>
              <div className="rounded-xl border border-line bg-soft p-3">
                <h4 className="text-sm font-bold">Delivery</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Ship Next.js storefront and admin experiences; integrate Redis caching, queues, and MySQL/MongoDB workflows with production monitoring for high-volume traffic.
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-line">
            <Image src="/assets/plumbersstock.jpg" alt="PlumbersStock storefront" fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover object-top" />
          </div>
        </div>
      </article>

      <div className="grid items-stretch gap-4 xl:grid-cols-[1.45fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
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
              <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">React · Yii · Laravel · Amazon SP-API</p>
              <p className="text-sm text-muted">
                Custom 3PL / Amazon FBA warehouse system for receiving, bins/LPN, pick/pack/ship, returns, billing, and client operations.
              </p>
              <Tags items={["3PL / WMS", "FBA", "Shopify", "ShipStation"]} />
            </div>
          </article>

          <article className={card}>
            <div className="flex h-[148px] flex-col gap-1.5 border-b border-line bg-[#eef3ff] p-2.5 text-center text-xs font-bold text-[#31406e]" aria-hidden="true">
              <span className="grid flex-1 place-items-center rounded-lg bg-white">Next.js</span>
              <span className="grid flex-1 place-items-center rounded-lg bg-[#ece7ff]">Supabase / PostgreSQL</span>
              <span className="grid flex-1 grid-cols-3 gap-1.5">
                <span className="grid place-items-center rounded-lg bg-white">Auth</span>
                <span className="grid place-items-center rounded-lg bg-white">RLS</span>
                <span className="grid place-items-center rounded-lg bg-white">Stripe</span>
              </span>
              <span className="grid flex-1 place-items-center rounded-lg bg-white">Dashboards · Reporting</span>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold">
                <a href="https://app.yoursafetyportal.com.au" target="_blank" rel="noopener noreferrer" className="text-foreground">Your Safety Partners</a>
              </h3>
              <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">Next.js · PostgreSQL · Supabase · Stripe</p>
              <p className="text-sm text-muted">
                Production SaaS portal with role-based access, dashboards, inspection/reporting, Stripe payments, and an iOS wrapper for App Store distribution.
              </p>
              <Tags items={["SaaS", "RBAC", "Payments"]} />
            </div>
          </article>

          <article className={`${card} sm:col-span-2`}>
            <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">
                  <a href="https://sgc-smarttrack.com" target="_blank" rel="noopener noreferrer" className="text-foreground">SGC SmartTrack</a>
                </h3>
                <p className="text-xs font-semibold text-[#44527f] dark:text-[#c5cdf0]">Laravel · Assessment management</p>
                <p className="text-sm text-muted">
                  Laravel assessment management system for tracking assessments, workflows, and related operational records.
                </p>
              </div>
              <Tags items={["Laravel", "Workflows"]} />
            </div>
          </article>
        </div>

        <aside id="architecture" className="flex h-full scroll-mt-24 flex-col gap-4 rounded-2xl border border-line bg-card p-4 shadow-[0_18px_40px_rgb(3_6_22/0.12)]">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold tracking-tight">How I Think About Systems</h2>
            <p className="text-xs text-muted">
              Example architecture aligned with the PlumbersStock-style stack. Architecture varies by requirements.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-between gap-2">
            <div className="grid w-full grid-cols-2 gap-2">
              <div className="flex items-center justify-center gap-2 rounded-xl border border-line px-2 py-3 text-center text-xs font-bold">
                <b className="grid size-6 place-items-center rounded-md bg-[#111827] text-white">N</b>
                <span>Next.js<small className="block font-semibold text-muted">Storefront / Admin</small></span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl border border-line px-2 py-3 text-center text-xs font-bold">
                <b className="grid size-6 place-items-center rounded-md bg-[#00add8] text-white">Go</b>
                <span>Golang<small className="block font-semibold text-muted">Services</small></span>
              </div>
            </div>
            <div className="min-h-4 w-0.5 flex-1 bg-[#96a8ff]/55" />
            <div className="w-[78%] rounded-xl border border-[#9682ff]/40 bg-[#6d5efc]/15 px-3 py-3 text-center text-xs font-bold">
              API Layer
              <small className="block font-semibold text-muted">Symfony / Golang / Laravel</small>
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
              <div className="rounded-xl border border-line bg-[#8b5cf6]/15 px-2 py-3 text-center text-xs font-bold">Redis / Queues</div>
              <div className="rounded-xl border border-line bg-[#3b82f6]/15 px-2 py-3 text-center text-xs font-bold">MySQL / MongoDB</div>
            </div>
            <div className="w-full rounded-xl border border-line bg-soft px-2 py-2 text-center text-[11px] font-semibold text-muted">
              AWS EC2/RDS · Docker · Nginx · Linux · CI/CD
            </div>
          </div>
        </aside>
      </div>

      <div id="systems" className="scroll-mt-24 rounded-2xl border border-line bg-card p-5 shadow-[0_18px_40px_rgb(3_6_22/0.12)]">
        <h2 className="text-2xl font-bold tracking-tight">Systems I&apos;ve Built &amp; Operated</h2>
        <p className="mt-1 text-sm text-muted">Systems listed on the current resume.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs tracking-wide text-muted uppercase">
                <th className="py-2 pr-4 font-bold">System</th>
                <th className="py-2 font-bold">Scope</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["PlumbersStock", "Next.js storefront + Golang/Symfony marketplace microservices"],
                ["Pacific Prep WMS", "Amazon FBA / 3PL warehouse & fulfillment"],
                ["Your Safety Partners", "Next.js + Supabase SaaS portal"],
                ["SGC SmartTrack", "Laravel assessment management"],
                ["PlumbersStock PH", "WordPress WooCommerce local-market storefront"],
                ["Marketplace Integrations", "Amazon SP-API / eBay / Shopify / Houzz"],
              ].map(([system, scope]) => (
                <tr key={system} className="border-b border-line/70">
                  <td className="py-2.5 pr-4 font-semibold">{system}</td>
                  <td className="py-2.5 text-muted">{scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="all-projects" className="flex scroll-mt-24 flex-col gap-3 pt-2">
        <h2 className="text-2xl font-bold tracking-tight">More Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className={card}>
            <div className="relative h-[148px] border-b border-line">
              <Image src="/assets/plumbersstock-ph.jpg" alt="PlumbersStock PH homepage" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold"><a className="text-foreground" href="https://www.plumbersstock.ph" target="_blank" rel="noopener noreferrer">PlumbersStock PH</a></h3>
              <p className="text-sm text-muted">WordPress WooCommerce storefront for the Philippine market, including catalog, checkout, and local e-commerce operations.</p>
            </div>
          </article>
          <article className={card}>
            <div className="flex min-h-[148px] flex-col justify-center gap-2 p-4">
              <h3 className="font-bold"><a className="text-foreground" href="https://sgc-smarttrack.com" target="_blank" rel="noopener noreferrer">SGC SmartTrack</a></h3>
              <p className="text-sm text-muted">Laravel assessment management system for tracking assessments, workflows, and operational records.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
