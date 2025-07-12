import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "100 Receitas Proteicas - Transforme Sua Alimentação",
  description:
    "Descubra 100 receitas proteicas deliciosas e práticas, criadas por nutricionista especializada. Ingredientes simples, preparo rápido e resultados garantidos.",
  keywords: "receitas proteicas, alimentação saudável, nutrição, massa muscular, emagrecimento",
  authors: [{ name: "Talia Fernanda - Nutricionista" }],
  openGraph: {
    title: "100 Receitas Proteicas - Transforme Sua Alimentação",
    description: "Receitas práticas e saborosas para transformar sua alimentação",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
