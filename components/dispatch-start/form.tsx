"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function StartForm() {
  const router = useRouter()
  const [callsign, setCallsign] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate callsign format (C-NNN or Z-NNN where N is a number)
    const callsignRegex = /^[CZ]-\d{3}$/

    if (!callsignRegex.test(callsign)) {
      setError("Callsign must be in C-XXX or Z-XXX format")
      return
    }

    // Store callsign in localStorage with the key DISPATCH_CALLSIGN
    localStorage.setItem("CALLSIGN", callsign)

    // Navigate to dispatch dashboard
    router.push("/dispatch")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const newInput = e.target.value.toUpperCase()
    const sanitizedInput = newInput.replace(/[^A-Z0-9-]/g, "")

    if (sanitizedInput.length < callsign.length) {
      if (sanitizedInput.length < 2) {
        setCallsign("")
      } else {
        setCallsign(sanitizedInput)
      }
      return
    }

    if (callsign.length === 0 && (sanitizedInput === "C" || sanitizedInput === "Z")) {
      setCallsign(`${sanitizedInput}-`)
      return
    }

    const numbersOnly = sanitizedInput.replace(/[^0-9]/g, "")

    if (callsign.length >= 2 && callsign.length < 5 && numbersOnly.length > 0) {
      const updatedCallsign = callsign + numbersOnly.slice(-1)
      setCallsign(updatedCallsign)

      if (updatedCallsign.length === 5) {
        submitButtonRef.current?.focus();
        setIsButtonDisabled(false)
      }
    }
  }

  useEffect(() => {
    const storedCallsign = localStorage.getItem("CALLSIGN");

    const callsignRegex = /^[CZ]-\d{3}$/

    if (storedCallsign && callsignRegex.test(storedCallsign)) {
      setCallsign(storedCallsign);
      setIsButtonDisabled(false);
      submitButtonRef.current?.focus();
    }
  }, []);

  return (
    <Card className="w-full max-w-md backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Dispatcher Login</CardTitle>
        <CardDescription className="text-center">Enter your callsign to begin dispatching</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="callsign">Callsign</Label>
              <Input
                id="callsign"
                placeholder="C-123 or Z-456"
                value={callsign}
                onChange={handleChange}
                className="text-lg"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" variant="destructive" disabled={isButtonDisabled} className="w-full mt-4 cursor-pointer focus:ring-blue-500" ref={submitButtonRef}>
            Start Dispatching
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

