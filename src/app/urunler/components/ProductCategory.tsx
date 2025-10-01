'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  _id: string
  title: string
  slug: { current: string }
  image?: {
    asset: {
      url: string
    }
  }
  description?: string
  kategori?: {
    title: string
    slug: { current: string }
  }
}

interface Category {
  name: string
  slug: string
  icon: string
}

interface ProductCategoryProps {
  category: Category
  products: Product[]
}

export default function ProductCategory({ category, products }: ProductCategoryProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Header */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{category.icon}</span>
          <div>
            <h3 className="text-xl font-bold">{category.name}</h3>
            <p className="text-blue-100 text-sm">
              {products.length} ürün
            </p>
          </div>
        </div>
      </div>

      {/* Products Preview */}
      <div className="p-6">
        {products.length > 0 ? (
          <div className="space-y-4">
            {products.slice(0, 3).map((product) => (
              <div key={product._id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                {product.image?.asset?.url && (
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={product.image.asset.url}
                      alt={product.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">
                    {product.title}
                  </h4>
                  {product.description && (
                    <p className="text-sm text-gray-500 truncate">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
            
            {products.length > 3 && (
              <div className="text-center pt-2">
                <span className="text-sm text-gray-500">
                  +{products.length - 3} ürün daha
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-3 opacity-50">{category.icon}</div>
            <p className="text-gray-500">
              Bu kategori için henüz ürün eklenmemiş
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-6">
          <Link 
            href={`/urunler/${category.slug}`}
            className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
              products.length > 0 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {products.length > 0 ? 'Ürünleri Görüntüle' : 'Yakında Gelecek'}
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
