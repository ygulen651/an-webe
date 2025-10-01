import Header from "../components/Header";
export const metadata = {
  title: "Tarihçemiz",
  description: "Kuruluştan bugüne özet tarihçe",
};

export default function Page() {
  return (
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
      <main className="mx-auto max-w-[1050px] px-6 md:px-8 py-12 mt-16">
      <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#d8232a]">
        TARİHÇEMİZ
      </h1>
      <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />
      <p className="mt-6 text-center text-[#d8232a] text-[18px] md:text-[20px] leading-7">
        ANI BİSKÜVİ serüveninde attığımız önemli adımlar ve başarılarımız
      </p>

      <div className="mt-10 space-y-6 text-[15px] leading-7 text-[#333]">
        <p>
          1995 yılında kurulan ANI BİSKÜVİ A.Ş ilk olarak bisküvi üretimiyle faaliyetine başlamış,
          kuruluşundan bu güne geçen sürede satışlarında gösterdiği büyüme ile sürekli yatırımlara yönelmiştir.
        </p>
        <p>
          Şirketimizin göstermiş olduğu performans sonucunda 1997, 2000, 2008, 2009, 2010, 2011 ve 2012
          yıllarında İstanbul Sanayi Odasınca yayınlanan Türkiye'nin ikinci 500 büyük firması arasında yer almış,
          2013-2014 yıllarında ise Türkiye’nin ilk 500 büyük firma arasına girme başarısını göstermiştir.
        </p>
        <p>
          40 işçi ile başlayan faaliyetimiz bugün 1500 işçiyle sürdürülmektedir.
        </p>
        <p>
          ANI BİSKÜVİ A.Ş, 65.000 m² açık 115.000 m² kapalı alanda faaliyetin sürdüğü fabrikasında dünya ülkelerine yaptığı
          ihracatla Karaman'da en çok ihracat yapan şirketler sıralamasında üst sıralara yükselmiştir.
        </p>
        <p>
          ANI BİSKÜVİ fabrika bünyesindeki bisküvi – kek – çikolata – gofret – kraker – marshmallow – şeker – fındık kreması
          üretim hatlarına ek olarak yeni ürün hatları ile ürün yelpazesini genişletmiştir. 2015 yılında kremalı bisküvi ürünleri
          yurt dışından en son model tam otomatik yeni bir tesisi devreye girmiştir.
        </p>
        <p>
          ANI BİSKÜVİ GIDA SANAYİ VE TİC. A.Ş kaliteye de büyük önem vermiş ve kuruluşunun ilk yıllarından itibaren
          TSE+TSEK ve TS-EN+ISO 9001 belgesini almış olup bununla yetinmeyip gıda sektöründe tüm dünya tarafından kabul edilen,
          gıda güvenliği ve sağlığa uygunluk konusunda son nokta olan ve HACCP disiplinini de içeren ISO 22000 kalite belgesini
          de bünyesine katmıştır. Nihayetinde Bilgi Güvenliği Sistemi olan ISO 27001 sertifikasını almış bulunmaktadır.
        </p>
      </div>
      </main>
    </div>
  );
}


