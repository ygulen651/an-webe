import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'urun',
  title: 'Ürün',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ürün Adı',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(100)
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(500)
    }),
    defineField({
      name: 'image',
      title: 'Ürün Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Görsel için açıklayıcı metin',
          options: {
            isHighlighted: true
          }
        }
      ]
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'reference',
      to: { type: 'urunKategori' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'fiyat',
      title: 'Fiyat',
      type: 'number',
      description: 'Ürün fiyatı (TL)'
    }),
    defineField({
      name: 'cesitNo',
      title: 'Çeşit No',
      type: 'string',
      description: 'Ürün çeşit numarası'
    }),
    defineField({
      name: 'gramaj',
      title: 'Gramaj',
      type: 'string',
      description: 'Ürün ağırlığı (örn: 85 gr)'
    }),
    defineField({
      name: 'koliAdet',
      title: 'Koli Adet',
      type: 'string',
      description: 'Koli adedi (örn: 24*6)'
    }),
    defineField({
      name: 'hc40',
      title: '40HC',
      type: 'string',
      description: '40HC konteyner bilgisi'
    }),
    defineField({
      name: 'tir',
      title: 'Tır',
      type: 'string',
      description: 'Tır bilgisi'
    }),
    defineField({
      name: 'kutuBoyutu',
      title: 'Kutu Boyutu',
      type: 'string',
      description: 'Kutu boyutları (örn: 30x20x15 cm)'
    }),
    defineField({
      name: 'barkod',
      title: 'Barkod',
      type: 'string',
      description: 'Ürün barkodu'
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif',
      type: 'boolean',
      initialValue: true,
      description: 'Bu ürün gösterilsin mi?'
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Ürünlerin listelenme sırası (küçükten büyüğe)'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'kategori.title',
      media: 'image'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle ? `Kategori: ${subtitle}` : 'Kategori belirtilmemiş'
      }
    }
  },
  orderings: [
    {
      title: 'Kategoriye Göre',
      name: 'kategoriOrder',
      by: [
        { field: 'kategori.title', direction: 'asc' },
        { field: 'order', direction: 'asc' }
      ]
    },
    {
      title: 'Sıralama',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ]
})
