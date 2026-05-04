import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
            Contato
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Vamos conversar sobre uma oportunidade?
          </h2>

          <p className="mt-5 text-base leading-8 text-white/65">
            Envie uma mensagem ou fale comigo diretamente pelo WhatsApp.
          </p>

          <a
            href="https://wa.me/5532984482369"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/15"
          >
            <FaWhatsapp className="text-xl" />
            Falar no WhatsApp
          </a>
        </div>

        <form
          action="mailto:calobrega@gmail.com"
          method="post"
          encType="text/plain"
          className="grid gap-4"
        >
          <div>
            <label className="text-sm text-white/60">Seu e-mail</label>
            <input
              name="email"
              type="email"
              required
              placeholder="seuemail@email.com"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/40"
            />
          </div>

          <div>
            <label className="text-sm text-white/60">Mensagem</label>
            <textarea
              name="mensagem"
              required
              rows={5}
              placeholder="Escreva sua mensagem..."
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/40"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
