import Header from '../../components/Header'
import Link from 'next/link'
import { sanityClient } from '../../lib/sanity'
import { GET_VIDEOS } from '../../lib/queries'

// YouTube video ID'si çıkartma fonksiyonu
function getYoutubeVideoId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[7].length === 11) ? match[7] : null
}

// Kategori mapping
const categoryMapping: { [key: string]: string } = {
  'kurumsal': 'Kurumsal',
  'urun': 'Ürün',
  'uretim': 'Üretim',
  'sosyal-sorumluluk': 'Sosyal Sorumluluk',
  'etkinlik': 'Etkinlik',
  'reklam': 'Reklam',
  'diger': 'Diğer'
}

// Sanity verilerini uygun formata çevir
function transformSanityVideos(sanityVideos: any[]) {
  return sanityVideos.map(video => {
    const videoId = getYoutubeVideoId(video.youtubeUrl)
    const thumbnail = video.thumbnail?.asset?.url || 
                     (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : 
                      'https://via.placeholder.com/480x360?text=Video')
    
    return {
      id: video._id,
      title: video.title,
      description: video.description || '',
      thumbnail: thumbnail,
      videoUrl: video.youtubeUrl,
      duration: video.duration || '',
      date: new Date(video.publishedAt).toLocaleDateString('tr-TR'),
      category: categoryMapping[video.category] || video.category,
      categorySlug: video.category,
      slug: video.slug?.current
    }
  })
}

export default async function VideoGaleriPage() {
  // Sanity'den videoları çek
  let videos = []
  try {
    const sanityVideos = await sanityClient.fetch(GET_VIDEOS)
    videos = transformSanityVideos(sanityVideos)
  } catch (error) {
    console.error('Videolar yüklenirken hata:', error)
    // Fallback olarak örnek videolar
    videos = [
    {
      id: '1',
      title: 'ANI Bisküvi Kurumsal Tanıtım Filmi',
      description: 'Şirketimizin kurumsal tanıtım videosu',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '3:45',
      date: '15 Aralık 2024'
    },
    {
      id: '2',
      title: 'Üretim Tesislerimiz',
      description: 'Modern üretim tesislerimizden görüntüler',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '5:20',
      date: '10 Aralık 2024'
    },
    {
      id: '3',
      title: 'Kalite Kontrol Süreçlerimiz',
      description: 'Kalite standartlarımız ve kontrol süreçleri',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '4:15',
      date: '5 Aralık 2024'
    },
    {
      id: '4',
      title: 'Sosyal Sorumluluk Projelerimiz',
      description: 'Topluma değer katan projelerimiz',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '6:30',
      date: '1 Aralık 2024'
    },
    {
      id: '5',
      title: 'Ürün Geliştirme Süreci',
      description: 'Yeni ürünlerimizin geliştirilme hikayesi',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '4:50',
      date: '25 Kasım 2024'
    },
    {
      id: '6',
      title: 'İhracat Başarılarımız',
      description: 'Dünya pazarlarındaki yerimiz',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '3:25',
      date: '20 Kasım 2024',
      category: 'Kurumsal',
      categorySlug: 'kurumsal'
    }
  ]
  }

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
              Video Galeri
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
              Şirketimiz hakkında videolar ve görsel içerikler
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-4">
            <Link
              href="/basin/haberler"
              className="px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Haberler
            </Link>
            <Link
              href="/basin/video-galeri"
              className="px-6 py-3 rounded-lg bg-red-600 text-white shadow-lg font-medium"
            >
              Video Galeri
            </Link>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tüm Videolar</h2>
          <p className="text-gray-600">
            <span className="font-semibold text-red-600">{videos.length}</span> video bulundu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Video Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-white text-xs font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{video.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors text-sm"
                >
                  Videoyu İzle
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Videos Message (if needed) */}
        {videos.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Henüz Video Yok</h3>
            <p className="text-gray-600">Video galeri yakında içeriklerle doldurulacak.</p>
          </div>
        )}
      </div>
    </div>
  )
}

