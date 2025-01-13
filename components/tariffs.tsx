import Image, { StaticImageData } from "next/image";
import {Button} from "@/components/ui/button";
import { JSX } from "react";

interface TariffsProps {
    image: StaticImageData; // Changed from 'any' to 'StaticImageData'
    title: string;
    level: string;
    text: string | JSX.Element; // Changed from 'any' to 'string'
    order: number;
}

export default function Tariffs({ image, title, level, text, order }: TariffsProps) {
    return (
      <>
        <div className="mx-auto my-24 px-4 sm:px-6 lg:px-48 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`${order === 1 ? "lg:order-2" : "lg:order-1"}`}>
            <Image src={image} alt="" />
          </div>
          <div className={`text-start ${order == 1 ? "lg:order-1" : "lg:order-2"}`}>
            <h2 className="text-2xl font-bold mb-5">{title}</h2>
            <h3 className="text-md font-bold py-2 text-amber-700">{level}</h3>
            <p className="">{text}</p>
            <a href="#schedule">
              <Button className="bg-amber-300 text-black hover:bg-amber-400 text-md mt-7 rounded-lg" variant={"secondary"}>Детальніше</Button>
            </a>
          </div>
        </div>
      </>
    );
}