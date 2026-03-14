"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flag, CreditCard, Building2, GraduationCap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Flag,
    tag: "01",
    title: "Cidadania Paraguaia",
    description:
      "Assessoria completa para obtenção da cidadania paraguaia com acompanhamento em todas as etapas.",
    items: [
      "Preparação e conferência de documentos",
      "Orientação sobre requisitos legais",
      "Protocolos presenciais e administrativos",
      "Auxílio com documentos brasileiros",
      "Consultoria personalizada",
    ],
    accentColor: "#D52B1E",
    gradientFrom: "from-[#D52B1E]/8",
  },
  {
    icon: CreditCard,
    tag: "02",
    title: "Abertura de Conta Bancária",
    description: "Suporte completo para criar conta bancária paraguaia sem complicações.",
    items: [
      "Preparação da documentação",
      "Acompanhamento no banco",
      "Orientações para não residentes",
      "Consultoria sobre bancos",
    ],
    accentColor: "rgba(255,255,255,0.5)",
    gradientFrom: "from-white/4",
  },
  {
    icon: Building2,
    tag: "03",
    title: "Abertura de Empresa",
    description: "Assessoria total para empreender no Paraguai com segurança jurídica.",
    items: [
      "Registro inicial da empresa",
      "Informações sobre exigências legais",
      "Escolha do tipo de empresa",
      "Documentação necessária",
      "Acompanhamento até formalização",
    ],
    accentColor: "#0038A8",
    gradientFrom: "from-[#0038A8]/8",
  },
  {
    icon: GraduationCap,
    tag: "04",
    title: "Validação de Diploma",
    description: "Reconhecimento oficial de diploma universitário brasileiro no Paraguai.",
    items: [
      "Assessoria sobre documentos exigidos",
      "Preparação e envio do processo",
      "Orientação sobre equivalência",
      "Acompanhamento até validação",
    ],
    accentColor: "#D52B1E",
    gradientFrom: "from-[#D52B1E]/6",
  },
]

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solucao" className="py-32 bg-transparent relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="eyebrow block mb-6">Nossos Serviços</span>
          <h2
            className="heading-kast mt-5 text-balance"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            Soluções completas para{" "}
            <em style={{ fontStyle: "italic" }}>brasileiros no Paraguai</em>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
              className={`relative bg-black bg-gradient-to-br ${service.gradientFrom} to-transparent p-10 group hover:bg-white/[0.015] transition-all duration-500`}
            >
              {/* Tag */}
              <span className="text-[10px] font-light tracking-[0.3em] text-white/20 mb-8 block">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="mb-6">
                <service.icon
                  className="w-6 h-6 transition-colors duration-300"
                  strokeWidth={1}
                  style={{ color: service.accentColor, opacity: 0.5 }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-light text-white/75 mb-3 tracking-tight group-hover:text-white/95 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light text-white/52 leading-relaxed mb-8 group-hover:text-white/65 transition-colors duration-300">
                {service.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-8" />

              {/* Items */}
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-1 h-1 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: service.accentColor, opacity: 0.6 }}
                    />
                    <span className="text-sm font-light text-white/55 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-sm font-light opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ color: service.accentColor }}
                >
                  Saber mais
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(90deg, ${service.accentColor}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
