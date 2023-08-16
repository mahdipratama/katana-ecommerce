'use client';
import { useState, useEffect } from 'react';

import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import CustomKatana from '@/components/CustomKatana';
import Banner from '@/components/Banner';
import AnimeKatana from '@/components/AnimeKatana';
import TantoKatana from '@/components/TantoKatana';

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <CustomKatana />
      <Banner />
      <AnimeKatana />
      <TantoKatana />
    </>
  );
}
