import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface TextBlockProps {
  title: string;
  text: string;
  stepNumber: string;
}

export default function TextBlock({ title, text, stepNumber }: TextBlockProps) {
  return (
    <div className="p-6">
      <FontAwesomeIcon icon={stepNumber === '1' ? fa1 : stepNumber === '2' ? fa2 : stepNumber === '3' ? fa3 : fa4} className="fa-3x" />
      <strong><h3 className="text-xl font-medium my-4">{title}</h3></strong>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
