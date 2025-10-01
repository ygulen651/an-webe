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
    <section className="relative bg-white py-8 sm:py-12 md:py-14 lg:py-20 overflow-hidden">
      {/* Decorative red blobs (behind content but above background) - Responsive */}
      <div className="blob blob--slow w-[250px] h-[170px] sm:w-[380px] sm:h-[260px] md:w-[520px] md:h-[350px] lg:w-[620px] lg:h-[420px] -left-16 sm:-left-24 md:-left-36 lg:-left-40 -bottom-16 sm:-bottom-24 md:-bottom-36 lg:-bottom-40 z-0 opacity-80 sm:opacity-90" />
      <div className="blob blob--fast w-[270px] h-[190px] sm:w-[420px] sm:h-[280px] md:w-[580px] md:h-[400px] lg:w-[680px] lg:h-[480px] -right-20 sm:-right-28 md:-right-40 lg:-right-48 -top-10 sm:-top-14 md:-top-20 lg:-top-24 z-0 opacity-80 sm:opacity-90" />
      {/* Stüdyodan yönetilen hareketli PNG görseller */}
      {(data?.floatImages ?? []).map((f: any, i: number) => (
        <img
          key={i}
          className={`float-img hidden md:block ${i % 2 ? 'orbit-2' : 'orbit-1'}`}
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
        <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,360px)_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start px-3 sm:px-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-red-600 leading-tight tracking-tight">
              {title.split(" ").slice(0,3).join(" ")}
              <br />
              {title.split(" ").slice(3).join(" ")}
            </h2>
            {description && (
              <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base max-w-full md:max-w-[300px] mx-auto md:mx-0">{description}</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 lg:auto-rows-fr">
            {/* Sol üst: Video 1 */}
            <div className="group relative h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 lg:col-start-1 lg:row-start-1 bg-white/20">
              {data?.videos?.[0]?.asset?.url ? (
                <video src={data.videos[0].asset.url} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline controls />
              ) : (
                <div className="w-full h-full grid place-items-center bg-gray-100 text-gray-500 text-xs sm:text-sm">Video 1 ekleyin</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              {/* play badge */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-red-600 grid place-items-center shadow-md">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Orta üst: Görsel 1 */}
            {imageUrls[0] ? (
              <div className="lg:col-start-2 lg:row-start-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
                <img className="block w-full h-auto rounded-2xl sm:rounded-3xl" style={{objectFit:"contain"}} src={imageUrls[0]} alt="mutluluk1" loading="lazy" />
              </div>
            ) : (
              <div className="rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl h-48 lg:h-auto bg-gray-100 ring-1 ring-black/5 grid place-items-center text-gray-500 text-xs sm:text-sm lg:col-start-2 lg:row-start-1">Görsel 1 ekleyin</div>
            )}
            {/* Alt sol: Video 2 (3. kartı bir alt sıraya aldık) */}
            <div className="group relative h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 lg:col-start-1 lg:row-start-2 bg-white/20">
              {data?.videos?.[1]?.asset?.url ? (
                <video src={data.videos[1].asset.url} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline controls />
              ) : (
                <div className="w-full h-full grid place-items-center bg-gray-100 text-gray-500 text-xs sm:text-sm">Video 2 ekleyin</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              {/* play badge */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-red-600 grid place-items-center shadow-md">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Alt orta: Görsel 2 */}
            {imageUrls[1] ? (
              <div className="lg:col-start-2 lg:row-start-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
                <img className="block w-full h-auto rounded-2xl sm:rounded-3xl" style={{objectFit:"contain"}} src={imageUrls[1]} alt="mutluluk2" loading="lazy" />
              </div>
            ) : (
              <div className="rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl h-48 lg:h-auto bg-gray-100 ring-1 ring-black/5 grid place-items-center text-gray-500 text-xs sm:text-sm lg:col-start-2 lg:row-start-2">Görsel 2 ekleyin</div>
            )}
            {/* Alt orta ve alt sağ boşlukları grid düzeni korumak için gizli */}
          </div>
        </div>
      </div>
    </section>
  );
}


