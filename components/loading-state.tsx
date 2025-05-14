import { Spinner } from "@/components/ui/spinner"

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <Spinner size="lg" className="mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Loading</h2>
      <p className="text-muted-foreground text-center max-w-md">
        Please wait while we prepare the ProQA Plus content for you...
      </p>
    </div>
  )
}
