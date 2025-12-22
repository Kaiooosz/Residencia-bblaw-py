"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Users, Scale, Plane, MessageSquare, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    icon: FileText,
    title: "Assessoria Completa",
    description: "Do início ao fim, cuidamos de toda a burocracia para você",
  },
  {
    icon: Scale,
    title: "Preparação Documental",
    description: "Validação e preparação de todos os documentos necessários",
  },
  {
    icon: Users,
    title: "Representação Legal",
    description: "Acompanhamento jurídico presencial em todas as etapas do processo",
  },
  {
    icon: Plane,
    title: "Apoio Brasil & Paraguai",
    description: "Suporte completo nos dois países durante todo o processo",
  },
  {
    icon: MessageSquare,
    title: "Equipe Bilíngue",
    description: "Comunicação fluente em português e espanhol para sua segurança",
  },
  {
    icon: CheckCircle2,
    title: "Conformidade 100% Legal",
    description: "Todos os procedimentos em conformidade com a legislação",
  },
]

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solucao" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-graphite uppercase tracking-wider">Nossa Solução</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight text-balance">
              Nós resolvemos a burocracia para você
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A BBLaw oferece uma assessoria jurídica completa e personalizada. Você chega, assina e volta tranquilo.{" "}
              <strong className="text-foreground">O resto é com a gente.</strong>
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-graphite/10 rounded-lg flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-graphite" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="/professional-lawyers-team-meeting-office-modern-bu.jpg"
                alt="Equipe BBLaw em reunião"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-card bg-muted" />
                      ))}
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">+200 clientes</p>
                      <p className="text-muted-foreground">já conquistaram</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
