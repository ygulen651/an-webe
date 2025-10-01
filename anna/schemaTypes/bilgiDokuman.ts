import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'bilgiDokuman',
  title: 'Bilgi Toplumu Dokümanı',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Başlık', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'file', title: 'Dosya', type: 'file', validation: (r) => r.required() }),
    defineField({ name: 'publishedAt', title: 'Yayın Tarihi', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', media: 'file' },
  },
})


