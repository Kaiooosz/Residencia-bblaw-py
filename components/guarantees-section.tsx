"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ShieldCheck, Eye, Scale, FileCheck, HeartHandshake } from "lucide-react"

const guarantees = [
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Você acompanha cada etapa do processo com clareza e sem surpresas",
  },
  {
    icon: Scale,
    title: "Acompanhamento Legal",
    description: "Advogados especializados cuidam de toda a parte jurídica do início ao fim",
  },
  {
    icon: FileCheck,
    title: "Conformidade Completa",
    description: "Todos os procedimentos seguem rigorosamente a legislação vigente",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Dedicado",
    description: "Linha direta com o escritório durante todo o processo de cidadania",
  },
]

export function GuaranteesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="garantias" className="py-24 bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Garantia BBLaw</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight text-balance">
              Seu processo com segurança jurídica de verdade
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Na BBLaw, não trabalhamos com ciência jurídica superficial. Cada procedimento é realizado conforme a
              legislação vigente, com acompanhamento real por advogados especializados.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                >
                  <guarantee.icon className="w-8 h-8 text-white mb-3" />
                  <h4 className="font-semibold text-white mb-1">{guarantee.title}</h4>
                  <p className="text-sm text-white/70">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square">
              <img src="/legal-documents-contract-signing-professional-busi.jpg" alt="Documentos legais" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-semibold text-foreground">100% Conformidade</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Todos os processos em conformidade com a legislação paraguaia e brasileira
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
