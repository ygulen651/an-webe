'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import ProductGrid from './ProductGrid'

const categories = [
  { name: 'Tümü', slug: 'all' },
  { name: 'Kekler', slug: 'kek', keywords: ['kek', 'cake'] },
  { name: 'Bisküviler', slug: 'biskuvi', keywords: ['bisküvi', 'biscuit'] },
  { name: 'Gofretler', slug: 'gofret', keywords: ['gofret', 'wafer'] },
  { name: 'Çikolatalar', slug: 'cikolata', keywords: ['çikolata', 'chocolate'] },
  { name: 'Krakerler', slug: 'kraker', keywords: ['kraker', 'cracker'] },
  { name: 'Şekerlemeler', slug: 'sekerleme', keywords: ['şekerleme', 'candy', 'sweets'] }
]

interface Product {
  id: string
  title: string
  category: string
  image: string
  description: string
  fiyat?: number
  specifications: {
    cesitNo: string
    gramaj: string
    koliAdet: string
    hc40: string
    tir: string
    kutuBoyutu: string
    barkod: string
  }
  productDescription: string
}

interface ProductGridWrapperProps {
  products: Product[]
}

export default function ProductGridWrapper({ products }: ProductGridWrapperProps) {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('all')
  
  // URL parametresinden kategori oku
  useEffect(() => {
    const kategori = searchParams.get('kategori')
    if (kategori && categories.find(c => c.slug === kategori)) {
      setActiveFilter(kategori)
    } else {
      setActiveFilter('all')
    }
  }, [searchParams])
  
  // Debug için ürün kategorilerini logla
  console.log('Ürün kategorileri:', products.map(p => ({ title: p.title, category: p.category })))

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => {
        const selectedCategory = categories.find(c => c.slug === activeFilter)
        if (!selectedCategory || !selectedCategory.keywords) return false
        
        const productCategoryLower = product.category.toLowerCase()
        const match = selectedCategory.keywords.some(keyword => 
          productCategoryLower.includes(keyword.toLowerCase())
        )
        
        console.log(`Filtreleme: ${product.title} (${product.category}) -> ${selectedCategory.name}: ${match}`)
        return match
      })

  return (
    <>
      {/* Filter Buttons */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              if (category.slug === 'all') {
                return (
                  <button
                    key={category.slug}
                    onClick={() => setActiveFilter(category.slug)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeFilter === category.slug
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600'
                    }`}
                  >
                    {category.name}
                  </button>
                )
              }
              
              return (
                <Link
                  key={category.slug}
                  href={`/urunler?kategori=${category.slug}`}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeFilter === category.slug
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  {category.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  )
}
