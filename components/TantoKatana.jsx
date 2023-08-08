/* eslint-disable jsx-a11y/alt-text */

import Link from 'next/link';
import Button from './Button';
import Card from './Card';

/* eslint-disable @next/next/no-img-element */
function TantoKatana({ products }) {
  const tantoProducts = products
    .filter(product => product.category === 'tanto')
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <section className="layout">
      <h2 className="heading_section sm:text-center lg:text-right lg:mr-[170px]">
        <span className="mb-[5px] hidden sm:inline-block">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>{' '}
        Tanto{' '}
        <span className="inline-block mb-[5px]">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>
      </h2>

      <div className="flex flex-col items-center lg:flex-row-reverse ">
        <div className="max-w-[350px] h-[auto] lg:max-w-[500px] flex-1 lg:self-start">
          <img
            src="/assets/images/tanto.png"
            alt="tanto hero image"
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 flex flex-col flex-wrap gap-5 sm:flex-row justify-center items-center lg:gap-5">
          {tantoProducts.map(product => (
            <Card key={product._id} customProduct={product} />
          ))}

          <a href={'/products'} className="sm:basis-[300px]">
            <Button shadow>View More</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TantoKatana;