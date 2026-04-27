import ExperienceSection from "@/components/ExperienceSection";
import MatrixHero from "@/components/MatrixHero";
import TechBackground from "@/components/TechBackground";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-24">
        <TechBackground />
        <Header />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-10">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_460px]">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-300 uppercase">
                Desenvolvedor Full Stack
              </div>

              <h1 className="mt-6 max-w-[780px] text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
                Construindo experiências web com estética, performance e
                inteligência.
              </h1>

              <p className="mt-6 max-w-[680px] text-base leading-8 text-white/68 md:text-lg">
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

            <div className="flex justify-center lg:justify-end">
              <MatrixHero />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
            Sobre mim
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Engenharia com foco em experiência e produto.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/68 md:text-lg">
            Sou desenvolvedor full stack com experiência em backend, interfaces
            modernas e integrações com IA. Gosto de construir soluções que não
            apenas funcionem, mas transmitam qualidade, clareza e percepção de
            valor para quem usa.
          </p>
        </div>
      </section>

      <ProjectsSection />

      <StackSection />

      <ExperienceSection />

      <section id="contato" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md shadow-[0_10px_50px_rgba(0,0,0,0.35)] md:p-10">
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
                performance e experiência do usuário precisem trabalhar juntos.
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
        </div>
      </section>
    </main>
  );
}
