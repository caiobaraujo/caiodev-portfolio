export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/8 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="group flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/90">
            Caio Araujo
          </span>
        </a>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 md:flex">
          {[
            ["Projetos", "#projetos"],
            ["Stack", "#stack"],
            ["Experiência", "#experiencia"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/8 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
