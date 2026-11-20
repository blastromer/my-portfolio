import { Icon } from "@/components/icons";

const checks = [
  "System Design & Architecture",
  "Performance & Reliability",
  "Team Collaboration & Mentoring",
  "Business-focused Solutions",
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
      ["JS", "bg-[#f7df1e] text-[#222]", "JavaScript"],
      ["In", "bg-[#9553e9]", "Inertia"],
      ["Lw", "bg-[#fb70a9]", "Livewire"],
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
];

const roles = [
  ["Senior Full Stack Developer", "DevDen", "Present", true],
  ["Senior Full Stack Developer", "G. O. Green Enterprises, Inc.", "Apr 2023 – Present", true],
  ["Full Stack Web Developer", "Codedaddy.ph", "Apr 2012 – Mar 2023", false],
] as const;

const panel = "rounded-2xl border border-line bg-card p-5 shadow-[0_18px_40px_rgb(3_6_22/0.12)]";

export function AboutSection() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 pt-12 lg:grid-cols-[0.9fr_1.25fr_0.95fr]">
        <article id="about" className={`${panel} scroll-mt-24`}>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
            <p className="text-sm leading-relaxed text-muted">
              I&apos;m a Senior Software Engineer from the Philippines with 12+ years of experience building web applications, APIs, e-commerce platforms, and distributed systems. My primary expertise is PHP and Laravel, complemented by Golang, Vue.js, Node.js, Docker, Kubernetes, and AWS.
            </p>
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

        <article id="experience" className={`${panel} scroll-mt-24`}>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold text-[#b7a6ff]">12+ Years in Software Development</p>
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <ol className="relative flex flex-col gap-4 border-l border-line pl-5">
              {roles.map(([title, company, when, current]) => (
                <li key={`${company}-${when}`} className="relative flex flex-col gap-1">
                  <span className={`absolute top-1 -left-[1.55rem] size-2.5 rounded-full ${current ? "bg-[#8b74ff] ring-4 ring-[#8b74ff]/25" : "bg-[#8d9ad0]"}`} />
                  <strong className="text-sm">{title}</strong>
                  <p className="text-xs text-muted">
                    {company} · <span className="font-bold text-[#7c5cff] dark:text-[#c4b6ff]">{when}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-[#5a46f0] via-[#6a56ff] to-[#3d6dff] px-4 py-4 text-white shadow-[0_16px_36px_rgb(70_70_220/0.28)]">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white/15">
              <Icon name="code" className="size-5" />
            </span>
            <div>
              <strong className="block">Have a complex system to build?</strong>
              <p className="text-sm text-white/90">Let&apos;s talk about how I can help design, build, and scale it.</p>
            </div>
          </div>
          <ul className="flex flex-col gap-1 text-sm text-white/90">
            <li className="flex items-center gap-2"><Icon name="laptop" /> Available for Remote Opportunities</li>
            <li className="flex items-center gap-2"><Icon name="pin" /> Bacolod City, Philippines</li>
          </ul>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#2a2158]">
            Get in Touch
            <Icon name="arrow" />
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto grid w-full max-w-[1180px] scroll-mt-24 gap-4 px-5 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className={panel}>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="text-sm text-muted">Interested in Laravel, API integration, or full-stack engineering work? Send a message.</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Email: <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href="mailto:blast.romer@gmail.com">blast.romer@gmail.com</a></li>
              <li>Phone: <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href="tel:+639152633870">+63 915 263 3870</a></li>
              <li>GitHub: <a className="font-semibold text-[#3550d6] dark:text-[#9eb6ff]" href="https://github.com/blastromer" target="_blank" rel="noopener noreferrer">github.com/blastromer</a></li>
              <li>Location: Bacolod City, Philippines</li>
            </ul>
          </div>
        </div>
        <form className={`${panel} grid content-start gap-2`} action="https://formspree.io/f/your-form-id" method="POST">
          <label htmlFor="name" className="text-sm font-semibold text-muted">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className="rounded-xl border border-line bg-background px-3 py-2.5 text-foreground outline-none focus-visible:outline-2 focus-visible:outline-[#9b87ff]" />
          <label htmlFor="email" className="text-sm font-semibold text-muted">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="rounded-xl border border-line bg-background px-3 py-2.5 text-foreground outline-none focus-visible:outline-2 focus-visible:outline-[#9b87ff]" />
          <label htmlFor="message" className="text-sm font-semibold text-muted">Message</label>
          <textarea id="message" name="message" rows={5} required className="rounded-xl border border-line bg-background px-3 py-2.5 text-foreground outline-none focus-visible:outline-2 focus-visible:outline-[#9b87ff]" />
          <input type="hidden" name="_subject" value="New portfolio inquiry from romer portfolio site" />
          <button type="submit" className="w-fit rounded-full bg-linear-to-b from-[#8d72ff] to-[#6a4dff] px-4 py-2.5 text-sm font-bold text-white">
            Send Message
          </button>
          <p className="text-xs text-muted">Replace <code>your-form-id</code> with your Formspree form endpoint to enable submissions.</p>
        </form>
      </section>

      <footer className="mt-10 border-t border-line">
        <p className="mx-auto w-full max-w-[1180px] px-5 py-6 text-sm text-muted">
          Built by Romer Necesario · Senior Software Engineer
        </p>
      </footer>
    </>
  );
}
