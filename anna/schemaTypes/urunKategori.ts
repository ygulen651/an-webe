import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'urunKategori',
  title: 'Ürün Kategorisi',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: 'image',
      title: 'Görsel',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
})


