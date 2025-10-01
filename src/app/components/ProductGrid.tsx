type ProductCategory = {
  id: string;
  name: string;
  image: string;
};

const DEFAULT_CATEGORIES: ProductCategory[] = [
  { id: "chocolate", name: "Çikolatalar", image: "https://images.unsplash.com/photo-1548907040-4dda8a9622f2?q=80&w=400&auto=format&fit=crop" },
  { id: "bars", name: "Çikolata Kaplı Gofret & Barlar", image: "https://images.unsplash.com/photo-1604908176997-4316516b38d0?q=80&w=400&auto=format&fit=crop" },
  { id: "cream", name: "Krem Çikolata", image: "https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=400&auto=format&fit=crop" },
  { id: "sweet-biscuits", name: "Tatlı Bisküviler", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop" },
  { id: "salty-biscuits", name: "Tuzlu Bisküviler", image: "https://images.unsplash.com/photo-1509440159598-8b09ec2f4d84?q=80&w=400&auto=format&fit=crop" },
  { id: "baby", name: "Bebe Bisküvileri", image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=400&auto=format&fit=crop" },
  { id: "wafers", name: "Gofretler", image: "https://images.unsplash.com/photo-1606313564200-e75d5d7a6f83?q=80&w=400&auto=format&fit=crop" },
  { id: "light", name: "Hafif Atıştırmalıklar", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=400&auto=format&fit=crop" },
  { id: "cakes", name: "Kekler", image: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=400&auto=format&fit=crop" },
  { id: "gum", name: "Sakızlar", image: "https://images.unsplash.com/photo-1613478223719-2fd9222b7f5d?q=80&w=400&auto=format&fit=crop" },
  { id: "candies", name: "Şekerlemeler", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop" },
  { id: "kids", name: "Kids", image: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=400&auto=format&fit=crop" },
  { id: "supplements", name: "Takviye Edici Gıdalar", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop" }
];

type Props = {
  title?: string;
  categories?: ProductCategory[];
};

export default function ProductGrid({ title = "Ürünler", categories = DEFAULT_CATEGORIES }: Props) {
  return (
    <section id="urunler" className="w-full py-16 bg-white">
      <div className="container-width">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">
            Anı'de herkese uygun bir tat mutlaka vardır. Yüzlerce ürünümüzü keşfedin.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
          {categories.map((c) => (
            <button
              key={c.id}
              className="product-card group relative overflow-hidden flex flex-col items-center text-center p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50" />
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 mb-3 ring-1 ring-gray-200 group-hover:ring-2 group-hover:ring-red-600 transition">
                <img src={c.image} alt={c.name} className="w-16 h-16 object-contain" />
              </div>
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-gray-700">
                {c.name}
              </span>
              <span className="pointer-events-none absolute bottom-3 right-3 w-8 h-8 rounded-full bg-red-600 text-white grid place-items-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


