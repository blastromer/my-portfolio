import Image from "next/image";
import { Icon } from "@/components/icons";

const chips = [
  ["PHP", "bg-[#777bb4]", "12+ Years PHP"],
  ["La", "bg-[#ff2d20]", "9+ Years Laravel"],
  ["GO", "bg-[#00add8]", "3+ Years Golang"],
  ["Dk", "bg-[#2496ed]", "8+ Years Docker"],
  ["K8s", "bg-[#326ce5]", "8+ Years Kubernetes"],
];

const availability = [
  { icon: "pin" as const, label: "Bacolod City, Philippines" },
  { icon: "laptop" as const, label: "Available for Remote Work" },
  { icon: "clock" as const, label: "Notice Period: 4 weeks" },
];

export function Hero() {
  return (
    <section id="home" className="mx-auto grid w-full max-w-[1180px] items-center gap-8 px-5 pt-12 pb-4 lg:grid-cols-[1.4fr_0.72fr] lg:pt-14">
      <div className="flex flex-col gap-4">
        <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#9b87ff]/35 bg-[#7c5cff]/12 px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#5b43c7] uppercase dark:text-[#d9d0ff]">
          <Icon name="spark" />
          Senior Software Engineer
        </p>
        <h1 className="max-w-[16ch] text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          I build and operate{" "}
          <span className="bg-linear-to-r from-[#6d4dff] to-[#3d63f5] bg-clip-text text-transparent dark:from-[#efeaff] dark:via-[#b9a6ff] dark:to-[#7f8dff]">
            production systems end-to-end.
          </span>
        </h1>
        <p className="font-semibold text-[#3d4d86] dark:text-[#c9d2ff]">
          End-to-End Systems · Cloud · Backend · Architecture
        </p>
        <p className="max-w-[68ch] text-base leading-relaxed text-muted">
          I design, build, deploy, and scale web platforms, APIs, distributed systems, and e-commerce infrastructure — working across backend engineering, cloud infrastructure, integrations, and production operations.
        </p>
        <p className="text-sm font-semibold text-muted">
          PHP · Laravel · Golang · AWS · Kubernetes · Docker · Kafka · Microservices
        </p>
        <ul className="flex flex-wrap gap-2">
          {chips.map(([mark, tone, label]) => (
            <li key={label} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-soft py-1 pr-2 pl-1 text-xs font-semibold">
              <span className={`grid h-5 min-w-5 place-items-center rounded-md px-1 text-[9px] font-extrabold text-white ${tone}`}>{mark}</span>
              {label}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-1">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-linear-to-b from-[#8d72ff] to-[#6a4dff] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgb(106_77_255/0.32)]">
            View My Work
            <Icon name="arrow" />
          </a>
          <a href="/assets/cv-romer-necesario.pdf" download className="inline-flex items-center rounded-full border border-line bg-soft px-4 py-2.5 text-sm font-bold text-foreground">
            Download CV
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-line bg-soft px-4 py-2.5 text-sm font-bold text-foreground">
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <aside className="flex flex-col gap-4">
        <div className="rounded-[28px] bg-linear-to-br from-[#8c78ff]/55 via-[#468cff]/15 to-white/5 p-2 shadow-[0_24px_60px_var(--glow,rgb(110_86_255/0.35))]">
          <Image
            src="/assets/profile.jpg"
            alt="Portrait of Romer Necesario"
            width={800}
            height={800}
            priority
            className="aspect-square w-full rounded-[22px] object-cover object-center"
          />
        </div>
        <ul className="flex flex-col gap-2 text-sm font-semibold text-muted">
          {availability.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <Icon name={item.icon} className="size-4 text-[#9aa7e6]" />
              {item.label}
            </li>
          ))}
          <li className="flex items-center gap-2 text-good">
            <span className="size-2.5 rounded-full bg-good shadow-[0_0_0_4px_rgb(62_224_160/0.16)]" />
            Open to Opportunities
          </li>
        </ul>
      </aside>
    </section>
  );
}
