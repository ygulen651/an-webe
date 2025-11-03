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
      {/* Decorative red triangles (behind content but above background) - Responsive */}
      <div className="blob blob--slow w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] left-4 sm:left-8 md:left-12 lg:left-16 bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 z-[5] opacity-80 sm:opacity-90" />
      <div className="blob blob--fast w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] right-4 sm:right-8 md:right-12 lg:right-16 top-4 sm:top-8 md:top-12 lg:top-16 z-[5] opacity-80 sm:opacity-90" />
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
            zIndex: 15, 
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            {/* Sol üst: Video 1 */}
            <div className="group relative h-64 sm:h-72 md:h-80 lg:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl ring-1 ring-red-500/10 hover:ring-red-500/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 lg:col-start-1 lg:row-start-1 bg-gradient-to-br from-white to-red-50/30">
              {data?.videos?.[0]?.asset?.url ? (
                <video src={data.videos[0].asset.url} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline controls />
              ) : (
                <div className="w-full h-full grid place-items-center bg-gradient-to-br from-white to-red-50/30 text-gray-500 text-sm">Video 1 ekleyin</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400" />
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="w-16 h-16 rounded-full bg-white/90 text-red-600 grid place-items-center shadow-xl group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-400 backdrop-blur-sm">
                  <svg className="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Orta üst: Görsel 1 */}
            {imageUrls[0] ? (
              <div className="lg:col-start-2 lg:row-start-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl ring-1 ring-red-500/10 hover:ring-red-500/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 bg-white h-64 sm:h-72 md:h-80 lg:h-[340px] flex items-center justify-center">
                <img className="block w-full h-full object-cover" src={imageUrls[0]} alt="mutluluk1" loading="lazy" />
              </div>
            ) : (
              <div className="rounded-2xl sm:rounded-3xl shadow-lg h-64 sm:h-72 md:h-80 lg:h-[340px] bg-gradient-to-br from-white to-red-50/30 ring-1 ring-red-500/10 grid place-items-center text-gray-500 text-sm lg:col-start-2 lg:row-start-1">Görsel 1 ekleyin</div>
            )}
            
            {/* Alt sol: Video 2 */}
            <div className="group relative h-64 sm:h-72 md:h-80 lg:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl ring-1 ring-red-500/10 hover:ring-red-500/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 lg:col-start-1 lg:row-start-2 bg-gradient-to-br from-white to-red-50/30">
              {data?.videos?.[1]?.asset?.url ? (
                <video src={data.videos[1].asset.url} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline controls />
              ) : (
                <div className="w-full h-full grid place-items-center bg-gradient-to-br from-white to-red-50/30 text-gray-500 text-sm">Video 2 ekleyin</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400" />
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="w-16 h-16 rounded-full bg-white/90 text-red-600 grid place-items-center shadow-xl group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-400 backdrop-blur-sm">
                  <svg className="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Alt orta: Görsel 2 */}
            {imageUrls[1] ? (
              <div className="lg:col-start-2 lg:row-start-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl ring-1 ring-red-500/10 hover:ring-red-500/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 bg-white h-64 sm:h-72 md:h-80 lg:h-[340px] flex items-center justify-center">
                <img className="block w-full h-full object-cover" src={imageUrls[1]} alt="mutluluk2" loading="lazy" />
              </div>
            ) : (
              <div className="rounded-2xl sm:rounded-3xl shadow-lg h-64 sm:h-72 md:h-80 lg:h-[340px] bg-gradient-to-br from-white to-red-50/30 ring-1 ring-red-500/10 grid place-items-center text-gray-500 text-sm lg:col-start-2 lg:row-start-2">Görsel 2 ekleyin</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


