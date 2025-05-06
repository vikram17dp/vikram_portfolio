import Link from "next/link"
import { Github, Linkedin, Code2, Mail, ExternalLink } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-xl">
              <span className="gradient-text">Vikram D P</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack Developer specializing in modern web technologies
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/vikram17dp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vikram-d-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://leetcode.com/u/VIKRAM_D_P/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="LeetCode"
            >
              <Code2 className="h-5 w-5" />
            </Link>
            <Link
              href="https://codolio.com/profile/5GOnQ5r7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Codolio"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:vikramdp505@gmail.com"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>© {currentYear} Vikram D P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
