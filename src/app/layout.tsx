import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seu-dominio.com"),
  title: {
    default: "Caio Araujo | Full Stack Developer",
    template: "%s | Caio Araujo",
  },
  description:
    "Portfólio profissional de Caio Araujo, desenvolvedor full stack com foco em interfaces premium, backend robusto, integrações com IA, performance, SEO técnico e experiência do usuário.",
  keywords: [
    "Caio Araujo",
    "Full Stack Developer",
    "Desenvolvedor Full Stack",
    "Laravel",
    "Python",
    "Next.js",
    "React",
    "Portfólio desenvolvedor",
    "Belo Horizonte",
    "Frontend",
    "Backend",
    "TypeScript",
  ],
  authors: [{ name: "Caio Araujo" }],
  creator: "Caio Araujo",
  category: "technology",
  alternates: {
    canonical: "https://seu-dominio.com",
  },
  openGraph: {
    title: "Caio Araujo | Full Stack Developer",
    description:
      "Projetos, experiência e engenharia orientada a produto com foco em performance, design e impacto real.",
    url: "https://seu-dominio.com",
    siteName: "Caio Araujo Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Araujo | Full Stack Developer",
    description:
      "Projetos, experiência e engenharia orientada a produto com foco em performance, design e impacto real.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caio Araujo",
  jobTitle: "Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  email: "mailto:calobrega@gmail.com",
  url: "https://seu-dominio.com",
  sameAs: [
    "https://github.com/caiobaraujo",
    "https://linkedin.com/in/caio-araujo-986801221",
  ],
  knowsAbout: [
    "Laravel",
    "Python",
    "Next.js",
    "TypeScript",
    "Frontend Development",
    "Backend Development",
    "AI Integration",
    "SEO",
    "Performance Optimization",
    "User Experience",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
