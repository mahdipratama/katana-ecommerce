/* eslint-disable @next/next/no-img-element */
import Button from './Button';
import { useRouter } from 'next/navigation';
import ProductsContext from '@/app/context/ProductsContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';

function Card({ product }) {
  const { name, pictures, prices, _id } = product;
  const { setSelectedProducts } = useContext(ProductsContext);

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
        w-[230px] h-[310px] flex flex-col
        sm:w-[260px] sm:h-[390px] lg:w-[218px] lg:h-[300px] lg:mb-0
        ">
      <div
        className="object-cover w-[100%] h-[180px] sm:h-[250px] lg:h-[165px] cursor-pointer"
        onClick={handleClick}>
        <img
          src={pictures[0]}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pb-[16px] py-[10px] px-[20px] flex-1">
        <span className="mr-3 text-accent1 text-[18px] font-semibold">
          $ {prices?.discPrice}
        </span>
        <span className="text-accent1 line-through text-[14px]">
          $ {prices?.oldPrice}
        </span>

        <h4
          onClick={handleClick}
          className="cursor-pointer text-primary text-[16px] font-medium mb-3">
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

export default Card;
