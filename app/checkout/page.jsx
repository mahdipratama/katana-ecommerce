'use client';

import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CartContext from '../context/CartContext';

import getProductsChekcout from '@/actions/getProductsCheckout';
import CheckoutCard from '@/components/CheckoutCard';
import CartEmpty from '@/components/CartEmpty';
import Loading from '@/components/Loading';
import Input from '@/components/Input';

import { loadStripe } from '@stripe/stripe-js';

import {
  name_validation,
  email_validation,
  city_validation,
  postal_validation,
  address_validation,
  country_validation,
} from '@/lib/inputValidations';

function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(CartContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPay, setIsPay] = useState(false);

  const methods = useForm();
  const { register } = methods;

  // Render Unique Products
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

  // Checkout
  const checkoutPayment = async (data, e) => {
    e.preventDefault();

    const checkoutData = data;

    const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripe = await loadStripe(STRIPE_PK);

    try {
      setIsPay(true);

      const response = await fetch('/api/payment', {
        method: 'POST',
        body: JSON.stringify({
          name: checkoutData.name,
          email: checkoutData.email,
          city: checkoutData.city,
          postalCode: checkoutData.postal,
          address: checkoutData.address,
          country: checkoutData.country,
          products: checkoutData.products,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error("Couldn't POST any request");

      const data = await response.json();
      const sessionId = data.id;
      stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error(err);
    } finally {
      setIsPay(false);
    }
  };

  // Increase product
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

          <div className="mt-8 lg:mt-0 basis-[35%] bg-gray-200 p-7  rounded-[3px]">
            <h2 className="font-bold text-[20px] mb-5 ">Order Information</h2>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(checkoutPayment)}
                noValidate
                autoComplete="off">
                <Input {...name_validation} />
                <Input {...email_validation} />
                <div className="flex flex-row gap-5">
                  <Input {...city_validation} />
                  <Input {...postal_validation} />
                </div>
                <Input {...address_validation} />
                <Input {...country_validation} />
                <input
                  type="hidden"
                  name="products"
                  {...register('products', {
                    value: selectedProducts.join(','),
                  })}
                />
                <button
                  disabled={isPay}
                  className={`bg-secondary text-white font-semibold px-5 py-2 w-full rounded-[3px] mt-6  ${
                    isPay ? 'cursor-not-allowed opacity-75' : ''
                  } `}>
                  {isPay ? 'Checkout...' : 'Check Out'}
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      )}
    </section>
  );
}

export default CheckoutPage;
