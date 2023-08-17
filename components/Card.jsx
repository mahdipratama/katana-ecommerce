/* eslint-disable @next/next/no-img-element */
import Button from './Button';
import { useRouter } from 'next/navigation';
import CartContext from '@/app/context/CartContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';

function Card({ product }) {
  const { name, pictures, prices, _id } = product;
  const { setSelectedProducts } = useContext(CartContext);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product?id=${product._id}`);
  };

  const addProduct = () => {
    setSelectedProducts(prev => [...prev, _id]);
    toast.success('Item added to cart.');
  };

  return (
    <div
      className="
      bg-white overflow-hidden shadow-small rounded-[3px]
        w-[146px] h-[210px] flex flex-col
        sm:w-[260px] sm:h-[390px] lg:w-[218px] lg:h-[300px] lg:mb-0
        ">
      <div
        className="object-cover w-[100%] h-[100px] sm:h-[250px] lg:h-[165px] cursor-pointer"
        onClick={handleClick}>
        <img
          src={pictures[0]}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pb-[16px] py-[10px] px-[14px] sm:px-[20px] flex-1">
        <span className="mr-3 text-accent1 text-[16px] sm:text-[18px] font-semibold">
          $ {prices?.discPrice}
        </span>
        <span className="text-accent1 line-through text-[12px] sm:text-[14px]">
          $ {prices?.oldPrice}
        </span>

        <h4
          onClick={handleClick}
          className="cursor-pointer text-primary text-[13px] sm:text-[16px] font-medium mb-3 leading-[1]">
          {name}
        </h4>

        <Button primary onClick={addProduct}>
          Add to cart{' '}
          <span className="ml-2">
            <img
              className="w-[12px] h-[12px] sm:w-[20px] sm:h-[20px]"
              src="/assets/icons/cart.png"
              alt="cart icon"
            />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Card;
