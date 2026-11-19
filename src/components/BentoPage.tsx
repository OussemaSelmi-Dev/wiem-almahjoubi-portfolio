"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, BadgeCheck, ChevronDown, Download, Globe2, GraduationCap, Mail, Trophy } from "lucide-react";
import { awards, education, experience, expertise, industries, leadership, navItems, profile, stats, tools } from "@/data/profile";
import { categories, certificateImage, certificates, projects, trainings, type Category } from "@/data/projects";
import { useProjectViewer } from "./ProjectViewer";

// Bento: a dark, tile-based portfolio. Content lives in src/data.

const countWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const countWord = (n: number) => countWords[n] ?? String(n);

const tile = "rounded-3xl border border-nb-line bg-nb-card";
const eyebrow = "text-xs font-medium uppercase tracking-[0.18em] text-nb-muted";

function Tile({ className = "", delay = 0, children }: { className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      className={`${tile} ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ id, kicker, children }: { id?: string; kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 mt-24 flex flex-wrap items-end justify-between gap-4 sm:mt-32">
      <div>
        <p className={eyebrow}>{kicker}</p>
        <h2 id={id} className="mt-2 font-grotesk text-4xl font-semibold tracking-tight sm:text-5xl">
          {children}
        </h2>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 rounded-full border border-nb-line bg-nb-card/85 pl-5 pr-2 backdrop-blur-md"
      >
        <a href="#top" className="flex items-center gap-2 font-grotesk text-lg font-semibold tracking-tight">
          <span className="size-2.5 rounded-full bg-nb-accent" aria-hidden />
          {profile.name}
        </a>
        <ul className="hidden items-center gap-6 text-sm text-nb-muted lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-nb-text">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.cv}
          download
          className="inline-flex h-10 items-center gap-2 rounded-full bg-nb-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-nb-accent-deep"
        >
          <Download className="size-4" aria-hidden />
          <span className="hidden sm:inline">Download</span> CV
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const heroStats = [...stats.slice(0, 2), { value: projects.length, label: "projects in this portfolio" }, ...stats.slice(2)];
  return (
    <section id="top" aria-label="Introduction" className="grid grid-cols-2 gap-3 pt-8 md:grid-cols-6 lg:grid-cols-12">
      <Tile className="col-span-2 flex flex-col justify-between p-7 sm:p-10 md:col-span-6 lg:col-span-7 lg:row-span-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-nb-line px-3 py-1 text-sm text-nb-muted">
            <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
            {profile.status}
          </p>
          <h1 className="mt-8 font-grotesk text-[2.9rem] font-semibold leading-[0.92] tracking-tight min-[400px]:text-6xl sm:text-7xl xl:text-8xl">
            Wiem
            <br />
            Almahjoubi<span className="text-nb-pink">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl leading-snug text-nb-text/90">
            {profile.role} turning market insight into <span className="text-nb-pink">partnerships</span> and growth.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-nb-text px-6 font-semibold text-nb-bg transition-colors hover:bg-nb-accent hover:text-white"
          >
            <Mail className="size-4" aria-hidden />
            Get in touch
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-nb-line px-6 font-medium transition-colors hover:border-nb-text"
          >
            See the work
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </Tile>

      <Tile
        delay={0.06}
        className="relative col-span-2 min-h-[380px] overflow-hidden !border-transparent !bg-nb-accent md:col-span-6 lg:col-span-5 lg:row-span-2"
      >
        <div aria-hidden className="absolute -right-16 -top-16 size-72 rounded-full bg-nb-rose/35 blur-2xl" />
        <p className="absolute left-7 top-7 max-w-[12rem] font-grotesk text-xl font-semibold leading-tight text-white sm:text-2xl">
          {profile.focus}
        </p>
        <Image
          src="/wiem.webp"
          width={585}
          height={900}
          sizes="300px"
          alt={`Portrait of ${profile.name}`}
          preload
          className="absolute bottom-0 right-0 h-[80%] w-auto sm:right-6 sm:h-[88%]"
        />
      </Tile>

      {heroStats.map((stat, i) => (
        <Tile key={stat.label} delay={0.04 * i} className="col-span-1 p-6 md:col-span-3 lg:col-span-3">
          <p className="font-grotesk text-5xl font-semibold tracking-tight">
            {stat.value}
            {stat.suffix && <span className="text-nb-pink">{stat.suffix}</span>}
          </p>
          <p className="mt-2 text-sm leading-snug text-nb-muted">{stat.label}</p>
        </Tile>
      ))}

      <Tile className="col-span-2 p-7 md:col-span-6 lg:col-span-6">
        <p className={eyebrow}>About</p>
        <p className="mt-4 text-lg leading-relaxed text-nb-text/90">{profile.about}</p>
      </Tile>
      <Tile delay={0.05} className="col-span-2 p-7 md:col-span-3 lg:col-span-3">
        <p className={eyebrow}>Languages</p>
        <ul className="mt-4 space-y-3">
          {profile.languages.map((language) => (
            <li key={language.name} className="flex items-baseline justify-between gap-3">
              <span className="font-grotesk text-2xl font-semibold">{language.name}</span>
              <span className="text-sm text-nb-muted">{language.level}</span>
            </li>
          ))}
        </ul>
      </Tile>
      <Tile delay={0.1} className="col-span-2 flex flex-col justify-between p-7 md:col-span-3 lg:col-span-3">
        <Globe2 className="size-6 text-nb-pink" aria-hidden />
        <div className="mt-6">
          <p className="font-grotesk text-3xl font-semibold tracking-tight">GCC & MENA</p>
          <p className="mt-1 text-sm text-nb-muted">Expansion & localized marketing, currently at {profile.current}</p>
        </div>
      </Tile>
    </section>
  );
}

function Work() {
  const { open } = useProjectViewer();
  const [filter, setFilter] = useState<Category | "All">("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section aria-labelledby="work-title">
      <div id="work" className="scroll-mt-24" />
      <SectionTitle id="work-title" kicker={`Selected work · ${projects.length} projects`}>
        Ideas, made visible.
      </SectionTitle>
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {(["All", ...categories] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={`h-10 cursor-pointer rounded-full px-4 text-sm font-medium transition-colors ${
              filter === option ? "bg-nb-text text-nb-bg" : "border border-nb-line text-nb-muted hover:text-nb-text"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <ul className="grid auto-rows-[260px] grid-flow-dense grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((project, i) => {
          const cover = project.images[0];
          const big = filter === "All" && project.featured;
          const wide = filter === "All" && project.slug === "dove";
          return (
            <motion.li
              key={project.slug}
              layout
              className={`${big ? "sm:col-span-2 sm:row-span-2" : wide ? "sm:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            >
              <button
                type="button"
                onClick={() => open(project.slug)}
                className="group relative block size-full cursor-pointer overflow-hidden rounded-3xl border border-nb-line bg-nb-card2 text-left"
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  sizes={big ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent" />
                <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-nb-text text-nb-bg opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowUpRight className="size-5" aria-hidden />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-nb-rose">
                    {project.client}
                    {project.year && ` · ${project.year}`}
                  </span>
                  <span className={`mt-1.5 block font-grotesk font-semibold leading-tight tracking-tight text-white ${big ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                    {project.title}
                  </span>
                  {big && <span className="mt-2 line-clamp-2 hidden max-w-md text-sm text-white/75 sm:block">{project.summary}</span>}
                  {project.highlight && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-nb-accent px-3 py-1 text-xs font-semibold text-white">
                      <Trophy className="size-3.5" aria-hidden />
                      {project.highlight}
                    </span>
                  )}
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section aria-labelledby="experience-title">
      <div id="experience" className="scroll-mt-24" />
      <SectionTitle id="experience-title" kicker="Experience">
        {countWord(experience.length)} chapters, one thread.
      </SectionTitle>
      <div className="grid gap-3 lg:grid-cols-12">
        <ol className="space-y-3 lg:col-span-8">
          {experience.map((role, i) => (
            <li key={role.title}>
              <details open={i === 0} className={`${tile} group p-6 sm:p-7 [&_summary::-webkit-details-marker]:hidden`}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span>
                    <span className="block text-sm text-nb-pink">{role.period}</span>
                    <span className="mt-1 block font-grotesk text-2xl font-semibold tracking-tight">{role.title}</span>
                    <span className="mt-1 block text-nb-muted">{role.org}</span>
                  </span>
                  <ChevronDown
                    className="mt-1 size-5 shrink-0 text-nb-muted transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                {role.summary && <p className="mt-5 italic text-nb-muted">{role.summary}</p>}
                <ul className="mt-5 space-y-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-nb-text/85">
                      <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-nb-pink" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-nb-card2 px-3 py-1 text-xs text-nb-rose">
                      {tag}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ol>
        <div className="space-y-3 lg:col-span-4">
          <Tile className="p-7">
            <p className={eyebrow}>Leadership & events</p>
            <ul className="mt-5 space-y-6">
              {leadership.map((role) => (
                <li key={role.org}>
                  <p className="text-sm text-nb-pink">{role.period}</p>
                  <p className="mt-1 font-grotesk text-lg font-semibold leading-snug">{role.title}</p>
                  <p className="text-sm text-nb-muted">{role.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-nb-text/80">{role.points[1] ?? role.points[0]}</p>
                </li>
              ))}
            </ul>
          </Tile>
          <Tile className="p-7">
            <GraduationCap className="size-6 text-nb-pink" aria-hidden />
            <p className="mt-4 font-grotesk text-2xl font-semibold tracking-tight">{education.degree}</p>
            <p className="mt-1 text-nb-muted">{education.school}</p>
            <p className="mt-4 text-sm leading-relaxed text-nb-text/80">{education.major}</p>
          </Tile>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section aria-labelledby="expertise-title">
      <div id="expertise" className="scroll-mt-24" />
      <SectionTitle id="expertise-title" kicker="Expertise">
        From insight to impact.
      </SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((pillar, i) => (
          <Tile key={pillar.title} delay={i * 0.05} className="p-7">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-nb-card2 text-nb-pink">
              <pillar.icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-6 font-grotesk text-xl font-semibold leading-snug">{pillar.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-nb-muted">
              {pillar.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Tile>
        ))}
        <Tile className="p-7 sm:col-span-2 lg:col-span-2">
          <p className={eyebrow}>Industry exposure</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <li key={industry} className="rounded-full bg-nb-accent px-4 py-2 text-sm font-medium text-white">
                {industry}
              </li>
            ))}
          </ul>
        </Tile>
        <Tile className="p-7 sm:col-span-2 lg:col-span-2">
          <p className={eyebrow}>Toolbox</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool} className="rounded-full border border-nb-line px-4 py-2 text-sm">
                {tool}
              </li>
            ))}
          </ul>
        </Tile>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section aria-labelledby="recognition-title">
      <div id="recognition" className="scroll-mt-24" />
      <SectionTitle id="recognition-title" kicker="Recognition">
        Tested on international stages.
      </SectionTitle>
      <div className="grid gap-3 lg:grid-cols-3">
        {awards.map((award, i) => (
          <Tile
            key={award.competition}
            delay={i * 0.06}
            className={`p-7 ${i === 0 ? "!border-transparent !bg-nb-accent text-white" : ""}`}
          >
            <p className={`font-grotesk text-4xl font-semibold ${i === 0 ? "" : "text-nb-pink"}`}>{award.period}</p>
            <h3 className="mt-5 font-grotesk text-2xl font-semibold leading-snug tracking-tight">{award.competition}</h3>
            <ul className={`mt-5 space-y-2 border-t pt-5 text-sm ${i === 0 ? "border-white/25" : "border-nb-line text-nb-text/85"}`}>
              {award.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Tile>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section aria-labelledby="certifications-title">
      <div id="certifications" className="scroll-mt-24" />
      <SectionTitle id="certifications-title" kicker="Certifications">
        Always learning.
      </SectionTitle>
      <ul className="-mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-4 sm:-mx-6 sm:px-6">
        {certificates.map((cert) => {
          const image = certificateImage(cert.slug);
          return (
            <li key={cert.slug} className={`${tile} w-[280px] shrink-0 snap-start overflow-hidden sm:w-[320px]`}>
              <a href={image.pdf} target="_blank" rel="noopener noreferrer" className="block bg-white p-3">
                <Image
                  src={image.src}
                  alt={`${cert.title} certificate`}
                  width={image.w}
                  height={image.h}
                  sizes="320px"
                  className="aspect-[10/7] w-full object-contain"
                />
              </a>
              <div className="p-5">
                <p className="text-sm text-nb-muted">
                  {cert.issuer} · {cert.date}
                </p>
                <p className="mt-1 font-grotesk text-lg font-semibold leading-snug">{cert.title}</p>
                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-nb-pink hover:text-nb-rose"
                  >
                    <BadgeCheck className="size-4" aria-hidden />
                    Verify
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="mt-3 flex flex-wrap gap-2">
        {trainings.map((training) => (
          <li key={training} className="rounded-full border border-nb-line px-4 py-2 text-sm text-nb-muted">
            {training}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-24 grid gap-3 pb-28 sm:mt-32 lg:grid-cols-12">
      <Tile className="relative overflow-hidden !border-transparent !bg-nb-accent p-8 text-white sm:p-12 lg:col-span-8">
        <h2 id="contact-title" className="font-grotesk text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
          Let&apos;s grow something together.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex h-14 max-w-full items-center gap-2.5 rounded-full bg-nb-bg px-7 font-semibold text-nb-text transition-colors hover:bg-nb-card2"
        >
          <Mail className="size-5 shrink-0" aria-hidden />
          <span className="truncate">{profile.email}</span>
        </a>
      </Tile>
      <div className="grid gap-3 lg:col-span-4">
        <Tile className="flex items-center p-0">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-full items-center justify-between gap-4 p-7 font-grotesk text-2xl font-semibold transition-colors hover:text-nb-pink"
          >
            LinkedIn
            <ArrowUpRight className="size-6" aria-hidden />
          </a>
        </Tile>
        <Tile className="flex items-center p-0">
          <a
            href={profile.cv}
            download
            className="flex size-full items-center justify-between gap-4 p-7 font-grotesk text-2xl font-semibold transition-colors hover:text-nb-pink"
          >
            Download CV
            <Download className="size-6" aria-hidden />
          </a>
        </Tile>
      </div>
      <p className="pt-6 text-sm text-nb-muted lg:col-span-12">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}

export function BentoPage() {
  return (
    <div className="min-h-screen bg-nb-bg font-sans text-nb-text antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-nb-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-7xl px-3 sm:px-6">
        <Hero />
        <Work />
        <Experience />
        <Expertise />
        <Recognition />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
