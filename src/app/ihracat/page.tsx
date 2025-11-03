import Header from "../components/Header";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "İhracat",
  description: "Anı Bisküvi ihracat politikası ve ülkeler",
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
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#d8232a]">İHRACAT</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        <section className="mt-8 space-y-6 text-[15px] leading-7 text-[#333]">
          <p>
            ANI Bisküvi Gıda San. ve Tic. A.Ş. satış politikaları doğrultusunda, yurt içi satışlarının yanı sıra ihracat
            konusuna da büyük önem vermektedir.
          </p>
          <p>
            Yurt dışında da kaliteli ürün ve marka politikalarından ödün vermeyen Anı Bisküvi, tüketicilerinin desteğiyle en
            kaliteli ve en güvenilir ürünleri, dünya piyasasına sürerek güçlü adımlarla yoluna devam etmektedir.
          </p>
          <p>
            Anı Bisküvi’nin el değmeden ürettiği ürünler, lezzet ve kıvam bakımından tüm dünya ülkelerinde kabul ve rağbet
            görmektedir. Bu yüzden yurt içinde ve yurt dışında taklit edilmeye dahi çalışılmıştır. Bu, doğru yolda
            ilerlediğimizin bir göstergesi olarak bize cesaret ve kıvanç vermiştir.
          </p>
          <p>
            Anı Bisküvi, istikrarlı yükselişi ile Türkiye İhracatçılar Meclisi’nin (TİM) 2014 verileri doğrultusunda,
            Türkiye’de en çok ihracat yapan 1000 firma araştırmasında 183’üncü sırada yerini alarak, ülkemize kazandırdığı
            döviz ile ekonomiye önemli katkılar sağlamaktadır.
          </p>
          <p>
            Bunun yanı sıra, Akdeniz İhracatçı Birlikleri Genel Sekreterliği’ne bağlı Hububat Bakliyat ve Yağlı Tohumlar
            İhracatçı Birliği nezdinde de hububat sektöründe en çok ihracat yapan 3’üncü firma unvanını alan Anı Bisküvi, bu
            başarısını ödülle taçlandırmıştır. Anı Bisküvi’nin elde ettiği başarılarının ardındaki sır, hiç kuşkusuz dünya
            piyasasında en çok tercih edilen bir marka olmasından kaynaklıdır.
          </p>
          <p>
            Anı Bisküvi, dünyanın dört bir yanındaki 90 ülkeye lezzetli ürünlerini ihraç etmektedir. İşte bu ülkelerden bazıları:
          </p>
          <p className="text-[14px] leading-7">
            Amerika Birleşik Devletleri, Afganistan, Almanya, Angola, Arnavutluk, Avustralya, Avusturya, Azerbaycan, Bahreyn,
            Belçika, Benin, Birleşik Arap Emirlikleri, Bolivya, Bosna Hersek, Bulgaristan, Cezayir, Cibuti, Çad, Çek Cumhuriyeti,
            Dominik Cumhuriyeti, Ekvator Ginesi, Etiyopya, Fas, Fransa, Fildişi Sahili, Filistin, Gabon, Gambiya, Gana, Gine,
            Gine Bissau, Güney Afrika Cumhuriyeti, Gürcistan, Hırvatistan, Hindistan, Hollanda, Irak, İngiltere, İran, İrlanda,
            İsrail, Kuzey Kıbrıs T.C., Kamerun, Karadağ, Katar, Kenya, Kolombiya, Kongo, Kosova, Kuveyt, Liberya, Libya,
            Litvanya, Lübnan, Macaristan, Madagaskar, Makedonya, Maldiv Adaları, Malezya, Mali, Malta, Mauritius, Mısır,
            Moğolistan, Moritanya, Mozambik, Nijer, Nijerya, Panama, Papua Yeni Gine, Polonya, Portekiz, Romanya, Rusya
            Federasyonu, Sao Tome, Senegal, Seyşel Adaları, Sırbistan, Slovakya, Somali, Sudan, Suudi Arabistan, Tacikistan,
            Tanzanya, Togo, Tunus, Türkmenistan, Uganda, Umman, Uruguay, Ürdün, Yemen.
          </p>
        </section>
      </main>
    </div>
  );
}


