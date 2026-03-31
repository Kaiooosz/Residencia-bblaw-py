"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "A Bezerra Borges tornou todo o processo muito mais simples do que eu imaginava. Desde o primeiro contato até a emissão do meu cartão de residência, tive acompanhamento completo. Recomendo a todos!",
    author: "Carlos Eduardo M.",
    role: "Empresário",
    location: "São Paulo, SP",
    image: "/person-carlos.jpg",
  },
  {
    id: 2,
    content:
      "Eu tinha muito receio de enfrentar a burocracia sozinha, mas com a equipe da Bezerra Borges foi tudo tranquilo. Eles cuidaram de cada detalhe e me mantiveram informada em todas as etapas.",
    author: "Marina Costa S.",
    role: "Investidora",
    location: "Rio de Janeiro, RJ",
    image: "/person-marina.jpg",
  },
  {
    id: 3,
    content:
      "Profissionalismo do início ao fim. A equipe bilíngue fez toda a diferença durante minha viagem ao Paraguai. Processo rápido e sem complicações.",
    author: "Roberto Almeida",
    role: "Consultor Financeiro",
    location: "Belo Horizonte, MG",
    image: "/person-roberto.jpg",
  },
]

const stats = [
  { value: "200+", label: "Processos Concluídos" },
  { value: "5+",   label: "Anos de Experiência" },
  { value: "100%", label: "Conformidade Legal" },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((p) => (p + 1) % testimonials.length)
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="depoimentos" className="py-32 bg-transparent relative z-10" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="eyebrow block mb-6">Depoimentos</span>
          <h2
            className="heading-kast"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            O que nossos
            <br />
            <em style={{ fontStyle: "italic" }}>clientes dizem</em>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Quote */}
            <p
              className="text-xl sm:text-2xl font-extralight leading-[1.7] mb-12 max-w-3xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              "{t.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                <Image
                  src={t.image}
                  alt={t.author}
                  fill
                  className="object-cover grayscale"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-sm font-light text-white/65">{t.author}</p>
                <p className="text-xs font-light text-white/70 tracking-wide mt-0.5">
                  {t.role} · {t.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "1.5rem" : "0.5rem",
                    height: "0.5rem",
                    background: i === current ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.15)",
                  }}
                  aria-label={`Ver depoimento ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {[{ fn: prev, label: "Anterior" }, { fn: next, label: "Próximo" }].map(({ fn, label }) => (
                <button
                  key={label}
                  onClick={fn}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/52 hover:border-white/25 hover:text-white/55 transition-all"
                >
                  {label === "Anterior"
                    ? <ChevronLeft className="w-4 h-4" strokeWidth={1} />
                    : <ChevronRight className="w-4 h-4" strokeWidth={1} />
                  }
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-black/60 px-8 py-8 text-center">
              <p className="heading-kast text-3xl">{value}</p>
              <p className="mt-2 text-xs font-light text-white/70 tracking-wide">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
