import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function FeaturedCardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="w-[230px] h-[400px] flex flex-col msm:w-[270px] lg:w-[300px] border rounded-[3px]">
        <div className="w-[100%] h-[350px] sm:h-[250px]">
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="pb-[16px] py-[10px] px-[20px] flex-1">
          <div>
            <Skeleton count={3} />
          </div>
          <div className="mt-5 w-full ">
            <Skeleton width="100%" height={30} />
          </div>
        </div>
      </div>
    ));
}

export default FeaturedCardSkeleton;
