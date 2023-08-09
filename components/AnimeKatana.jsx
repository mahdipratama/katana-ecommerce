/* eslint-disable jsx-a11y/alt-text */

import Button from './Button';
import Card from './Card';
import CardSkeleton from './CardSkeleton';

/* eslint-disable @next/next/no-img-element */
function AnimeKatana({ products, isLoading }) {
  const animeProducts = products
    .filter(product => product.category === 'anime')
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <section className="layout">
      <h2 className="heading_section sm:text-center lg:text-left lg:ml-[70px]">
        <span className="mb-[5px] hidden sm:inline-block">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>{' '}
        Anime katana{' '}
        <span className="inline-block mb-[5px]">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>
      </h2>

      <div className="flex flex-col items-center lg:flex-row ">
        <div className="max-w-[350px] h-[auto] lg:max-w-[510px] flex-1">
          <img
            src="/assets/images/anime.png"
            alt="custom hero image"
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 flex flex-col flex-wrap gap-5 sm:flex-row justify-center items-center lg:gap-5">
          {isLoading ? (
            <CardSkeleton />
          ) : (
            animeProducts.map(product => (
              <Card key={product._id} product={product} />
            ))
          )}

          <a href={'/products'} className="sm:basis-[300px]">
            <Button shadow>View More</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AnimeKatana;
