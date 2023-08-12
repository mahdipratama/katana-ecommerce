/* eslint-disable @next/next/no-img-element */
'use client';

import { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import getProductsChekcout from '@/actions/getProductsCheckout';

function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [producstInfos, setProductsInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];

    const fetchProducts = async () => {
      try {
        const productData = await getProductsChekcout(uniqIds);

        setProductsInfos(productData || []);

        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    if (selectedProducts) fetchProducts();
  }, [selectedProducts]);

  // Add more product
  const increaseProduct = id => {
    setSelectedProducts(prev => [...prev, id]);
  };

  // Decrease Product
  const decreaseProduct = id => {
    const position = selectedProducts.indexOf(id);
    if (position !== -1) {
      setSelectedProducts(prev => {
        return prev.filter((_, i) => i !== position);
      });
    }
  };

  // Delete Product
  const deleteProduct = productId => {
    const updatedProducts = selectedProducts.filter(id => id !== productId);
    setSelectedProducts(updatedProducts);
  };

  // Total Price
  const deliveryPrice = 5;
  let subtotal = 0;

  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price =
        producstInfos.find(product => product._id === id)?.prices.discPrice ||
        0;

      subtotal += +price;
    }
  }
  const total = subtotal + deliveryPrice;

  return (
    <section className="layout">
      {!producstInfos.length ? <div>No products</div> : ''}
      {producstInfos?.map(productInfo => (
        <div className="flex mb-5" key={productInfo._id}>
          <div className="bg-gray-100 p-3 rounded-xl shrink-0">
            <img
              className="w-24"
              src={productInfo.pictures[0]}
              alt="product main picture"
            />
          </div>

          <div className="pl-4">
            <h3 className="font-bold text-lg">{productInfo.name}</h3>
            <p className="text-sm leading-4 text-gray-500">
              {productInfo.description.process}
            </p>
            <div className="flex">
              <div className="grow">
                $
                {selectedProducts?.filter(id => id === productInfo._id).length *
                  productInfo.prices.discPrice}
              </div>
              <button
                className="mr-5"
                onClick={() => deleteProduct(productInfo._id)}>
                X
              </button>
              <div>
                <button
                  onClick={() => decreaseProduct(productInfo._id)}
                  className="inline-block border border-gray-emerald-500 px-2 rounded-lg text-emerald-500">
                  -
                </button>
                <span className="px-2">
                  {selectedProducts.filter(id => id === productInfo._id).length}
                </span>
                <button
                  onClick={() => increaseProduct(productInfo._id)}
                  className="inline-block  border border-gray-emerald-500 px-2 rounded-lg text-emerald-500">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8">
        <input
          name="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="text"
          placeholder="Street address, number"
        />
        <input
          name="city"
          value={city}
          onChange={e => setCity(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="text"
          placeholder="City and postal code"
        />
        <input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="text"
          placeholder="Your name"
        />
        <input
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="email"
          placeholder="Email address"
        />
      </div>

      <div className="mt-4">
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
          <h3>${subtotal}</h3>
        </div>
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-400">Delivery:</h3>
          <h3>${deliveryPrice}</h3>
        </div>
        <div className="flex my-3 border-t pt-3 border-dashed border-emerald-500">
          <h3 className="grow font-bold text-gray-400">Total:</h3>
          <h3>${total}</h3>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
