"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ChevronRight, FileText, Upload, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Flag_of_Palestine.svg"
            alt="Palestinian Flag"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg font-playfair">Apply for Grants</h1>
            <p className="mt-6 text-xl text-white drop-shadow-md">
              Take the first step toward your educational journey with our comprehensive grant programs.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        step > i + 1
                          ? "border-[hsl(120,61%,34%)] bg-[hsl(120,61%,34%)] text-white"
                          : step === i + 1
                            ? "border-[hsl(120,61%,34%)] text-[hsl(120,61%,34%)]"
                            : "border-gray-300 text-gray-300"
                      }`}
                    >
                      {step > i + 1 ? <CheckCircle className="h-5 w-5" /> : <span>{i + 1}</span>}
                    </div>
                    <div
                      className={`mt-2 text-sm ${
                        step > i + 1 ? "text-[hsl(120,61%,34%)]" : step === i + 1 ? "text-[hsl(120,61%,34%)]" : "text-gray-400"
                      }`}
                    >
                      {i === 0 && "Personal Info"}
                      {i === 1 && "Program Selection"}
                      {i === 2 && "Documents"}
                      {i === 3 && "Review & Submit"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                {Array.from({ length: totalSteps - 1 }).map((_, i) => (
                  <div key={i} className="flex-1">
                    <div className={`h-1 ${step > i + 1 ? "bg-[hsl(120,61%,34%)]" : "bg-gray-200"}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Personal Information</CardTitle>
                    <CardDescription>
                      Please provide your personal details to begin the application process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality</Label>
                        <Input id="nationality" placeholder="Enter your nationality" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Current Address</Label>
                      <Textarea id="address" placeholder="Enter your current address" />
                    </div>

                    <div className="space-y-2">
                      <Label>Gender</Label>
                      <RadioGroup defaultValue="male" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={nextStep} className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">
                        Next Step
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Program Selection */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Program Selection</CardTitle>
                    <CardDescription>
                      Select the program you wish to apply for and provide academic information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="program-type">Program Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate Scholarship</SelectItem>
                          <SelectItem value="masters">Master's Scholarship</SelectItem>
                          <SelectItem value="phd">PhD Fellowship</SelectItem>
                          <SelectItem value="research">Research Grant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="field-of-study">Field of Study</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select field of study" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="medicine">Medicine & Health Sciences</SelectItem>
                          <SelectItem value="business">Business & Economics</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                          <SelectItem value="science">Natural Sciences</SelectItem>
                          <SelectItem value="social">Social Sciences</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="current-institution">Current/Previous Institution</Label>
                        <Input id="current-institution" placeholder="Enter institution name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gpa">GPA/Academic Average</Label>
                        <Input id="gpa" placeholder="Enter your GPA or academic average" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="target-institution">Target Institution (if known)</Label>
                        <Input id="target-institution" placeholder="Enter target institution" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Expected Start Date</Label>
                        <Input id="start-date" type="month" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Motivation Statement</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Briefly describe why you are applying for this program and how it aligns with your goals (max 500 words)"
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Previous Step
                      </Button>
                      <Button onClick={nextStep} className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">
                        Next Step
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Documents */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Required Documents</CardTitle>
                    <CardDescription>
                      Upload all required documents for your application. Accepted formats: PDF, JPG, PNG (max 5MB
                      each).
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg border border-dashed p-6">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <div className="rounded-full bg-[hsl(120,61%,34%)]/10 p-3">
                          <Upload className="h-6 w-6 text-[hsl(120,61%,34%)]" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">ID/Passport Copy</p>
                          <p className="text-xs text-gray-500">Drag and drop or click to upload</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          Select File
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-dashed p-6">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <div className="rounded-full bg-[hsl(0,76%,40%)]/10 p-3">
                          <FileText className="h-6 w-6 text-[hsl(0,76%,40%)]" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Academic Transcripts</p>
                          <p className="text-xs text-gray-500">Drag and drop or click to upload</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          Select File
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-dashed p-6">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <div className="rounded-full bg-black/10 dark:bg-white/10 p-3">
                          <User className="h-6 w-6 text-black dark:text-white" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Recommendation Letters (2)</p>
                          <p className="text-xs text-gray-500">Drag and drop or click to upload</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          Select Files
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-dashed p-6">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <div className="rounded-full bg-[hsl(120,61%,34%)]/10 p-3">
                          <FileText className="h-6 w-6 text-[hsl(120,61%,34%)]" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">CV/Resume</p>
                          <p className="text-xs text-gray-500">Drag and drop or click to upload</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          Select File
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Previous Step
                      </Button>
                      <Button onClick={nextStep} className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">
                        Next Step
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Review & Submit</CardTitle>
                    <CardDescription>Please review your application details before submitting.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg bg-[hsl(120,61%,34%)]/5 dark:bg-[hsl(120,61%,34%)]/10 p-6">
                      <h3 className="mb-4 text-lg font-medium text-[hsl(120,61%,34%)]">Personal Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Full Name</p>
                          <p>Ahmed Mohammad</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Email</p>
                          <p>ahmed.mohammad@example.com</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Phone</p>
                          <p>+90 123 456 7890</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Nationality</p>
                          <p>Palestinian</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[hsl(0,76%,40%)]/5 dark:bg-[hsl(0,76%,40%)]/10 p-6">
                      <h3 className="mb-4 text-lg font-medium text-[hsl(0,76%,40%)]">Program Details</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Program Type</p>
                          <p>Master's Scholarship</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Field of Study</p>
                          <p>Engineering</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Current Institution</p>
                          <p>Al-Quds University</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Target Institution</p>
                          <p>Istanbul Technical University</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-black/5 dark:bg-white/5 p-6">
                      <h3 className="mb-4 text-lg font-medium">Uploaded Documents</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-4 w-4 text-[hsl(120,61%,34%)]" />
                          ID/Passport Copy
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-4 w-4 text-[hsl(120,61%,34%)]" />
                          Academic Transcripts
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-4 w-4 text-[hsl(120,61%,34%)]" />
                          Recommendation Letters (2)
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-4 w-4 text-[hsl(120,61%,34%)]" />
                          CV/Resume
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        I confirm that all information provided is accurate and complete. I understand that providing
                        false information may result in disqualification.
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Previous Step
                      </Button>
                      <Button className="bg-[hsl(120,61%,34%)] text-white hover:bg-[hsl(120,61%,34%)]/90 dark:bg-[hsl(120,61%,34%)] dark:text-white dark:hover:bg-[hsl(120,61%,34%)]/90">Submit Application</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(0,76%,40%)]/5 via-transparent to-[hsl(120,61%,34%)]/5 dark:from-[hsl(0,76%,40%)]/10 dark:via-black/80 dark:to-[hsl(120,61%,34%)]/10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center rounded-lg bg-[hsl(0,76%,40%)]/10 px-3 py-1 text-sm text-[hsl(0,76%,40%)]">
                <FileText className="mr-1 h-4 w-4" />
                Helpful Advice
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">Application Tips</h2>
              <p className="mt-4 text-muted-foreground">
                Maximize your chances of success with these helpful tips for your application.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-[hsl(120,61%,34%)]/20 p-6">
                <h3 className="text-lg font-bold text-[hsl(120,61%,34%)]">Start Early</h3>
                <p className="mt-2 text-muted-foreground">
                  Begin your application well before the deadline to allow time for gathering documents, securing
                  recommendation letters, and crafting a compelling personal statement.
                </p>
              </div>

              <div className="rounded-lg border border-[hsl(0,76%,40%)]/20 p-6">
                <h3 className="text-lg font-bold text-[hsl(0,76%,40%)]">Be Specific About Your Goals</h3>
                <p className="mt-2 text-muted-foreground">
                  Clearly articulate your academic and career goals, and explain how this specific program will help you
                  achieve them. Be concrete and realistic.
                </p>
              </div>

              <div className="rounded-lg border border-[hsl(120,61%,34%)]/20 p-6">
                <h3 className="text-lg font-bold text-[hsl(120,61%,34%)]">Highlight Your Achievements</h3>
                <p className="mt-2 text-muted-foreground">
                  Don't be modest about your accomplishments. Include relevant academic achievements, community service,
                  leadership roles, and any other experiences that make you stand out.
                </p>
              </div>

              <div className="rounded-lg border border-[hsl(0,76%,40%)]/20 p-6">
                <h3 className="text-lg font-bold text-[hsl(0,76%,40%)]">Proofread Everything</h3>
                <p className="mt-2 text-muted-foreground">
                  Ensure all documents are error-free. Consider having someone else review your application materials
                  for clarity, coherence, and grammatical accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

