'use client'

import Image from 'next/image'

interface Item {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  rating: number
}

interface ItemCardProps {
  item: Item
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group glass rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-36 overflow-hidden">
      <Image
  src={item.imageUrl}
  alt={item.title}
  fill
  priority
  className="object-cover transition-transform duration-300 group-hover:scale-110"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-purple-600">{item.category}</span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-1">
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-bold text-gray-800">{item.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* Action Button */}
        <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          Explore
        </button>
      </div>
    </div>
  )
}