'use client';

import { createContext, useState } from 'react';

const ProductsContext = createContext({});

export function ProductContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
