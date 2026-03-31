import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GuiaCedulaSection } from "@/components/guia-cedula-section"

export const metadata = {
  title: "Guia Completo: Cédula de Identidade Paraguaia para Brasileiros | BBLaw",
  description:
    "Passo a passo completo e atualizado (2025/2026) para brasileiros obterem a cédula de identidade do Paraguai: documentos, apostila, antecedentes, residência e muito mais.",
}

export default function GuiaCedulaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GuiaCedulaSection />
      <Footer />
    </main>
  )
}
