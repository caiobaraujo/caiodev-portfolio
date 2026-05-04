import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title} | Caio Araujo`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_30%),linear-gradient(180deg,#050816_0%,#070b1d_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
          <a
            href="/#projetos"
            className="text-sm text-cyan-300/80 transition hover:text-cyan-200"
          >
            ← Voltar para projetos
          </a>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Estudo de caso
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              {project.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-4">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  preload="metadata"
                  className="aspect-video w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-center text-white/55">
                  Vídeo demonstrativo do projeto em breve.
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
                Objetivo
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {project.objective}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-violet-300/80">
                Problema
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {project.problem}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/80">
                Impacto
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {project.impact}
              </p>
            </div>
          </div>

          <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Como foi desenvolvido
            </h2>

            <div className="mt-8 space-y-5">
              {project.details.map((detail) => (
                <p key={detail} className="text-base leading-8 text-white/68">
                  {detail}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Decisão técnica principal
            </h2>

            <p className="mt-6 text-base leading-8 text-white/68">
              A decisão central deste projeto foi tratar tecnologia como meio
              para resolver um problema de produto. A arquitetura foi pensada
              para manter clareza, evolução futura e boa experiência para o
              usuário final.
            </p>
          </section>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Ver GitHub
            </a>

            <a
              href="/#contato"
              className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
