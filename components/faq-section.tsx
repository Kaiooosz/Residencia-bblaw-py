"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo leva o processo de cidadania paraguaia?",
    answer:
      "O tempo varia de acordo com o cenário de cada cliente, mas o processo pode iniciar rapidamente após a avaliação inicial. A residência pode ser obtida em poucas semanas, e a cidadania permanente após o cumprimento dos requisitos legais de residência.",
  },
  {
    question: "Preciso viajar ao Paraguai?",
    answer:
      "Sim, a viagem é necessária para protocolar documentos pessoalmente junto aos órgãos competentes. A BBLaw organiza toda a logística da sua viagem, acompanha você presencialmente e cuida de todos os detalhes para que sua experiência seja tranquila e eficiente.",
  },
  {
    question: "Os custos variam de acordo com cada caso?",
    answer:
      "Sim, criamos um pacote sob medida para cada cliente, considerando suas necessidades específicas, tipo de processo e documentação necessária. Após a consulta inicial, apresentamos um orçamento transparente e detalhado.",
  },
  {
    question: "Preciso saber espanhol?",
    answer:
      "Não é necessário. Nossa equipe é bilíngue e acompanha você em todos os momentos, desde a preparação dos documentos até os protocolos presenciais no Paraguai. Você terá suporte completo em português.",
  },
  {
    question: "Qual a diferença entre residência e cidadania?",
    answer:
      "A residência permite que você viva legalmente no Paraguai, trabalhe e tenha acesso a serviços. Já a cidadania paraguaia oferece direitos completos como cidadão, incluindo passaporte paraguaio e direito a voto. O processo geralmente começa com a residência e evolui para a cidadania após o período legal.",
  },
  {
    question: "Posso fazer o processo sem ir ao Paraguai?",
    answer:
      "Infelizmente não. A legislação paraguaia exige presença física para alguns procedimentos essenciais. No entanto, minimizamos a necessidade de viagens e otimizamos sua estadia para que tudo seja resolvido no menor tempo possível.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "Os documentos básicos incluem certidão de nascimento, antecedentes criminais, comprovante de renda, entre outros. Após a consulta de viabilidade, enviamos um checklist completo e personalizado com todos os documentos necessários para o seu caso específico.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 bg-transparent relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="eyebrow block mb-6">FAQ</span>
          <h2
            className="heading-kast text-balance"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Perguntas
            <br />
            <em style={{ fontStyle: "italic" }}>Frequentes</em>
          </h2>
          <p className="mt-6 text-sm font-light text-white/70 leading-relaxed">
            Tire suas principais dúvidas sobre o processo de cidadania
          </p>
        </motion.div>

        {/* FAQ Items — só linhas, sem cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
              className="border-b border-white/6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-7 text-left gap-6 group"
                aria-expanded={openIndex === index}
              >
                <span
                  className="text-sm font-light tracking-wide transition-colors duration-300"
                  style={{ color: openIndex === index ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)" }}
                >
                  {faq.question}
                </span>
                <span className="shrink-0 w-5 h-5 flex items-center justify-center text-white/48 group-hover:text-white/65 transition-colors">
                  {openIndex === index
                    ? <Minus className="w-3.5 h-3.5" strokeWidth={1} />
                    : <Plus className="w-3.5 h-3.5" strokeWidth={1} />
                  }
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-7 text-sm font-light text-white/52 leading-[2] max-w-2xl">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
