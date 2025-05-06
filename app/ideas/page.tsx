import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Lightbulb } from "lucide-react"

export default function IdeasPage() {
  const ideas = [
    {
      title: "AI-Powered Study Assistant",
      description:
        "An application that uses AI to help students organize study materials, create personalized study plans, and provide real-time assistance with difficult concepts.",
    },
    {
      title: "Community Garden Management System",
      description:
        "A platform to help manage community gardens, track plant growth, coordinate volunteers, and share knowledge about sustainable gardening practices.",
    },
    {
      title: "Elderly Care Companion App",
      description:
        "A mobile application designed to assist elderly individuals with medication reminders, simplified video calls to family, and emergency assistance features.",
    },
    {
      title: "Sustainable Fashion Marketplace",
      description:
        "An online marketplace focused on sustainable and ethically produced fashion items, with transparency about supply chains and environmental impact.",
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl font-bold mb-6 gradient-text">Ideas & Concepts</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          A collection of project ideas and concepts I'm exploring. These represent potential future projects and areas
          of interest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ideas.map((idea, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                  {idea.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{idea.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            This page is currently under development. Check back soon for more detailed project ideas and concepts!
          </p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
