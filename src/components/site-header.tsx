"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Architecture", "architecture"],
  ["Contact", "contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const markActive = () => {
      const marker = window.scrollY + 120;
      const ordered = [...sections].sort((a, b) => a.offsetTop - b.offsetTop);
      let current = ordered[0]?.id ?? "home";
      ordered.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id;
      });
      setActive(current);
    };

    markActive();
    window.addEventListener("scroll", markActive, { passive: true });
    return () => window.removeEventListener("scroll", markActive);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("romer-theme", next);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-header backdrop-blur-xl">
      <div className="mx-auto grid min-h-[74px] w-full max-w-[1180px] grid-cols-[auto_1fr_auto] items-center gap-3 px-5">
        <a href="#home" className="inline-flex items-center gap-2.5 font-bold text-foreground">
          <span className="grid size-9 place-items-center rounded-[10px] bg-linear-to-br from-[#7c5cff] to-[#49c6f0] text-xs text-white shadow-[0_8px_18px_rgb(90_80_255/0.35)]">
            RN
          </span>
          <span className="max-[380px]:hidden">Romer Necesario</span>
        </a>

        <button
          type="button"
          className="col-start-2 row-start-1 justify-self-end rounded-xl border border-line bg-soft p-2.5 text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>

        <nav
          id="site-nav"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[74px] z-30 flex-col gap-1 border-b border-line bg-[#f4f7ff] px-4 py-3 shadow-xl lg:static lg:flex lg:flex-row lg:justify-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none dark:bg-[#0c1028] lg:dark:bg-transparent`}
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`rounded-full px-3 py-2 text-sm font-semibold lg:py-1.5 ${
                active === id ? "bg-soft text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 row-start-1 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid size-10 place-items-center rounded-full border border-line bg-soft text-foreground"
          >
            <Icon name="sun" className="hidden size-4 dark:block" />
            <Icon name="moon" className="size-4 dark:hidden" />
          </button>
          <a
            href="/assets/cv-romer-necesario.pdf"
            download
            aria-label="Download Resume"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-b from-[#8d72ff] to-[#6a4dff] px-3 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgb(106_77_255/0.32)] sm:px-4"
          >
            <Icon name="download" />
            <span className="hidden sm:inline">Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
