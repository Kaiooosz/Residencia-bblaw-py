"use client"

import { Instagram, Linkedin, Youtube, MessageCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const WA_LINK =
  "https://wa.me/5521979901686?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20para%20resid%C3%AAncia%20fiscal%20no%20Paraguai."

const quickLinks = [
  { label: "Início", href: "#hero" },
  { label: "Por que Paraguai", href: "#problema" },
  { label: "Serviços", href: "#solucao" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: WA_LINK, label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ── Gradiente bandeira do Paraguai — espelhado ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(
            to bottom,
            #000000 0%,
            #000000 40%,
            #010614 75%,
            #001050 100%
          )`,
        }}
      />
      {/* Glow vermelho sutil no topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(213,43,30,0.4) 30%, rgba(255,255,255,0.12) 50%, rgba(0,56,168,0.4) 70%, transparent)",
        }}
      />
      {/* Glow azul no rodapé */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,56,168,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Conteúdo principal ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-12">

        {/* Top — Logo + tagline grande */}
        <div className="mb-20 pb-16 border-b border-white/6">
          <Link href="/" className="inline-block mb-8">
            <img src="/LogoBranco.svg" alt="BBLaw" className="h-10 w-auto object-contain opacity-75" />
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2
              className="heading-kast max-w-xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Sua cidadania paraguaia
              <br />
              <em style={{ fontStyle: "italic" }}>começa aqui.</em>
            </h2>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <div className="btn-py-ring">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-py-inner">
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Coluna 1 — Sobre */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Bezerra Borges Advocacia</p>
            <p className="text-sm font-light text-white/52 leading-[2] max-w-xs">
              Especialistas em cidadania paraguaia, abertura de empresas e estruturação jurídica
              internacional para brasileiros.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-white/40 hover:border-white/22 hover:text-white/70 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <p className="eyebrow mb-5">Navegação</p>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-light text-white/52 hover:text-white/82 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <p className="eyebrow mb-5">Contato</p>
            <div className="space-y-4">
              {[
                { label: "WhatsApp", value: "+55 21 97990-1686", href: WA_LINK },
                { label: "E-mail", value: "contato@bezerraborges.com.br", href: "mailto:contato@bezerraborges.com.br" },
                { label: "Horário", value: "Seg–Sex, 9h às 18h", href: null },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-light mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      className="text-sm font-light text-white/55 hover:text-white/80 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-light text-white/55">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bandeira — 3 traços decorativos */}
        <div className="flex items-center gap-2 mb-10">
          <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(213,43,30,0.35), transparent)" }} />
          <span className="h-px w-8" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(0,56,168,0.35))" }} />
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-light text-white/25 tracking-wide">
            © 2025 Bezerra Borges Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Política de Privacidade", "Termos de Uso"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] font-light text-white/25 hover:text-white/50 transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
