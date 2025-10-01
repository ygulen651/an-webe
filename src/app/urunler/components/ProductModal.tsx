'use client'

import { useEffect } from 'react'
import Image from 'next/image'

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

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // ESC tuşu ile modal kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Backdrop - Beyaz arka plan */}
      <div 
        className="absolute inset-0 bg-white"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {product.title}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.42L13.41 12l4.89-4.89a1 1 0 0 0 0-1.42z"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-yellow-100 rounded-lg flex items-center justify-center p-8">
                {product.image && product.image !== '/api/placeholder/200/200' && product.image !== null ? (
                  <div className="w-full h-full rounded-lg overflow-hidden transform rotate-3 hover:rotate-6 transition-transform duration-500 group">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                        onError={(e) => {
                          // Görsel yüklenemezse placeholder göster
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      {/* Floating animation overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="hidden w-full h-full bg-yellow-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Ürün Görseli</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-yellow-200 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-6 transition-all duration-500 group">
                    <div className="transition-all duration-500 group-hover:scale-110 group-hover:text-red-600">
                      <span className="text-gray-500 text-sm">Ürün Görseli</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Price */}
              {product.fiyat && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800 font-medium">Fiyat:</span>
                    <span className="text-green-600 text-2xl font-bold">{product.fiyat} TL</span>
                  </div>
                </div>
              )}

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ürün Özellikleri</h3>
                <div className="space-y-3">
                  {product.specifications.cesitNo !== 'Belirtilmemiş' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Çeşit No:</span>
                      <span className="font-medium">{product.specifications.cesitNo}</span>
                    </div>
                  )}
                  {product.specifications.gramaj !== 'Belirtilmemiş' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gramaj:</span>
                      <span className="font-medium">{product.specifications.gramaj}</span>
                    </div>
                  )}
                  {product.specifications.koliAdet !== 'Belirtilmemiş' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Koli Adet:</span>
                      <span className="font-medium">{product.specifications.koliAdet}</span>
                    </div>
                  )}
                  {product.specifications.hc40 !== 'Belirtilmemiş' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">40HC:</span>
                      <span className="font-medium">{product.specifications.hc40}</span>
                    </div>
                  )}
                  {product.specifications.tir !== 'Belirtilmemiş' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tır:</span>
                      <span className="font-medium">{product.specifications.tir}</span>
                    </div>
                  )}
                  {product.specifications.kutuBoyutu !== 'Belirtilmemiş' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kutu Boyutu:</span>
                      <span className="font-medium">{product.specifications.kutuBoyutu}</span>
                    </div>
                  )}
                  {product.specifications.barkod !== 'Belirtilmemiş' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Barkod:</span>
                      <span className="font-medium">{product.specifications.barkod}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ürün Açıklaması</h3>
                <p className="text-gray-700">{product.productDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
