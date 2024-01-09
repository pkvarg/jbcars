'use client';
import Navbar from './components/Navbar';
import { useRouter } from 'next/navigation';
import WhatsApp from './components/WhatsApp';

export default function Home() {
  const router = useRouter();

  return (
    <main className="hero relative h-[100vh] text-white lg:h-[100vh] ">
      <Navbar />
      <div className="mx-4 flex transform flex-col   gap-4 text-[25px] font-thin uppercase lg:mx-[18%] lg:grid lg:translate-y-1/2 lg:grid-cols-3">
        <div
          onClick={() => router.push('/preprava')}
          className="hover:text-underline flex h-[80px] cursor-pointer items-center justify-center bg-[#86747867] hover:border hover:border-yellow-400 hover:text-yellow-400 lg:h-[150px]"
        >
          Preprava áut
        </div>
        <div
          onClick={() => router.push('/odtahovka')}
          className="hover:text-underline flex h-[80px] cursor-pointer items-center justify-center bg-[#86747867] hover:border  hover:border-yellow-400 hover:text-yellow-400 lg:h-[150px]"
        >
          Odťahová služba
        </div>
        <div
          onClick={() => router.push('/transfer')}
          className="hover:text-underline flex h-[80px] cursor-pointer items-center justify-center  bg-[#86747867] hover:border hover:border-yellow-400 hover:text-yellow-400 lg:h-[150px]"
        >
          Letiskový transfer
        </div>
        <div
          onClick={() => router.push('/prenajom')}
          className="hover:text-underline flex h-[80px] cursor-pointer items-center justify-center bg-[#86747867] hover:border hover:border-yellow-400  hover:text-yellow-400 lg:h-[150px]"
        >
          Prenájom vozidiel
        </div>
        <div
          onClick={() => router.push('/servis')}
          className="hover:text-underline flex h-[80px] cursor-pointer items-center justify-center bg-[#86747867] hover:border hover:border-yellow-400  hover:text-yellow-400 lg:h-[150px]"
        >
          Servis
        </div>
        <div
          onClick={() => router.push('/predaj-vykup')}
          className="hover:text-underline flex h-[80px] cursor-pointer items-center justify-center bg-[#86747867] hover:border hover:border-yellow-400  hover:text-yellow-400 lg:h-[150px]"
        >
          Predaj a výkup
        </div>
      </div>
      <div className="ml-[20%] mt-[17%] hidden lg:flex">
        <WhatsApp />
      </div>
    </main>
  );
}
