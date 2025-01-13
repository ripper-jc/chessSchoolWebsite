import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { JSX } from "react";



interface ReusableAccordionProps {
    title: string;
    text: string | JSX.Element; // Specify a different type instead of 'any'
}

export default function ReusableAccordion({title, text}: ReusableAccordionProps) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl py-6 font-semibold">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-md">
            {text}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
}
