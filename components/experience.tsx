"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Bluestock Fintech Pvt. Ltd.",
      logo: "/images/companies/bluestock.png",
      period: "April 2025 - May 2025",
      location: "Remote",
      description: [
        "Developed an IPO web app and REST APIs using the MERN stack for Bluestock's website and client platforms.",
        "Built scalable, secure features to enhance functionality and performance of live fintech projects.",
        "Gained hands-on experience in full-stack development, API integration, and deployment.",
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Full Stack Development Intern",
      company: "Elfinity Technologies Pvt. Ltd.",
      logo: "/images/companies/elfinity.png",
      period: "March 2025 - Present",
      location: "Hybrid",
      description: [
        'Worked as part of a team to develop "Namatrip," a trek and adventure platform, using full-stack technologies.',
        "Developed scalable features to enhance user experience on the Namatrip trek and adventure platform.",
        "Collaborated on development, API integration, and deployment, following industry best practices.",
      ],
      skills: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs"],
    },
  ]

  const education = [
   {
  institution: "MVJ College of Engineering",
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  period: "Dec 2022 - Present",
  location: "Bangalore, Karnataka",
  gpa: "CGPA: 8.45 (Aggregate up to 5th Semester)",
}
,
    {
      institution: "The Team Academy",
      degree: "Pre-University Course",
      period: "Jun 2021 - Mar 2022",
      location: "Davangere, Karnataka",
      gpa: "Percentage: 93.66%",
    },
  ]

  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading text-center">Experience</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto text-muted-foreground">
          My professional journey and work experience in the tech industry.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 relative rounded-full overflow-hidden border bg-white flex items-center justify-center p-2">
                        <Image
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="section-heading text-center mt-16">Education</h2>
        <div className="space-y-6 mt-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{edu.institution}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-primary">{edu.gpa}</p>
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

export default Experience
