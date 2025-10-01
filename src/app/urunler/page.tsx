import { client } from '../lib/sanity'
import { GET_PRODUCTS } from '../lib/queries'
import ProductCategory from './components/ProductCategory'

export default async function UrunlerPage() {
  const products = await client.fetch(GET_PRODUCTS)

  const categories = [
    { name: 'Bisküvi', slug: 'biskuvi', icon: '🍪' },
    { name: 'Çikolata', slug: 'cikolata', icon: '🍫' },
    { name: 'Kek', slug: 'kek', icon: '🧁' },
    { name: 'Gofret', slug: 'gofret', icon: '🍰' },
    { name: 'Kraker', slug: 'kraker', icon: '🥨' },
    { name: 'Şekerleme', slug: 'sekerleme', icon: '🍭' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ürünlerimiz
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kaliteli ve lezzetli ürünlerimizle damak zevkinize hitap ediyoruz. 
              Her kategori için özenle hazırlanmış çeşitli seçeneklerimizi keşfedin.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <ProductCategory 
              key={category.slug}
              category={category}
              products={products.filter(product => 
                product.kategori?.slug?.current === category.slug
              )}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Daha Fazla Bilgi İçin
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ürünlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
