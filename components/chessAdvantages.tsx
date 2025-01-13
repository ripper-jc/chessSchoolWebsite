import { JSX } from "react";

interface ChessAdvantagesProps {
    title: string;
    text: string | JSX.Element;
    chessFigure: JSX.Element;
}

export default function ChessAdvantages({title, text, chessFigure}: ChessAdvantagesProps) {
    return(
        <>
            <div className="flex gap-4 text-start">
                <div className="p-2 md:p-6">
                    <strong>
                    {chessFigure}
                    </strong>
                </div>
                <div className="p-2 md:p-6">
                    <h3 className="text-xl font-medium mb-4">{title}</h3>
                    <p className="">{text}</p>
                </div>
            </div>
        </>
    );
}