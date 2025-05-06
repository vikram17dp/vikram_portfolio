"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Shield, Cloud } from "lucide-react"

const About = () => {
  const specializations = [
    {
      title: "Full-Stack Development",
      description: "Proficient in React.js, Node.js, Express.js, and Next.js",
      icon: <Code2 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Backend & API Integration",
      description: "RESTful APIs, MongoDB, MySQL, PostgreSQL, Prisma ORM",
      icon: <Server className="h-10 w-10 text-primary" />,
    },
    {
      title: "Frontend & UI/UX",
      description: "Tailwind CSS, ShadCN, Framer Motion for responsive interfaces",
      icon: <Layout className="h-10 w-10 text-primary" />,
    },
    {
      title: "Database Management",
      description: "MongoDB, MySQL, PostgreSQL, DynamoDB, Supabase",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Security & Optimization",
      description: "JWT Authentication and database performance optimization",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Serverless Architecture, Docker, Kubernetes",
      icon: <Cloud className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="about" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading text-center">About Me</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto text-muted-foreground">
          👨‍💻 I&apos;m a 3rd-year B.E. Computer Science student and Full-Stack Developer with expertise in Java, Data
          Structures & Algorithms, and Web Development. Passionate about blending theory with real-world projects, I
          specialize in building scalable, secure applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover skill-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                      {spec.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
                    <p className="text-muted-foreground">{spec.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
