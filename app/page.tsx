import Link from "next/link";
import Waveform from "./components/Waveform";

const experience = [
  {
    role: "software engineering intern",
    org: "capital one",
    dates: "jun 2026 – aug 2026",
  },
  {
    role: "software engineering intern",
    org: "cushman & wakefield",
    dates: "sep 2025 – jan 2026",
  },
  {
    role: "freelance developer",
    org: "sqo marketing",
    dates: "oct 2024 – jun 2025",
  },
  {
    role: "co-owner, operations & technology",
    org: "the collector's bar",
    dates: "apr 2024 – present",
  },
];


const education = [
  {
    school: "Georgetown University",
    degree: "M.S in Data Science",
    dates: "aug 2026 - present",
  },
  {
    school: "Boston University",
    degree: "B.S. in Data Science, Minor in Business Administration",
    dates: "sep 2023 - june 2026",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-surface-border">
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          {/*<p className="font-mono text-xs tracking-[0.2em] text-muted uppercase mb-6">
            Keith Yu (he/him) — Data Science, Software Engineering
          </p>*/}
          <h1 className="font-display text-3xl sm:text-4xl leading-snug mb-6">
            Hey!
          </h1>
          <p className="max-w-xl text-bone-dim text-base leading-relaxed mb-10">
            I'm Keith, a first year Data Science grad student at Georgetown. I build things that combine machine learning, software engineering, and embedded systems.
          </p>

          <Waveform className="h-14 w-full max-w-md mb-10" />

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-bone-dim">
            <a
              className="hover:text-signal transition-colors"
              href="https://github.com/kyu30"
            >
              github ↗
            </a>
            <a
              className="hover:text-signal transition-colors"
              href="https://www.linkedin.com/in/kyu30/"
            >
              linkedin ↗
            </a>
            <a
              className="hover:text-signal transition-colors"
              href="mailto:keithcyu@gmail.com"
            >
              email
            </a>
            <a className="hover:text-signal transition-colors" href="#work">
              experience ↓
            </a>
          </div>
        </div>
      </section>
      {/* EXPERIENCE (compact) */}
      <section
        id="work"
        className="mx-auto max-w-4xl px-6 py-24 border-t border-surface-border"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase mb-10">
          Experience
        </p>
        <ul className="space-y-5">
          {experience.map((job) => (
            <li
              key={job.org}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-surface-border pb-5"
            >
              <div>
                <span className="font-display text-xl">{job.role}</span>
                <span className="text-bone-dim"> — {job.org}</span>
              </div>
              <span className="font-mono text-xs text-muted whitespace-nowrap">
                {job.dates}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-4xl px-6 py-24" id="projects">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase mb-10">
          Projects
        </p>

        <div className="space-y-6">
          <ProjectCard
            href="/projects/fossil-fuel-ads"
            eyebrow="NLP · misinformation research"
            title="Fossil Fuel Native Ads"
            summary="Mapping sponsored climate content down to individual subclaims, so rhetorical strategy becomes something you can measure instead of just sense."
            accent="signal"
          />
          <ProjectCard
            href="/projects/drum-break"
            eyebrow="VAE / VQ-VAE · Generative audio "
            title="Drum Break Sound Gen"
            summary="Teaching a convolutional VAE to hear percussion the way spectrograms see it, then listening to what it gets wrong."
            accent="wave"
          />
        </div>
      </section>

      {/* WORKING ON */}
      <section
        id="working-on"
        className="mx-auto max-w-4xl px-6 py-24 border-t border-surface-border"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase mb-10">
          Working On
        </p>

        <div className="space-y-6">
          <ProjectCard
            eyebrow="Web Development"
            title="The Caravel"
            summary="Georgetown University's only student-run international affairs paper"
            accent = "wave"
          />
          <ProjectCard
            eyebrow="Computer Vision · real-time NLG"
            title="Caster"
            summary="Watching an esports broadcast frame by frame, so every kill and round gets narrated in natural language the instant it happens."
            accent="signal"
          />
          <ProjectCard
            eyebrow="Predictive modeling · fantasy sports"
            title="Fantasy Sports Analyzer"
            summary="Training a model to project player value from historical performance instead of leaning on consensus ADP for fantasy football, then pushing that same forecast into weekly lineup decisions."
            accent="wave"
          />
        </div>
      </section>

      {/* EDUCATION (compact) */}
      <section
        id="school"
        className="mx-auto max-w-4xl px-6 py-24 border-t border-surface-border"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase mb-10">
          Education
        </p>
        <ul className="space-y-5">
          {education.map((edu) => (
            <li
              key={edu.school}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-surface-border pb-5"
            >
              <div>
                <span className="font-display text-xl">{edu.degree}</span>
                <span className="text-bone-dim"> — {edu.school}</span>
              </div>
              <span className="font-mono text-xs text-muted whitespace-nowrap">
                {edu.dates}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mx-auto max-w-4xl px-6 pb-16 pt-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Keith Yu. Built with Next.js.
        </p>
      </footer>
    </main>
  );
}

function ProjectCard({
  href,
  eyebrow,
  title,
  summary,
  accent,
}: {
  href?: string;
  eyebrow: string;
  title: string;
  summary: string;
  accent: "signal" | "wave";
}) {
  const accentColor = accent === "signal" ? "text-signal" : "text-wave";
  const content = (
    <>
      <p className={`font-mono text-xs tracking-[0.15em] uppercase mb-3 ${accentColor}`}>
        {eyebrow}
      </p>
      <h3 className="font-display text-3xl mb-3 flex items-center gap-3">
        {title}
        {href && (
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </h3>
      <p className="text-bone-dim leading-relaxed max-w-xl">{summary}</p>
    </>
  );

  if (!href) {
    return (
      <div className="block rounded-lg border border-surface-border bg-surface px-7 py-8">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group block rounded-lg border border-surface-border bg-surface px-7 py-8 transition-colors hover:border-signal/50"
    >
      {content}
    </Link>
  );
}
