/* eslint-disable @next/next/no-img-element */
import ProductsContext from '@/app/context/ProductsContext';
import Link from 'next/link';
import { useContext } from 'react';

function Cart() {
  const { selectedProducts } = useContext(ProductsContext);

  return (
    <div className="fixed right-4 bottom-8 bg-accent2 rounded-xl p-2 z-20">
      <Link href={'/checkout'}>
        <div className="w-[30px] h-[30px] relative">
          <img src="/assets/icons/shopping-bag.png" alt="shoping cart" />
        </div>
        <span className="text-secondary text-sm font-semibold absolute right-[7px] top-[3px]">
          {selectedProducts.length}
        </span>
      </Link>
    </div>
  );
}

export default Cart;
