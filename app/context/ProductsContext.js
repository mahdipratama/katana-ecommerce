'use client';

import { createContext, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

const ProductsContext = createContext({});

export function ProductContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart', {
    defaultValue: [],
  });
  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
