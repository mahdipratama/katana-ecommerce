/* eslint-disable @next/next/no-img-element */
import Button from './Button';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import getProduct from '@/actions/getProduct';
import CartContext from '@/app/context/CartContext';
import { toast } from 'react-hot-toast';

function CardRelated({ productId }) {
  const [product, setProduct] = useState('');
  const { setSelectedProducts } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(productId);

        setProduct(productData);
      } catch (err) {
        console.error(err);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product?id=${product._id}`);
  };

  const addProduct = () => {
    setSelectedProducts(prev => [...prev, product._id]);
    toast.success('Item added to cart.');
  };

  return (
    <div
      className=" flex-none
      bg-white overflow-hidden shadow-small rounded-[3px]
        w-[200px] h-[290px] flex flex-col
        sm:w-[260px] sm:h-[390px] lg:w-[230px] lg:h-[300px] lg:mb-0
        ">
      <div
        className="object-cover w-[100%] h-[165px] sm:h-[250px] lg:h-[165px] cursor-pointer"
        onClick={handleClick}>
        <img
          src={product?.pictures?.[0]}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between pb-[16px] py-[10px] px-[20px] flex-1">
        <div>
          <span className="mr-3 text-accent1 text-[18px] font-semibold">
            $ {product?.prices?.discPrice}
          </span>
          <span className="text-accent1 line-through text-[14px]">
            $ {product?.prices?.oldPrice}
          </span>
        </div>

        <h4
          onClick={handleClick}
          className="cursor-pointer text-primary text-[16px] font-medium mb-3">
          {product?.name}
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

export default CardRelated;
