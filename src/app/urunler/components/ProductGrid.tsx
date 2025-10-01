'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProductModal from './ProductModal'

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

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] group"
            onClick={() => setSelectedProduct(product)}
          >
            {/* Product Image */}
            <div className="aspect-square bg-yellow-100 flex items-center justify-center p-8 overflow-hidden">
              {product.image && product.image !== '/api/placeholder/200/200' && product.image !== null ? (
                <div className="w-full h-full rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        // Görsel yüklenemezse placeholder göster
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="hidden w-full h-full bg-yellow-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Ürün Görseli</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-yellow-200 rounded-lg flex items-center justify-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="transition-all duration-300 group-hover:scale-110">
                    <span className="text-gray-500 text-sm">Ürün Görseli</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="p-6 transform transition-all duration-300 group-hover:translate-y-[-2px]">
              <h3 className="font-bold text-gray-900 mb-2 text-lg transition-colors duration-300 group-hover:text-red-600">
                {product.title}
              </h3>
              
              {/* Category Badge and Price */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.fiyat && (
                  <span className="text-green-600 font-semibold text-sm">
                    {product.fiyat} TL
                  </span>
                )}
              </div>
              
              {/* Product Details */}
              <div className="space-y-2 mb-4">
                {product.specifications.cesitNo !== 'Belirtilmemiş' && (
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Çeşit No:</span>
                    <span className="text-gray-700">{product.specifications.cesitNo}</span>
                  </div>
                )}
                {product.specifications.gramaj !== 'Belirtilmemiş' && (
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Gramaj:</span>
                    <span className="text-gray-700">{product.specifications.gramaj}</span>
                  </div>
                )}
                {product.specifications.koliAdet !== 'Belirtilmemiş' && (
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Koli Adet:</span>
                    <span className="text-gray-700">{product.specifications.koliAdet}</span>
                  </div>
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              
              {/* Action Button */}
              <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 ml-auto transform hover:scale-110 hover:rotate-12 hover:shadow-lg group/btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  )
}
