import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



interface ReusableAccordionProps {
    title: string;
    text: any;
}

export default function ReusableAccordion({title, text}: ReusableAccordionProps) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg py-6 font-semibold">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-">
            {text}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
}
