import Header from "../components/Header";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Sosyal Sorumluluk",
  description: "Anı Bisküvi'nin kültürel ve sosyal sorumluluk faaliyetleri",
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
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#d8232a]">SOSYAL SORUMLULUK</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        <section className="mt-8 space-y-6 text-[15px] leading-7 text-[#333]">
          <p>
            Şirketimiz üretim faaliyetleri dışında ülkemizin bilhassa kültürel hayatına katkıda bulunmak için, her yıl Karaman ilinde
            kutlanılan Türkçe Dil Bayramı etkinliklerine katkıda bulunmak için kitap ve eser yayınlayarak hediye şeklinde ücretsiz
            dağıtılmaktadır. Bu faaliyet kurucu ortağımız İbrahim Rıfkı BOYNUKALIN yönetiminde sürdürülmektedir. 2011'de başlattığımız
            kitap yayınlama etkinliğimize bağlı olarak 5 kitap yayınlanmıştır.
          </p>
          <div>
            <p className="font-semibold">Eser isimleri şu şekildedir.</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>(2011) Türkiye, Karaman ve Anı Bisküvi</li>
              <li>(2012) Karaman'ın İktisadi ve Sosyal Gelişimi</li>
              <li>(2013) Karaman Beylerinden Pir Ahmet</li>
              <li>(2014) Karaman ve Ankara'dan Anılar</li>
              <li>(2015) Milli Mücadele'de Karaman</li>
            </ul>
          </div>
          <p>
            Karaman ile ilgili eser hazırlayanlar, şirketimize incelenmek üzere Eser Teklif Formu ile gönderebilir. Teklif edilen çalışma
            şirketimiz tarafından değerlendirildikten sonra uygun görülürse yayınlanacaktır.
          </p>
          <p>
            Kurucu ortağımız Ömer Nazım BOYNUKALIN, Karamanoğlu Mehmet Bey Üniversitesi Yaşatma ve Yaptırma Vakfı Başkanı olarak Karaman'da
            19 bin öğrencinin öğrenim gördüğü Karamanoğlu Mehmet Bey Üniversitesi'nin gerçekleştirilmesi için vakıf olarak arsa temini
            (2 milyon m² arsa), kampüslerden birinin yapımını ve vakıf olarak üniversite kampüsü içine 2000 fidan dikimini sağlamıştır.
          </p>
          <p>
            Yine vakıf olarak Hemşirelik Yüksekokulu için 3700 m² lik 5 katlı bina tahsisi yapılmıştır. Türk Hava Kurumu'na bağlı olarak
            Havacılık Yüksekokulu'nun Karaman'da açılması için gerekli girişim ve temaslarda bulunularak okul, 2016 eğitim ve öğretim yılına
            hazır hale getirilmiştir.
          </p>
          <p>
            Karaman Huzur Evi yaptırma derneği başkan yardımcısı olarak görev üstlenilmiş ve bina Sosyal Güvenlik Bakanlığı Sosyal Hizmetler
            Müdürlüğü'ne devredilmiştir.
          </p>
          <p>
            Şirketimiz 1450 çalışanından gönüllü kan bağışı yapılarak Mut-Mersin yoluna fidan dikimi gerçekleştirilmiştir. Ayrıca Kızılay Kız
            Öğrenci Yurdu yapımında gönüllü olarak faaliyetlere katkıda bulunulmuş, 210 yataklı tesis devreye girmiştir.
          </p>
        </section>
      </main>
    </div>
  );
}


