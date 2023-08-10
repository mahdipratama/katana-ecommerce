import Skeleton from 'react-loading-skeleton';

function ProductPageSkeleton() {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div className="mb-4 lg:!flex-1">
        <div className="mx-auto border h-[300px] w-[340px] sm:h-[370px] sm:w-[470px] md:h-[440px] md:w-[600px]">
          <Skeleton width="100%" height="100%" />
        </div>

        <div className="flex gap-2 my-2 max-w-[603px] mx-auto">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-[60px] w-[62px] sm:h-[80px] sm:w-[88px] md:h-[95px] md:w-[115px]  border p-0.5 rounded-[3px]">
                <Skeleton width="100%" height="100%" />
              </div>
            ))}
        </div>
      </div>

      <div>
        <div className="lg:ml-8 lg:!flex-1 w-[340px] sm:w-[476px] h-[90px] md:w-[598px] border-b-2">
          <Skeleton width="50%" height="30px" />
          <Skeleton width="30%" height="25px" />
        </div>

        <div className="lg:ml-8 lg:!flex-1 w-[340px] sm:w-[476px] md:w-[598px] h-[155px] border-b-2 mt-2">
          <Skeleton width="80%" count={6} />
        </div>

        <div className="lg:ml-8 lg:!flex-1 w-[340px] sm:w-[476px] md:w-[598px] h-[50px] border-b-2 mt-2">
          <Skeleton width="35%" height="30px" />
        </div>
      </div>
    </div>
  );
}

export default ProductPageSkeleton;
