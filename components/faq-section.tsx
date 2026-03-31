"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "O que é o programa de residência paraguaia?",
    answer:
      "O programa de residência paraguaia permite que brasileiros vivam legalmente no Paraguai, com acesso a serviços bancários, abertura de empresa e direitos de residente permanente. A BBLaw oferece assessoria completa para todo o processo, desde a análise de viabilidade até a obtenção do documento de residência.",
  },
  {
    question: "Quanto tempo leva para obter a residência?",
    answer:
      "O prazo varia conforme o caso, mas em geral o processo de residência pode ser concluído em poucas semanas após a entrega completa da documentação. Nossa equipe otimiza cada etapa para garantir o menor tempo possível.",
  },
  {
    question: "Preciso viajar ao Paraguai?",
    answer:
      "Sim, a presença física é necessária para protocolar documentos junto aos órgãos competentes. A BBLaw organiza toda a logística da sua viagem, acompanha você presencialmente e cuida de todos os detalhes para que a experiência seja tranquila e eficiente.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "Os documentos básicos incluem certidão de nascimento, antecedentes criminais, comprovante de renda e passaporte válido, entre outros. Após a consulta inicial, enviamos um checklist completo e personalizado para o seu caso.",
  },
  {
    question: "Os custos variam de acordo com cada caso?",
    answer:
      "Sim, criamos um pacote sob medida para cada cliente, considerando suas necessidades específicas e documentação necessária. Após a consulta inicial, apresentamos um orçamento transparente e detalhado.",
  },
  {
    question: "Preciso saber espanhol?",
    answer:
      "Não é necessário. Nossa equipe é bilíngue e acompanha você em todos os momentos, desde a preparação dos documentos até os protocolos presenciais no Paraguai. Você terá suporte completo em português.",
  },
  {
    question: "Residência no Paraguai dá direito a abrir conta bancária e empresa?",
    answer:
      "Sim. Com a residência paraguaia você pode abrir conta em bancos locais, constituir empresas com segurança jurídica e acessar os benefícios fiscais do país. Nossa assessoria cobre todos esses serviços complementares.",
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
            Tire suas principais dúvidas sobre o programa de residência paraguaia
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
