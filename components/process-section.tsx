"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Entre em contato conosco. Analisamos seu caso e explicamos todas as possibilidades e requisitos.",
    color: "#D52B1E",
  },
  {
    number: "02",
    title: "Documentação",
    description:
      "Orientamos sobre todos os documentos necessários e auxiliamos na preparação completa.",
    color: "rgba(255,255,255,0.5)",
  },
  {
    number: "03",
    title: "Protocolo",
    description:
      "Nossa equipe no Paraguai realiza todos os protocolos e procedimentos oficiais necessários.",
    color: "#0038A8",
  },
  {
    number: "04",
    title: "Finalização",
    description:
      "Acompanhamos até a conclusão final do seu processo com toda segurança jurídica.",
    color: "#D52B1E",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="processo" className="py-32 bg-transparent relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-24"
        >
          <span className="eyebrow block mb-6">Como funciona</span>
          <h2
            className="heading-kast mt-5 text-balance"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            Passo a passo{" "}
            <em style={{ fontStyle: "italic" }}>simples e organizado</em>
          </h2>
        </motion.div>

        {/* Steps — horizontal line with nodes on desktop */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-px bg-white/8 origin-left"
          />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative group"
              >
                {/* Node */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="relative w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-125"
                    style={{ borderColor: step.color + "60" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: step.color, opacity: 0.7 }}
                    />
                  </div>
                  {/* Step number */}
                  <span
                    className="text-[10px] font-light tracking-[0.25em]"
                    style={{ color: step.color, opacity: 0.5 }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-light text-white/75 mb-3 tracking-tight group-hover:text-white/95 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-white/52 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Accent line below */}
                <div
                  className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${step.color}50, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-3 border border-white/10 text-white/70 text-sm font-light tracking-wide px-8 py-4 rounded-full hover:border-white/25 hover:text-white/70 transition-all duration-300"
          >
            Iniciar meu processo agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
