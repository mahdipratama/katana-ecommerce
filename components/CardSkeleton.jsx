import Skeleton from 'react-loading-skeleton';

function CardSkeleton() {
  return Array(6)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="border w-[230px] h-[310px] flex flex-col sm:w-[260px] sm:h-[390px] lg:w-[230px] lg:h-[300px] lg:mb-0">
        <div className="w-[100%] h-[180px] sm:h-[250px] lg:h-[165px]">
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

export default CardSkeleton;
