import Header from "../components/Header";

export const metadata = {
  title: "Sertifikalar",
  description: "Şirket sertifikalarımız",
};

export default function Page() {
  return (
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
      <main className="mx-auto max-w-[1050px] px-6 md:px-8 py-12 mt-16">
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#d8232a]">SERTİFİKALAR</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />
      </main>
    </div>
  );
}


