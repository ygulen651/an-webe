import Header from "../components/Header";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Başkanın Mesajı",
  description: "Yönetim Kurulu Başkanının mesajı",
};

export default function Page() {
  return (
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
      
      {/* Logo - Üst Sol Köşe */}
      <Link href="/" className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50 hover:scale-110 transition-all duration-300">
        <Image
          src="/AniBiskuviLogo.png"
          alt="Ani Logo"
          width={250}
          height={90}
          className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl"
        />
      </Link>
      
      <main className="mx-auto max-w-[1050px] px-6 md:px-8 py-12 mt-16">
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#d8232a]">BAŞKANIN MESAJI</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        <section className="mt-8 space-y-6 text-[15px] leading-7 text-[#333]">
          <p>
            Anı Bisküvi şirketi olarak ülkemiz ve tüm dünya toplumuna unlu ve şekerli mamullerde kaliteli, beğenilen tatta
            sağlıklı ürünler sunmak temel hedefimizdir. Anı Bisküvi olarak bunu sağlarken en üstün teknolojiye sahip tesis
            ekipmanları ile üretim faaliyetini sürdürmekteyiz.
          </p>
          <p>
            Mamul üretimi için seçilen hammaddeler fiziksel ve kimyasal analizlerden geçirilerek kullanılmasına özen
            gösterilmektedir. Sosyal projelere de açık olan şirketimiz çalışanları, tedarikçileri, satıcıları ve tüketicileri
            Anı marka şemsiyesi altında birleşmiş bir aileyiz.
          </p>
          <p>
            Dileğimiz; Ülkemiz var oldukça şirketimizde var olacaktır.
          </p>
          <p className="text-right font-semibold">Ahmet Vefik BOYNUKALIN<br/>Yön.Kr.Bşkn</p>
        </section>
      </main>
    </div>
  );
}


