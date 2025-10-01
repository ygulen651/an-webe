import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Başlığı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'YouTube video linki (örn: https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Video Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Opsiyonel: Özel kapak görseli ekleyebilirsiniz. Eklenmezse YouTube thumbnail kullanılır.',
    }),
    defineField({
      name: 'duration',
      title: 'Video Süresi',
      type: 'string',
      description: 'Örnek: 3:45, 5:20',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Kurumsal', value: 'kurumsal'},
          {title: 'Ürün', value: 'urun'},
          {title: 'Üretim', value: 'uretim'},
          {title: 'Sosyal Sorumluluk', value: 'sosyal-sorumluluk'},
          {title: 'Etkinlik', value: 'etkinlik'},
          {title: 'Reklam', value: 'reklam'},
          {title: 'Diğer', value: 'diger'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Yayında mı?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan Video',
      type: 'boolean',
      initialValue: false,
      description: 'Bu video anasayfada veya özel bölümlerde gösterilsin mi?',
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Düşük numara önce gösterilir',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
      published: 'isPublished',
    },
    prepare(selection) {
      const {title, subtitle, media, published} = selection
      return {
        title: title,
        subtitle: `${subtitle ? subtitle.toUpperCase() : 'KATEGORİ YOK'} ${published ? '✓' : '✗ Taslak'}`,
        media: media,
      }
    },
  },
})

