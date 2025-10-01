import Header from "../components/Header";

export const metadata = {
  title: "Başkanın Mesajı",
  description: "Yönetim Kurulu Başkanının mesajı",
};

export default function Page() {
  return (
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
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


