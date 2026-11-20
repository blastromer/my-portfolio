import { Icon, type IconName } from "@/components/icons";

const checks = [
  "System Design & Architecture",
  "Backend Engineering",
  "Cloud & Infrastructure",
  "Integrations",
  "Performance & Reliability",
  "Business-focused Engineering",
  "Team Collaboration & Mentoring",
];

const groups = [
  {
    title: "Backend",
    items: [
      ["PHP", "bg-[#777bb4]", "PHP"],
      ["La", "bg-[#ff2d20]", "Laravel"],
      ["Go", "bg-[#00add8]", "Golang"],
      ["JS", "bg-[#3c873a]", "Node.js"],
      ["Sy", "bg-[#1a171b]", "Symfony"],
    ],
  },
  {
    title: "Frontend",
    items: [
      ["V", "bg-[#41b883]", "Vue.js"],
      ["Re", "bg-[#149eca]", "React"],
      ["Nx", "bg-[#111827]", "Next.js"],
      ["JS", "bg-[#f7df1e] text-[#222]", "JavaScript"],
      ["In", "bg-[#9553e9]", "Inertia"],
      ["Lw", "bg-[#fb70a9]", "Livewire"],
    ],
  },
  {
    title: "Architecture",
    items: [
      ["MS", "bg-[#6d5efc]", "Microservices"],
      ["API", "bg-[#3b82f6]", "REST APIs"],
      ["GW", "bg-[#8b5cf6]", "API Gateways"],
      ["ED", "bg-[#14b8a6]", "Event-Driven"],
      ["MT", "bg-[#f59e0b]", "Multi-Tenant"],
    ],
  },
  {
    title: "Infrastructure",
    items: [
      ["Dk", "bg-[#2496ed]", "Docker"],
      ["K8", "bg-[#326ce5]", "Kubernetes"],
      ["AWS", "bg-[#ff9900] text-[#1b1b1b]", "AWS"],
      ["Ng", "bg-[#009639]", "Nginx"],
      ["Li", "bg-[#111]", "Linux"],
    ],
  },
  {
    title: "Data & Messaging",
    items: [
      ["SQL", "bg-[#00758f]", "MySQL"],
      ["Mg", "bg-[#10aa50]", "MongoDB"],
      ["Rd", "bg-[#d82c20]", "Redis"],
      ["Kf", "bg-[#231f20]", "Kafka"],
      ["Q", "bg-[#7c5cff]", "Queues"],
    ],
  },
  {
    title: "Integrations",
    items: [
      ["Am", "bg-[#ff9900] text-[#1b1b1b]", "Amazon APIs"],
      ["eB", "bg-[#e53238]", "eBay"],
      ["Hz", "bg-[#4bbf73]", "Houzz"],
      ["GA", "bg-[#f9ab00] text-[#1b1b1b]", "Google APIs"],
      ["WH", "bg-[#0ea5e9]", "Webhooks"],
    ],
  },
];

const roles = [
  {
    title: "Senior Full Stack Developer",
    company: "DevDen",
    when: "Present",
    current: true,
    points: [
      "Contribute to modern web applications and backend integrations for production business systems.",
      "Support full-stack delivery across API, data, and frontend implementation work.",
      "Integrate third-party business systems using REST/GraphQL APIs and webhooks, including automation workflows.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "G. O. Green Enterprises, Inc.",
    when: "Apr 2023 – Present",
    current: true,
    points: [
      "Lead third-party API integrations for Amazon, eBay, and Houzz from design through deployment.",
      "Build Laravel backend systems with queues, caching, and automation for large inventory feeds supporting 140K+ marketplace items.",
      "Create reporting and system health tools while maintaining MySQL and MongoDB reliability.",
      "Collaborate on Vue.js and React frontends for responsive e-commerce experiences.",
      "Troubleshoot production issues across integrations, data sync, background jobs, and performance bottlenecks.",
      "Support cloud-hosted deployments and Linux debugging across SSH, permissions, logs, and services.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "Codedaddy.ph",
    when: "Apr 2012 – Mar 2023",
    current: false,
    points: [
      "Grew from junior to senior while delivering end-to-end web applications and long-term production maintenance.",
      "Developed scalable Laravel applications and led REST API integrations with Amazon, eBay, and Houzz.",
      "Delivered solutions across Laravel, Yii, Vue.js, React, Next.js, and MySQL.",
      "Built and maintained WordPress, Webflow, and Wix sites for around 7 years.",
      "Worked on Pacific Prep WMS, a multi-tenant warehouse management system using Yii and React.",
    ],
  },
] as const;

const production: { icon: IconName; title: string; text: string }[] = [
  { icon: "rocket", title: "Performance", text: "Application and database optimization." },
  { icon: "check", title: "Reliability", text: "Queues, workers, retries, monitoring, and failure handling." },
  { icon: "cloud", title: "Infrastructure", text: "AWS, Docker, Kubernetes, Linux, Nginx." },
  { icon: "code", title: "Troubleshooting", text: "Root-cause analysis across application and infrastructure layers." },
  { icon: "layers", title: "Scaling", text: "Worker capacity, asynchronous processing, service decomposition, and infrastructure scaling." },
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
            <p className="text-sm text-muted">Increasing technical breadth and ownership from product delivery to marketplace systems and production operations.</p>
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
                I&apos;m a Senior Software Engineer from the Philippines with 12+ years of experience building web applications, APIs, e-commerce platforms, integrations, and distributed systems.
              </p>
              <p>
                My primary expertise is PHP and Laravel, complemented by Golang, Vue.js, Node.js, Symfony, Docker, Kubernetes, AWS, Kafka, and modern frontend technologies.
              </p>
              <p>
                What differentiates my experience is the ability to work across the entire lifecycle of a system — understanding business requirements, designing architecture, writing software, integrating external platforms, deploying infrastructure, troubleshooting production issues, and scaling systems as requirements grow.
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
                    <li key={name} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-soft py-1 pr-2.5 pl-1 text-xs font-semibold">
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
            <a href="/assets/cv-romer-necesario.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2.5 text-sm font-bold text-white">
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
              Email is the best way to reach me for architecture, backend, integrations, or production systems work.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                Email:{" "}
                <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href="mailto:blast.romer@gmail.com">
                  blast.romer@gmail.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href="https://github.com/blastromer" target="_blank" rel="noopener noreferrer">
                  github.com/blastromer
                </a>
              </li>
              <li>Location: Bacolod City, Philippines</li>
            </ul>
          </div>
        </div>
        <div className={`${panel} flex flex-col justify-between gap-4`}>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Ready to talk?</h3>
            <p className="text-sm text-muted">
              Send a short note about the system, stack, and what you need owned — architecture, delivery, integrations, or production support.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="mailto:blast.romer@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-linear-to-b from-[#8d72ff] to-[#6a4dff] px-4 py-2.5 text-sm font-bold text-white">
              Email Me
              <Icon name="arrow" />
            </a>
            <a href="/assets/cv-romer-necesario.pdf" download className="inline-flex items-center rounded-full border border-line bg-soft px-4 py-2.5 text-sm font-bold text-foreground">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-line">
        <p className="mx-auto w-full max-w-[1180px] px-5 py-6 text-sm text-muted">
          Built by Romer Necesario · Senior Software Engineer
        </p>
      </footer>
    </>
  );
}
