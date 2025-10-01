import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'katalog',
  title: 'E-Katalog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Katalog Başlığı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'year',
      title: 'Yıl',
      type: 'string',
      description: 'Örnek: 2024',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Opsiyonel: Katalog kapak görseli',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Dosyası',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fileSize',
      title: 'Dosya Boyutu',
      type: 'string',
      description: 'Örnek: 8.5 MB',
    }),
    defineField({
      name: 'pages',
      title: 'Sayfa Sayısı',
      type: 'string',
      description: 'Örnek: 48 sayfa',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif mi?',
      type: 'boolean',
      initialValue: true,
      description: 'Katalog web sitesinde görünsün mü?',
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Düşük numara önce gösterilir',
      initialValue: 0,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'thumbnail',
      active: 'isActive',
    },
    prepare(selection) {
      const {title, subtitle, media, active} = selection
      return {
        title: title,
        subtitle: `${subtitle || 'Yıl belirtilmemiş'} ${active ? '✓ Aktif' : '✗ Pasif'}`,
        media: media,
      }
    },
  },
})

