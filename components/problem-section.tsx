"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Eye, Zap, Users, Shield, Clock } from "lucide-react"

const reasons = [
  {
    icon: MessageSquare,
    title: "Suporte em Português",
    description:
      "Comunicação fácil e suporte completo em português. Nossa equipe entende suas necessidades e facilita todo o processo.",
  },
  {
    icon: Eye,
    title: "Processo Transparente",
    description:
      "Explicamos cada etapa com clareza. Você acompanha todo o desenvolvimento e sabe exatamente o que está acontecendo.",
  },
  {
    icon: Zap,
    title: "Agilidade e Eficiência",
    description:
      "Evitamos gastos desnecessários e erros que atrasam a documentação. Nossa experiência garante processos mais rápidos.",
  },
  {
    icon: Users,
    title: "Parceiros Locais",
    description:
      "Equipe especializada no Paraguai com conhecimento profundo das leis e procedimentos locais.",
  },
  {
    icon: Shield,
    title: "Processo Seguro",
    description:
      "Procedimentos organizados e documentados. Garantimos segurança jurídica em todas as etapas do processo.",
  },
  {
    icon: Clock,
    title: "Acompanhamento Total",
    description:
      "Atendimento de ponta a ponta com atualização constante sobre seu processo e exigências legais.",
  },
]

// Cores da bandeira do Paraguai: vermelho #D52B1E, branco, azul #0038A8
const cardGradients = [
  "from-[#D52B1E]/12 via-transparent to-transparent",
  "from-white/6 via-transparent to-transparent",
  "from-[#0038A8]/12 via-transparent to-transparent",
  "from-[#D52B1E]/10 via-[#0038A8]/6 to-transparent",
  "from-[#0038A8]/10 via-transparent to-transparent",
  "from-[#D52B1E]/8 via-white/4 to-[#0038A8]/8",
]

const cardBorders = [
  "border-[#D52B1E]/20",
  "border-white/10",
  "border-[#0038A8]/20",
  "border-[#D52B1E]/15",
  "border-[#0038A8]/18",
  "border-white/8",
]

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="problema" className="py-32 bg-transparent relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <span className="eyebrow block mb-6">Por que nos escolher</span>
          <h2
            className="heading-kast mt-5 text-balance"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            Trabalhamos em parceria com{" "}
            <em style={{ fontStyle: "italic" }}>profissionais especializados</em>{" "}
            no Paraguai
          </h2>
          <p className="mt-5 text-sm font-light text-white/52 leading-relaxed max-w-lg">
            Para garantir rapidez, segurança e orientação passo a passo em cada etapa do seu processo.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className={`relative bg-black/55 bg-gradient-to-br ${cardGradients[index]} p-8 group hover:bg-black/40 transition-all duration-500 cursor-default`}
            >
              {/* Thin border glow on hover */}
              <div className={`absolute inset-0 border ${cardBorders[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <reason.icon className="w-5 h-5 text-white/52 group-hover:text-white/70 transition-colors duration-300" strokeWidth={1} />
                </div>

                {/* Content */}
                <h3 className="text-base font-light text-white/75 mb-3 tracking-tight group-hover:text-white/95 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm font-light text-white/52 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Bottom accent line — cores PY */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{
                  background:
                    index % 3 === 0
                      ? "linear-gradient(90deg, #D52B1E, transparent)"
                      : index % 3 === 1
                      ? "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)"
                      : "linear-gradient(90deg, #0038A8, transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
