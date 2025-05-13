"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2, FileText } from "lucide-react"
import { useState, useEffect } from "react"

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    // Smooth cursor following
    const updateCursorPosition = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }))
      requestAnimationFrame(updateCursorPosition)
    }

    const animationId = requestAnimationFrame(updateCursorPosition)
    return () => cancelAnimationFrame(animationId)
  }, [mousePosition])

  return (
    <section id="home" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I&apos;m <span className="gradient-text">Vikram D P</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            🚀 Full-Stack Developer | 3rd-Year CSE Student
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate developer skilled in React.js, Next.js, and Node.js, focused on building scalable, secure
            apps. With a strong problem-solving mindset, I turn complex ideas into clean, efficient solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Vikram_DP_Resume.pdf" download>
                <FileText className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/vikram17dp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/vikram-d-p/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://leetcode.com/u/VIKRAM_D_P/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <Code2 className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative group" asChild>
              <Link
                href="https://codolio.com/profile/5GOnQ5r7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codolio"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/images/codolio-logo.png"
                    alt="Codolio"
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="profile-container">
            <motion.div
              className="profile-image"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={
                isHovered
                  ? {
                      rotateY: [0, 10, 0, -10, 0],
                      rotateZ: [0, 5, 0, -5, 0],
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }
                  : { rotateY: 0, rotateZ: 0, scale: 1 }
              }
              transition={{
                duration: isHovered ? 2 : 0.5,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                repeatType: "mirror",
              }}
            >
              <Image src="/images/profile.png" alt="Vikram D P" fill className="object-cover rounded-full" priority />
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-violet-400 flex items-center justify-center rounded-full"
                >
                  <span className="text-white font-bold text-xl">Vikram D P</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom cursor follower */}
      <motion.div
        className="cursor-follower hidden md:block"
        animate={{
          x: cursorPosition.x - 20,
          y: cursorPosition.y - 20,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
      />
    </section>
  )
}

export default Hero
