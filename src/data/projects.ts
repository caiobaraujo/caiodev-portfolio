export const projects = [
  {
    slug: "findjobapp",
    title: "FindJobApp",
    subtitle: "Descoberta determinística de vagas com matching transparente",
    objective:
      "Criar uma plataforma que resolva o problema de busca de emprego de forma transparente, usando matching determinístico e IA controlada apenas para auxiliar na personalização de currículos.",
    problem:
      "Buscas de emprego são fragmentadas, barulhentas e tendenciosas para as mesmas plataformas visíveis. Candidatos enviam currículos genéricos sem ajuste estratégico para cada vaga.",
    solution:
      "Desenvolvi um sistema Laravel + Vue/Inertia com descoberta determinística de vagas, matching baseado em palavras-chave extraídas do currículo, e geração controlada de variantes de currículo via Gemini API apenas quando o usuário solicita explicitamente.",
    impact:
      "O projeto demonstra domain modeling centrado em JobLead, pipelines determinísticos inspecionáveis, e uso ético de IA com fronteiras claras - sem AI ranking ou matching opaco.",
    stack: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Gemini API", "Pest"],
    github: "https://github.com/caiobaraujo/FindJobApp",
    details: [
      "Estruturei o modelo de domínio com JobLead como entidade central, separando discovery, matching e geração de currículo em camadas distintas.",
      "A descoberta de vagas é puramente determinística - cada fonte tem parser específico, sem crawling genérico ou enriquecimento por IA.",
      "O workspace do usuário mostra leads organizados por utilidade, priorizando vagas com maior overlap de habilidades primeiro.",
      "ResumeVariant é gerado apenas sob demanda do usuário, em três modos: faithful (original), ats_boost (otimizado) e ats_safe (conservador).",
      "PDF export renderiza variantes já armazenadas, sem chamadas adicionais à API - garantindo rastreabilidade e previsibilidade.",
    ],
    video: "/videos/findjobapp.mp4",
  },
  {
    slug: "venda-odonto",
    title: "VendaOdonto",
    subtitle: "Pipeline de hiper-personalização para prospecção B2B",
    objective:
      "Aumentar taxas de conversão em prospecção fria no setor de saúde através de hiper-personalização dinâmica e automação de UI.",
    problem:
      "Abordagens genéricas são ignoradas ou bloqueadas. Donos de clínicas recebem dezenas de mensagens automáticas diariamente e desenvolveram 'filtro' para textos longos e padronizados.",
    solution:
      "Construí um pipeline Python que extrai leads do Google Maps, gera landing pages dinâmicas via URL Params (injetando nome da empresa e bairro), automatiza screenshots mobile com Selenium para prova visual, e gerencia funil via CRM em CSV.",
    impact:
      "O sistema quebra o padrão de spam com imagens personalizadas por lead, usa ancoragem de preço (R$ 26,90 vs alto valor de retenção), e está arquitetado para VPS ou integração com n8n.",
    stack: ["Python", "Selenium", "Pandas", "Tailwind CSS", "CSV"],
    github: "https://github.com/caiobaraujo/VendaOdonto",
    details: [
      "Desenvolvi o orquestrador automacao_total.py que gerencia o ciclo completo: URL params → screenshot → update do CRM.",
      "A landing page usa JavaScript para ler parâmetros da URL e injetar dinamicamente nome da empresa e bairro no DOM, criando experiência única por lead.",
      "O lead_scraper.py coleta dados brutos de clínicas em bairros estratégicos de BH (Lourdes, Savassi, Santo Agostinho) via geolocalização.",
      "crm_vendas.py mantém persistência em CSV com status do funil (Pendente, Enviado, Interessado) para rastreabilidade.",
      "Utilizei Selenium em modo headless para simular iPhone 12, garantindo screenshots realistas e escaláveis.",
    ],
    video: "/videos/venda_odonto.mp4",
  },
  {
    slug: "smart-blog",
    title: "Smart Blog",
    subtitle:
      "Blog engine com workflow assistido por IA para criar posts técnicos",
    objective:
      "Criar um blog pessoal que agilizasse a transformação de anotações de estudo em posts técnicos estruturados, mantendo controle editorial humano.",
    problem:
      "Profissionais de tecnologia acumulam anotações de estudo em formatos desconectados, mas o processo de transformá-las em conteúdo público é lento e trabalhoso.",
    solution:
      "Desenvolvi um blog Next.js que integra Google Gemini para refinar notas de estudo em posts bem estruturados, mantendo o desenvolvedor no controle do que é publicado.",
    impact:
      "O projeto demonstra integração ética de IA em workflow de conteúdo, mantendo qualidade editorial enquanto reduz tempo de produção de rascunho para publicação.",
    stack: ["Next.js", "TypeScript", "MDX", "Google Gemini AI", "Tailwind CSS"],
    github: "https://github.com/caiobaraujo/smart-blog",
    details: [
      "A arquitetura separa conteúdo em MDX (armazenado em content/posts/) do sistema de geração assistida por IA.",
      "Implementei um gerador que recebe notas brutas e sugere estrutura, título, resumo e seções organizadas.",
      "O desenvolvedor revisa e edita o post gerado antes de commit - garantindo voz autoral e precisão técnica.",
      "Usei rotas dinâmicas do Next.js App Router para renderizar posts com base no slug do arquivo MDX.",
      "O blog mantém performance estática com geração em build time (SSG), ideal para Vercel.",
    ],
    video: "/videos/blog_ai.mp4",
  },
  {
    slug: "streetsmart-bh",
    title: "StreetSmart BH",
    subtitle: "Recomendação híbrida com ML e NLP para empreendedores locais",
    objective:
      "Aumentar a assertividade de vendas de empreendedores de rua em Belo Horizonte usando predição de produtos com maior probabilidade de lucro baseada em contexto.",
    problem:
      "Empreendedores locais perdem oportunidades de venda por não conseguir antecipar quais produtos terão maior demanda baseado em condições climáticas e eventos da cidade.",
    solution:
      "Construí um sistema Python com Streamlit que usa XGBoost para prever demanda e NLP para classificar eventos da PBH/Sympla, cruzando com dados em tempo real da OpenWeather API para recomendar produtos contextualizados.",
    impact:
      "O projeto prova viabilidade de recommendation engine acessível para pequenos negócios, combinando dados públicos (clima + eventos) com ML prático sem exigir infraestrutura cara.",
    stack: [
      "Python",
      "XGBoost",
      "NLP",
      "Streamlit",
      "OpenWeather API",
      "Pandas",
    ],
    github: "https://github.com/caiobaraujo/StreetSmart-BH",
    details: [
      "Modelo de ML treinado com dados históricos de vendas + variáveis externas (temperatura, chuva, tipo de evento).",
      "Pipeline de NLP processa descrições de eventos para categorizar automaticamente (show, feira, feriado, etc.).",
      "Recomendação híbrida combina predição do XGBoost com regras de negócio (ex: guarda-chuva se chuva > 50%).",
      "Interface em Streamlit permite ao empreendedor inserir local e horário para receber top-3 produtos sugeridos.",
      "Arquitetura clean com separação clara entre engines de predição, serviços externos e camada de apresentação.",
    ],
    video: "/videos/streetsmart_bh.mp4",
  },
];
