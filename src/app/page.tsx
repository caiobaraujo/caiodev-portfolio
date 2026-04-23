import FadeIn from "@/components/FadeIn";
import MatrixHero from "@/components/MatrixHero";
import GlassCard from "@/components/GlassCard";
import ReactiveConstellation from "@/components/ReactiveConstellation";
import TechBackground from "@/components/TechBackground";
import { projects, stackGroups } from "@/data/portfolio";

const experiences = [
  {
    company: "Buffet Parthenon",
    role: "Desenvolvedor Full Stack",
    period: "Jul 2024 — Atual",
  },
  {
    company: "Startup Cozi.ia",
    role: "Desenvolvedor Full Stack",
    period: "Set 2023 — Out 2024",
  },
  {
    company: "CBMMG",
    role: "Bombeiro Especialista em Desenvolvimento de Sistemas",
    period: "Jul 2025 — Mar 2026",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <section className="relative isolate min-h-screen overflow-hidden">
        <TechBackground />

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.25em] text-white/85 uppercase"
          >
            Caio Araujo
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#projetos"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Projetos
            </a>
            <a
              href="#stack"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Stack
            </a>
            <a
              href="#experiencia"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Experiência
            </a>
            <a
              href="#contato"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Contato
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-300 uppercase">
                Full Stack Developer
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                Construindo experiências web com estética, performance e
                inteligência.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                Desenvolvedor com foco em produtos digitais modernos, interfaces
                premium, backend robusto e soluções com sensação de tecnologia
                avançada sem abrir mão de clareza, velocidade e impacto real.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projetos"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Ver projetos
                </a>

                <a
                  href="https://github.com/caiobaraujo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <GlassCard className="relative overflow-hidden p-3 md:p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_30%)]" />

                <div className="relative">
                  <div className="mb-3 flex items-center justify-between px-3 pt-3">
                    <span className="text-xs uppercase tracking-[0.25em] text-white/45">
                      System Layer
                    </span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-emerald-300">
                      Online
                    </span>
                  </div>

                  <MatrixHero />

                  <div className="grid grid-cols-3 gap-3 px-3 pb-3">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                        Focus
                      </p>
                      <p className="mt-2 text-sm text-white/85">Produto</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                        Mode
                      </p>
                      <p className="mt-2 text-sm text-white/85">Build</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                        Signal
                      </p>
                      <p className="mt-2 text-sm text-white/85">Active</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Projetos
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Cases selecionados para mostrar profundidade.
            </h2>
            <p className="mt-4 text-white/65">
              Em vez de listar tudo, a ideia é destacar poucos projetos com
              contexto, decisão técnica e valor percebido.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <GlassCard className="p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
                  <div>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-semibold md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-white/68">
                      {project.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                      >
                        Ver GitHub
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
                        Problema
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300/80">
                        Solução
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        {project.solution}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/80">
                        Impacto
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Tecnologias organizadas por função.
            </h2>
            <p className="mt-4 text-white/65">
              A leitura fica melhor quando a stack aparece por objetivo:
              interface, backend e entrega.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {stackGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.08}>
              <GlassCard className="p-6">
                <h3 className="text-xl font-semibold">{group.title}</h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="experiencia" className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Experiência
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Engenharia aplicada a contexto real.
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {experiences.map((item, index) => (
            <FadeIn key={item.company} delay={index * 0.08}>
              <GlassCard className="p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.company}</h3>
                    <p className="mt-1 text-white/65">{item.role}</p>
                  </div>
                  <span className="text-sm text-cyan-300/80">
                    {item.period}
                  </span>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <GlassCard className="overflow-hidden p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                  Contato
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Vamos construir algo relevante.
                </h2>
                <p className="mt-4 max-w-2xl text-white/65">
                  Estou aberto a oportunidades onde engenharia, produto,
                  performance e experiência do usuário precisem trabalhar
                  juntos.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:calobrega@gmail.com"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Enviar e-mail
                </a>

                <a
                  href="https://github.com/caiobaraujo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </section>
    </main>
  );
}
