import Header from "../components/Header";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Misyon & Vizyon",
  description: "ANI Bisküvi'nin misyonu ve vizyonu",
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
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#1b1b1b]">
          MİSYON & VİZYON
        </h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        <section className="mt-10">
          <h2 className="text-[22px] md:text-[24px] font-extrabold text-[#d8232a] mb-3">VİZYONUMUZ</h2>
          <p className="text-[15px] leading-7 text-[#333]">
            ANI BİSKÜVİ GIDA SAN. ve TİC. A.Ş. olarak unlu mamuller, çikolata, şekerleme sektöründe;
          </p>
          <ul className="list-disc ml-5 mt-3 space-y-2 text-[15px] leading-7 text-[#d8232a] font-semibold">
            <li>Sürekli yeni yatırımlarla sektörde büyümeyi sürdürmek,</li>
            <li>Ülkemizde 2020 yılında ilk dört şirket arasına girmek yanında uluslararası ihracatta ülke sayısını 90'dan 140 ülkeye çıkarmak,</li>
            <li>"ANI" markasını ülkemizde ve dünyada en çok tercih edilen marka yapmak,</li>
            <li>Tüm faaliyetlerimizde doğruluk, çalışkanlık yanında sıfır hata ile kaliteli mamuller üreterek ülkemiz ve dünyanın en güvenilir şirketi olmak.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-[22px] md:text-[24px] font-extrabold text-[#d8232a] mb-3">MİSYONUMUZ</h2>
          <p className="text-[15px] leading-7 text-[#333]">
            ANI BİSKÜVİ GIDA SAN. ve TİC. A.Ş. olarak unlu mamuller, çikolata, şekerleme sektöründe; çalışanlarımıza, tüketicilerimize ve tüm insanlara,
            çevreye duyarlı bir anlayış içinde yaratılan değerle ülke ekonomisine katkı sağlayarak şirketimizi uluslararası bir şirket haline getirmektir.
          </p>
        </section>
      </main>
    </div>
  );
}


