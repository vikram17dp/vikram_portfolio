import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-3xl font-bold">Vikram D P's Resume</h1>
        <p className="text-muted-foreground">You can view or download my resume using the buttons below.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <a href="/Vikram_DP_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
