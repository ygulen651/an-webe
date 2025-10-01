export default {
  name: 'menuSettings',
  title: 'Menü Ayarları',
  type: 'document',
  fields: [
    {
      name: 'menuBg',
      title: 'Menü Arka Plan Görseli',
      type: 'image',
      options: { hotspot: true },
      description: 'PNG veya JPG. Menü açıldığında arka planda kullanılır.',
    },
    {
      name: 'opacity',
      title: 'Görsel Opaklığı (%)',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).max(100),
      description: '0-100. Boş ise varsayılan 15% kullanılır.',
    },
  ],
} 