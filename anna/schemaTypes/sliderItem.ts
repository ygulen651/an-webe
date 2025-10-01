import {defineField, defineType} from 'sanity'

// Ana sayfa slider'ı için belge tipi
export default defineType({
  name: 'sliderItem',
  title: 'Slider Öğesi',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(120),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Görsel',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Metin',
          type: 'string',
          description: 'Erişilebilirlik için görsel açıklaması',
        }),
      ],
      // Görsel ya da video zorunlu: ikisinden en az biri
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const hasImage = Boolean(value);
          const hasVideo = Boolean((context as any)?.document?.video);
          if (!hasImage && !hasVideo) {
            return 'Görsel veya Video alanından en az biri doldurulmalı';
          }
          return true;
        }),
    }),
    defineField({
      name: 'video',
      title: 'Video (MP4 vb.)',
      type: 'file',
      options: {accept: 'video/*'},
      description: 'İsteğe bağlı: Yüklerseniz slayt video oynatır',
      // Görsel yoksa video zorunlu
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const hasVideo = Boolean(value);
          const hasImage = Boolean((context as any)?.document?.image);
          if (!hasVideo && !hasImage) {
            return 'Video veya Görsel alanından en az biri doldurulmalı';
          }
          return true;
        }),
    }),
    defineField({
      name: 'poster',
      title: 'Video Poster Görseli',
      type: 'image',
      options: {hotspot: true},
      description: 'Video yüklenmeden önce gösterilecek görsel',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Metni',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Linki',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Sıra',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'title', image: 'image', poster: 'poster', subtitle: 'ctaText'},
    prepare({title, image, poster, subtitle}: any) {
      return {title, subtitle, media: image ?? poster};
    },
  },
})



