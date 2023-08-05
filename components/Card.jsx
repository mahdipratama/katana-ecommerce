/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Button from './Button';

function Card({ customProduct }) {
  const { name, pictures, prices } = customProduct;

  return (
    <div
      className="
      bg-white overflow-hidden shadow-small rounded-[3px]
        w-[230px] h-[310px] flex flex-col
        sm:w-[260px] sm:h-[390px] lg:w-[230px] lg:h-[300px] lg:mb-0
        ">
      <div className="object-cover w-[100%] h-[180px] sm:h-[250px] lg:h-[165px]">
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

        <h4 className="text-primary text-[16px] ssm:text-[18px] sm:text-[20px] font-semibold mb-3  tracking-wide">
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

export default Card;