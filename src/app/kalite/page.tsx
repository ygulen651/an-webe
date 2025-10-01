import Header from "../components/Header";

export const metadata = {
  title: "Kalite",
  description: "Kalite politikamız ve sahip olduğumuz belgeler",
};

export default function Page() {
  return (
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
      <main className="mx-auto max-w-[1050px] px-6 md:px-8 py-12 mt-16">
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#1b1b1b]">
          KALİTE
        </h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        <section className="mt-8 space-y-6 text-[15px] leading-7 text-[#333]">
          <p>
            Kalite belgeleri yönetim sistemlerini kurmuş işletmeler rekabet ortamında karşılıklı fayda yaratarak daha
            kolay sistemli ve tamamen sıfır hata ile iş yapma olanağını yakalarlar. Bu bağlamda işletmeler ulusal ve
            uluslararası ticaret sahnesinde saygın bir yer edinirler.
          </p>
          <p>
            Şirketimiz ANI BİSKÜVİ de globalleşen dünyada artan rekabet şartları yanında ekonomik gelişmeler yüksek
            müşteri beklentileri işletmelerin içinde bulunduğu sektörde pazar paylarını korumaları sadece teknolojik
            yatırımlarla değil ürettikleri mamullerinde çok kaliteli ve tüketiciye her tür güvence sağlamakla mümkün
            olduğuna inanan ANI BİSKÜVİ A.Ş gıda sektöründe kalite her şeyin önünde gelir prensibiyle hareket ederek
            T.S.E ve ISO 9000 kalite belgelerine öncelikle sahip olmuştur.
          </p>
          <p>
            ANI BİSKÜVİ kalite sistem belgelerine tüm çalışanlarını da inandırmış ve işletmenin tüm birimlerinde
            düzeltici, önleyici faaliyetlerle sistem mükemmel şekilde yürütülmektedir.
          </p>
        </section>

        <section className="mt-6">
          <p className="font-semibold text-[#1b1b1b] mb-3">Biz ANI BİSKÜVİ olarak, kalite için inanarak söyleyebileceğimiz prensipleri kısaca özetlersek :</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Kalite ilk defada doğru yapmaktır.</li>
            <li>Kalite ancak çok iyi bir takım çalışması ile elde edilir.</li>
            <li>Sürekli iyileştirme ve geliştirme işletmenin hedefidir.</li>
            <li>Kalite müşteri beklentisinin karşılanmasıdır.</li>
            <li>Etkin kararlar güvenilir donelere sahip olmakla elde edilir.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-6 text-[15px] leading-7 text-[#333]">
          <p className="font-semibold text-[#1b1b1b]">ANI BİSKÜVİ'nin sahip olduğu belgelerden;</p>
          <p>
            <span className="font-semibold">T.S.E Belgesi</span> Malların ve hizmetlerin ilgili Türk Standartlarına uygun olduğunu ve mamulle veya
            hizmetle ilgili bir problem ortaya çıktığında Türk Standartları Enstitüsünün garantisi altında olduğunu ifade eder.
          </p>
          <p>
            <span className="font-semibold">ISO KALİTE SİSTEMİ</span> = Kalite yönetim standartları diğer ürün standartları gibi uluslar arası kabul görmüş standartları içerir. Şu an dünyada uygulanmakta olan en üst düzey ISO belgesi ISO 22000'dir. ANI BİSKÜVİ ISO 9001 ve IS0 22000 kalite sistemine sahiptir.
          </p>
          <p>
            <span className="font-semibold">HACCP</span> = Gıda güvenirliği sisteminde uygulanan en iyi standartları ve değerlendirmelere sahip bir sistem olup, üretilen ürünlerin insan sağlığını tehdit edecek bütün tehlikelerden arındırılmış bir kalite sistemidir. HACCP, IS0 22000 ile entegre olarak kalite sistemimizde titizlikle uygulanmaktadır.
          </p>
          <p>
            Tüm ANI BİSKÜVİ çalışanlarının ortak çabasıyla bütün çeşitlerimiz kalite belgelerine, üretim izinlerine ve marka tescillerine sahiptir. Kalite el kitabımızda kalite için ortak politikamız: "Çalışanlarımızın ortak katılımı ile kaliteli ve sağlıklı ürünler üretmek temel ilkemizdir. Kaliteli üretimi sürekli bir gelişme içinde çalışarak başaracağız."
          </p>
        </section>

        <section className="mt-10 space-y-6 text-[15px] leading-7 text-[#333]">
          <h2 className="text-2xl font-bold text-[#d8232a]">KALİTE POLİTİKAMIZ</h2>
          <p>
            ANI BİSKÜVİ GIDA SANAYİ ve TİCARET A.Ş. olarak; çalışanlarımızın ortak katılımıyla kaliteli üretim yaparak, gıda güvenliğini en üst düzeyde sağlayarak,
            müşteri memnuniyetini ön planda tutarak, yenilikler doğrultusunda sürekli iyileşmeyi baz alarak, yasal şartlar ve müşteri gerekliliklerine uygunluğu ön
            planda tutmayı amaç edindik.
          </p>
        </section>

        <section className="mt-10 space-y-6 text-[15px] leading-7 text-[#333]">
          <h2 className="text-2xl font-bold text-[#d8232a]">GIDA GÜVENLİĞİ POLİTİKAMIZ</h2>
          <p>
            Kuruluşumuzda çalışan herkesin gönül seferberliği ve bilinçli çabaları ile müşterilerimize lezzetli, kaliteli ve güvenli ürünler sunarak rekabet yarışında önde olmak ana ilkemizdir.
          </p>
          <p>Bu ilkemizi gerçekleştirmek için, girdilerimizin satın alınmasından itibaren, mamullerimizin müşterilerimize ulaştırılmasına kadar</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Mevzuata uygunluğa önem verir,</li>
            <li>Çalışanlarımızı eğitir,</li>
            <li>Üretimde hijyen kurallarına uyulmasını sağlar,</li>
            <li>Gelişen şartlara uyum için akılcı ve planlı çalışmaya önem verir,</li>
            <li>Bilgi ve verilere dayalı karar verir,</li>
            <li>Müşterilerimizin istek ve beklentilerini sürekli olarak izler; kaliteli, güvenli, yasal ve özgün ürünler üretir.</li>
            <li>Tedarikçilerimizle işbirliği yapar,</li>
            <li>Faaliyetlerimizin etkinliğini, gıda güvenliği ve kalite kültürünü sürekli iyileştiririz.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-6 text-[15px] leading-7 text-[#333]">
          <h2 className="text-2xl font-bold text-[#d8232a]">BİLGİ GÜVENLİĞİ POLİTİKAMIZ</h2>
          <p>
            ANI BİSKÜVİ GIDA SANAYİ VE TİCARET A.Ş. ve çalışanları olarak iş sürekliliğimize ve bilgiye yönelik her türlü riski yönetmek amacıyla;
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Kurum içinde sürekli iyileştirerek ve bilgi güvenliği farkındalığı sağlayarak</li>
            <li>Tüm çalışanlarımız ve iş ortaklarımızın katılımı ile</li>
            <li>İşlediğimiz tüm fiziksel ve elektronik veriyi koruma hedefi ile devam ettireceğimizi taahhüt etmekteyiz.</li>
          </ul>
          <p>
            Veri güvenliğinin Gizlilik, Bütünlük ve Erişebilirlik ilkelerine dayalı olarak ve KVK kanunu ile Kişisel veri, Özel Nitelikli veri sınıflandırmaları esası ile ;
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Bilgi Güvenliği Standartlarının ve ilgili yasal mevzuatlara uyumu sağlanacaktır.</li>
            <li>Oluşturulan Varlık ve Veri Envanterleri üzerinden bu varlıklara yönelik tehdit ve zafiyetler ile riskler tespit edilip yönetilecektir.</li>
            <li>Bilgi Güvenliği Yönetim Sisteminin ve KVKK uyumluluğunun sürekli gözden geçirilmesi ve iyileştirilmesi sağlanacaktır.</li>
            <li>Bilgi Güvenliği farkındalığını artırmak için teknik ve davranış bütünlüğü sağlayacak eğitimler verilecektir.</li>
            <li>Ana bilgi güvenliği politikamızı destekleyecek alt politikalar belirlenecektir.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-6 text-[15px] leading-7 text-[#333]">
          <h2 className="text-2xl font-bold text-[#d8232a]">HİJYEN VE SANİTASYON POLİTİKAMIZ</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Temizlik ve hijyen faaliyetlerimizde insanı ve doğayı ön planda tutmak,</li>
            <li>Paydaşlarımızın isteklerine göre sağlıklı, hijyenik, standartlara uygun ve güvenilir ürünler üretmek,</li>
            <li>Her kademede eğitimli ve bilinçli personel yaklaşımını benimsemek; personelin bilgi ve beceri düzeyini artırmaya yönelik sürekli eğitim faaliyetleri yürütmek,</li>
            <li>Hijyen ve Sanitasyon Yönetim Sisteminin sürekli iyileştirilmesini ve etkinliğinin artırılmasını sağlamak,</li>
            <li>Yasal ve düzenleyici şartlara uygunluğu sağlamak.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-6 text-[15px] leading-7 text-[#333]">
          <h2 className="text-2xl font-bold text-[#d8232a]">HELAL POLİTİKAMIZ</h2>
          <p>Helal sertifikalı ürünlerimizi aşağıdaki ilkelere uygun olarak üretmeyi ve dağıtmayı taahhüt ediyoruz:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Ürünlerde kullanılan malzemeler Helal Sertifikalı olacak ve hayvansal menşeli yasak bölümlerden arındırılacaktır.</li>
            <li>İmalat, ambalaj, depolama ve dağıtım süreçlerinde kir/pis içermez.</li>
            <li>Ürünler tüketici kullanımı için güvenli olacak ve ulusal gıda güvenliği gereklilikleriyle uyumlu olacaktır.</li>
            <li>Ürünler temiz ve hijyenik bir ortamda üretilecek, depolanacak ve dağıtılacaktır.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-6 text-[15px] leading-7 text-[#333]">
          <h2 className="text-2xl font-bold text-[#d8232a]">ENERJİ POLİTİKAMIZ</h2>
          <p>
            Kuruluşumuz, tüm faaliyetlerinde müşteri memnuniyetini esas alır. Sürdürülebilir büyümenin sürdürülebilir enerji ilkeleri ile mümkün olduğunun bilinciyle;
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Doğal kaynakları korumayı, enerji tasarrufu gerçekleştirmeyi; atıkları azaltmayı ve geri kazanımı artırmayı,</li>
            <li>Planlama ve tasarımda enerji verimliliği sağlayan çevre dostu teknolojileri dikkate almayı,</li>
            <li>Enerji verimliliği projeleri geliştirip uygulamayı, yüksek performanslı tasarımları desteklemeyi,</li>
            <li>Enerji ile ilgili yasal ve diğer şartlara uymayı, enerji riskleri için tehditleri belirleyip yönetmeyi,</li>
            <li>Enerji performansını sürekli iyileştirmeyi, çevresel etkileri azaltmak için gerekli önlemleri almayı,</li>
            <li>Hedef ve amaçlarımızı periyodik olarak gözden geçirmeyi ve gerekli kaynakları sağlamayı,</li>
            <li>Politikamızın paydaşlarımız tarafından anlaşılmasını ve benimsenmesini sağlayarak bilinç ve duyarlılığı artırmayı beyan ederiz.</li>
          </ul>
          <p className="text-right font-semibold">Genel Müdür<br/>A. Kemal BOYNUKALIN</p>
        </section>
      </main>
    </div>
  );
}


