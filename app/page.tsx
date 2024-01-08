'use client';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="hero h-[90vh] text-white lg:h-[100vh] ">
      <Navbar />
      <div className="mx-[18%] grid translate-y-1/2 transform grid-cols-3 gap-4 text-[25px] font-thin uppercase">
        <div
          onClick={() => router.push('/preprava')}
          className="hover:text-underline flex h-[150px] cursor-pointer items-center justify-center bg-[#86747867] hover:border hover:border-yellow-400 hover:text-yellow-400"
        >
          Preprava áut
        </div>
        <div
          onClick={() => router.push('/odtahovka')}
          className="hover:text-underline flex h-[150px] cursor-pointer items-center justify-center bg-[#86747867] hover:border  hover:border-yellow-400 hover:text-yellow-400"
        >
          Odťahová služba
        </div>
        <div
          onClick={() => router.push('/transfer')}
          className="hover:text-underline flex h-[150px] cursor-pointer items-center justify-center  bg-[#86747867] hover:border hover:border-yellow-400 hover:text-yellow-400"
        >
          Letiskový transfer
        </div>
        <div
          onClick={() => router.push('/prenajom')}
          className="hover:text-underline flex h-[150px] cursor-pointer items-center justify-center bg-[#86747867] hover:border  hover:border-yellow-400 hover:text-yellow-400"
        >
          Prenájom vozidiel
        </div>
        <div
          onClick={() => router.push('/servis')}
          className="hover:text-underline flex h-[150px] cursor-pointer items-center justify-center bg-[#86747867] hover:border  hover:border-yellow-400 hover:text-yellow-400"
        >
          Servis
        </div>
        <div
          onClick={() => router.push('/predaj-vykup')}
          className="hover:text-underline flex h-[150px] cursor-pointer items-center justify-center bg-[#86747867] hover:border  hover:border-yellow-400 hover:text-yellow-400"
        >
          Predaj a výkup
        </div>
      </div>
    </main>
  );
}
