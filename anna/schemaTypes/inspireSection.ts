import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'inspireSection',
  title: 'Mutluluk Kartları Bölümü',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Başlık', type: 'string', initialValue: 'Ülker İçimdeki Çocuğu Mutlu Eder' }),
    defineField({ name: 'subtitle', title: 'Alt Başlık', type: 'string' }),
    defineField({ name: 'description', title: 'Açıklama', type: 'text', rows: 4 }),
    defineField({
      name: 'videos',
      title: 'Videolar (2 adet)',
      type: 'array',
      of: [{ type: 'file', options: { accept: 'video/*' } }],
      validation: (Rule) => Rule.length(2),
    }),
    defineField({
      name: 'images',
      title: 'Görseller (2 adet)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.length(2),
    }),
    defineField({
      name: 'floatImages',
      title: 'Hareketli PNG Görseller',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'image', title: 'PNG Görsel', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'left', title: 'Sol (ör. 48%)', type: 'string' }),
          defineField({ name: 'right', title: 'Sağ (ör. 24px)', type: 'string' }),
          defineField({ name: 'top', title: 'Üst (ör. 120px)', type: 'string' }),
          defineField({ name: 'bottom', title: 'Alt (ör. 20px)', type: 'string' }),
          defineField({ name: 'width', title: 'Genişlik (ör. 80px)', type: 'string' }),
          defineField({
            name: 'zIndex', title: 'Z-index', type: 'number', initialValue: 10,
          }),
          defineField({
            name: 'speed', title: 'Hareket Hızı (saniye)', type: 'number', description: 'Daha büyük = daha yavaş', initialValue: 10,
          }),
        ],
        preview: { select: { media: 'image', title: 'width', subtitle: 'left' } },
      }],
    }),
  ],
  preview: { select: { title: 'title' } },
})


