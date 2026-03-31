"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Shield,
  ArrowRight,
  AlertCircle,
  Syringe,
  Scale,
  Globe,
  Building,
  Stamp,
  User,
  BadgeCheck,
  ChevronRight,
  XCircle,
  Plus,
  Minus,
  Phone,
} from "lucide-react"

const WA_LINK =
  "https://wa.me/5521979901686?text=Ol%C3%A1%2C%20vi%20o%20guia%20da%20c%C3%A9dula%20paraguaia%20e%20quero%20iniciar%20meu%20processo%20com%20a%20BBLaw."

// ─── Reusable section wrapper ───────────────────────────────────────────────
function SectionWrapper({
  id,
  children,
  className = "",
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section
      id={id}
      ref={ref}
      className={`py-28 bg-transparent relative z-10 ${className}`}
      data-inview={isInView}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

// ─── Section header ──────────────────────────────────────────────────────────
function SectionHeader({
  eyebrow,
  title,
  italic,
  subtitle,
  center = false,
}: {
  eyebrow: string
  title: string
  italic?: string
  subtitle?: string
  center?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`max-w-2xl mb-20 ${center ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow block mb-6">{eyebrow}</span>
      <h2 className="heading-kast mt-5 text-balance" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
        {title}{" "}
        {italic && <em style={{ fontStyle: "italic" }}>{italic}</em>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-sm font-light text-white/52 leading-relaxed max-w-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}

// ─── BBLaw branded CTA box ───────────────────────────────────────────────────
function BBLawCTA({
  title,
  body,
  cta = "Falar com especialista",
  variant = "red",
}: {
  title: string
  body: string
  cta?: string
  variant?: "red" | "blue" | "full"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const border = variant === "blue" ? "border-[#0038A8]/30" : "border-[#D52B1E]/30"
  const from = variant === "blue" ? "from-[#0038A8]/10" : "from-[#D52B1E]/10"
  const bar = variant === "blue" ? "bg-[#0038A8]/60" : "bg-[#D52B1E]/60"
  const dot = variant === "blue" ? "#0038A8" : "#D52B1E"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative border ${border} bg-gradient-to-r ${from} to-transparent rounded-xl p-7 overflow-hidden my-12`}
    >
      {/* left accent bar */}
      <div className={`absolute top-0 left-0 h-full w-0.5 ${bar}`} />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot, opacity: 0.8 }} />
            <span className="text-[10px] font-light tracking-[0.25em] uppercase text-white/40">BBLaw</span>
          </div>
          <h4 className="text-base font-light text-white/85 mb-2">{title}</h4>
          <p className="text-sm font-light text-white/52 leading-relaxed">{body}</p>
        </div>
        <div className="btn-py-ring shrink-0">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-py-inner">
            {cta}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Warning / info alert box ────────────────────────────────────────────────
function AlertBox({
  type = "warning",
  title,
  children,
}: {
  type?: "warning" | "info" | "danger"
  title: string
  children: React.ReactNode
}) {
  const config = {
    warning: {
      border: "border-amber-500/25",
      bg: "from-amber-500/8",
      bar: "bg-amber-500/50",
      icon: <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "rgba(245,158,11,0.7)" }} strokeWidth={1.5} />,
      dot: "rgba(245,158,11,0.8)",
    },
    info: {
      border: "border-[#0038A8]/30",
      bg: "from-[#0038A8]/8",
      bar: "bg-[#0038A8]/50",
      icon: <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#0038A8]/70" strokeWidth={1.5} />,
      dot: "#0038A8",
    },
    danger: {
      border: "border-[#D52B1E]/30",
      bg: "from-[#D52B1E]/8",
      bar: "bg-[#D52B1E]/50",
      icon: <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D52B1E]/70" strokeWidth={1.5} />,
      dot: "#D52B1E",
    },
  }[type]

  return (
    <div
      className={`relative border ${config.border} bg-gradient-to-r ${config.bg} to-transparent rounded-xl p-6 my-8 overflow-hidden`}
    >
      <div className={`absolute top-0 left-0 h-full w-0.5 ${config.bar}`} />
      <div className="flex items-start gap-3">
        {config.icon}
        <div>
          <p className="text-sm font-light text-white/75 mb-1">{title}</p>
          <div className="text-sm font-light text-white/52 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}

// ─── Document card ────────────────────────────────────────────────────────────
interface DocCard {
  name: string
  where: string
  price: string
  time: string
  validity: string
  apostila?: boolean
  tip?: string
  color?: string
}

function DocumentCard({ doc, index }: { doc: DocCard; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const color = doc.color ?? (index % 3 === 0 ? "#D52B1E" : index % 3 === 1 ? "rgba(255,255,255,0.4)" : "#0038A8")

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.07 }}
      className="relative bg-black/55 group hover:bg-black/40 transition-all duration-500 cursor-default p-7"
    >
      {/* Top border glow on hover */}
      <div
        className="absolute inset-0 border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: color + "25" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <h4 className="text-sm font-light text-white/80 leading-snug group-hover:text-white/95 transition-colors duration-300">
            {doc.name}
          </h4>
          {doc.apostila && (
            <span
              className="shrink-0 text-[9px] font-light tracking-[0.2em] uppercase px-2 py-1 rounded-full border"
              style={{ borderColor: color + "40", color: color, opacity: 0.8 }}
            >
              Apostila
            </span>
          )}
        </div>

        {/* Data grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Onde obter", value: doc.where, icon: MapPin },
            { label: "Preço", value: doc.price, icon: DollarSign },
            { label: "Prazo emissão", value: doc.time, icon: Clock },
            { label: "Validade", value: doc.validity, icon: BadgeCheck },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <Icon className="w-3 h-3 text-white/25" strokeWidth={1} />
                <span className="text-[10px] font-light tracking-[0.15em] uppercase text-white/30">{label}</span>
              </div>
              <span className="text-xs font-light text-white/62 leading-relaxed">{value}</span>
            </div>
          ))}
        </div>

        {doc.tip && (
          <p className="mt-4 text-[11px] font-light text-white/38 leading-relaxed border-t border-white/5 pt-4">
            {doc.tip}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: `linear-gradient(90deg, ${color}60, transparent)` }}
      />
    </motion.div>
  )
}

// ─── Step card (process timeline) ────────────────────────────────────────────
function StepCard({
  number,
  title,
  description,
  detail,
  color,
  index,
}: {
  number: string
  title: string
  description: string
  detail?: string
  color: string
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
      className="relative group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="relative w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-125"
          style={{ borderColor: color + "60" }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, opacity: 0.75 }} />
        </div>
        <span className="text-[10px] font-light tracking-[0.25em]" style={{ color, opacity: 0.55 }}>
          {number}
        </span>
      </div>

      <h3 className="text-base font-light text-white/78 mb-2 tracking-tight group-hover:text-white/95 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm font-light text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
        {description}
      </p>
      {detail && (
        <p className="mt-2 text-[11px] font-light leading-relaxed text-white/50">
          {detail}
        </p>
      )}

      <div
        className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${color}50, transparent)` }}
      />
    </motion.div>
  )
}

// ─── Checklist item ───────────────────────────────────────────────────────────
function CheckItem({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0 group cursor-default">
      <div className="mt-0.5 w-4 h-4 shrink-0 border border-white/20 rounded-sm group-hover:border-white/40 transition-colors duration-300 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-sm bg-white/0 group-hover:bg-white/20 transition-all duration-300" />
      </div>
      <div>
        <span className="text-sm font-light text-white/65 group-hover:text-white/80 transition-colors duration-300">
          {label}
        </span>
        {sub && <p className="text-[11px] font-light text-white/35 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

// ─── Error item ───────────────────────────────────────────────────────────────
function ErrorItem({ title, desc, index }: { title: string; desc: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.05 + index * 0.07 }}
      className="flex items-start gap-4 py-5 border-b border-white/5 last:border-0 group cursor-default"
    >
      <div className="mt-0.5 w-5 h-5 rounded-full border border-[#D52B1E]/30 flex items-center justify-center shrink-0 group-hover:border-[#D52B1E]/60 transition-colors duration-300">
        <XCircle className="w-3 h-3 text-[#D52B1E]/50 group-hover:text-[#D52B1E]/80 transition-colors duration-300" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm font-light text-white/72 group-hover:text-white/90 transition-colors duration-300">{title}</p>
        <p className="text-xs font-light text-white/40 mt-1 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

// ─── Accordion item ───────────────────────────────────────────────────────────
function AccordionItem({
  question,
  children,
  open,
  onToggle,
}: {
  question: string
  children: React.ReactNode
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span
          className="text-sm font-light tracking-wide transition-colors duration-300"
          style={{ color: open ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)" }}
        >
          {question}
        </span>
        <span className="shrink-0 w-5 h-5 flex items-center justify-center text-white/40 group-hover:text-white/60 transition-colors">
          {open ? <Minus className="w-3.5 h-3.5" strokeWidth={1} /> : <Plus className="w-3.5 h-3.5" strokeWidth={1} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-sm font-light text-white/52 leading-[2]">{children}</div>
      </motion.div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════════════════════════════

const docsBrasileiros: DocCard[] = [
  {
    name: "RG (Registro Geral) ou Passaporte válido",
    where: "DETRAN (RG) ou Polícia Federal (Passaporte)",
    price: "RG: gratuito | Passaporte: ~R$ 257",
    time: "RG: 10–30 dias | Passaporte: até 6 semanas",
    validity: "RG: indefinido | Passaporte: 10 anos",
    tip: "Use passaporte se possível — aceito em todos os órgãos paraguaios sem necessidade de apostila.",
    color: "rgba(255,255,255,0.4)",
  },
  {
    name: "Certidão de Nascimento (inteiro teor / atualizada)",
    where: "Cartório de Registro Civil onde nasceu",
    price: "R$ 40 a R$ 80",
    time: "Imediato a 5 dias úteis",
    validity: "90 dias (para uso em apostilamento)",
    apostila: true,
    tip: "Peça inteiro teor. Certidões antigas ou fora do modelo atual são rejeitadas.",
    color: "#D52B1E",
  },
  {
    name: "Certidão de Casamento (se casado/a)",
    where: "Cartório onde foi realizado o casamento",
    price: "R$ 40 a R$ 80",
    time: "Imediato a 5 dias úteis",
    validity: "90 dias (para apostilamento)",
    apostila: true,
    tip: "Divorciados devem apresentar a certidão com averbação de divórcio.",
    color: "#0038A8",
  },
  {
    name: "Antecedentes Criminais — Polícia Federal",
    where: "gov.br/pf (online) ou unidade da PF",
    price: "Gratuito",
    time: "Imediato (online)",
    validity: "90 dias",
    apostila: true,
    tip: "Baixar em PDF pelo gov.br. Precisa de apostila para uso no Paraguai.",
    color: "#D52B1E",
  },
  {
    name: "Antecedentes — Justiça Federal",
    where: "cjf.jus.br (online)",
    price: "Gratuito",
    time: "Imediato (online)",
    validity: "90 dias",
    apostila: true,
    tip: "Emitir pelo portal do CJF — Certidão de Ações Penais.",
    color: "#0038A8",
  },
  {
    name: "Antecedentes — Justiça Estadual (TJ)",
    where: "Site do TJ do seu estado (ex: tjsp.jus.br, tjrj.jus.br)",
    price: "Gratuito",
    time: "Imediato a 3 dias úteis",
    validity: "90 dias",
    apostila: true,
    tip: "Cada estado tem portal próprio. Pesquise pelo nome completo e CPF.",
    color: "rgba(255,255,255,0.4)",
  },
  {
    name: "Antecedentes Militares (se aplicável)",
    where: "DSM — Departamento de Serviço Militar (dsm.eb.mil.br)",
    price: "Gratuito",
    time: "Até 5 dias úteis",
    validity: "90 dias",
    apostila: true,
    tip: "Obrigatório para quem serviu às Forças Armadas. Ignorar pode gerar indeferimento.",
    color: "#D52B1E",
  },
  {
    name: "Comprovante de profissão / atividade econômica (opcional)",
    where: "CRM, CRC, OAB, carteira de trabalho ou declaração IR",
    price: "Variável",
    time: "Variável",
    validity: "90 a 180 dias",
    tip: "Fortalece o processo. Médicos, advogados e profissionais liberais devem incluir.",
    color: "#0038A8",
  },
  {
    name: "Comprovante de renda (opcional, mas recomendado)",
    where: "Últimos 3 extratos bancários ou declaração IR",
    price: "Gratuito",
    time: "Imediato",
    validity: "Últimos 3 meses",
    tip: "Exigido para residência permanente com comprovação financeira.",
    color: "rgba(255,255,255,0.4)",
  },
]


const processoSteps = [
  {
    number: "01",
    title: "Documentação brasileira apostilada",
    description:
      "Reúna certidões, antecedentes e documentos pessoais. Apostile ANTES de viajar — cada documento demora de 1 a 7 dias úteis no cartório.",
    detail: "Prazo médio nesta etapa: 2 a 4 semanas",
    color: "#D52B1E",
  },
  {
    number: "02",
    title: "Entrada legal no Paraguai",
    description:
      "Entre pelo aeroporto de Assunção ou fronteira terrestre usando passaporte válido. Guarde o carimbo de entrada — é prova da data de ingresso legal.",
    detail: "Atenção: visto de turismo dura 90 dias",
    color: "rgba(255,255,255,0.4)",
  },
  {
    number: "03",
    title: "Registro em Migrações (DGMM)",
    description:
      "Protocole o pedido de residência na Dirección General de Migraciones. Entregue todos os documentos brasileiros apostilados e inicie o processo oficial.",
    detail: "Com advogado: mais rápido e sem erros",
    color: "#0038A8",
  },
  {
    number: "04",
    title: "Exames médicos e antecedentes paraguaios",
    description:
      "Realize o exame médico em clínica credenciada, antecedentes na INTERPOL Paraguai, Polícia Nacional e certifique sua vida e residência na comisaría.",
    detail: "Prazo: 3 a 7 dias úteis",
    color: "#D52B1E",
  },
  {
    number: "05",
    title: "Aprovação da residência",
    description:
      "A DGMM analisa toda a documentação. Após aprovação, você recebe o carnet de radicación — documento que comprova sua residência legal no Paraguai.",
    detail: "Prazo: 2 a 8 semanas (varia por volume)",
    color: "rgba(255,255,255,0.4)",
  },
  {
    number: "06",
    title: "Solicitação da cédula paraguaia",
    description:
      "Com o carnet de radicación em mãos, solicite a cédula de identidade na DGREC. É o documento de identificação oficial do Paraguai para residentes.",
    detail: "Prazo: 5 a 15 dias úteis",
    color: "#0038A8",
  },
  {
    number: "07",
    title: "Retirada e validação",
    description:
      "Retire a cédula presencialmente e valide todos os dados. A cédula é válida por 5 anos e pode ser renovada. Guarde todos os documentos originais.",
    detail: "Tempo total do processo: 2 a 4 meses",
    color: "#D52B1E",
  },
]

const errosFatais = [
  {
    title: "Antecedente criminal no Brasil ou no exterior",
    desc: "Qualquer condenação criminal pode gerar indeferimento automático. Crimes hediondos, tráfico e violência doméstica são impeditivos absolutos. Consulte um advogado ANTES de iniciar o processo.",
  },
  {
    title: "Documentos vencidos ou fora da validade",
    desc: "Certidões com mais de 90 dias, antecedentes velhos e passaporte vencido são motivos diretos de recusa. Toda a documentação precisa estar dentro do prazo na data do protocolo.",
  },
  {
    title: "Falta da Apostila de Haia",
    desc: "Documentos brasileiros sem a Apostila de Haia são considerados inválidos para uso oficial no Paraguai. Não há exceção: certidões e antecedentes precisam ser apostilados.",
  },
  {
    title: "Nome divergente entre documentos",
    desc: "Nome no passaporte diferente do nome na certidão de nascimento ou casamento gera inconsistência cadastral. Resolva isso no cartório brasileiro ANTES de apostilar.",
  },
  {
    title: "Documento falso ou adulterado",
    desc: "Além do indeferimento imediato, é crime previsto na legislação paraguaia. Resulta em deportação e proibição de reentrada no país.",
  },
  {
    title: "Entrada irregular no Paraguai",
    desc: "Entrar pelo país sem carimbo de entrada, por passagem não oficial ou com documento inválido invalida o processo inteiro. A DGMM exige entrada legal comprovada.",
  },
  {
    title: "Falta de comprovação financeira (residência permanente)",
    desc: "Para residência permanente, é necessário comprovar capacidade econômica — normalmente depósito de ~US$ 5.000 em banco paraguaio ou comprovante de renda estável.",
  },
  {
    title: "Ausência de advogado ou gestor qualificado",
    desc: "Erros de protocolo, documentos na ordem errada e prazos perdidos são as causas mais comuns de atraso ou indeferimento. Profissional especializado evita 90% dos problemas.",
  },
]

const apostilaSteps = [
  {
    step: "1",
    title: "Solicite a certidão atualizada",
    desc: "Peça ao cartório a certidão em inteiro teor. Se for certidão de nascimento ou casamento, ela deve ter sido emitida há menos de 90 dias.",
    color: "#D52B1E",
  },
  {
    step: "2",
    title: "Identifique cartório habilitado pelo CNJ",
    desc: "Nem todo cartório apostila. Acesse o portal do CNJ (cnj.jus.br) e busque um cartório habilitado para Apostila de Haia na sua cidade.",
    color: "rgba(255,255,255,0.4)",
  },
  {
    step: "3",
    title: "Solicite a Apostila de Haia",
    desc: "Leve o documento original ao cartório apostilador. Apresente o documento e informe que é para uso internacional no Paraguai.",
    color: "#0038A8",
  },
  {
    step: "4",
    title: "Pague a taxa e aguarde",
    desc: "Custo médio: R$ 80 a R$ 300 por documento, dependendo do cartório e do estado. Prazo: imediato a 3 dias úteis.",
    color: "#D52B1E",
  },
  {
    step: "5",
    title: "Guarde os originais apostilados",
    desc: "NUNCA entregue o original apostilado sem tirar cópia autenticada. O Paraguai pode reter o original — leve pelo menos 2 vias.",
    color: "rgba(255,255,255,0.4)",
  },
]

const vacinas = [
  { name: "Febre Amarela", status: "Recomendada / exigida", obs: "Exigida para viajantes de áreas endêmicas. Leve o Certificado Internacional de Vacinação (caderneta amarela)." },
  { name: "COVID-19", status: "Verificar regras vigentes", obs: "Os requisitos mudaram frequentemente. Em 2025/2026, não há exigência formal — mas pode ser solicitado em contextos específicos." },
  { name: "Hepatite A e B", status: "Recomendada", obs: "Não obrigatória, mas recomendada para estadias longas. Pode ser exigida pelo médico credenciado no exame." },
  { name: "Tétano e difteria (dT)", status: "Recomendada", obs: "Calendário básico em dia facilita a aprovação no exame médico paraguaio." },
]

const exames = [
  { name: "Exame clínico geral", desc: "Feito pelo médico credenciado. Avalia pressão, peso, histórico clínico e condição geral de saúde." },
  { name: "Raio-X de tórax (exame pulmonar)", desc: "Detecta tuberculose e outras doenças respiratórias infectocontagiosas. Obrigatório." },
  { name: "Certificado de saúde física e mental", desc: "Declaração formal emitida pelo médico após o exame. Atesta aptidão para residência no país." },
  { name: "Declaração de ausência de doenças infectocontagiosas", desc: "Documento adicional assinado pelo médico, específico para o processo migratório." },
]

// ══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

export function GuiaCedulaSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-44 pb-28 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-4 mb-10">
              <span className="block h-px w-8" style={{ background: "linear-gradient(90deg,transparent,rgba(213,43,30,0.6))" }} />
              <span className="eyebrow">Guia Completo 2025 / 2026</span>
              <span className="block h-px w-8" style={{ background: "linear-gradient(90deg,rgba(0,56,168,0.6),transparent)" }} />
            </div>

            <h1 className="heading-kast text-balance" style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)" }}>
              Cédula Paraguaia
              <br />
              para <em style={{ fontStyle: "italic" }}>Brasileiros</em>
            </h1>

            <p className="mt-8 text-sm font-light text-white/58 max-w-xl leading-[2]">
              Passo a passo completo e atualizado: sequência correta dos processos, lista de documentos,
              apostilamento, antecedentes, exames médicos, residência e checklist final — tudo que você
              precisa saber antes de iniciar.
            </p>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { label: "Tempo médio com assessoria", value: "2–4 meses" },
                { label: "Etapas no processo", value: "7 etapas" },
                { label: "Documentos necessários", value: "+12 docs" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-[10px] font-light tracking-[0.2em] uppercase text-white/30 mb-1">{stat.label}</p>
                  <p
                    className="heading-kast"
                    style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}
                  >
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Flag accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 flex items-center gap-2"
            >
              <span className="w-5 h-px rounded-full" style={{ backgroundColor: "#D52B1E", opacity: 0.4 }} />
              <span className="w-5 h-px rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.22)" }} />
              <span className="w-5 h-px rounded-full" style={{ backgroundColor: "#0038A8", opacity: 0.4 }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 1: VISÃO GERAL ─────────────────────────────────────────── */}
      <SectionWrapper id="visao-geral" className="border-t border-white/5">
        <SectionHeader
          eyebrow="01 — Visão Geral"
          title="A sequência correta"
          italic="do processo"
          subtitle="Seguir a ordem certa economiza meses de espera e evita retrabalho. Muitos brasileiros perdem tempo porque apostilam documentos com a certidão errada ou chegam ao Paraguai sem toda a papelada."
        />

        {/* Steps grid */}
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="hidden lg:block absolute top-[2.2rem] left-0 right-0 h-px bg-white/6 origin-left"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {processoSteps.slice(0, 4).map((s, i) => (
              <StepCard key={i} {...s} index={i} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 mt-10 lg:mt-8">
            {processoSteps.slice(4).map((s, i) => (
              <StepCard key={i} {...s} index={i + 4} />
            ))}
          </div>
        </div>

        {/* Key info grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {[
            {
              icon: Clock,
              color: "#D52B1E",
              label: "Tempo total estimado",
              value: "2 a 4 meses",
              detail: "Com assessoria jurídica especializada e documentos corretos na primeira tentativa.",
            },
            {
              icon: AlertTriangle,
              color: "#0038A8",
              label: "Causa nº 1 de atraso",
              value: "Documentos vencidos",
              detail: "Certidões velhas, apostilas fora do prazo ou falta de antecedentes são os erros mais comuns.",
            },
          ].map(({ icon: Icon, color, label, value, detail }, i) => (
            <div key={i} className="bg-black/55 p-8 group hover:bg-black/40 transition-all duration-500">
              <Icon className="w-5 h-5 mb-5 transition-all duration-300" strokeWidth={1} style={{ color, opacity: 0.65 }} />
              <p className="text-[10px] font-light tracking-[0.2em] uppercase text-white/30 mb-2">{label}</p>
              <p className="text-2xl font-light text-white/80 mb-2 group-hover:text-white/95 transition-colors duration-300">{value}</p>
              <p className="text-xs font-light text-white/60 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <BBLawCTA
          title="Deixe um especialista cuidar de todo o processo por você"
          body="A BBLaw acompanha brasileiros em cada etapa — da organização dos documentos até a retirada da cédula em Assunção. Sem surpresas, sem retrabalho."
          cta="Iniciar meu processo"
        />
      </SectionWrapper>

      {/* ── SECTION 2: DOCUMENTOS BRASILEIROS ────────────────────────────── */}
      <SectionWrapper id="docs-brasileiros" className="border-t border-white/5">
        <SectionHeader
          eyebrow="02 — Documentos"
          title="Documentos brasileiros"
          italic="necessários"
          subtitle="Todos os documentos abaixo devem estar dentro do prazo de validade no momento do protocolo no Paraguai. Organize antes de apostilar."
        />

        <AlertBox type="warning" title="Atenção ao prazo das certidões">
          Certidões de nascimento e casamento emitidas há mais de 90 dias são recusadas para apostilamento.{" "}
          <strong className="text-white/65">Peça sempre a certidão atualizada</strong>, mesmo que você já tenha uma em casa.
        </AlertBox>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {docsBrasileiros.map((doc, i) => (
            <DocumentCard key={i} doc={doc} index={i} />
          ))}
        </div>

        <AlertBox type="info" title="Dica: emita todos os antecedentes no mesmo dia">
          PF (gov.br/pf), Justiça Federal (cjf.jus.br) e Justiça Estadual (site do TJ) são todos gratuitos e emitidos online.
          Baixe os PDFs e leve ao cartório apostilador no dia seguinte.
        </AlertBox>
      </SectionWrapper>

      {/* ── SECTION 3: APOSTILAMENTO ──────────────────────────────────────── */}
      <SectionWrapper id="apostilamento" className="border-t border-white/5">
        <SectionHeader
          eyebrow="03 — Apostila de Haia"
          title="Apostilamento:"
          italic="passo crítico"
          subtitle="A Apostila de Haia é o mecanismo internacional que torna seus documentos brasileiros válidos no Paraguai. Sem ela, nenhum documento civil ou criminal é aceito."
        />

        {/* What needs apostila */}
        <div className="mb-12">
          <p className="text-[10px] font-light tracking-[0.2em] uppercase text-white/35 mb-6">Documentos que precisam de apostila</p>
          <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden">
            {[
              { doc: "Certidão de nascimento", obs: "Obrigatório" },
              { doc: "Certidão de casamento (se houver)", obs: "Obrigatório" },
              { doc: "Antecedentes PF", obs: "Obrigatório" },
              { doc: "Antecedentes Justiça Federal", obs: "Obrigatório" },
              { doc: "Antecedentes Justiça Estadual", obs: "Obrigatório" },
              { doc: "Antecedentes Militares (se aplicável)", obs: "Obrigatório" },
              { doc: "RG / Passaporte", obs: "Não necessita apostila" },
            ].map(({ doc, obs }, i) => (
              <div key={i} className="bg-black/55 px-6 py-4 flex items-center justify-between gap-4 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Stamp className="w-3.5 h-3.5 shrink-0 text-white/25" strokeWidth={1} />
                  <span className="text-sm font-light text-white/65">{doc}</span>
                </div>
                <span
                  className="text-[10px] font-light tracking-[0.1em] uppercase shrink-0"
                  style={{ color: obs === "Não necessita apostila" ? "rgba(255,255,255,0.3)" : "#D52B1E", opacity: 0.7 }}
                >
                  {obs}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden lg:block absolute top-[2.2rem] left-0 right-0 h-px bg-white/6 origin-left"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {apostilaSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative group cursor-default"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform duration-300"
                    style={{ borderColor: s.color + "60" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color, opacity: 0.75 }} />
                  </div>
                  <span className="text-[10px] font-light tracking-[0.25em]" style={{ color: s.color, opacity: 0.55 }}>
                    ETAPA {s.step}
                  </span>
                </div>
                <h4 className="text-sm font-light text-white/75 mb-2 group-hover:text-white/95 transition-colors duration-300">{s.title}</h4>
                <p className="text-xs font-light text-white/48 leading-relaxed">{s.desc}</p>
                <div
                  className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${s.color}50, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
          {[
            { label: "Custo por documento", value: "R$ 80–300" },
            { label: "Prazo médio", value: "1–3 dias" },
            { label: "Validade do documento apostilado", value: "Indefinida*" },
            { label: "Cartórios habilitados (CNJ)", value: "+8.000 no Brasil" },
          ].map(({ label, value }, i) => (
            <div key={i} className="bg-black/55 p-6 text-center hover:bg-black/40 transition-all duration-300">
              <p className="text-[10px] font-light tracking-[0.15em] uppercase text-white/30 mb-2">{label}</p>
              <p className="text-xl font-light text-white/75">{value}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] font-light text-white/28 mt-3">
          *A apostila em si não vence, mas o documento apostilado precisa estar dentro da validade exigida pelo órgão receptor.
        </p>

        <AlertBox type="danger" title="Erros mais comuns no apostilamento">
          <ul className="space-y-1 mt-1">
            <li>— Apostilar certidão com mais de 90 dias (será recusada)</li>
            <li>— Levar cópia ao invés do original para apostilar</li>
            <li>— Nome diferente entre certidão de nascimento e RG/passaporte</li>
            <li>— Apostilar em cartório não habilitado pelo CNJ</li>
          </ul>
        </AlertBox>

        <BBLawCTA
          title="Organizamos toda a sua documentação antes da viagem"
          body="Nossa equipe verifica cada documento, validade, nome correto e necessidade de apostila — tudo antes de você embarcar para Assunção."
          cta="Verificar minha documentação"
          variant="blue"
        />
      </SectionWrapper>

      {/* ── SECTION 4: ANTECEDENTES CRIMINAIS ────────────────────────────── */}
      <SectionWrapper id="antecedentes" className="border-t border-white/5">
        <SectionHeader
          eyebrow="04 — Antecedentes Criminais"
          title="Como obter todos os"
          italic="antecedentes"
          subtitle="São necessários antecedentes de três esferas no Brasil e dois no Paraguai. Todos precisam estar dentro da validade (90 dias) no momento do protocolo."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Brasil */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #D52B1E, transparent)" }} />
              <p className="text-[10px] font-light tracking-[0.25em] uppercase text-white/45">Documentos do Brasil</p>
            </div>
            <div className="space-y-0 rounded-xl overflow-hidden bg-white/5 gap-px">
              {[
                {
                  title: "Polícia Federal (PF)",
                  where: "gov.br/pf → Certidão de antecedentes criminais",
                  price: "Gratuito",
                  time: "Imediato online",
                  color: "#D52B1E",
                },
                {
                  title: "Justiça Federal (CJF)",
                  where: "cjf.jus.br → Certidão de ações penais",
                  price: "Gratuito",
                  time: "Imediato online",
                  color: "rgba(255,255,255,0.4)",
                },
                {
                  title: "Justiça Estadual (TJ do seu estado)",
                  where: "Site do TJ do estado de nascimento e de residência",
                  price: "Gratuito",
                  time: "Imediato a 3 dias",
                  color: "#0038A8",
                },
                {
                  title: "Militares (se serviu às FA)",
                  where: "dsm.eb.mil.br → Sistema de certidões",
                  price: "Gratuito",
                  time: "Até 5 dias úteis",
                  color: "#D52B1E",
                },
              ].map((item, i) => (
                <div key={i} className="bg-black/55 p-6 hover:bg-black/40 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color, opacity: 0.7 }} />
                    <div className="flex-1">
                      <p className="text-sm font-light text-white/75 mb-1 group-hover:text-white/90 transition-colors duration-300">{item.title}</p>
                      <p className="text-xs font-light text-white/42 leading-relaxed">{item.where}</p>
                      <div className="flex gap-6 mt-3">
                        <span className="text-[11px] font-light text-white/35">{item.price}</span>
                        <span className="text-[11px] font-light text-white/35">{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Paraguai */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #0038A8, transparent)" }} />
              <p className="text-[10px] font-light tracking-[0.25em] uppercase text-white/45">Documentos do Paraguai</p>
            </div>
            <div className="space-y-0 rounded-xl overflow-hidden bg-white/5 gap-px">
              {[
                {
                  title: "INTERPOL Paraguai",
                  where: "Departamento de Interpol — Ministerio del Interior, Assunção",
                  price: "G$ 50.000–100.000 (~US$ 7–14)",
                  time: "1 a 3 dias úteis",
                  color: "#D52B1E",
                  obs: "Presença física obrigatória. Leve passaporte original.",
                },
                {
                  title: "Polícia Nacional do Paraguai",
                  where: "Departamento de Identificaciones — Assunção (Tacumbú)",
                  price: "G$ 30.000–60.000 (~US$ 4–8)",
                  time: "1 a 2 dias úteis",
                  color: "#0038A8",
                  obs: "Necessário número de passaporte ou cédula temporária.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-black/55 p-6 hover:bg-black/40 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color, opacity: 0.7 }} />
                    <div className="flex-1">
                      <p className="text-sm font-light text-white/75 mb-1 group-hover:text-white/90 transition-colors duration-300">{item.title}</p>
                      <p className="text-xs font-light text-white/42 leading-relaxed">{item.where}</p>
                      <div className="flex gap-6 mt-3">
                        <span className="text-[11px] font-light text-white/35">{item.price}</span>
                        <span className="text-[11px] font-light text-white/35">{item.time}</span>
                      </div>
                      {item.obs && <p className="text-[11px] font-light mt-2 leading-relaxed" style={{ color: item.color + "70" }}>{item.obs}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <AlertBox type="info" title="Todos os antecedentes brasileiros precisam de apostila">
              Após baixar os PDFs online, leve ao cartório apostilador. Validade: 90 dias a partir da data de emissão —{" "}
              <strong className="text-white/65">não da apostila</strong>.
            </AlertBox>
          </div>
        </div>
      </SectionWrapper>

      {/* ── SECTION 5: VACINAS E EXAMES ───────────────────────────────────── */}
      <SectionWrapper id="vacinas-exames" className="border-t border-white/5">
        <SectionHeader
          eyebrow="05 — Saúde"
          title="Vacinas e exames"
          italic="médicos"
          subtitle="O certificado médico é documento obrigatório para o processo migratório paraguaio. Os exames são realizados no Paraguai, em clínicas credenciadas pelo Ministério da Saúde."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Vacinas */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #D52B1E, transparent)" }} />
              <p className="text-[10px] font-light tracking-[0.25em] uppercase text-white/45">Vacinas relevantes</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-white/5 gap-px">
              {vacinas.map((v, i) => (
                <div key={i} className="bg-black/55 p-5 hover:bg-black/40 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <Syringe className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white/25 group-hover:text-white/45 transition-colors duration-300" strokeWidth={1} />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="text-sm font-light text-white/72">{v.name}</p>
                        <span
                          className="text-[9px] font-light tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: v.status.includes("Recomendada / exigida") ? "#D52B1E22" : "#0038A822",
                            color: v.status.includes("Recomendada / exigida") ? "#D52B1E" : "#4488ff",
                          }}
                        >
                          {v.status}
                        </span>
                      </div>
                      <p className="text-xs font-light text-white/40 leading-relaxed">{v.obs}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exames */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #0038A8, transparent)" }} />
              <p className="text-[10px] font-light tracking-[0.25em] uppercase text-white/45">Exames obrigatórios</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-white/5 gap-px">
              {exames.map((e, i) => (
                <div key={i} className="bg-black/55 p-5 hover:bg-black/40 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#0038A8]/40 group-hover:text-[#0038A8]/65 transition-colors duration-300" strokeWidth={1} />
                    <div>
                      <p className="text-sm font-light text-white/72 mb-1">{e.name}</p>
                      <p className="text-xs font-light text-white/40 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Where / price */}
            <div className="mt-6 grid grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden">
              {[
                { label: "Onde fazer", value: "Clínicas credenciadas — Assunção" },
                { label: "Preço médio", value: "US$ 20–50" },
                { label: "Prazo resultado", value: "No mesmo dia" },
                { label: "Pode fazer no Brasil?", value: "Não — deve ser no PY" },
              ].map(({ label, value }, i) => (
                <div key={i} className="bg-black/55 p-5 hover:bg-black/40 transition-all duration-300">
                  <p className="text-[10px] font-light tracking-[0.12em] uppercase text-white/28 mb-1">{label}</p>
                  <p className="text-xs font-light text-white/62">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>


      {/* ── SECTION 6: RESIDÊNCIA ─────────────────────────────────────────── */}
      <SectionWrapper id="residencia" className="border-t border-white/5">
        <SectionHeader
          eyebrow="06 — Residência"
          title="Processo de residência"
          italic="paraguaia"
          subtitle="A residência é o pré-requisito para a cédula. Há dois tipos: temporária e permanente. A maioria dos brasileiros começa com a temporária e converte depois."
        />

        {/* Comparação */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden mb-12">
          {[
            {
              type: "Temporária",
              color: "#D52B1E",
              duration: "2 anos (renovável)",
              financial: "Critérios mais flexíveis",
              benefits: ["Acesso a serviços locais", "Abertura de conta bancária", "Emissão de cédula paraguaia", "Trabalho legal no país"],
              note: "Caminho de entrada mais comum para brasileiros.",
            },
            {
              type: "Permanente",
              color: "#0038A8",
              duration: "Indefinida",
              financial: "Depósito ~US$ 5.000 em banco PY ou comprovação de renda",
              benefits: ["Todos os direitos da temporária", "Sem renovações periódicas", "Base para naturalização", "Mais estabilidade jurídica"],
              note: "Requer mais documentação financeira. Pode ser obtida direto ou convertida da temporária.",
            },
          ].map((r, i) => (
            <div key={i} className="bg-black/55 p-8 group hover:bg-black/40 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: r.color, opacity: 0.8 }} />
                <span className="text-[10px] font-light tracking-[0.2em] uppercase" style={{ color: r.color, opacity: 0.75 }}>
                  {r.type}
                </span>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-[10px] font-light tracking-[0.1em] uppercase text-white/28 mb-1">Duração</p>
                  <p className="text-sm font-light text-white/70">{r.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] font-light tracking-[0.1em] uppercase text-white/28 mb-1">Comprovação financeira</p>
                  <p className="text-sm font-light text-white/70">{r.financial}</p>
                </div>
              </div>
              <div className="space-y-2">
                {r.benefits.map((b, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 shrink-0" style={{ color: r.color, opacity: 0.5 }} strokeWidth={1.5} />
                    <span className="text-xs font-light text-white/50">{b}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] font-light leading-relaxed" style={{ color: r.color + "70" }}>{r.note}</p>
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(90deg, ${r.color}50, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Financial info */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {[
            { label: "Depósito mínimo (Permanente)", value: "~US$ 5.000", detail: "Em banco paraguaio (Banco Nacional de Fomento ou privado). Permanece na sua conta." },
            { label: "Necessita advogado?", value: "Fortemente recomendado", detail: "Não é legalmente obrigatório, mas erros de protocolo custam meses. 90% dos casos com atraso não tiveram assessoria." },
            { label: "Presença física no Paraguai", value: "Sim, obrigatória", detail: "Pelo menos uma viagem para protocolar pessoalmente e realizar os exames. A BBLaw otimiza sua estadia." },
          ].map(({ label, value, detail }, i) => (
            <div key={i} className="bg-black/55 p-7 hover:bg-black/40 transition-all duration-300 group">
              <p className="text-[10px] font-light tracking-[0.15em] uppercase text-white/30 mb-2">{label}</p>
              <p className="text-base font-light text-white/80 mb-2 group-hover:text-white/95 transition-colors duration-300">{value}</p>
              <p className="text-xs font-light text-white/42 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── SECTION 7: CHECKLIST FINAL ────────────────────────────────────── */}
      <SectionWrapper id="checklist" className="border-t border-white/5">
        <SectionHeader
          eyebrow="07 — Checklist"
          title="Checklist"
          italic="final"
          subtitle="Use esta lista antes de viajar e durante o processo no Paraguai. Um item faltando pode atrasar semanas."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Antes de ir */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #D52B1E, transparent)" }} />
              <p className="text-[10px] font-light tracking-[0.25em] uppercase text-white/45">Antes de ir ao Paraguai</p>
            </div>
            <div className="space-y-0">
              <CheckItem label="Passaporte válido (mínimo 6 meses de validade)" sub="Documento principal para entrada e uso em todos os órgãos" />
              <CheckItem label="Certidão de nascimento atualizada + apostilada" sub="Emitida há menos de 90 dias" />
              <CheckItem label="Certidão de casamento apostilada (se casado/a)" sub="Com averbação de divórcio se for o caso" />
              <CheckItem label="Antecedentes PF apostilados" sub="gov.br/pf → baixar PDF → apostilar" />
              <CheckItem label="Antecedentes Justiça Federal apostilados" sub="cjf.jus.br → Certidão de Ações Penais" />
              <CheckItem label="Antecedentes Justiça Estadual apostilados" sub="TJ do estado de nascimento e residência" />
              <CheckItem label="Antecedentes Militares apostilados (se aplicável)" sub="dsm.eb.mil.br" />
              <CheckItem label="4 fotos 3x4 recentes (fundo branco)" sub="Padrão para todos os documentos paraguaios" />
              <CheckItem label="Comprovante de profissão ou renda (recomendado)" sub="CRM, OAB, extratos bancários ou CTPS" />
              <CheckItem label="Dinheiro em dólar ou guarani para taxas" sub="Reservar pelo menos US$ 300–500 para taxas oficiais" />
              <CheckItem label="Cópia autenticada de todos os documentos" sub="Paraguai pode reter originais — tenha backup" />
              <CheckItem label="Contato do advogado / assessor no Paraguai" sub="Agende antes de chegar" />
            </div>
          </div>

          {/* No Paraguai */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #0038A8, transparent)" }} />
              <p className="text-[10px] font-light tracking-[0.25em] uppercase text-white/45">No Paraguai</p>
            </div>
            <div className="space-y-0">
              <CheckItem label="Entrada legal com carimbo no passaporte" sub="Guarde o carimbo — é prova de ingresso legal" />
              <CheckItem label="Antecedentes INTERPOL Paraguai" sub="Ministerio del Interior — leve passaporte original" />
              <CheckItem label="Antecedentes Polícia Nacional Paraguai" sub="Departamento de Identificaciones" />
              <CheckItem label="Exame médico em clínica credenciada" sub="Inclui raio-X de tórax e exame clínico" />
              <CheckItem label="Certificado de Vida e Residência" sub="Comisaría do bairro onde está hospedado" />
              <CheckItem label="Protocolo em Migrações (DGMM)" sub="Entregar todos os documentos apostilados + formulários" />
              <CheckItem label="Acompanhamento do processo (DGMM)" sub="Prazo: 2 a 8 semanas para aprovação" />
              <CheckItem label="Retirada do Carnet de Radicación" sub="Documento que comprova residência aprovada" />
              <CheckItem label="Solicitação da cédula (DGREC)" sub="Com carnet em mãos — prazo: 5 a 15 dias úteis" />
              <CheckItem label="Retirada da cédula paraguaia" sub="Presença física obrigatória — confira todos os dados" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── SECTION 8: ERROS FATAIS ───────────────────────────────────────── */}
      <SectionWrapper id="erros" className="border-t border-white/5">
        <SectionHeader
          eyebrow="08 — Cuidados"
          title="Erros que fazem"
          italic="negar a residência"
          subtitle="Estes são os motivos mais comuns de indeferimento e atraso no processo. Conhecê-los antecipadamente evita retrabalho e prejuízo."
        />

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {errosFatais.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 + (i % 4) * 0.08 }}
              className="bg-black/55 p-7 group hover:bg-black/40 transition-all duration-500 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-5 h-5 rounded-full border border-[#D52B1E]/25 flex items-center justify-center shrink-0 group-hover:border-[#D52B1E]/55 transition-colors duration-300">
                  <XCircle className="w-3 h-3 text-[#D52B1E]/45 group-hover:text-[#D52B1E]/75 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-light text-white/75 mb-2 group-hover:text-white/92 transition-colors duration-300">{e.title}</p>
                  <p className="text-xs font-light text-white/42 leading-relaxed">{e.desc}</p>
                </div>
              </div>
              <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(90deg, #D52B1E40, transparent)" }} />
            </motion.div>
          ))}
        </div>

        <AlertBox type="danger" title="Antecedente criminal é o impedimento mais grave">
          Diferente de outros documentos que podem ser substituídos, um antecedente criminal existente não tem como ser "corrigido"
          para fins migratórios. Consulte um advogado antes de iniciar qualquer documentação.
        </AlertBox>
      </SectionWrapper>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <SectionWrapper id="faq-guia" className="border-t border-white/5">
        <SectionHeader
          eyebrow="Dúvidas"
          title="Perguntas"
          italic="frequentes"
        />

        <div className="max-w-3xl">
          {[
            {
              q: "Posso fazer o processo inteiramente sozinho, sem advogado?",
              a: "Tecnicamente sim — mas não é recomendado. O processo envolve órgãos distintos com horários, filas e requisitos que mudam frequentemente. Erros de protocolo (ordem errada de entrega, documentos incompletos, prazo vencido) podem resultar em meses adicionais de espera. Com um especialista, o processo é mais rápido, previsível e com menos idas e vindas.",
            },
            {
              q: "Qual a diferença entre cédula paraguaia e cidadania paraguaia?",
              a: "A cédula é o documento de identidade do residente — você obtém após ter a residência aprovada. A cidadania é o vínculo jurídico completo com o país, que permite emitir passaporte paraguaio e votar. A cidadania normalmente é solicitada após 3 anos de residência contínua. Cédula ≠ cidadania.",
            },
            {
              q: "Preciso abrir conta em banco paraguaio?",
              a: "Para residência temporária, não é obrigatório. Para residência permanente, o depósito bancário de ~US$ 5.000 em banco paraguaio é uma das formas de comprovação financeira. Alternativamente, você pode comprovar renda estável (aposentadoria, pro-labore, aluguéis).",
            },
            {
              q: "Quantas vezes preciso viajar ao Paraguai?",
              a: "Na maioria dos casos, 1 a 2 viagens são suficientes: uma para protocolar toda a documentação e realizar os procedimentos presenciais (3 a 7 dias), e em alguns casos uma segunda para retirar documentos. Com uma boa assessoria, tudo é otimizado para o menor número de viagens possível.",
            },
            {
              q: "Minha certidão de nascimento é muito antiga — precisa ser nova?",
              a: "Sim. Para apostilamento, a certidão precisa ter sido emitida há menos de 90 dias. Uma certidão antiga, mesmo original, não é aceita. Solicite uma via atualizada ao cartório de registro civil — pode ser feito online em muitos estados brasileiros.",
            },
            {
              q: "A cédula paraguaia me dá acesso ao Mercosul?",
              a: "A cédula paraguaia é aceita como documento de viagem dentro do Mercosul (Brasil, Argentina, Uruguai, Bolívia). Isso facilita a mobilidade regional sem necessidade de passaporte para esses países.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            >
              {item.a}
            </AccordionItem>
          ))}
        </div>
      </SectionWrapper>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <SectionWrapper id="cta-guia" className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="block h-px w-8" style={{ background: "linear-gradient(90deg,transparent,rgba(213,43,30,0.6))" }} />
            <span className="eyebrow">BBLaw Assessoria Internacional</span>
            <span className="block h-px w-8" style={{ background: "linear-gradient(90deg,rgba(0,56,168,0.6),transparent)" }} />
          </div>

          <h2 className="heading-kast text-balance" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
            Pronto para iniciar
            <br />
            seu processo <em style={{ fontStyle: "italic" }}>com segurança?</em>
          </h2>

          <p className="mt-6 text-sm font-light text-white/55 leading-[2] max-w-lg mx-auto">
            Nossa equipe está em Assunção, conhece cada órgão e cuida de toda a burocracia por você —
            do primeiro documento à retirada da cédula. Fale agora e receba uma avaliação do seu caso.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="btn-py-ring">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-py-inner">
                Falar com especialista
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <a
              href="/"
              className="inline-flex items-center border border-white/10 text-white/52 text-sm font-light tracking-wide px-9 py-4 rounded-full hover:border-white/22 hover:text-white/65 transition-all duration-300"
            >
              Ver todos os serviços
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <Phone className="w-3.5 h-3.5 text-white/25" strokeWidth={1} />
            <span className="text-xs font-light text-white/35">+55 21 97990-1686 · contato@bezerraborges.com.br</span>
          </div>

          {/* Flag */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="w-6 h-px rounded-full" style={{ backgroundColor: "#D52B1E", opacity: 0.35 }} />
            <span className="w-6 h-px rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.18)" }} />
            <span className="w-6 h-px rounded-full" style={{ backgroundColor: "#0038A8", opacity: 0.35 }} />
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
