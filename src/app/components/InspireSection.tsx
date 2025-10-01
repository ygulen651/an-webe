import ImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../lib/sanity";
import { qInspireSection } from "../lib/queries";

export default async function InspireSection() {
  const data = await sanityClient.fetch<any>(qInspireSection);
  console.log("[InspireSection] Sanity data:", data);
  console.log("[InspireSection] floatImages:", data?.floatImages);
  
  const builder = ImageUrlBuilder(sanityClient);
  // Kırpmayı engelle: height vermeden ve fit("max") ile orijinal oranı koru
  const imageUrls: string[] = (data?.images ?? [])
    .slice(0, 2)
    .map((m: any) => builder.image(m).fit("max").url());
  const title = data?.title ?? "Anı İçimdeki Çocuğu Mutlu Eder";
  const description = data?.description ?? "";
  const videoUrl = data?.videoUrl ?? process.env.NEXT_PUBLIC_INSPIRE_VIDEO_URL ?? "";
  const posterUrl = data?.posterUrl ?? undefined;

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative red blobs (behind content but above background) */}
      <div className="blob blob--slow w-[620px] h-[420px] -left-40 -bottom-40 z-0" />
      <div className="blob blob--fast w-[680px] h-[480px] -right-48 -top-24 z-0" />
      {/* Stüdyodan yönetilen hareketli PNG görseller */}
      {(data?.floatImages ?? []).map((f: any, i: number) => (
        <img
          key={i}
          className={`float-img ${i % 2 ? 'orbit-2' : 'orbit-1'}`}
          style={{ 
            position: 'absolute', 
            left: f.left, 
            right: f.right, 
            top: f.top, 
            bottom: f.bottom, 
            width: f.width ?? '80px', 
            zIndex: f.zIndex ?? 10, 
            animationDuration: (f.speed ?? 12) + 's' 
          }}
          src={f.url}
          alt={`float-${i}`}
        />
      ))}
      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-red-600 leading-tight tracking-tight">
              {title.split(" ").slice(0,3).join(" ")}
              <br />
              {title.split(" ").slice(3).join(" ")}
            </h2>
            {description && (
              <p className="mt-6 text-gray-700 leading-relaxed text-sm max-w-[300px]">{description}</p>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:auto-rows-fr">
            {/* Sol üst: Video 1 */}
            <div className="group relative h-64 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300 lg:col-start-1 lg:row-start-1 bg-white/20">
              {data?.videos?.[0]?.asset?.url ? (
                <video src={data.videos[0].asset.url} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline controls />
              ) : (
                <div className="w-full h-full grid place-items-center bg-gray-100 text-gray-500">Video 1 ekleyin</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              {/* play badge */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="w-14 h-14 rounded-full bg-white/90 text-red-600 grid place-items-center shadow-md">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Orta üst: Görsel 1 */}
            {imageUrls[0] ? (
              <div className="lg:col-start-2 lg:row-start-1">
                <img className="block w-full h-auto rounded-xl" style={{objectFit:"contain"}} src={imageUrls[0]} alt="mutluluk1" loading="lazy" />
              </div>
            ) : (
              <div className="rounded-3xl shadow-xl h-48 lg:h-auto bg-gray-100 ring-1 ring-black/5 grid place-items-center text-gray-500 lg:col-start-2 lg:row-start-1">Görsel 1 ekleyin</div>
            )}
            {/* Alt sol: Video 2 (3. kartı bir alt sıraya aldık) */}
            <div className="group relative h-64 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300 lg:col-start-1 lg:row-start-2 bg-white/20">
              {data?.videos?.[1]?.asset?.url ? (
                <video src={data.videos[1].asset.url} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline controls />
              ) : (
                <div className="w-full h-full grid place-items-center bg-gray-100 text-gray-500">Video 2 ekleyin</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              {/* play badge */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="w-14 h-14 rounded-full bg-white/90 text-red-600 grid place-items-center shadow-md">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Alt orta: Görsel 2 */}
            {imageUrls[1] ? (
              <div className="lg:col-start-2 lg:row-start-2">
                <img className="block w-full h-auto rounded-xl" style={{objectFit:"contain"}} src={imageUrls[1]} alt="mutluluk2" loading="lazy" />
              </div>
            ) : (
              <div className="rounded-3xl shadow-xl h-48 lg:h-auto bg-gray-100 ring-1 ring-black/5 grid place-items-center text-gray-500 lg:col-start-2 lg:row-start-2">Görsel 2 ekleyin</div>
            )}
            {/* Alt orta ve alt sağ boşlukları grid düzeni korumak için gizli */}
          </div>
        </div>
      </div>
    </section>
  );
}


