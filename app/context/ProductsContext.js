'use client';

import { createContext, useState, useEffect } from 'react';

const ProductsContext = createContext({});

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    ...new Set(products?.map(product => product.category)),
  ];

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        categoriesNames,
      }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
