"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"

const WA_LINK =
  "https://wa.me/5521979901686?text=Gostaria%20de%20agendar%20uma%20consultoria%20para%20tirar%20minha%20cidadania%20do%20paraguai."

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cta" className="relative py-36 bg-transparent overflow-hidden" ref={ref}>
      {/* soft glow centrado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(213,43,30,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left — copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow block mb-6">Contato</span>

            <h2
              className="heading-kast text-balance"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
            >
              Pronto para conquistar
              <br />
              sua <em style={{ fontStyle: "italic" }}>cidadania paraguaia?</em>
            </h2>

            <p className="mt-7 text-sm font-light text-white/70 leading-[2] max-w-sm">
              Fale agora pelo WhatsApp e descubra como podemos simplificar todo o seu processo.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* Botão primário — borda rotativa PY */}
              <div className="btn-py-ring">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-py-inner">
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <a
                href="mailto:contato@bezerraborges.com.br"
                className="inline-flex items-center gap-2 border border-white/10 text-white/55 text-sm font-light tracking-wide px-7 py-4 rounded-full hover:border-white/22 hover:text-white/55 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Enviar E-mail
              </a>
            </div>
          </motion.div>

          {/* Right — infos de contato sem card boxado */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* soft glow no card direito */}
            <div
              className="absolute -inset-8 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(0,56,168,0.06) 0%, transparent 70%)",
              }}
            />

            <div className="relative space-y-8">
              <span className="eyebrow block mb-8">Entre em contato</span>

              {[
                { icon: Phone, label: "Telefone", value: "+55 21 97990-1686", href: "tel:+5521979901686" },
                { icon: Mail, label: "E-mail", value: "contato@bezerraborges.com.br", href: "mailto:contato@bezerraborges.com.br" },
                { icon: MessageCircle, label: "WhatsApp", value: "+55 21 97990-1686", href: WA_LINK },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-white/55 group-hover:text-white/60 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/48 font-light mb-0.5">{label}</p>
                    <p className="text-sm font-light text-white/55 group-hover:text-white/80 transition-colors">{value}</p>
                  </div>
                </a>
              ))}

              {/* Separador */}
              <div className="border-t border-white/6 pt-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/20 font-light mb-1">Horário</p>
                <p className="text-sm font-light text-white/60">Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
