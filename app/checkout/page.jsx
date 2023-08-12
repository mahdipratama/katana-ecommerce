'use client';

import { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import getProductsChekcout from '@/actions/getProductsCheckout';
import CheckoutCard from '@/components/CheckoutCard';

function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
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

  return (
    <section className="layout">
      {isLoading ? (
        <p>Loading...</p>
      ) : !productsInfos.length ? (
        <p>no products</p>
      ) : (
        <>
          <CheckoutCard
            productsInfos={productsInfos}
            increaseProduct={increaseProduct}
            decreaseProduct={decreaseProduct}
            deleteProduct={deleteProduct}
            selectedProducts={selectedProducts}
          />
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
        </>
      )}
    </section>
  );
}

export default CheckoutPage;
