/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import FeaturedCard from './FeaturedCard';

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

SwiperCore.use([Autoplay]);

function Featured({ products }) {
  const featuredProducts = products.filter(
    product => product.isFeatured === true
  );

  return (
    <section className="layout">
      <h1 className="text-[24px] font-semibold lg:text-[28px]">
        Featured{' '}
        <span className="inline-block mb-[3px]">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>
      </h1>

      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
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
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 150,
          },
        }}>
        {featuredProducts.map(product => (
          <SwiperSlide className="px-[50px]" key={product._id}>
            <FeaturedCard key={product._id} featuredProduct={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Featured;
