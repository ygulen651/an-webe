import Header from '../../components/Header'
import HaberlerClient from './components/HaberlerClient'
import { sanityClient } from '../../lib/sanity'
import { GET_NEWS } from '../../lib/queries'
import Link from 'next/link'

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

// Sanity verilerini uygun formata çevir
function transformSanityNews(sanityNews: any[]) {
  return sanityNews.map(news => ({
    id: news._id,
    title: news.title,
    summary: news.summary,
    date: new Date(news.publishedAt).toLocaleDateString('tr-TR'),
    category: categoryMapping[news.category] || news.category,
    categorySlug: news.category,
    image: news.image?.asset?.url || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    readTime: news.readTime || '3 dk okuma',
    slug: news.slug?.current,
    content: news.content
  }))
}

export default async function HaberlerPage() {
  // Sanity'den haberleri çek
  let news = []
  try {
    const sanityNews = await sanityClient.fetch(GET_NEWS)
    news = transformSanityNews(sanityNews)
    console.log('Sanity haberleri:', news)
  } catch (error) {
    console.error('Haberler yüklenirken hata:', error)
    // Fallback olarak örnek haberler
    news = [
      {
        id: '1',
        title: "Anı Bisküvi, Yeni Fabrika Yatırımıyla İstihdamı Artırıyor",
        summary: "Şirketimiz, teknolojik altyapısını güçlendirerek üretim kapasitesini %40 artıracak yeni fabrika yatırımını duyurdu.",
        date: "15 Aralık 2024",
        category: "Yatırım",
        categorySlug: "yatirim",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
        readTime: "3 dk okuma"
      }
    ]
  }

  const categories = ['Tümü', 'Yatırım', 'Sürdürülebilirlik', 'Ürün', 'Kalite', 'Sosyal Sorumluluk', 'İhracat']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header overlay />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Haberler
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
              Anı Bisküvi'den son haberler ve gelişmeler
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Güncel Haberler</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-4">
            <Link
              href="/basin/haberler"
              className="px-6 py-3 rounded-lg bg-red-600 text-white shadow-lg font-medium"
            >
              Haberler
            </Link>
            <Link
              href="/basin/video-galeri"
              className="px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Video Galeri
            </Link>
          </div>
        </div>
      </div>

      {/* Client Component */}
      <HaberlerClient news={news} categories={categories} />
    </div>
  )
}
