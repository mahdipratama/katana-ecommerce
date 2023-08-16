/* eslint-disable @next/next/no-img-element */
import CartContext from '@/app/context/CartContext';
import Link from 'next/link';
import { useContext } from 'react';

function Cart() {
  const { selectedProducts } = useContext(CartContext);

  return (
    <Link href={'/checkout'} className="grow flex flex-row justify-end">
      <div className="relative flex flex-row items-start">
        <div className="w-[30px] h-[30px] relative">
          <img src="/assets/icons/main-cart.png" alt="shoping cart" />
        </div>
        <div className="bg-accent2 flex w-[25px] h-[23px] items-center justify-center rounded-full">
          <span className="text-secondary text-[14px]">
            {selectedProducts.length}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Cart;
