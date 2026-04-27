"use client";

import { useState } from "react";

const experiences = [
  {
    empresa: "CBMMG",
    cargo: "Bombeiro Especialista em Desenvolvimento de Sistemas",
    periodo: "Jul 2025 — Mar 2026",
    logo: "CB",
    descricao:
      "Atuação em comunicações e TI, com suporte e manutenção de sistemas, infraestrutura de redes, telefonia e hardware.",
    detalhes: [
      "Atuação em suporte e manutenção de sistemas em ambiente crítico.",
      "Participação em estágio técnico especializado focado no ciclo de vida de desenvolvimento de software.",
      "Colaboração em rotinas de infraestrutura, redes e comunicação operacional.",
      "Aplicação de conhecimentos técnicos para apoiar disponibilidade e continuidade dos serviços.",
    ],
  },
  {
    empresa: "Buffet Parthenon",
    cargo: "Desenvolvedor Full Stack",
    periodo: "Jul 2024 — Atual",
    logo: "BP",
    descricao:
      "Desenvolvimento e manutenção de sistema completo para eventos, clientes e equipe interna.",
    detalhes: [
      "Construção e manutenção de sistema de gerenciamento para eventos e clientes.",
      "Implementação de backend com Laravel, buscando performance e organização.",
      "Realização de code reviews e testes para manter estabilidade em produção.",
      "Definição de requisitos técnicos em parceria com a administração.",
    ],
  },
  {
    empresa: "Startup Cozi.ia",
    cargo: "Desenvolvedor Full Stack",
    periodo: "Set 2023 — Out 2024",
    logo: "AI",
    descricao:
      "Desenvolvimento de chatbot com IA para automação de atendimento via WhatsApp.",
    detalhes: [
      "Desenvolvimento de chatbot com integração de IA e OpenAI.",
      "Aplicação de NLP e engenharia de prompt para melhorar interações.",
      "Backend estruturado em Python com Django.",
      "Desenvolvimento de interfaces interativas em Vue.js.",
      "Atuação em melhorias de produto e suporte direto ao cliente.",
    ],
  },
  {
    empresa: "Move Your Body",
    cargo: "Estagiário",
    periodo: "Jan 2023 — Jun 2023",
    logo: "MY",
    descricao:
      "Participação em sistemas GovTech para gerenciamento de projetos esportivos.",
    detalhes: [
      "Contribuição no desenvolvimento de sistemas voltados a projetos esportivos.",
      "Participação no ciclo de análise, implementação e testes.",
      "Contato com desenvolvimento aplicado a contexto GovTech.",
    ],
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
          Experiência
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Experiência prática em produto, sistemas e ambientes reais.
        </h2>
        <p className="mt-4 text-white/65">
          Uma trajetória combinando desenvolvimento full stack, automação, IA,
          suporte técnico e construção de sistemas para necessidades reais.
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.empresa}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_50px_rgba(0,0,0,0.35)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full flex-col gap-5 p-6 text-left md:flex-row md:items-center md:justify-between"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-semibold text-cyan-300">
                    {item.logo}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.empresa}</h3>
                    <p className="mt-1 text-white/65">{item.cargo}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
                      {item.descricao}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:flex-col md:items-end">
                  <span className="text-sm text-cyan-300/80">
                    {item.periodo}
                  </span>
                  <span className="text-sm text-white/50">
                    {isOpen ? "Fechar" : "Ver detalhes"}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-white/10 px-6 pb-6 pt-2 md:pl-[104px]">
                  <div className="grid gap-3">
                    {item.detalhes.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-7 text-white/68"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
