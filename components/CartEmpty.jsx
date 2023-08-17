/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from './Button';
import Link from 'next/link';

function CartEmpty() {
  return (
    <div className="min-h-[70vh] flex items-cente justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-[110px] h-[110px] mb-2">
          <img src="/assets/icons/empty-cart.png" alt="an empty cart" />
        </div>
        <h2 className="text-[26px] font-bold text-headingColor tracking-wider	mb-1">
          Your Cart is Empty
        </h2>
        <p className="text-paragraphColor text-[16px] mb-1">
          Tap <span className="font-semibold">Add to Cart</span> button to
          saving your favorite items.
        </p>
        <Button shadow>
          <Link href={'/products'}> Add Now </Link>
        </Button>
      </div>
    </div>
  );
}

export default CartEmpty;
