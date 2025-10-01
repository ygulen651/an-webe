import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'kilometreTas',
  title: 'Kilometre Taşı',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Yıl',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Görsel',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
    })
  ],
  orderings: [
    {
      title: 'Sıraya göre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Yıla göre',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }]
    }
  ]
})


