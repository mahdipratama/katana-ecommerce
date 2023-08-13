/* eslint-disable @next/next/no-img-element */
import React from 'react';

function CheckoutCard({
  productsInfos,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
  selectedProducts,
}) {
  // Total Price
  const deliveryPrice = 5;
  let subtotal = 0;

  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price =
        productsInfos.find(product => product._id === id)?.prices.discPrice ||
        0;

      subtotal += +price;
    }
  }
  const total = subtotal + deliveryPrice;
  return (
    <div className="basis-[65%]">
      {productsInfos?.map(productInfo => (
        <div
          className="flex mb-5 border-b pb-4 items-start "
          key={productInfo._id}>
          <div className="bg-gray-100 w-[100px] h-[100px] rounded-[3px] overflow-hidden shadow-small shrink-0">
            <img
              className="w-full h-full"
              src={productInfo.pictures[0]}
              alt="product main picture"
            />
          </div>

          <div className="pl-4 grow flex flex-col justify-between">
            <div className="flex mb-2 border-b">
              <h3 className="font-bold text-[20px]">{productInfo.name}</h3>
              <button
                className="ml-auto mr-1"
                onClick={() => deleteProduct(productInfo._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#d81f27"
                  className="w-4 h-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <p className="text-[13px] leading-4 text-paragraphColor mb-3">
              {productInfo.description.material}
            </p>

            <div className="flex">
              <p className="grow font-semibold text-[18px] text-primary">
                ${' '}
                {selectedProducts?.filter(id => id === productInfo._id).length *
                  productInfo.prices.discPrice}
              </p>

              <div>
                <button
                  onClick={() => decreaseProduct(productInfo._id)}
                  className="inline-block border border-gray-200 px-2 rounded-lg primary">
                  -
                </button>

                <span className="px-2">
                  {selectedProducts.filter(id => id === productInfo._id).length}
                </span>

                <button
                  onClick={() => increaseProduct(productInfo._id)}
                  className="inline-block border border-gray-200 px-2 rounded-lg primary">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <div className="flex my-3">
          <h3 className="grow font-bold text-primary">Subtotal:</h3>
          <span>$ {subtotal}</span>
        </div>
        <div className="flex my-3">
          <h3 className="grow font-bold text-primary">Delivery:</h3>
          <span>$ {deliveryPrice}</span>
        </div>
        <div className="flex my-3 border-t pt-3 border-dashed border-gray-300">
          <h3 className="grow font-bold text-primary">Total:</h3>
          <span className="font-semibold text-primary">$ {total}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
