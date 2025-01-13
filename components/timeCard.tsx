import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { JSX } from "react";

interface TimeCardProps {
    day: string;
    text: string | JSX.Element;
}

export default function TimeCard({ day, text }: TimeCardProps) {
    return (
        <Card className="w-[350px] max-w-full bg-orange-300 text-start">
      <CardHeader>
        <CardTitle className="text-bold text-lg">{day}</CardTitle>
      </CardHeader>
      <CardContent>
{text}
      </CardContent>
    </Card>
    );
}