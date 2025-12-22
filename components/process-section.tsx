"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, ClipboardList, FileCheck, Calendar, Stamp, CreditCard, Flag } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Consulta de Viabilidade",
    description: "Analisamos seu caso e verificamos todos os requisitos para iniciar o processo",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Checklist Completo",
    description: "Preparamos uma lista detalhada de todos os documentos necessários",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Preparação Jurídica",
    description: "Validamos e preparamos toda a documentação de forma antecipada",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Agendamento da Viagem",
    description: "Organizamos sua ida ao Paraguai com toda a logística necessária",
  },
  {
    number: "05",
    icon: Stamp,
    title: "Protocolos Oficiais",
    description: "Realizamos todos os registros e protocolos junto aos órgãos",
  },
  {
    number: "06",
    icon: CreditCard,
    title: "Cartão de Residência",
    description: "Emissão do seu cartão de residência paraguaia",
  },
  {
    number: "07",
    icon: Flag,
    title: "Cidadania Permanente",
    description: "Acompanhamento até a obtenção da cidadania permanente completa",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="processo" className="py-24 bg-secondary/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como Funciona</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight">
            Etapas do Processo
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Um processo claro, transparente e eficiente do início ao fim
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px hidden md:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} pl-20 lg:pl-0`}>
                  <div
                    className={`bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    } max-w-md`}
                  >
                    <span className="text-5xl font-serif font-bold text-primary/20">{step.number}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2">{step.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg z-10">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
