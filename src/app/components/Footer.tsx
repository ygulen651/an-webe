'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #CC0000, #990000, #330000)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl" style={{ backgroundColor: '#CC0000' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl" style={{ backgroundColor: '#CC0000' }}></div>
      </div>
      
      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Image 
                src="/AniBiskuviLogo.png" 
                alt="ANI Bisküvi Logo" 
                width={200} 
                height={80}
                className="mb-4"
              />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              1960 yılından bu yana kaliteli ve lezzetli ürünler üreterek, 
              Türkiye'nin önde gelen bisküvi markalarından biri olmaya devam ediyoruz.
            </p>
            <div className="flex space-x-3">
              {/* Social Media Icons */}
              <a href="#" className="bg-white/10 hover:bg-red-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-red-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-red-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-red-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-2">Kurumsal</h4>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #CC0000, #FF3333)' }}></div>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/tarihcemiz" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Tarihçemiz
                </Link>
              </li>
              <li>
                <Link href="/misyon-vizyon" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Misyon & Vizyon
                </Link>
              </li>
              <li>
                <Link href="/baskanin-mesaji" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Başkanın Mesajı
                </Link>
              </li>
              <li>
                <Link href="/kalite" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Kalite
                </Link>
              </li>
              <li>
                <Link href="/sertifikalar" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Sertifikalar
                </Link>
              </li>
              <li>
                <Link href="/sosyal-sorumluluk" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Sosyal Sorumluluk
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürünler & Kariyer */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-2">Ürünler & Kariyer</h4>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #CC0000, #FF3333)' }}></div>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/urunler" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Tüm Ürünler
                </Link>
              </li>
              <li>
                <Link href="/kariyer/is-basvuru-formu" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  İş Başvuru Formu
                </Link>
              </li>
              <li>
                <Link href="/basin/haberler" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Haberler
                </Link>
              </li>
              <li>
                <Link href="/ihracat" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  İhracat
                </Link>
              </li>
              <li>
                <Link href="/kilometre-taslarimiz" className="text-gray-200 hover:text-red-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Kilometre Taşlarımız
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-2">İletişim</h4>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #CC0000, #FF3333)' }}></div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-red-500/20 p-2 rounded-lg mr-3 group-hover:bg-red-500 transition-colors">
                  <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 text-sm leading-relaxed">
                  Organize Sanayi Bölgesi 16. Cadde No:16 KARAMAN / TÜRKİYE
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-red-500/20 p-2 rounded-lg mr-3 group-hover:bg-red-500 transition-colors">
                  <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-gray-200 text-sm leading-relaxed">
                  <div>Tel: +90 (338) 224 12 30</div>
                  <div>Fax: +90 (338) 224 12 34</div>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-red-500/20 p-2 rounded-lg mr-3 group-hover:bg-red-500 transition-colors">
                  <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-gray-200 text-sm leading-relaxed">
                  info@anibiskuvi.com.tr
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-red-500/20 p-2 rounded-lg mr-3 group-hover:bg-red-500 transition-colors">
                  <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 text-sm leading-relaxed">
                  Pzt - Cuma: 08:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-red-900/50 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} <span className="text-red-400 font-semibold">ANI Bisküvi</span>. Tüm hakları saklıdır.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bilgi-toplumu-hizmeti" className="text-gray-300 hover:text-red-400 text-sm transition-colors">
                Bilgi Toplumu Hizmeti
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/kurumsal-kimlik" className="text-gray-300 hover:text-red-400 text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/kurumsal-kimlik" className="text-gray-300 hover:text-red-400 text-sm transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Yukarı çık"
      >
        <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </footer>
  )
}
