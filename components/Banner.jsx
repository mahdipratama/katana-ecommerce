/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from './Button';
import Link from 'next/link';

function Banner() {
  return (
    <section className="layout">
      <div className="relative flex flex-col items-center lg:flex-row">
        <picture className="absolute right-0 left-0 top-0 lg:top-[10px]">
          <source
            media="(max-width: 668px)"
            srcSet="/assets/icons/accent2.png"
          />
          <img
            src="/assets/icons/accent1.png"
            aria-hidden
            className="w-full h-[300px] lg:w-[55%] lg:h-[380px]"
          />
        </picture>

        <div className="flex-1 text-center flex flex-col items-center mb-8 z-10">
          <h2 className="text-[28px] lg:text-[32px] my-7 font-semibold">
            <span className="inline-block mb-[5px]">
              <img src="/assets/icons/line.png" aria-hidden />
            </span>{' '}
            New Arrival{' '}
            <span className="inline-block mb-[5px]">
              <img src="/assets/icons/line.png" aria-hidden />
            </span>
          </h2>

          <p className="text-sm leading-[1.5] mx-auto text-paragraphColor w-[80%] sm:w-[50%] mb-9 md:w-[60%] lg:w-[80%] lg:text-base">
            Embrace the Legend: Discover Our New Arrival Katana Collection
            Unveiling Exquisite Blades Forged with Unmatched Artistry and
            Precision
          </p>

          <Link href={'/products'}>
            <Button secondary>Explore Now</Button>
          </Link>
        </div>

        <div className="flex-1">
          <img
            src="/assets/images/arrival.png"
            alt="samurai"
            className="ml-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
