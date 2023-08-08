'use-client';

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import FeaturedCard from './FeaturedCard';
import 'react-loading-skeleton/dist/skeleton.css';

// Import Swiper React component
import { Swiper, SwiperSlide } from 'swiper/react';

// import SwiperCore, { Autoplay } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import FeaturedCardSkeleton from './FeaturedCardSkeleton';
import { useEffect, useState } from 'react';

SwiperCore.use([Autoplay]);

function Featured({ products, isLoading }) {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const resizeHandler = () => {
      setInnerWidth(window.innerWidth);
    };

    resizeHandler(); // Call the handler initialy

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const getCardSkeleton = width => {
    if (width <= 500) return <FeaturedCardSkeleton cards={1} />;
    if (width <= 640) return <FeaturedCardSkeleton cards={2} />;
    if (width <= 768) return <FeaturedCardSkeleton cards={3} />;
    if (width <= 1024) return <FeaturedCardSkeleton cards={3} />;
    if (width <= 1536) return <FeaturedCardSkeleton cards={4} />;
  };

  // Filtered Products
  const featuredProducts = products.filter(
    product => product.isFeatured === true
  );

  return (
    <section className="layout">
      <h2 className="heading_section">
        Featured{' '}
        <span className="inline-block mb-[5px]">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>
      </h2>

      {isLoading ? (
        <div className="flex gap-5 justify-center">
          {getCardSkeleton(innerWidth)}
        </div>
      ) : (
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-[80%] sm:w-[100%]"
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
          }}>
          {featuredProducts.map(product => (
            <SwiperSlide
              className="px-[20px] rsm:px-[50px] msm:px-[60px] sm:px-0"
              key={product._id}>
              <FeaturedCard key={product._id} featuredProduct={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default Featured;
