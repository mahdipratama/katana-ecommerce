/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useContext } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
import ProductsContext from '@/app/context/ProductsContext';
import { toast } from 'react-hot-toast';

function FeaturedCard({ featuredProduct }) {
  const { setSelectedProducts } = useContext(ProductsContext);

  const { name, pictures, prices, _id } = featuredProduct;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product?id=${featuredProduct._id}`);
  };

  const addProduct = () => {
    setSelectedProducts(prev => [...prev, _id]);
    toast.success('Item added to cart.');
  };

  return (
    <div
      className="card_featured
      bg-white overflow-hidden shadow-small mb-4 rounded-[3px] 
        w-[230px] h-[400px] flex flex-col
        msm:w-[270px] lg:w-[300px]
        ">
      <div
        onClick={handleClick}
        className="cursor-pointer object-cover w-[100%] h-[350px] sm:h-[250px]">
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

        <h4
          onClick={handleClick}
          className="cursor-pointer text-primary text-[16px] ssm:text-[18px] sm:text-[20px] font-semibold mb-3 mt-[-5px] tracking-wide">
          {name}
        </h4>

        <Button primary onClick={addProduct}>
          Add to cart{' '}
          <span className="ml-2">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/icons/cart.png"
              alt="cart icon"
            />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default FeaturedCard;
