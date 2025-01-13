import { BookmarkPlus, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import bannerImageBig from "@/public/banner_big.jpeg"

export default function Component() {
  return (
    <div className="relative w-full h-[100dvh] max-h-[100dvh] min-h-[400px] overflow-hidden z-0 ">
      {/* Background Video */}
     

      <Image
        src={bannerImageBig}
        //loader={}
        alt="Picture of the author"
        className="absolute top-0 left-0 w-full h-full object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4  drop-shadow-lg">
            Міжнародна дитяча онлайн-школа шахів
          </h1>
          <strong className="text-xl sm:text-2xl text-gray-200 mb-6 drop-shadow-lg">
          Вчимо перемагати 
          </strong>
          <br />    
          <strong className="text-xl sm:text-2xl text-gray-200 mb-6 drop-shadow-lg">
          Відточуйте свою майстерність з найкращими тренерами
          </strong>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button className="bg-amber-300 text-gray-700 hover:bg-amber-400 px-12 text-xl sm:text-2xl py-6 rounded-lg" variant={"secondary"}>
              Спробувати безкоштовно
            </Button>
          </div>
        </div>
      </div>

      {/* Screen Reader Only Description */}
      <div className="sr-only">
        Banner for Anime Title. The background shows a video clip from the
        anime. On the left, there's information about the series and options to
        learn more or bookmark for later viewing.
      </div>
    </div>
  );
}