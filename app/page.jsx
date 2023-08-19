'use client';

import { useContext, useEffect, useState } from 'react';
import CartContext from './context/CartContext';

import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import CustomKatana from '@/components/CustomKatana';
import Banner from '@/components/Banner';
import AnimeKatana from '@/components/AnimeKatana';
import TantoKatana from '@/components/TantoKatana';

import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

function ThanksPage({ onClose }) {
  return (
    <div className="bg-secondary fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-20 text-center p-10 rounded-[5px]">
      <h3 className="text-[24px] font-bold font-headingText mb-5">
        ⚔️ Honorable Thanks ⚔️
      </h3>
      <p className="text-accent3 text-[18px] leading-tight mb-7">
        Your trust, our code. When forged and ready, We will notify you when
        your item is shipped.
      </p>
      <button
        className="bg-main text-headingColor px-5 py-2 inline-block mx-auto hover:bg-red-100 hover:opacity-1 rounded-[3px]"
        onClick={() => onClose(prev => !prev)}>
        Alright!
      </button>
    </div>
  );
}

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { setSelectedProducts } = useContext(CartContext);

  const searchParams = useSearchParams();

  // Payment notification
  useEffect(() => {
    if (searchParams.get('success')) {
      setIsSuccess(true);
      setSelectedProducts([]);
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong❗');
    }
  }, [searchParams, setSelectedProducts]);

  return (
    <>
      <div
        className={`z-10 inset-0 bg-[#00000069] backdrop-blur-sm ${
          isSuccess ? 'fixed' : 'hidden'
        }`}
        aria-hidden></div>
      {isSuccess ? <ThanksPage onClose={setIsSuccess} /> : ''}
      <Hero />
      <Featured />
      <CustomKatana />
      <Banner />
      <AnimeKatana />
      <TantoKatana />
    </>
  );
}
