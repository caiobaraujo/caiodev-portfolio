import {
  SiDocker,
  SiDjango,
  SiFramer,
  SiGithub,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Entrega",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub", icon: SiGithub },
      { name: "Deploy", icon: SiNextdotjs },
      { name: "Performance", icon: SiReact },
      { name: "SEO Técnico", icon: SiNextdotjs },
    ],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
          Stack
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Tecnologias organizadas por função.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-cyan-300/25 hover:bg-white/[0.06]"
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>

            <div className="mt-6 grid gap-3">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/75"
                  >
                    <Icon className="text-xl text-cyan-300" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
