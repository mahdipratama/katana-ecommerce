'use client';

import { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import getProductsChekcout from '@/actions/getProductsCheckout';
import CheckoutCard from '@/components/CheckoutCard';
import CartEmpty from '@/components/CartEmpty';
import Loading from '@/components/Loading';

function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

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

  return (
    <section className="layout">
      {isLoading ? (
        <Loading />
      ) : !productsInfos.length ? (
        <CartEmpty />
      ) : (
        <div className="flex flex-col lg:flex-row lg:gap-7 items-start">
          <CheckoutCard
            productsInfos={productsInfos}
            increaseProduct={increaseProduct}
            decreaseProduct={decreaseProduct}
            deleteProduct={deleteProduct}
            selectedProducts={selectedProducts}
          />

          <div className="mt-8 basis-[30%] bg-accent2 p-7  rounded-[3px]">
            <h2 className="font-bold text-[20px] mb-5 ">Order Information</h2>
            <form action="">
              <input
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="bg-white w-full rounded-[3px] px-4 py-2 mb-2"
                type="text"
                placeholder="Your name"
              />

              <input
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-white w-full rounded-[3px] px-4 py-2 mb-2"
                type="email"
                placeholder="Email address"
              />

              <div className="flex flex-row gap-5 ">
                <input
                  name="city"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="bg-white w-full rounded-[3px] px-4 py-2 mb-2"
                  type="text"
                  placeholder="City"
                />
                <input
                  name="postalCode"
                  value={postalCode}
                  onChange={e => setPostalCode(e.target.value)}
                  className="bg-white w-full rounded-[3px] px-4 py-2 mb-2"
                  type="text"
                  placeholder="Postal code"
                />
              </div>

              <input
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="bg-white w-full rounded-[3px] px-4 py-2 mb-2"
                type="text"
                placeholder="Address"
              />

              <input
                name="country"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="bg-white w-full rounded-[3px] px-4 py-2 mb-2"
                type="text"
                placeholder="Country"
              />

              <button
                type="submit"
                className="bg-secondary text-white font-semibold px-5 py-2 w-full rounded-[3px] mt-6 ">
                Check Out
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CheckoutPage;
