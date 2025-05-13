"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "C++", "TypeScript", "JavaScript", "HTML", "CSS"],
      colorClass: "from-emerald-500 to-teal-300",
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Redux"],
      colorClass: "from-violet-500 to-fuchsia-300",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"],
      colorClass: "from-amber-500 to-yellow-300",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "DynamoDB", "Supabase", "Redis", "Prisma ORM"],
      colorClass: "from-cyan-500 to-blue-300",
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Git", "GitHub", "Docker", "AWS", "Vercel", "Render", "Postman",
        "Cloudinary", "Insomnia", "Neon", "Inngest", "Gemini API", "Kinde Auth"
      ],
      colorClass: "from-rose-500 to-pink-300",
    },
    {
      category: "Core CS",
      skills: ["Data Structures", "Algorithms", "OOP", "Computer Networks", "Operating Systems", "DBMS"],
      colorClass: "from-indigo-500 to-purple-300",
    },
  ]

  const getRandomColor = (index: number, categoryIndex: number) => {
    const colors = [
      "bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 dark:from-emerald-900 dark:to-emerald-800 dark:text-emerald-100",
      "bg-gradient-to-r from-violet-100 to-violet-200 text-violet-800 dark:from-violet-900 dark:to-violet-800 dark:text-violet-100",
      "bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 dark:from-amber-900 dark:to-amber-800 dark:text-amber-100",
      "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 dark:from-cyan-900 dark:to-cyan-800 dark:text-cyan-100",
      "bg-gradient-to-r from-rose-100 to-rose-200 text-rose-800 dark:from-rose-900 dark:to-rose-800 dark:text-rose-100",
      "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 dark:from-indigo-900 dark:to-indigo-800 dark:text-indigo-100",
    ]
    const colorIndex = (index + categoryIndex) % colors.length
    return colors[colorIndex]
  }

  return (
    <section id="skills" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading text-center">Skills</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto text-muted-foreground">
          A comprehensive set of technical skills I&apos;ve developed through education, projects, and work experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full card-hover overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-r ${category.colorClass}`}></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className={`text-sm skill-badge hover:shadow-md ${getRandomColor(skillIndex, categoryIndex)}`}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills
