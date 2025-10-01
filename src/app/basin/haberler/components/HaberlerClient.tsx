'use client'

import { useState } from 'react'
import Link from 'next/link'

interface News {
  id: string
  title: string
  summary: string
  date: string
  category: string
  categorySlug: string
  image: string
  readTime: string
  slug?: string
  content?: any
}

interface HaberlerClientProps {
  news: News[]
  categories: string[]
}

export default function HaberlerClient({ news, categories }: HaberlerClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'Tümü' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Filters Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Haberlerde ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-200 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-red-600">{filteredNews.length}</span> haber bulundu
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Title Banner */}
              <div className="bg-blue-700 px-6 py-4">
                <h3 className="text-white font-bold text-lg line-clamp-2 leading-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                {/* Date */}
                <div className="text-sm text-gray-500 mb-4 font-medium">
                  {item.date}
                </div>
                
                {/* Title (repeated for structure) */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                
                {/* Summary */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.summary}
                </p>
                
                {/* Read More Link */}
                {item.slug ? (
                  <Link
                    href={`/basin/haberler/${item.slug}`}
                    className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors text-sm"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                ) : (
                  <button className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors text-sm">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-600">Arama kriterlerinize uygun haber bulunamadı.</p>
          </div>
        )}
      </div>
    </>
  )
}

