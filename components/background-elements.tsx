"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const BackgroundElements = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === "dark"

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Yellow triangle */}
      <motion.div
        className="absolute left-[15%] top-[20%] w-6 h-6 transform rotate-180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-yellow-400"></div>
      </motion.div>

      {/* Red triangle */}
      <motion.div
        className="absolute right-[15%] top-[20%] w-6 h-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-red-500"></div>
      </motion.div>

      {/* Cyan circle */}
      <motion.div
        className="absolute left-[10%] bottom-[20%] w-8 h-8 border-2 border-cyan-400 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      ></motion.div>

      {/* Large logo-like element */}
      <motion.div
        className="absolute right-[10%] bottom-[10%] w-64 h-64 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 0.1 : 0.05 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div
          className={`w-full h-full font-bold text-[250px] leading-none ${isDark ? "text-purple-600" : "text-purple-400"}`}
        >
          V
        </div>
      </motion.div>

      {/* Cyan accent */}
      <motion.div
        className="absolute right-0 top-[30%] w-16 h-16"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-full h-full relative">
          <div className="absolute top-0 right-0 w-8 h-8 bg-cyan-400 rounded-tl-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-2 border-cyan-400 rounded-br-lg"></div>
        </div>
      </motion.div>

      {/* Additional animated elements */}

      {/* Floating dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute w-2 h-2 rounded-full ${
            i % 3 === 0 ? "bg-purple-400" : i % 3 === 1 ? "bg-cyan-400" : "bg-yellow-400"
          }`}
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + ((i * 7) % 70)}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 0.6,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated gradient blob */}
      <motion.div
        className="absolute left-[5%] top-[40%] w-64 h-64 rounded-full opacity-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute bottom-[5%] left-[20%] w-40 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[15%] right-[25%] w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
        animate={{
          scaleY: [0, 1, 0],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default BackgroundElements
