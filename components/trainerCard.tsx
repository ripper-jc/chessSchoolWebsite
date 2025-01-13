import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TrainerCardProps {
  image: StaticImageData
  name: string
  title: string
  qualifications: string[]
  experience: string
  education: string
  description: string
  detailsLink: string
}

export default function TrainerCard({
  image,
  name,
  title,
  qualifications,
  experience,
  education,
  description,
  detailsLink
}: TrainerCardProps) {
  return (
    <div className="flex flex-col max-w-sm mx-auto ">
      {/* Image */}
      <div className="relative h-[400px] w-full mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Title */}
      <div className="text-orange-500 text-sm uppercase tracking-wide mb-2 text-center">
        {title}
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold mb-4 text-center">{name}</h3>

      {/* Qualifications */}
      <div className="space-y-2 mb-4 text-center">
        {qualifications.map((qualification, index) => (
          <div key={index} className="font-bold">
            {qualification}
          </div>
        ))}
      </div>

      {/* Experience and Education */}
      <div className="space-y-4 mb-4">
        <div>
          <span className="font-bold">Тренерський стаж:</span> {experience}
        </div>
        <div>
          <span className="font-bold">Освіта:</span> {education}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        {description}
      </p>

      {/* Details Link */}
      <Link 
        href={detailsLink}
        className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mt-auto"
      >
        Детальніше
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

