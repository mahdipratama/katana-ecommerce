/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <div>
        <img src={activeImage} alt="product image" />
      </div>

      <div className="flex gap-2 my-2 max-w-[603px]">
        {images.map(image => (
          <div
            className={`max-h-[80px] border p-0.5 cursor-pointer rounded-[3px]  ${
              image === activeImage
                ? 'border-2 border-gray-300'
                : 'border-transparent'
            }`}
            key={image}
            onClick={() => setActiveImage(image)}>
            <img className="h-full w-full" src={image} alt="product image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductImages;
