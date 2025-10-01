import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'haber',
  title: 'Haber',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Haber Başlığı',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(200)
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
      name: 'summary',
      title: 'Özet',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300)
    }),
    defineField({
      name: 'content',
      title: 'Haber İçeriği',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Başlık', value: 'h2' },
            { title: 'Alt Başlık', value: 'h3' },
            { title: 'Alıntı', value: 'blockquote' }
          ],
          lists: [
            { title: 'Noktalı Liste', value: 'bullet' },
            { title: 'Numaralı Liste', value: 'number' }
          ]
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'image',
      title: 'Ana Görsel',
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
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Yatırım', value: 'yatirim' },
          { title: 'Sürdürülebilirlik', value: 'surdurulebilirlik' },
          { title: 'Ürün', value: 'urun' },
          { title: 'Kalite', value: 'kalite' },
          { title: 'Sosyal Sorumluluk', value: 'sosyal-sorumluluk' },
          { title: 'İhracat', value: 'ihracat' },
          { title: 'Genel', value: 'genel' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'readTime',
      title: 'Okuma Süresi',
      type: 'string',
      description: 'Örn: "3 dk okuma"',
      validation: Rule => Rule.max(20)
    }),
    defineField({
      name: 'isPublished',
      title: 'Yayında',
      type: 'boolean',
      initialValue: true,
      description: 'Bu haber yayınlansın mı?'
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan',
      type: 'boolean',
      initialValue: false,
      description: 'Bu haber öne çıkan haberlerde gösterilsin mi?'
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Haberlerin listelenme sırası (küçükten büyüğe)'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
      publishedAt: 'publishedAt'
    },
    prepare(selection) {
      const { title, subtitle, publishedAt } = selection
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('tr-TR') : 'Tarih belirtilmemiş'
      return {
        title: title,
        subtitle: `${subtitle} - ${date}`,
        media: selection.media
      }
    }
  },
  orderings: [
    {
      title: 'Yayın Tarihi (Yeni)',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Sıralama',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    },
    {
      title: 'Kategori',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' }
      ]
    }
  ]
})
