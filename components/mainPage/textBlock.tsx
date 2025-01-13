interface TextBlockProps {
  title: string;
  text: string;
  className?: string;
}

export default function TextBlock({ title, text, className = '' }: TextBlockProps) {
  return (
    <div className={`p-6 ${className}`}>
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}