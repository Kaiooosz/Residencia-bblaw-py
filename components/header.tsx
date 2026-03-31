"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems: { label: string; href: string; isPage?: boolean }[] = [
  { label: "Início", href: "#hero" },
  { label: "Por que Paraguai", href: "#problema" },
  { label: "Serviços", href: "#solucao" },
  { label: "Como Funciona", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Residência", href: "#solucao" },
  { label: "Guia Cédula", href: "/guia-cedula", isPage: true },
]

const WA_LINK =
  "https://wa.me/5521979901686?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20para%20resid%C3%AAncia%20fiscal%20no%20Paraguai."

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 95)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolled ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/88 backdrop-blur-md border-b border-white/5"
      style={{ pointerEvents: isScrolled ? "auto" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="flex items-center justify-between h-20">

          {/* Logo — desliza suavemente ao aparecer */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: isScrolled ? 1 : 0, x: isScrolled ? 0 : -12 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center">
              <img src="/LogoBranco.svg" alt="Bezerra Borges" className="h-8 w-auto object-contain opacity-80" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[10px] font-light tracking-[0.18em] text-[#D52B1E]/60 hover:text-[#D52B1E]/85 transition-colors duration-300 uppercase"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[10px] font-light tracking-[0.18em] text-white/55 hover:text-white/65 transition-colors duration-300 uppercase"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-light tracking-wide border border-white/10 text-white/58 hover:border-white/25 hover:text-white/62 transition-all duration-300 px-7 py-2.5 rounded-full"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/45 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen
              ? <X size={18} strokeWidth={1} />
              : <Menu size={18} strokeWidth={1} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-white/5"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-light text-[#D52B1E]/55 hover:text-[#D52B1E]/80 transition-colors tracking-wide"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-light text-white/40 hover:text-white/65 transition-colors tracking-wide"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 text-sm font-light border border-white/12 text-white/45 text-center py-3 rounded-full hover:border-white/25 transition-all"
              >
                Agendar Consulta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
