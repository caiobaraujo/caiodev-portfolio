import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
          Projetos
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Estudos de caso com foco em problema, solução e impacto.
        </h2>
        <p className="mt-4 text-white/65">
          Cada projeto apresenta contexto, decisões técnicas e uma área preparada
          para demonstração em vídeo.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md"
          >
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
              <div className="p-6 md:p-8">
                <p className="text-sm text-cyan-300/80">{project.subtitle}</p>

                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {project.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
                      Objetivo
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {project.objective}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300/80">
                      Problema
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {project.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/80">
                      Como resolvi
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`/projetos/${project.slug}`}
                    className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    Ver estudo de caso
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 bg-black/20 p-6 lg:border-l lg:border-t-0 md:p-8">
                <div className="flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#050816]">
                  {"video" in project && project.video ? (
                    <video
                      src={project.video}
                      controls
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="p-8 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                        ▶
                      </div>
                      <p className="mt-5 text-sm text-white/60">
                        Área reservada para vídeo demonstrando o projeto em
                        funcionamento.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
