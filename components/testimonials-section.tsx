"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "A BBLaw tornou todo o processo muito mais simples do que eu imaginava. Desde o primeiro contato até a emissão do meu cartão de residência, tive acompanhamento completo. Recomendo a todos!",
    author: "Carlos Eduardo M.",
    role: "Empresário",
    location: "São Paulo, SP",
  },
  {
    id: 2,
    content:
      "Eu tinha muito receio de enfrentar a burocracia sozinha, mas com a equipe da BBLaw foi tudo tranquilo. Eles cuidaram de cada detalhe e me mantiveram informada em todas as etapas.",
    author: "Marina Costa S.",
    role: "Investidora",
    location: "Rio de Janeiro, RJ",
  },
  {
    id: 3,
    content:
      "Profissionalismo do início ao fim. A equipe bilíngue fez toda a diferença durante minha viagem ao Paraguai. Processo rápido e sem complicações.",
    author: "Roberto Almeida",
    role: "Consultor Financeiro",
    location: "Belo Horizonte, MG",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Depoimentos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-secondary/50 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            <div className="relative overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-serif">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl font-semibold text-muted-foreground">
                      {testimonials[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full bg-transparent"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full bg-transparent"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {[
            { value: "200+", label: "Processos Concluídos" },
            { value: "5+", label: "Anos de Experiência" },
            { value: "100%", label: "Conformidade Legal" },
          ].map((badge, index) => (
            <div key={index} className="text-center px-6 py-4 bg-secondary/50 rounded-2xl">
              <p className="text-2xl font-bold text-primary">{badge.value}</p>
              <p className="text-sm text-muted-foreground">{badge.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
