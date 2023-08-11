/* eslint-disable @next/next/no-img-element */
'use client';

import ProductImages from '@/components/ProductImages';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Button from '@/components/Button';
import getProduct from '@/actions/getProduct';
import CardRelated from '@/components/CardRelated';
import ProductPageSkeleton from '@/components/ProductPageSkeleton';
import ProductsContext from '../context/ProductsContext';
import { toast } from 'react-hot-toast';

function Product() {
  const [product, setProduct] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { setSelectedProducts } = useContext(ProductsContext);

  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(productId);

        setProduct(productData);

        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  const addProduct = () => {
    setSelectedProducts(prev => [...prev, product._id]);
    toast.success('Item added to cart.');
  };

  return (
    <section className="layout">
      {isLoading ? (
        <ProductPageSkeleton />
      ) : (
        <>
          <div className="flex flex-col items-center lg:flex-row">
            <div className="mb-4 lg:!flex-1">
              <ProductImages key={productId} images={product.pictures} />
            </div>

            <div className="lg:ml-8 lg:!flex-1 max-w-[603px]">
              <div className="mb-4 self-start w-full sm:self-auto">
                <h3 className="text-[28px] text-primary font-semibold">
                  {product.name}
                </h3>
                <div className="flex items-center">
                  <span className="mr-3 text-secondary text-[25px] font-semibold">
                    $ {product.prices.discPrice}
                  </span>
                  <span className="text-accent1 line-through mb-[-2px]">
                    $ {product.prices.oldPrice}
                  </span>
                </div>
              </div>
              <div className="w-full border-y-2 py-4">
                <p className="text-paragraphColor leading-[1.5]">
                  <span className="font-semibold">Accessories:</span>{' '}
                  {`${product.description.accessories}`} <br />
                  <span className="font-semibold">Material: </span>
                  {`${product.description.material}`}
                  <br />
                  <span className="font-semibold">Sheat Material:</span>
                  {`${product.description.sheatMaterial}`} <br />
                  <span className="font-semibold">Process:</span>
                  {` ${product.description.process}`} <br />
                  <span className="font-semibold">Width:</span>
                  {` ${product.description.width}`} <br />
                  <span className="font-semibold">Length:</span>
                  {` ${product.description.length}`} <br />
                  <span className="font-semibold">Thickness:</span>
                  {` ${product.description.thickness}`}
                </p>
              </div>
              <div className="w-[200px] h-[40px] mt-4">
                <Button primary onClick={addProduct}>
                  Add to cart{' '}
                  <span className="ml-2">
                    <img
                      className="w-[20px] h-[20px]"
                      src="/assets/icons/cart.png"
                      alt="cart icon"
                    />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t-2 mt-8">
            <h2 className="heading_section text-center mt-7 lg:!mt-0">
              Related Product
            </h2>
            <div className="flex overflow-x-auto gap-x-5 no-scrollbar pb-5">
              {product.relations.map(product => (
                <CardRelated key={product} productId={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Product;
