import Header from "../components/Header";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Sertifikalar",
  description: "Şirket sertifikalarımız",
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
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#d8232a]">SERTİFİKALAR</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />
      </main>
    </div>
  );
}


