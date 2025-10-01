import Header from '../../../components/Header'
import { sanityClient } from '../../../lib/sanity'
import { GET_SINGLE_NEWS } from '../../../lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

// Kategori mapping
const categoryMapping: { [key: string]: string } = {
  'yatirim': 'Yatırım',
  'surdurulebilirlik': 'Sürdürülebilirlik',
  'urun': 'Ürün',
  'kalite': 'Kalite',
  'sosyal-sorumluluk': 'Sosyal Sorumluluk',
  'ihracat': 'İhracat',
  'genel': 'Genel'
}

interface NewsDetailProps {
  params: Promise<{
    slug: string
  }>
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params
  let news = null
  
  try {
    const sanityNews = await sanityClient.fetch(GET_SINGLE_NEWS, { slug })
    if (!sanityNews) {
      notFound()
    }
    
    news = {
      id: sanityNews._id,
      title: sanityNews.title,
      summary: sanityNews.summary,
      date: new Date(sanityNews.publishedAt).toLocaleDateString('tr-TR'),
      category: categoryMapping[sanityNews.category] || sanityNews.category,
      categorySlug: sanityNews.category,
      image: sanityNews.image?.asset?.url || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      readTime: sanityNews.readTime || '3 dk okuma',
      content: sanityNews.content
    }
  } catch (error) {
    console.error('Haber yüklenirken hata:', error)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header overlay />
      
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">
            Ana Sayfa
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <Link href="/basin/haberler" className="text-gray-500 hover:text-red-600 transition-colors">
            Haberler
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-900 font-medium">{news.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Featured Image */}
          <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {news.category}
              </span>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{news.date}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{news.readTime}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Anı Bisküvi</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>

            {/* Summary */}
            <div className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-red-600 pl-6 bg-gray-50 p-6 rounded-r-lg">
              {news.summary}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {news.content ? (
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                <PortableText 
                  value={news.content}
                  components={{
                    block: {
                      normal: ({children}) => <p className="mb-6 text-lg leading-relaxed">{children}</p>,
                      h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">{children}</h3>,
                      h4: ({children}) => <h4 className="text-lg font-bold text-gray-900 mb-3 mt-4">{children}</h4>,
                      blockquote: ({children}) => (
                        <blockquote className="border-l-4 border-red-600 pl-6 py-2 bg-gray-50 rounded-r-lg italic text-gray-700 my-6">
                          {children}
                        </blockquote>
                      ),
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc list-inside space-y-2 mb-6">{children}</ul>,
                      number: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-6">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({children}) => <li className="text-lg leading-relaxed">{children}</li>,
                      number: ({children}) => <li className="text-lg leading-relaxed">{children}</li>,
                    },
                    marks: {
                      strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                      link: ({children, value}) => (
                        <a 
                          href={value?.href} 
                          className="text-red-600 hover:text-red-700 underline font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">İçerik henüz yüklenmedi.</p>
            </div>
          )}
        </div>

        {/* Social Share & Back Button */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/basin/haberler"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Haberlere Dön
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Paylaş:</span>
              <div className="flex space-x-2">
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
