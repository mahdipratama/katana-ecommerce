/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from './Button';
import Link from 'next/link';

function FeaturedCard({ featuredProduct }) {
  const { name, pictures, prices } = featuredProduct;

  // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  return (
    <div
      className="card_featured
      bg-white overflow-hidden shadow-small mb-4 rounded-[3px] 
        w-[230px] h-[400px] flex flex-col
        msm:w-[270px] lg:w-[300px]
        ">
      <div className="object-cover w-[100%] h-[350px] sm:h-[250px]">
        <img
          src={pictures[0]}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pb-[16px] py-[10px] px-[20px] flex-1">
        <span className="mr-3 text-secondary text-[25px] font-semibold">
          $ {prices.discPrice}
        </span>
        <span className="text-accent1 line-through">$ {prices.oldPrice}</span>

        <h4 className="text-primary text-[16px] ssm:text-[18px] sm:text-[20px] font-semibold mb-3 mt-[-5px] tracking-wide">
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
