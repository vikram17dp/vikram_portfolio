import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import BackgroundElements from "@/components/background-elements"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Vikram D P | Full-Stack Developer",
  description: "Portfolio of Vikram D P, a Full-Stack Developer specializing in React.js, Node.js, and Next.js",
  icons: {
    icon: "/logo.png", // Using logo.png as favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${dancingScript.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <BackgroundElements />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
