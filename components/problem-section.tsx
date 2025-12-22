"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe2, Building2, TrendingUp, FileCheck, ShieldCheck, XCircle } from "lucide-react"

const benefits = [
  { icon: Globe2, title: "Acesso ao Mercosul", description: "Livre circulação e residência em países do bloco" },
  { icon: FileCheck, title: "Processo Ágil", description: "Menos burocracia comparado a outros países" },
  { icon: Building2, title: "Abertura de Empresas", description: "Facilidade para empreender e investir" },
  { icon: TrendingUp, title: "Estabilidade", description: "Sistema seguro e estável para estrangeiros" },
  { icon: ShieldCheck, title: "Segurança Jurídica", description: "Legislação clara e bem estabelecida" },
]

const problems = [
  "Erros documentais que invalidam o processo",
  "Atrasos por desconhecimento dos procedimentos",
  "Processos indeferidos por falta de acompanhamento",
  "Perda de prazos importantes",
  "Gastos desnecessários com retrabalho",
]

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="problema" className="py-24 bg-secondary/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-graphite uppercase tracking-wider">Por que o Paraguai?</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight text-balance">
            Por que cada vez mais brasileiros estão buscando a cidadania paraguaia?
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-graphite/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-graphite/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-graphite/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-graphite" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-graphite rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-6">
                Mas tentar fazer sozinho pode ser arriscado
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                O processo de cidadania paraguaia exige conhecimento técnico, documentação específica e acompanhamento
                presencial. Sem assessoria especializada, você pode enfrentar:
              </p>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 rounded-xl p-4"
                >
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-zinc-300">{problem}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
