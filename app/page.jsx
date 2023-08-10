'use client';
import { useState, useEffect } from 'react';

import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import CustomKatana from '@/components/CustomKatana';
import Banner from '@/components/Banner';
import AnimeKatana from '@/components/AnimeKatana';
import TantoKatana from '@/components/TantoKatana';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await fetch('/api/products');

      if (!res) throw new Error("Couldn't get the data");

      const data = await res.json();

      setProducts(data);
      setIsLoading(false);
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
      <Featured products={products} isLoading={isLoading} />
      <CustomKatana products={products} isLoading={isLoading} />
      <Banner />
      <AnimeKatana products={products} isLoading={isLoading} />
      <TantoKatana products={products} isLoading={isLoading} />
    </>
  );
}
