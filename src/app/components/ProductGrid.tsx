import Link from 'next/link';

type ProductCategory = {
  id: string;
  name: string;
  image: string;
};

const DEFAULT_CATEGORIES: ProductCategory[] = [
  { id: "cikolata", name: "Çikolatalar", image: "https://images.unsplash.com/photo-1548907040-4dda8a9622f2?q=80&w=400&auto=format&fit=crop" },
  { id: "gofret", name: "Gofretler", image: "https://images.unsplash.com/photo-1606313564200-e75d5d7a6f83?q=80&w=400&auto=format&fit=crop" },
  { id: "biskuvi", name: "Bisküviler", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop" },
  { id: "kek", name: "Kekler", image: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=400&auto=format&fit=crop" },
  { id: "kraker", name: "Krakerler", image: "https://images.unsplash.com/photo-1509440159598-8b09ec2f4d84?q=80&w=400&auto=format&fit=crop" },
  { id: "sekerleme", name: "Şekerlemeler", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop" }
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
            <Link
              key={c.id}
              href={`/urunler?kategori=${c.id}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


