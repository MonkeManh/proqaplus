import { ClipboardCheck, FileText, Headphones } from "lucide-react"

export default function CardRow() {
  return (
    <section className="flex justify-center py-30 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
                <FileText className="h-8 w-8 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-red-600 dark:text-red-400">Emergency Protocols</h3>
              <p className="text-muted-foreground">Access standardized protocols for emergency response situations.</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
                <ClipboardCheck className="h-8 w-8 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">Response Planning</h3>
              <p className="text-muted-foreground">Create and manage detailed response plans for various scenarios.</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900/20 mb-4">
                <Headphones className="h-8 w-8 text-amber-500 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-amber-600 dark:text-amber-400">Dispatch Support</h3>
              <p className="text-muted-foreground">
                Tools and resources to support 911 dispatchers in critical situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
