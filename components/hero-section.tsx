"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const WA_LINK =
  "https://wa.me/5521979901686?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20para%20resid%C3%AAncia%20fiscal%20no%20Paraguai."

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background: GIF animado + overlay escuro ── */}
      <div className="absolute inset-0 z-0">
        {/* GIF de fundo */}
        <img
          src="/hero-bg.gif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Tela escura principal — deixa o GIF bem escuro */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />

        {/* Gradiente bandeira do Paraguai em cima do overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(58,5,3,0.55) 0%,
              rgba(0,0,0,0.35) 15%,
              rgba(0,0,0,0.10) 40%,
              rgba(0,0,0,0.10) 60%,
              rgba(0,0,0,0.35) 85%,
              rgba(0,8,50,0.60) 100%
            )`,
          }}
        />

        {/* Ambient glow sutil */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 35% at 50% 0%, rgba(213,43,30,0.14) 0%, transparent 65%),
              radial-gradient(ellipse 80% 35% at 50% 100%, rgba(0,56,168,0.16) 0%, transparent 65%)
            `,
          }}
        />

        {/* Fade para preto na base */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "28%", background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.95))" }}
        />
      </div>

      {/* ── Logo centralizado ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute z-20"
        style={{ top: "6rem" }}
      >
        <img src="/LogoBranco.svg" alt="BBLaw" className="h-9 w-auto object-contain opacity-80" />
      </motion.div>

      {/* ── Main content ── */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        style={{ paddingTop: "10rem" }}
      >
        <div className="text-center max-w-4xl mx-auto">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-4 mb-12"
          >
            <span className="block h-px w-10" style={{ background: "linear-gradient(90deg,transparent,rgba(213,43,30,0.6))" }} />
            <span className="eyebrow">Assessoria Internacional</span>
            <span className="block h-px w-10" style={{ background: "linear-gradient(90deg,rgba(0,56,168,0.6),transparent)" }} />
          </motion.div>

          {/* ── Headline — efeito Kast na h1 inteira ── */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
            className="heading-kast text-balance"
            style={{ fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)" }}
          >
            Obtenha sua
            <br />
            Residência Paraguaia
            <br />
            com{" "}
            <em style={{ fontStyle: "italic" }}>Segurança</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-10 text-sm font-light text-white/70 max-w-md mx-auto leading-[2] tracking-wide"
          >
            Assessoria completa para brasileiros que desejam obter a residência permanente
            no Paraguai com segurança jurídica e acompanhamento em todas as etapas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Botão principal — preto com borda rotativa PY */}
            <div className="btn-py-ring">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-py-inner">
                Iniciar meu processo
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href="#processo"
              className="inline-flex items-center border border-white/10 text-white/55 text-sm font-light tracking-wide px-9 py-4 rounded-full hover:border-white/22 hover:text-white/55 transition-all duration-300"
            >
              Como funciona
            </a>
          </motion.div>

          {/* Flag accent lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 flex items-center justify-center gap-2"
          >
            <span className="w-5 h-px rounded-full" style={{ backgroundColor: "#D52B1E", opacity: 0.4 }} />
            <span className="w-5 h-px rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.22)" }} />
            <span className="w-5 h-px rounded-full" style={{ backgroundColor: "#0038A8", opacity: 0.4 }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/14 font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/16 to-transparent"
        />
      </motion.div>
    </section>
  )
}
