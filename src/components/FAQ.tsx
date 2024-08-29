import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqData } from '@/constants'

const FAQ: React.FC = () => (
  <div className="flex w-full flex-col mb-10">
    <h3 className="xs3:mb-0 mt-1 flex items-start w-full scroll-m-20 text-xl font-semibold tracking-tight">
      Frequently Asked Questions:
    </h3>
    <Accordion type="single" collapsible>
      {faqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              {faq.question}
            </h4>
          </AccordionTrigger>
          {faq.answer.map((answer, i) => (
            <AccordionContent key={i}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">{answer}</p>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  </div>
)

export default FAQ
