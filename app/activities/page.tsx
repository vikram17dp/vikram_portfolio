import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Trophy, BookOpen, Rocket, Code, Lightbulb } from "lucide-react"

export default function ActivitiesPage() {
  const activities = [
    {
      title: "NIC Club Activity Winner",
      description:
        "Winner in NIC Club Activity with 100+ participants, working on game development using full-stack technologies.",
      icon: <Trophy className="h-8 w-8 text-primary" />,
    },
    {
      title: "Smart India Hackathon 2024",
      description: "Contributed to Smart India Hackathon 2024, developing an AI Trip Planner (code on GitHub).",
      icon: <Rocket className="h-8 w-8 text-primary" />,
    },
    {
      title: "Ideathon 2024",
      description: "Designed the Bikers Portal during Ideathon 2024 (repo on GitHub).",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
    {
      title: "Inscribe Club Member",
      description:
        "Active member of Inscribe Club, fostering innovation by organizing and participating in technical workshops and collaborative projects.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Integrated Product Development Club",
      description:
        "Tech Member at Integrated Product Development Club, collaborating to brainstorm and develop innovative products and prototypes.",
      icon: <Code className="h-8 w-8 text-primary" />,
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

        <h1 className="text-4xl font-bold mb-6 gradient-text">Extracurricular Activities</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Beyond academics and professional work, I'm actively involved in various extracurricular activities that help
          me grow as a developer and individual.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{activity.icon}</div>
                  <CardTitle>{activity.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
