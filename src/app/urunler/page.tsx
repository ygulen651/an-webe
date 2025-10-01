import { client } from '../lib/sanity'
import { GET_PRODUCTS } from '../lib/queries'
import Header from '../components/Header'
import ProductGridWrapper from './components/ProductGridWrapper'
import { Suspense } from 'react'

const categories = [
  { name: 'Tümü', slug: 'all' },
  { name: 'Kekler', slug: 'kek' },
  { name: 'Bisküviler', slug: 'biskuvi' },
  { name: 'Gofretler', slug: 'gofret' },
  { name: 'Çikolatalar', slug: 'cikolata' },
  { name: 'Krakerler', slug: 'kraker' },
  { name: 'Şekerlemeler', slug: 'sekerleme' }
]

// Örnek ürün verileri - gerçek uygulamada Sanity'den gelecek
const sampleProducts = [
  {
    id: '1',
    title: 'FINDIK KREMALI SADE GOFRET',
    category: 'Gofretler',
    image: '/api/placeholder/200/200',
    description: 'Fındık kremalı sade gofret',
    specifications: {
      cesitNo: '1081',
      gramaj: '65',
      koliAdet: '24pcs x 6',
      hc40: '1450(Max)',
      tir: 'Belirtilmemiş',
      kutuBoyutu: 'Belirtilmemiş',
      barkod: 'Belirtilmemiş'
    },
    productDescription: 'FINDIK KREMALI SADE GOFRET'
  },
  {
    id: '2',
    title: 'OSLO BİSKÜVİ',
    category: 'Bisküviler',
    image: '/api/placeholder/200/200',
    description: 'Oslo bisküvi',
    specifications: {
      cesitNo: '1082',
      gramaj: '100',
      koliAdet: '12pcs x 8',
      hc40: '1200(Max)',
      tir: 'Belirtilmemiş',
      kutuBoyutu: 'Belirtilmemiş',
      barkod: 'Belirtilmemiş'
    },
    productDescription: 'OSLO BİSKÜVİ'
  },
  {
    id: '3',
    title: 'MANELA XL KEK',
    category: 'Kekler',
    image: '/api/placeholder/200/200',
    description: 'Manela XL kek',
    specifications: {
      cesitNo: '1083',
      gramaj: '85',
      koliAdet: '20pcs x 6',
      hc40: '1350(Max)',
      tir: 'Belirtilmemiş',
      kutuBoyutu: 'Belirtilmemiş',
      barkod: 'Belirtilmemiş'
    },
    productDescription: 'MANELA XL KEK'
  },
  {
    id: '4',
    title: 'ÇİKOLATA KAPLI BİSKÜVİ',
    category: 'Bisküviler',
    image: '/api/placeholder/200/200',
    description: 'Çikolata kaplı bisküvi',
    specifications: {
      cesitNo: '1084',
      gramaj: '75',
      koliAdet: '15pcs x 8',
      hc40: '1100(Max)',
      tir: 'Belirtilmemiş',
      kutuBoyutu: 'Belirtilmemiş',
      barkod: 'Belirtilmemiş'
    },
    productDescription: 'ÇİKOLATA KAPLI BİSKÜVİ'
  },
  {
    id: '5',
    title: 'SÜT KREMASI GOFRET',
    category: 'Gofretler',
    image: '/api/placeholder/200/200',
    description: 'Süt kreması gofret',
    specifications: {
      cesitNo: '1085',
      gramaj: '60',
      koliAdet: '20pcs x 6',
      hc40: '1400(Max)',
      tir: 'Belirtilmemiş',
      kutuBoyutu: 'Belirtilmemiş',
      barkod: 'Belirtilmemiş'
    },
    productDescription: 'SÜT KREMASI GOFRET'
  },
  {
    id: '6',
    title: 'BİTTER ÇİKOLATA',
    category: 'Çikolatalar',
    image: '/api/placeholder/200/200',
    description: 'Bitter çikolata',
    specifications: {
      cesitNo: '1086',
      gramaj: '90',
      koliAdet: '10pcs x 12',
      hc40: '1000(Max)',
      tir: 'Belirtilmemiş',
      kutuBoyutu: 'Belirtilmemiş',
      barkod: 'Belirtilmemiş'
    },
    productDescription: 'BİTTER ÇİKOLATA'
  }
]

// Sanity'den gelen veriyi uygun formata çevir
function transformSanityProducts(sanityProducts: any[]) {
  return sanityProducts.map(product => {
    console.log('Ürün görseli:', product.image?.asset?.url); // Debug için
    return {
      id: product._id,
      title: product.title,
      category: product.kategori?.title || 'Genel',
      image: product.image?.asset?.url || null,
      description: product.description || product.title,
      specifications: {
        cesitNo: product.cesitNo || 'Belirtilmemiş',
        gramaj: product.gramaj || 'Belirtilmemiş',
        koliAdet: product.koliAdet || 'Belirtilmemiş',
        hc40: product.hc40 || 'Belirtilmemiş',
        tir: product.tir || 'Belirtilmemiş',
        kutuBoyutu: product.kutuBoyutu || 'Belirtilmemiş',
        barkod: product.barkod || 'Belirtilmemiş'
      },
      productDescription: product.description || product.title,
      fiyat: product.fiyat
    }
  })
}

export default async function UrunlerPage() {
  // Sanity'den ürünleri çek
  let products = []
  try {
    const sanityProducts = await client.fetch(GET_PRODUCTS)
    products = transformSanityProducts(sanityProducts)
  } catch (error) {
    console.error('Ürünler yüklenirken hata:', error)
    // Hata durumunda örnek verileri kullan
    products = sampleProducts
  }

  // Eğer Sanity'den veri gelmediyse örnek verileri kullan
  if (!products || products.length === 0) {
    products = sampleProducts
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header overlay />
      
      {/* Header Section */}
      <div className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ürünlerimiz
            </h1>
            <p className="text-lg text-gray-600">
              Fabrikamızda üretilen kaliteli ürünler
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid with Filter */}
      <Suspense fallback={
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-600"></div>
        </div>
      }>
        <ProductGridWrapper products={products} />
      </Suspense>
    </div>
  )
}
