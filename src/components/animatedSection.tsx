"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import clsx from "clsx"

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    setIsDesktop(mq.matches)

    const handler = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches)

    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return isDesktop
}

type AnimationType = "left" | "right" | "up" | "zoom"

type Props = {
  id: string
  children: React.ReactNode
  className?: string
  animation?: AnimationType
}

export default function AnimatedSection({
  id,
  children,
  className,
  animation = "up",
}: Props) {
  const isDesktop = useIsDesktop()

  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
      x:
        animation === "left" && isDesktop
          ? -40
          : animation === "right" && isDesktop
          ? 40
          : 0,
      scale: animation === "zoom" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  }

  return (
    <section
      id={id}
      className="scroll-mt-20 overflow-hidden"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          willChange: "transform",
          transformOrigin: "center",
        }}
        className={clsx(
          "w-full max-w-full",
          className
        )}
      >
        {children}
      </motion.div>
    </section>
  )
}