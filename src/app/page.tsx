import ExperienceSection from "@/components/ExperienceSection";
import MatrixHero from "@/components/MatrixHero";
import TechBackground from "@/components/TechBackground";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

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
            </div>

            <div className="flex justify-center lg:justify-end">
              <MatrixHero />
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />

      <StackSection />

      <ExperienceSection />

      <ContactSection />
    </main>
  );
}
