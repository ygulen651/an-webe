'use client'

import { useEffect, useState } from 'react'
import { fetchSanity } from '../lib/sanity'
import { GET_KATALOGLAR } from '../lib/queries'

export default function EKatalogPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAndRedirect() {
      try {
        const kataloglar = await fetchSanity(GET_KATALOGLAR)
        
        if (kataloglar && kataloglar.length > 0 && kataloglar[0].pdfFile?.asset?.url) {
          // Sanity'den gelen PDF URL'sine yönlendir
          window.location.href = kataloglar[0].pdfFile.asset.url
        } else {
          // Katalog bulunamadı
          alert('Katalog bulunamadı. Lütfen daha sonra tekrar deneyin.')
          window.location.href = '/'
        }
      } catch (error) {
        console.error('Katalog yüklenirken hata:', error)
        alert('Katalog yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
        window.location.href = '/'
      }
    }

    loadAndRedirect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600 mb-4"></div>
        <p className="text-gray-600 text-lg">Katalog yükleniyor...</p>
      </div>
    </div>
  )
}
