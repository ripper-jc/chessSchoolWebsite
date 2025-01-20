import Image from "next/image";

interface CommentItemProps {
    imgSrc: string;
    text: string;
    name: string;
    nameMore: string;
}

export default function CommentItem({ imgSrc, text, name, nameMore }: CommentItemProps) {
    return (
        <div className="flex flex-col items-center gap-4 text-white">
            <div className="p-2 md:p-6">
                <div className="w-36 h-36 relative">
                    <Image
                        src={imgSrc}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        alt="user"
                    />
                </div>
            </div>
            <div className="p-10 md:p-6 text-center max-w-[40rem]">
                
                <p className="">{text}</p>
                <h3 className="text-xl font-medium mb-4 mt-6">{name}</h3>
                <p className="">{nameMore}</p>
            </div>
        </div>
    );
}
