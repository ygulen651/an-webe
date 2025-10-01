// Örnek GROQ sorguları

export const qTopMenu = `*[_type == "topMenu"][0]{
  kurumsal[]->{title, slug},
  urunler[]->{title, slug},
  kariyer[]->{title, slug},
  basin[]->{title, slug},
  iletisim[]->{title, slug},
  ekatalog[]->{title, slug}
}`;

export const qKurumsalCards = `*[_type == "kurumsalCard"]|order(order asc){
  _id, title, desc, slug
}`;

export const qUrunlerCards = `*[_type == "urunKategori"]|order(order asc){
  _id, title, slug
}`;

// Ana sayfa slider öğeleri
export const qSliderItems = `*[_type == "sliderItem" && isActive == true]|order(order asc){
  "id": _id,
  title,
  description,
  ctaText,
  ctaHref,
  // Görsel URL ve alt metin
  "img": image.asset->url,
  "alt": coalesce(image.alt, title),
  // Video url ve poster
  "videoUrl": video.asset->url,
  "poster": poster.asset->url
}`;

export const qSliderCount = `count(*[_type == "sliderItem" && isActive == true])`;

// Ürün kategorileri (grid için)
export const qUrunKategorileri = `*[_type == "urunKategori"]|order(order asc){
  title,
  image
}`;

// Mutluluk bölümü (tek doküman)
export const qInspireSection = `*[_type == "inspireSection"][0]{
  title, subtitle, description,
  "videos": videos[]{asset->},
  "images": images[]{asset->},
  floatImages[]{
    left, right, top, bottom, width, zIndex, speed,
    "url": image.asset->url
  }
}`;

// Menü arka plan görseli (tek doküman)
export const qMenuSettings = `*[_type == "menuSettings"][0]{
  "menuBgUrl": menuBg.asset->url,
  opacity
}`;

// Test sorgusu - tüm dokümanları listele
export const qTestAllDocs = `*[_type in ["menuSettings", "sliderItem", "urunKategori"]]{
  _type,
  _id
}`;

// Kilometre taşları
export type KilometreTas = {
  _id: string;
  year: string;
  title: string;
  description?: string;
  image?: { asset: { url: string } };
  order?: number;
};

export const qKilometreTaslari = `*[_type == "kilometreTas"]|order(order asc, year desc){
  _id, year, title, description, image{asset->{url}}, order
}`;

export type BilgiDokuman = {
  _id: string;
  title: string;
  file?: { asset: { url: string; originalFilename?: string } };
  publishedAt?: string;
};

export const qBilgiDokumanlar = `*[_type == "bilgiDokuman"]|order(coalesce(publishedAt, _createdAt) desc){
  _id, title, file{asset->{url, originalFilename}}, publishedAt
}`;

export type KurumsalKimlikDosyasi = {
  _id: string;
  title: string;
  category?: string;
  order?: number;
  file?: { asset: { url: string, originalFilename?: string } };
  preview?: { asset: { url: string } };
};

export const qKurumsalKimlikDosyalari = `*[_type == "kurumsalKimlikDosyasi"]|order(order asc){
  _id, title, category, order, file{asset->{url, originalFilename}}, preview{asset->{url}}
}`;

export type KurumsalKimlik = {
  title?: string;
  hero?: { asset: { url: string } };
  altText?: string;
  downloads?: Array<{ title: string; file?: { asset: { url: string } } }>;
};

export const qKurumsalKimlik = `*[_type == "kurumsalKimlik"][0]{
  title, hero{asset->{url}}, altText, downloads[]{ title, file{asset->{url, originalFilename}} }
}`;