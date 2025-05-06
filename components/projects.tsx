"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "PreScripto",
      description: "Hospital management system with role-based authentication and Stripe integration.",
      image: "/images/projects/prescripto.png",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Firebase", "Google OAuth", "Stripe"],
      liveLink: "#",
      githubLink: "https://github.com/vikram17dp",
      features: [
        "Enhanced hospital management system with 100% role-based authentication",
        "Separate dashboards for admins to manage users and hospital operations",
        "Dedicated dashboard for doctors to handle appointments and medical records",
      ],
    },
    {
      title: "VehiQL - Car Portal",
      description: "Full-stack car dealership platform with AI-powered features for vehicle listings.",
      image: "/images/projects/vehiql.png",
      tags: ["Next.js", "Tailwind CSS", "Prisma", "Supabase", "PostgreSQL", "Arcjet", "Shadcn-UI"],
      liveLink: "#",
      githubLink: "https://github.com/vikram17dp",
      features: [
        "AI auto-fills vehicle details from a single car image",
        "Advanced search, filters, and appointment booking features",
        "Separate dashboards for admins and users",
      ],
    },
    {
      title: "RediStash",
      description: "Real-time chat application built with Redis for efficient message handling.",
      image: "/images/projects/redistash.png",
      tags: ["React.js", "Node.js", "Redis", "Socket.io", "Express.js", "JWT"],
      liveLink: "#",
      githubLink: "https://github.com/vikram17dp",
      features: [
        "Real-time messaging with Redis pub/sub",
        "User authentication and message persistence",
        "Responsive UI for desktop and mobile devices",
      ],
    },
    {
      title: "EstateEase",
      description: "Real estate platform for property listings and management.",
      image: "/images/projects/estateease.png",
      tags: ["Next.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "https://github.com/vikram17dp",
      features: [
        "Property search with advanced filtering options",
        "User dashboard for saved properties and inquiries",
        "Admin panel for property management",
      ],
    },
    {
      title: "AI Trip Planner",
      description: "AI-powered travel itinerary generator based on user preferences.",
      image: "/images/projects/aitrip.png",
      tags: ["React.js", "Node.js", "OpenAI API", "MongoDB", "Express.js"],
      liveLink: "#",
      githubLink: "https://github.com/vikram17dp",
      features: [
        "Personalized travel recommendations using AI",
        "Interactive itinerary builder and editor",
        "Integration with maps and travel services",
      ],
    },
    {
      title: "PostureWise",
      description: "IoT-based smart chair monitoring system for posture and health tracking.",
      image: "/images/projects/dashboard-ui.png",
      tags: ["Next.js", "PostgreSQL", "IoT", "React Native", "Express.js", "WebSockets"],
      liveLink: "https://smartchairplus.vercel.app",
      githubLink: "https://github.com/vikram17dp",
      features: [
        "Real-time posture monitoring and wellness integration",
        "Hydration, meal timing, and stretch reminders",
        "Comprehensive health dashboard with analytics",
      ],
      route: "/smartchair",
    },
    {
      title: "AI Career Coach",
      description: "AI-powered career guidance platform for professional development and job success.",
      image: "/images/projects/careerzen.png",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS", "MongoDB", "Express.js", "Authentication"],
      liveLink: "#",
      githubLink: "https://github.com/vikram17dp",
      features: [
        "Personalized career guidance using AI",
        "Interview preparation and resume analysis",
        "Professional development tracking and recommendations",
      ],
    },
  ]

  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading text-center">Projects</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto text-muted-foreground">
          A showcase of my recent projects and applications built with modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col card-hover overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs animated-badge">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    {project.route ? (
                      <Link href={project.route}>
                        <ExternalLink className="h-4 w-4 mr-2" /> View Details
                      </Link>
                    ) : (
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </Link>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
