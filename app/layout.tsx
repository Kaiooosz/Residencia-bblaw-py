import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: "BBLaw | Cidadania Paraguaia com Segurança Jurídica",
  description:
    "Assessoria jurídica completa para obtenção da cidadania paraguaia. Documentação, protocolos oficiais, residência e cidadania com acompanhamento especializado.",
  keywords: ["cidadania paraguaia", "residência paraguai", "assessoria jurídica", "BBLaw", "negócios internacionais"],
  generator: "v0.app",
  openGraph: {
    title: "BBLaw | Cidadania Paraguaia",
    description: "Sua liberdade internacional começa aqui.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#1a2e4a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
