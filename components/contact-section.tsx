"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, MessageCircle, Loader2, CheckCircle } from "lucide-react"

const WA_LINK =
  "https://wa.me/5521979901686?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20para%20resid%C3%AAncia%20fiscal%20no%20Paraguai."

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const inputClass =
    "w-full bg-transparent border-b border-white/15 py-3 text-sm font-light text-white/85 placeholder:text-white/55 focus:outline-none focus:border-white/40 transition-colors duration-300"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contato" className="py-32 bg-transparent relative z-10" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* Left — copy */}
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
              Agende sua
              <br />
              <em style={{ fontStyle: "italic" }}>consulta</em>
            </h2>
            <p className="mt-7 text-sm font-light text-white/52 leading-[2] max-w-xs">
              Dê o primeiro passo. Nossa equipe entrará em contato em até 24 horas para agendar
              uma conversa personalizada.
            </p>

            <div className="mt-10">
              <div className="btn-py-ring inline-flex">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-py-inner"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar agora no WhatsApp
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/6 space-y-4">
              <div>
                <p className="eyebrow mb-1">Telefone</p>
                <p className="text-sm font-light text-white/65">+55 21 97990-1686</p>
              </div>
              <div>
                <p className="eyebrow mb-1">E-mail</p>
                <p className="text-sm font-light text-white/65">contato@bezerraborges.com.br</p>
              </div>
              <div>
                <p className="eyebrow mb-1">Horário</p>
                <p className="text-sm font-light text-white/65">Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-start justify-center h-full gap-4 py-20">
                <CheckCircle className="w-10 h-10 text-white/40" />
                <h3 className="text-lg font-light text-white/65">Recebemos seu contato!</h3>
                <p className="text-sm font-light text-white/52 leading-relaxed">
                  Nossa equipe entrará em contato em até 24h.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-light text-white/40 hover:text-white/70 transition-colors mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ou fale agora no WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="eyebrow block mb-2">Nome completo *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    className={inputClass}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="eyebrow block mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+55 11 99999-9999"
                      className={inputClass}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="eyebrow block mb-2">Mensagem (opcional)</label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Conte brevemente sobre seu objetivo..."
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400/70 font-light">
                    Erro ao enviar. Tente via WhatsApp.
                  </p>
                )}

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full border border-white/10 text-white/65 text-sm font-light tracking-wide py-4 rounded-full hover:border-white/25 hover:text-white/70 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Enviar Mensagem
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-white/18 tracking-wide">
                    Ao enviar, você concorda com nossa política de privacidade (LGPD)
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
