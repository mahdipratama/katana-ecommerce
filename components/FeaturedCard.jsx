/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from './Button';
import Link from 'next/link';

function FeaturedCard({ featuredProduct }) {
  const { name, pictures, prices } = featuredProduct;

  // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  return (
    <div className="bg-white max-w-[221px] sm:w-[260px] rounded-[3px] overflow-hidden shadow-small mb-4">
      <div>
        <img src={pictures[0]} alt="product image" />
      </div>
      <div className="pb-[16px] py-[10px] px-[20px]">
        <span className="mr-3 text-secondary text-[25px] font-semibold">
          $ {prices.discPrice}
        </span>
        <span className="text-accent1 line-through">$ {prices.oldPrice}</span>

        <h4 className="text-primary text-[20px] font-semibold mb-3 mt-[-5px] tracking-wide">
          {name}
        </h4>

        <Link href={'product'}>
          <Button primary>
            Add to cart{' '}
            <span className="ml-2">
              <img
                className="w-[20px] h-[20px]"
                src="/assets/icons/cart.png"
                alt="cart icon"
              />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCard;
