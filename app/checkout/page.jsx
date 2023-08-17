'use client';

import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CartContext from '../context/CartContext';

import getProductsChekcout from '@/actions/getProductsCheckout';
import CheckoutCard from '@/components/CheckoutCard';
import CartEmpty from '@/components/CartEmpty';
import Loading from '@/components/Loading';
import Input from '@/components/Input';

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

  const methods = useForm();
  const [success, setSuccess] = useState(false);

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

  // Form submit
  const onSubmit = methods.handleSubmit(data => {
    console.log(data);

    methods.reset();
    setSuccess(true);
  });

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
                onSubmit={e => e.preventDefault()}
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

                <button
                  onClick={onSubmit}
                  className="bg-secondary text-white font-semibold px-5 py-2 w-full rounded-[3px] mt-6 ">
                  Check Out
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
