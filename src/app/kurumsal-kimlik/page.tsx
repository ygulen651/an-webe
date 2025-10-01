import Header from "../components/Header";
import { sanityClient } from "../lib/sanity";
import { qKurumsalKimlik, KurumsalKimlik } from "../lib/queries";

export const metadata = { title: "Kurumsal Kimlik" };

export default async function Page() {
  let data: KurumsalKimlik | null = null;
  try { data = await sanityClient.fetch<KurumsalKimlik>(qKurumsalKimlik); } catch {}

  return (
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
      <main className="mx-auto max-w-[1100px] px-6 md:px-8 py-12 mt-16">
        <h1 className="text-center text-[42px] md:text-[50px] font-extrabold tracking-tight text-[#d8232a]">KURUMSAL KİMLİK</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        {data?.hero?.asset?.url && (
          <div className="mt-8 rounded-2xl bg-gray-50 p-6">
            <img src={data.hero.asset.url} alt={data?.altText || "Kurumsal Kimlik"} className="mx-auto max-h-[360px] object-contain" />
          </div>
        )}

        <section className="mt-8">
          <h2 className="text-lg font-bold mb-3">İndirilebilir Dosyalar</h2>
          {data?.downloads?.length ? (
            <ul className="space-y-2">
              {data.downloads!.map((d, i) => (
                <li key={i}>
                  <a href={d.file?.asset?.url || "#"} className="text-blue-600 hover:underline" download>
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Henüz dosya eklenmedi.</p>
          )}
        </section>
      </main>
    </div>
  );
}


