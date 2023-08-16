'use client';

import { createContext } from 'react';
import useLocalStorageState from 'use-local-storage-state';

const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart', {
    defaultValue: [],
  });
  return (
    <CartContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
