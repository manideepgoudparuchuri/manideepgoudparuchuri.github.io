import { useEffect, useRef, useState } from 'react'
import {
  profile,
  stats,
  about,
  services,
  experience,
  skillGroups,
  projects,
  education,
  award,
} from './data.js'

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function RotatingRole() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2600)
    return () => clearInterval(id)
  }, [])
  return (
    <span key={index} className="inline-block animate-[fadeUp_0.5s_ease-out] bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
      {profile.roles[index]}
    </span>
  )
}

const SectionTitle = ({ eyebrow, title }) => (
  <Reveal className="mb-14 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
  </Reveal>
)

const Card = ({ children, className = '' }) => (
  <div
    className={`h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-6 ${className}`}
  >
    {children}
  </div>
)

const Chip = ({ children }) => (
  <span className="rounded-md bg-cyan-400/10 px-2 py-0.5 text-xs font-medium text-cyan-300">
    {children}
  </span>
)

const icons = {
  github: (
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
  ),
  email: (
    <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.5l10 6.3 10-6.3V6H2Zm20 2.9-9.5 6a1 1 0 0 1-1 0L2 8.9V18h20V8.9Z" />
  ),
}

const socials = [
  { label: 'GitHub', href: profile.github, icon: icons.github },
  { label: 'LinkedIn', href: profile.linkedin, icon: icons.linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: icons.email },
]

const SocialIcons = () => (
  <div className="flex gap-3">
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target={s.label === 'Email' ? undefined : '_blank'}
        rel="noreferrer"
        aria-label={s.label}
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          {s.icon}
        </svg>
      </a>
    ))}
  </div>
)

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    ['About', '#about'],
    ['Services', '#services'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || menuOpen ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold text-white">
          {profile.firstName}
          <span className="text-cyan-400">.devops</span>
        </a>
        <ul className="hidden gap-7 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-cyan-400">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeFile}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-cyan-400/50 px-4 py-1.5 text-sm text-cyan-300 transition hover:bg-cyan-400/10 md:block"
        >
          Resume
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <ul className="space-y-1 border-t border-white/10 px-6 py-4 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg px-3 py-2 text-cyan-300 transition hover:bg-white/5"
            >
              Resume ↗
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

const Hero = () => (
  <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    <div className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
    <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="order-2 text-center lg:order-1 lg:text-left">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.title} @ {profile.company}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hi, I'm <br className="hidden sm:block" />
          {profile.name}
        </h1>
        <p className="mt-5 h-10 text-2xl font-semibold sm:text-3xl">
          <RotatingRole />
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0">
          {profile.tagline}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Get in touch
          </a>
        </div>
        <div className="mt-8 flex justify-center lg:justify-start">
          <SocialIcons />
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2">
        <div className="group relative h-64 w-64 min-[375px]:h-72 min-[375px]:w-72 sm:h-96 sm:w-96">
          <div className="absolute inset-0 animate-[spin_14s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#8b5cf6,#22d3ee)] p-[3px] opacity-80">
            <div className="h-full w-full rounded-full bg-slate-950" />
          </div>
          <div className="absolute inset-3 overflow-hidden rounded-full bg-gradient-to-b from-cyan-500/30 via-violet-600/30 to-slate-900">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute -left-2 top-8 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-2 text-sm shadow-xl backdrop-blur min-[375px]:-left-4 sm:-left-10">
            <p className="font-bold text-white">4+ years</p>
            <p className="text-xs text-slate-400">DevOps experience</p>
          </div>
          <div className="absolute -bottom-3 -right-2 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-2 text-sm shadow-xl backdrop-blur sm:-right-8">
            <p className="font-bold text-white">☸️ K8s · ☁️ Azure · AWS</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Stats = () => (
  <section className="mx-auto -mt-6 max-w-6xl px-6">
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 100}>
          <Card className="text-center">
            <p className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-2xl font-extrabold text-transparent min-[360px]:text-3xl sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs text-slate-400 min-[360px]:text-sm">{s.label}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  </section>
)

const About = () => (
  <section id="about" className="mx-auto max-w-4xl px-6 py-28">
    <SectionTitle eyebrow="About" title="Who I am" />
    <Reveal className="space-y-5 text-left text-lg leading-relaxed text-slate-400 sm:text-center">
      {about.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </Reveal>
  </section>
)

const Services = () => (
  <section id="services" className="mx-auto max-w-6xl px-6 py-20">
    <SectionTitle eyebrow="What I do" title="How I help teams ship" />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 80}>
          <Card>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-2xl">
              {s.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  </section>
)

const Experience = () => (
  <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
    <SectionTitle eyebrow="Experience" title="Where I've worked" />
    <ol className="relative border-l border-white/10 pl-6 sm:pl-8">
      {experience.map((job) => (
        <li key={job.company} className="relative mb-12 last:mb-0">
          <span
            className={`absolute -left-[31px] top-7 h-4 w-4 rounded-full ring-4 ring-slate-950 sm:-left-[39px] ${
              job.current ? 'bg-emerald-400' : 'bg-cyan-400'
            }`}
          />
          <Reveal>
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="text-cyan-400">
                    {job.company} · <span className="text-slate-400">{job.location}</span>
                  </p>
                </div>
                <span className="flex items-center gap-2 text-sm text-slate-400">
                  {job.period}
                  {job.current && (
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">
                      Current
                    </span>
                  )}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-slate-400">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          </Reveal>
        </li>
      ))}
    </ol>
  </section>
)

const Skills = () => (
  <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
    <SectionTitle eyebrow="Skills" title="My toolbox" />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={i * 80}>
          <Card>
            <h3 className="mb-4 font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  </section>
)

const Projects = () => (
  <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
    <SectionTitle eyebrow="Projects" title="Selected work" />
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={i * 100}>
          <Card className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">{p.tag}</p>
            <h3 className="mt-2 text-xl font-bold text-white">{p.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-slate-400">{p.description}</p>
            <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
              ↗ {p.impact}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  </section>
)

const Education = () => (
  <section className="mx-auto max-w-6xl px-6 py-20">
    <SectionTitle eyebrow="Education & Awards" title="Learning & recognition" />
    <div className="grid gap-6 md:grid-cols-2">
      <Reveal>
        <Card>
          <p className="text-3xl">🎓</p>
          <h3 className="mt-3 text-lg font-bold text-white">{education.degree}</h3>
          <p className="mt-1 text-cyan-400">{education.school}</p>
          <p className="mt-2 text-sm text-slate-400">
            {education.period} · {education.detail}
          </p>
        </Card>
      </Reveal>
      <Reveal delay={100}>
        <Card>
          <p className="text-3xl">🏆</p>
          <h3 className="mt-3 text-lg font-bold text-white">{award.title}</h3>
          <p className="mt-1 text-cyan-400">{award.org}</p>
          <p className="mt-2 text-sm text-slate-400">{award.date}</p>
        </Card>
      </Reveal>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-600/15 p-10 text-center sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Contact</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let's build something reliable</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Whether it's CI/CD, Kubernetes, or DevSecOps, I'm always happy to talk shop. Drop me a
          message and I'll get back to you.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block max-w-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105"
        >
          <span className="sm:hidden">Email me</span>
          <span className="hidden sm:inline">{profile.email}</span>
        </a>
        <p className="mt-3 break-all text-sm text-slate-400 sm:hidden">{profile.email}</p>
        <div className="mt-8 flex justify-center">
          <SocialIcons />
        </div>
      </div>
    </Reveal>
  </section>
)

const Footer = () => (
  <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
    © {new Date().getFullYear()} {profile.name} · Built with React, Vite & Tailwind CSS
  </footer>
)

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
