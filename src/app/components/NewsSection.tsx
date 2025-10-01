import Link from 'next/link'
import { sanityClient } from '../lib/sanity'
import { GET_FEATURED_NEWS } from '../lib/queries'

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

export default async function NewsSection() {
  let news = []
  try {
    const sanityNews = await sanityClient.fetch(GET_FEATURED_NEWS)
    news = transformSanityNews(sanityNews)
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
        readTime: "3 dk okuma",
        slug: "yeni-fabrika-yatirimi"
      },
      {
        id: '2',
        title: "Sürdürülebilir Üretim Projelerimizle Çevre Dostu Gelecek",
        summary: "Çevre dostu teknolojiler kullanarak sürdürülebilir üretim süreçlerini hayata geçiriyoruz.",
        date: "10 Aralık 2024",
        category: "Sürdürülebilirlik",
        categorySlug: "surdurulebilirlik",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
        readTime: "4 dk okuma",
        slug: "surdurulebilir-uretim"
      },
      {
        id: '3',
        title: "Yeni Ürün Gamımızla Pazar Payımızı Genişletiyoruz",
        summary: "İnovatif yaklaşımla geliştirdiğimiz yeni ürünlerimiz tüketicilerden büyük ilgi görüyor.",
        date: "5 Aralık 2024",
        category: "Ürün",
        categorySlug: "urun",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000&auto=format&fit=crop",
        readTime: "3 dk okuma",
        slug: "yeni-urun-gami"
      }
    ]
  }

  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2 sm:mb-3 tracking-tight">HABERLER</h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {/* Main News Grid - Responsive */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                >
                  {/* Image - Responsive */}
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content - Responsive */}
                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Date */}
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{item.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Summary */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {item.summary}
                    </p>
                    
                    {/* Read More Link */}
                    {item.slug ? (
                      <Link
                        href={`/basin/haberler/${item.slug}`}
                        className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors text-sm group-hover:translate-x-1 duration-300"
                      >
                        Devamını Oku
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    ) : (
                      <button className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors text-sm group-hover:translate-x-1 duration-300">
                        Devamını Oku
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Responsive */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 sticky top-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                Son Haberlerimize Göz Atın
              </h3>
              
              {/* Navigation Arrows */}
              <div className="flex justify-between mb-4 sm:mb-5 md:mb-6">
                <button className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Latest News List - Responsive */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6">
                {news.slice(0, 3).map((item, index) => (
                  <div key={item.id} className="flex items-start space-x-2 sm:space-x-3 pb-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Other News Button - Responsive */}
              <Link
                href="/basin/haberler"
                className="block w-full bg-red-600 text-white text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm sm:text-base"
              >
                <span className="flex items-center justify-center">
                  Diğer Haberler
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
