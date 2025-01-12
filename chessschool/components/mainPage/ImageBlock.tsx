import Image, { StaticImageData } from "next/image";

interface ImageBlockProps {
    src: StaticImageData;
    order: string;
    alt: string;
  }
  
const ImageBlock = ({ src, order, alt }: ImageBlockProps) => (
    <div className={`relative xl:h-auto ${order}`}>
      <Image
        src={src}
        fill
        className="object-cover"
        draggable={false}
        alt={alt}
      />
    </div>
    );
  
export default ImageBlock;