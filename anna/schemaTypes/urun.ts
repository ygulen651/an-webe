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
      title: 'Slug',
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
          description: 'Görsel açıklaması (SEO için önemli)',
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
      name: 'ozellikler',
      title: 'Ürün Özellikleri',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'ozellik',
              title: 'Özellik',
              type: 'string'
            },
            {
              name: 'deger',
              title: 'Değer',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'ozellik',
              subtitle: 'deger'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'besinDegeri',
      title: 'Besin Değeri',
      type: 'object',
      fields: [
        {
          name: 'enerji',
          title: 'Enerji (kcal)',
          type: 'number'
        },
        {
          name: 'protein',
          title: 'Protein (g)',
          type: 'number'
        },
        {
          name: 'karbonhidrat',
          title: 'Karbonhidrat (g)',
          type: 'number'
        },
        {
          name: 'yag',
          title: 'Yağ (g)',
          type: 'number'
        },
        {
          name: 'sodyum',
          title: 'Sodyum (mg)',
          type: 'number'
        }
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif',
      type: 'boolean',
      initialValue: true,
      description: 'Ürün sitede görünsün mü?'
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
