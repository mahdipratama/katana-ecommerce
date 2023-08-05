'use client';
import { useState, useEffect } from 'react';

import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import CustomKatana from '@/components/CustomKatana';
import Banner from '@/components/Banner';
import AnimeKatana from '@/components/AnimeKatana';

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
    </>
  );
}

/* 
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


<div>
<h1 className="text-xl uppercase">Featured</h1>

<div>
  {products
    .filter(product => product.isFeatured === true)
    .map(product => (
      <p key={product.id}>{product.name}</p>
    ))}
</div>
</div>

<div>
{categoriesNames.map(categoryName => (
  <div key={categoryName}>
    <h1 className="text-xl uppercase">{categoryName}</h1>
    {products
      .filter(product => product.category === categoryName)
      .slice(0, 6)
      .map(product => (
        <p key={product._id}>{product.name}</p>
      ))}
  </div>
))}
</div>
*/
