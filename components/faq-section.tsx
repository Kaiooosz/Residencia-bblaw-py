"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

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
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-secondary/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Tire suas principais dúvidas sobre o processo de cidadania
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
