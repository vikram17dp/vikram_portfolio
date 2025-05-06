import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Lightbulb,
  Activity,
  Settings,
  Users,
  BarChart,
  Shield,
  Database,
  Code,
  Server,
  Smartphone,
} from "lucide-react"

export default function SmartChairPage() {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Projects Hub</h1>
            <h2 className="text-2xl font-bold mb-4">PostureWise</h2>
            <p className="text-xl text-muted-foreground mb-6">
              An IoT-based smart chair monitoring system for posture and health tracking.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 dark:from-emerald-900 dark:to-emerald-800 dark:text-emerald-100">
                React.js
              </Badge>
              <Badge className="bg-gradient-to-r from-violet-100 to-violet-200 text-violet-800 dark:from-violet-900 dark:to-violet-800 dark:text-violet-100">
                Next.js
              </Badge>
              <Badge className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 dark:from-amber-900 dark:to-amber-800 dark:text-amber-100">
                IoT
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 dark:from-cyan-900 dark:to-cyan-800 dark:text-cyan-100">
                PostgreSQL
              </Badge>
              <Badge className="bg-gradient-to-r from-rose-100 to-rose-200 text-rose-800 dark:from-rose-900 dark:to-rose-800 dark:text-rose-100">
                Express.js
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 dark:from-indigo-900 dark:to-indigo-800 dark:text-indigo-100">
                WebSockets
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link href="https://smartchairplus.vercel.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/vikram17dp" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <Image
                src="/images/projects/posture-tracker.jpeg"
                alt="PostureWise Device"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/projects/dashboard-ui.png"
              alt="PostureWise Dashboard"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg mb-6">
              PostureWise (formerly SmartChair+) is an innovative IoT-based smart chair monitoring system designed to
              improve posture, enhance comfort, and track health metrics for users who spend long hours sitting. The
              system uses embedded sensors to collect real-time data about sitting posture, movement patterns, and
              environmental factors, providing personalized recommendations for healthier sitting habits.
            </p>
            <p className="text-lg mb-6">
              As a startup idea I'm actively developing, PostureWise aims to address the growing health concerns related
              to sedentary lifestyles and poor ergonomics in office environments. The platform combines hardware sensors
              with a sophisticated software dashboard to deliver actionable insights and real-time alerts.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why PostureWise Is Unique</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-left">Exists in Market?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Posture clip + vibration</td>
                  <td className="border p-3">Yes</td>
                </tr>
                <tr>
                  <td className="border p-3">App to view posture data</td>
                  <td className="border p-3">Yes</td>
                </tr>
                <tr>
                  <td className="border p-3">Hydration & food reminder integration</td>
                  <td className="border p-3 font-medium text-emerald-600 dark:text-emerald-400">No</td>
                </tr>
                <tr>
                  <td className="border p-3">Sound-based personalized alerts</td>
                  <td className="border p-3 font-medium text-emerald-600 dark:text-emerald-400">No</td>
                </tr>
                <tr>
                  <td className="border p-3">Weekly health dashboard</td>
                  <td className="border p-3 font-medium text-amber-600 dark:text-amber-400">Rare</td>
                </tr>
                <tr>
                  <td className="border p-3">Wellness + Posture in one device</td>
                  <td className="border p-3 font-medium text-emerald-600 dark:text-emerald-400">Not available yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="skill-card">
            <CardHeader>
              <Activity className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Continuous tracking of posture, pressure distribution, and sitting duration with instant feedback
                through the dashboard and mobile app.
              </p>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Smart Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Personalized notifications for poor posture, extended sitting periods, and recommended breaks to improve
                overall health.
              </p>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Health Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Comprehensive reports and trends analysis to help users understand their sitting habits and make
                informed decisions about their health.
              </p>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardHeader>
              <Settings className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Customizable Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Adjustable parameters for alert sensitivity, notification frequency, and personal goals to create a
                tailored experience for each user.
              </p>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Multi-user Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Enterprise solutions for offices with multiple chairs, allowing managers to monitor overall ergonomic
                health across teams.
              </p>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Privacy-Focused</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Robust data protection measures ensuring user information is securely stored and processed with full
                transparency and control.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dashboard Preview</h2>
          <div className="border rounded-lg p-6 bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-primary" />
                    Hydration
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">4/8 glasses today</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>0L</span>
                      <span>1L</span>
                      <span>2L</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/2 rounded-full"></div>
                    </div>
                    <p className="text-sm">Next reminder in 1h 20m</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-primary" />
                    Posture Score
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Last 5 minutes</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div className="text-5xl font-bold">70</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-primary" />
                    Stretch Reminders
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Last stretch: 2h ago</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recommended Stretch:</p>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Activity className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Neck Stretch</p>
                        <p className="text-xs text-muted-foreground">1 minute routine</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tools & Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-5 w-5 mr-2 text-primary" />
                  Hardware
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>ESP32 microcontroller</li>
                  <li>MPU6050 accelerometer</li>
                  <li>Vibration motor</li>
                  <li>Li-ion battery</li>
                  <li>HC-05/BLE for connectivity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Next.js for frontend and API routes</li>
                  <li>PostgreSQL for database</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Framer Motion for animations</li>
                  <li>WebSockets for real-time updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-primary" />
                  Mobile Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>React Native for cross-platform app</li>
                  <li>Expo for development workflow</li>
                  <li>Push notifications</li>
                  <li>Bluetooth connectivity</li>
                  <li>Offline data synchronization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Backend & Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js for server-side logic</li>
                  <li>PostgreSQL for relational data</li>
                  <li>Redis for caching</li>
                  <li>Prisma ORM for database access</li>
                  <li>JWT for authentication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Market Potential</h2>
          <p className="text-lg mb-6">
            With the growing awareness of ergonomics and workplace health, PostureWise addresses a significant market
            need:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-6">
            <li>Corporate wellness programs seeking data-driven solutions for employee health</li>
            <li>Remote workers investing in home office equipment for better ergonomics</li>
            <li>Healthcare providers focusing on preventative care for posture-related issues</li>
            <li>Educational institutions promoting healthy sitting habits for students</li>
            <li>Individual consumers concerned about long-term health impacts of sedentary work</li>
          </ul>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/#contact">Interested in Collaboration?</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
