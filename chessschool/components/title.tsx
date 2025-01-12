interface TitleProps {
  title: string;
  subtitle: any;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <>
        <h1 className="font-medium text-4xl p-6">
          <strong>
          {title}
          </strong>
        </h1>
        <h2 className={`font-medium text-xl ${subtitle == "" ? "hidden" : "py-4 mb-16"}`}>
          {subtitle}
        </h2>
    </>
  );
}