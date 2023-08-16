/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import Button from './Button';

function Hero() {
  return (
    <section
      className="layout 
      lg:flex lg:flex-row-reverse 
    ">
      <div className="flex-1">
        <img
          className="mx-auto"
          src="/assets/images/hero.png"
          alt="hero section image"
        />
      </div>
      <div className="mt-10 flex-1 flex flex-col items-center text-center lg:text-left lg:items-start">
        <h1
          className="font-headingText text-[38px] font-bold leading-[1.1] mb-6 
          md:w-[70%] lg:text-[50px] lg:w-[80%] 
        ">
          Own a Piece of Tradition with Our Katana Collection
        </h1>
        <p className="text-sm leading-[1.5] text-paragraphColor w-[80%] mb-9 md:w-[60%] lg:w-[80%] lg:text-base lg:ml-1">
          Awaken your inner warrior and embrace the philosophy of the Katana.
          With razor-sharp precision and a legacy that echoes through centuries,
          these swords embody the essence of discipline and strength.
        </p>
        <Link href={'/products'} className="lg:ml-1">
          <Button secondary>shop now</Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
