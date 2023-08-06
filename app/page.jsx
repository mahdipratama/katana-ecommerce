'use client';
import { useState, useEffect } from 'react';

import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import CustomKatana from '@/components/CustomKatana';
import Banner from '@/components/Banner';
import AnimeKatana from '@/components/AnimeKatana';
import TantoKatana from '@/components/TantoKatana';
import Footer from '@/components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await fetch('/api/products');

      if (!res) throw new Error("Could'nt get the data");

      const data = await res.json();

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const categoriesNames = [
    ...new Set(products.map(product => product.category)),
  ];

  return (
    <>
      <Hero />
      <Featured products={products} />
      <CustomKatana products={products} />
      <Banner />
      <AnimeKatana products={products} />
      <TantoKatana products={products} />
    </>
  );
}
