"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ShieldCheck, Eye, Scale, FileCheck, HeartHandshake, Zap } from "lucide-react"

const guarantees = [
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Você acompanha cada etapa do processo com clareza e sem surpresas.",
    color: "rgba(255,255,255,0.4)",
  },
  {
    icon: Scale,
    title: "Acompanhamento Legal",
    description: "Profissionais especializados cuidam de toda a parte jurídica do início ao fim.",
    color: "#0038A8",
  },
  {
    icon: FileCheck,
    title: "Conformidade Completa",
    description: "Todos os procedimentos seguem rigorosamente a legislação vigente.",
    color: "#D52B1E",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Dedicado",
    description: "Linha direta com o escritório durante todo o processo.",
    color: "rgba(255,255,255,0.4)",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica",
    description: "Procedimentos organizados e documentados em todas as etapas.",
    color: "#D52B1E",
  },
  {
    icon: Zap,
    title: "Processo Ágil",
    description: "Experiência que garante menos erros e processos mais rápidos.",
    color: "#0038A8",
  },
]

export function GuaranteesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="garantias" className="py-32 bg-transparent border-t border-white/5 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <span className="eyebrow block mb-6">Nossas Garantias</span>
          <h2
            className="heading-kast mt-5 text-balance"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            Seu processo com{" "}
            <em style={{ fontStyle: "italic" }}>segurança jurídica</em>{" "}
            de verdade
          </h2>
          <p className="mt-5 text-sm font-light text-white/55 leading-relaxed max-w-lg">
            Cada procedimento é realizado conforme a legislação vigente, com acompanhamento
            real por profissionais especializados.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-black/55 p-8 group hover:bg-black/40 transition-all duration-500 cursor-default"
            >
              <item.icon
                className="w-5 h-5 mb-6 transition-all duration-300"
                strokeWidth={1}
                style={{ color: item.color, opacity: 0.6 }}
              />
              <h4 className="text-base font-light text-white/75 mb-2 group-hover:text-white/95 transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-sm font-light text-white/52 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                {item.description}
              </p>

              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(90deg, ${item.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
