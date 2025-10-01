'use client'

import { useState } from 'react'
import Header from '../../components/Header'

export default function IsBasvuruFormu() {
  const [formData, setFormData] = useState({
    // Kişisel Bilgiler
    adSoyad: '',
    email: '',
    telefon: '',
    evNo: '',
    dogumYeri: '',
    dogumTarihi: '',
    cinsiyet: '',
    medeniHali: '',
    kanGrubu: '',
    ehliyet: '',
    
    // Askerlik
    askerlik: 'Muaf',
    
    // Eğitim Bilgileri
    egitimDurumu: '',
    bolum: '',
    yabanciDil: '',
    dilSeviye: 'Yok',
    yabanciDil2: '',
    dilSeviye2: 'Yok',
    
    // İş Deneyimi
    oncekiPozisyon: '',
    basvuruPozisyonu: '',
    ayrilmaNedeni: '',
    referanslar: '',
    ekBilgiler: '',
    cvDosya: null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFormData(prev => ({
      ...prev,
      cvDosya: file
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form gönderildi:', formData)
    alert('Başvurunuz başarıyla gönderildi!')
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
              İş Başvuru Formu
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
              Anı ailesine katılmak için başvuru yapın. Hayallerinizi gerçekleştirin!
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Güvenli ve Hızlı Başvuru</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Kişisel Bilgiler</h2>
            </div>
          </div>
          
          <div className="px-8 py-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sol Kolon */}
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Adı Soyadı
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="adSoyad"
                      value={formData.adSoyad}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 bg-gray-50 focus:bg-white group-hover:border-gray-300"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Telefon
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 bg-gray-50 focus:bg-white group-hover:border-gray-300"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Doğum Yeri
                  </label>
                  <input
                    type="text"
                    name="dogumYeri"
                    value={formData.dogumYeri}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 bg-gray-50 focus:bg-white group-hover:border-gray-300"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Kan Grubu
                  </label>
                  <select
                    name="kanGrubu"
                    value={formData.kanGrubu}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 bg-gray-50 focus:bg-white group-hover:border-gray-300 appearance-none cursor-pointer"
                  >
                    <option value="">Seçiniz...</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="0+">0+</option>
                    <option value="0-">0-</option>
                  </select>
                </div>
              </div>
              
              {/* Sağ Kolon */}
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">E-Posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Ev No</label>
                  <input
                    type="text"
                    name="evNo"
                    value={formData.evNo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Doğum Tarihi</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="dogumTarihi"
                      value={formData.dogumTarihi}
                      onChange={handleInputChange}
                      placeholder="gg.aa.yyyy"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Ehliyet</label>
                  <input
                    type="text"
                    name="ehliyet"
                    value={formData.ehliyet}
                    onChange={handleInputChange}
                    placeholder="Örn: B, C"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Radio Button Groups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-4">Cinsiyet</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="cinsiyet"
                      value="erkek"
                      checked={formData.cinsiyet === 'erkek'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Erkek</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="cinsiyet"
                      value="kadin"
                      checked={formData.cinsiyet === 'kadin'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Kadın</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-4">Medeni Hali</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="medeniHali"
                      value="evli"
                      checked={formData.medeniHali === 'evli'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Evli</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="medeniHali"
                      value="bekar"
                      checked={formData.medeniHali === 'bekar'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Bekar</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Askerlik */}
          <div className="mb-12">
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-red-600 text-center mb-8">Askerlik</h2>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Askerlik</label>
              <input
                type="text"
                name="askerlik"
                value={formData.askerlik}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Eğitim Bilgileri */}
          <div className="mb-12">
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-red-600 text-center mb-8">Eğitim Bilgileri</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Eğitim Durumu</label>
                <select
                  name="egitimDurumu"
                  value={formData.egitimDurumu}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Seçiniz...</option>
                  <option value="ilkokul">İlkokul</option>
                  <option value="ortaokul">Ortaokul</option>
                  <option value="lise">Lise</option>
                  <option value="onlisans">Önlisans</option>
                  <option value="lisans">Lisans</option>
                  <option value="yukseklisans">Yüksek Lisans</option>
                  <option value="doktora">Doktora</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Bölüm</label>
                <input
                  type="text"
                  name="bolum"
                  value={formData.bolum}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Yabancı Dil</label>
                <input
                  type="text"
                  name="yabanciDil"
                  value={formData.yabanciDil}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Seviye</label>
                <input
                  type="text"
                  name="dilSeviye"
                  value={formData.dilSeviye}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">2. Yabancı Dil</label>
                <input
                  type="text"
                  name="yabanciDil2"
                  value={formData.yabanciDil2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Seviye</label>
                <input
                  type="text"
                  name="dilSeviye2"
                  value={formData.dilSeviye2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* İş Deneyimi */}
          <div className="mb-12">
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-red-600 text-center mb-8">İş Deneyimi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Önceki Pozisyon</label>
                <input
                  type="text"
                  name="oncekiPozisyon"
                  value={formData.oncekiPozisyon}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Başvuru Yaptığınız Pozisyon</label>
                <input
                  type="text"
                  name="basvuruPozisyonu"
                  value={formData.basvuruPozisyonu}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Ayrılma Nedeni</label>
                <textarea
                  name="ayrilmaNedeni"
                  value={formData.ayrilmaNedeni}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Referanslarınız</label>
                <textarea
                  name="referanslar"
                  value={formData.referanslar}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Ek Bilgiler</label>
                <textarea
                  name="ekBilgiler"
                  value={formData.ekBilgiler}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* CV Ekleme */}
          <div className="mb-12">
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-red-600 text-center mb-8">CV Ekleme</h2>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">CV Ekleme</label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  name="cvDosya"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="cvUpload"
                />
                <label
                  htmlFor="cvUpload"
                  className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  Dosyaları Seç
                </label>
                <span className="text-gray-500">
                  {formData.cvDosya ? formData.cvDosya.name : 'Dosya seçilmedi'}
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                BAŞVURU YAP
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Başvurunuz güvenli şekilde işlenecektir
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
