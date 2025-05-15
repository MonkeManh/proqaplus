"use client"

import { AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatQuestionText, isPatientDependent, isAnswerDependent } from "@/lib/protocol-helpers"
import { motion } from "framer-motion"

interface IEMSAnswer {
  answer: string
  display: string
  continue?: boolean
  updateCode?: string
  override?: boolean
  end?: boolean
  input?: boolean
  goto?: number
  updateSubType?: string
  dependency?: any
  preRenderInstructions?: any
  send?: boolean
}

interface Question {
  text: any
  questionType: string
  answers: IEMSAnswer[]
  preRenderInstructions?: any
  isConscious?: boolean
  omitQuestion?: boolean
}

interface QuestionsAccordionProps {
  questions: Question[]
}

export function QuestionsAccordion({ questions }: QuestionsAccordionProps) {
  const filteredQuestions = questions.filter((q) => q.omitQuestion !== true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h3 className="text-lg font-semibold mb-2">Key Questions</h3>
      <Accordion type="single" collapsible className="w-full">
        {filteredQuestions.map((question, index) => (
          <AccordionItem key={index} value={`question-${index}`}>
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <span>{formatQuestionText(question.text)}</span>
                {question.preRenderInstructions && isPatientDependent(question.preRenderInstructions.toString()) && (
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    Patient Dependent
                  </Badge>
                )}
                {question.preRenderInstructions && isAnswerDependent(question.preRenderInstructions.toString()) && (
                  <Badge
                    variant="outline"
                    className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                  >
                    Answer Dependent
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <QuestionDetails question={question} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}

interface QuestionDetailsProps {
  question: Question
}

function QuestionDetails({ question }: QuestionDetailsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <p className="text-sm text-muted-foreground">Type: {question.questionType}</p>
        {question.isConscious && (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
            Consciousness Check
          </Badge>
        )}
      </div>

      {question.preRenderInstructions && (
        <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md border text-sm">
          <p className="font-medium mb-1 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            Conditional Logic:
          </p>
          <pre className="whitespace-pre-wrap text-xs text-muted-foreground overflow-auto max-h-32">
            {question.preRenderInstructions.toString()}
          </pre>
        </div>
      )}

      <div className="space-y-1">
        <p className="text-sm font-medium">Possible Answers:</p>
        {question.questionType === "input" ? (
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm">User Input...</li>
          </ul>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {question.answers.map((answer, answerIndex) => (
              <AnswerItem key={answerIndex} answer={answer} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

interface AnswerItemProps {
  answer: IEMSAnswer
}

function AnswerItem({ answer }: AnswerItemProps) {
  return (
    <li className="text-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium">{answer.display || answer.answer}</span>
          {answer.updateCode && (
            <Badge className="ml-2" variant="outline">
              Updates Code to: {answer.updateCode}
            </Badge>
          )}
          {answer.updateSubType && (
            <Badge className="ml-2" variant="outline">
              Updates Suffix to: {answer.updateSubType}
            </Badge>
          )}
          {answer.goto && (
            <Badge className="ml-2" variant="outline">
              Go to Protocol {answer.goto}
            </Badge>
          )}
          {answer.end && (
            <Badge className="ml-2" variant="outline">
              End Questions
            </Badge>
          )}
          {answer.override && (
            <Badge className="ml-2" variant="outline">
              Override Protocol
            </Badge>
          )}
          {answer.send && (
            <Badge className="ml-2" variant="outline">
              Send Response
            </Badge>
          )}
        </div>

        {answer.dependency && (
          <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded-md border text-xs mt-1">
            <p className="font-medium mb-1">Dependency Logic:</p>
            <pre className="whitespace-pre-wrap text-xs text-muted-foreground overflow-auto max-h-32">
              {answer.dependency.toString()}
            </pre>
          </div>
        )}
      </div>
    </li>
  )
}
