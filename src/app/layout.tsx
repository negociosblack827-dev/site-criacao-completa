import type { Metadata } from "next";
import "./globals.css";
// Import all available fonts for AI usage
import "../lib/fonts";

export const metadata: Metadata = {
  title: "AI Creative Studio - Plataforma Completa de Criação com IA",
  description: "Crie imagens, vídeos, áudio, sites e apps com inteligência artificial. Geração automática, clonagem de sites, TTS avançado e chat inteligente.",
  keywords: [
    "IA",
    "inteligência artificial",
    "geração de imagens",
    "geração de vídeos", 
    "text-to-speech",
    "TTS",
    "clonagem de sites",
    "criação de sites",
    "chat GPT",
    "OpenAI",
    "ElevenLabs",
    "Next.js",
    "React",
    "Tailwind CSS"
  ],
  authors: [{ name: "AI Creative Studio Team" }],
  creator: "AI Creative Studio",
  publisher: "AI Creative Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aicreativestudio.com",
    siteName: "AI Creative Studio",
    title: "AI Creative Studio - Plataforma Completa de Criação com IA",
    description: "Crie imagens, vídeos, áudio, sites e apps com inteligência artificial. Geração automática, clonagem de sites, TTS avançado e chat inteligente.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Creative Studio - Plataforma Completa de Criação com IA",
    description: "Crie imagens, vídeos, áudio, sites e apps com inteligência artificial.",
    images: ["/og-image.png"],
    creator: "@aicreativestudio",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-geist-sans antialiased">
        {children}
      </body>
    </html>
  );
}