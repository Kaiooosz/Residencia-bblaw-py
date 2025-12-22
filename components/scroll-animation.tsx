"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type AnimationType = "slide-left" | "slide-right" | "slide-up" | "slide-down" | "fade-in"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
}

const animationVariants = {
  "slide-left": {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
}

export function ScrollAnimation({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 0.6,
  className,
}: ScrollAnimationProps) {
  const variant = animationVariants[animation]

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

