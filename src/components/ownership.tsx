const steps = ["Understand", "Architect", "Build", "Integrate", "Deploy", "Operate", "Scale"];

export function Ownership() {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 pt-10">
      <div className="rounded-2xl border border-line bg-card p-5 shadow-[0_18px_40px_rgb(3_6_22/0.12)] sm:p-7">
        <div className="flex max-w-3xl flex-col gap-3">
          <h2 className="text-2xl font-bold tracking-tight">I build systems, not just features.</h2>
          <p className="text-sm leading-relaxed text-muted">
            My work spans the full software lifecycle — from understanding business requirements and designing architecture to building applications, integrating third-party platforms, deploying infrastructure, troubleshooting production issues, and scaling systems as they grow.
          </p>
        </div>
        <ol className="mt-6 flex flex-wrap items-center gap-2">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-line bg-soft px-3 py-1.5 text-xs font-bold">{step}</span>
              {index < steps.length - 1 ? <span className="text-muted" aria-hidden="true">↓</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
