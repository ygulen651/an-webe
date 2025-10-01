import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'kurumsalKimlik',
  title: 'Kurumsal Kimlik (Tek Doküman)',
  type: 'document',
  groups: [
    { name: 'icerik', title: 'İçerik' },
    { name: 'dosyalar', title: 'İndirilebilir Dosyalar' }
  ],
  fields: [
    defineField({ name: 'title', title: 'Başlık', type: 'string', initialValue: 'Kurumsal Kimlik', group: 'icerik' }),
    defineField({ name: 'hero', title: 'Tanıtım Görseli', type: 'image', options: { hotspot: true }, group: 'icerik' }),
    defineField({ name: 'altText', title: 'Alt Metin', type: 'string', group: 'icerik' }),
    defineField({
      name: 'downloads',
      title: 'İndirilebilir Dosyalar',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Ad', type: 'string', validation: r => r.required() }),
          defineField({ name: 'file', title: 'Dosya', type: 'file', validation: r => r.required() })
        ]
      }],
      group: 'dosyalar'
    })
  ],
  preview: { select: { title: 'title', media: 'hero' } }
})


