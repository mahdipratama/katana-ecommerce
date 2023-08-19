/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import ProductsContext from '../context/ProductsContext';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Loading from '@/components/Loading';
import Card from '@/components/Card';

const categoryMap = {
  anime: ['anime'],
  custom: ['custom'],
  tanto: ['tanto'],
};

function Products() {
  const { products, categoriesNames, isLoading } = useContext(ProductsContext);

  const categoryParams = useSearchParams();
  const category = categoryParams.get('category');

  const initialCategory = categoryMap[category] || [];

  const [currentProducts, setCurrentProducts] = useState(products || []);
  const [checkedCategory, setCheckedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState({ min: 100, max: 450 });
  const [sortingOrder, setSortingOrder] = useState('none');
  const [initialRender, setInitialRender] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Filter products
    const filteredProducts = products.filter(product => {
      const matchesCategories =
        checkedCategory.length === 0 ||
        checkedCategory.includes(product.category);
      const isInRange =
        product.prices.discPrice >= priceRange.min &&
        product.prices.discPrice <= priceRange.max;
      return matchesCategories && isInRange;
    });

    // Sort Product
    let sortedProducts = [...filteredProducts];

    if (!initialRender && sortingOrder !== 'none') {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (sortingOrder === 'asc') {
          return a.prices.discPrice - b.prices.discPrice;
        } else {
          return b.prices.discPrice - a.prices.discPrice;
        }
      });
    }

    setCurrentProducts(sortedProducts);
    setInitialRender(false);
  }, [checkedCategory, priceRange, sortingOrder, products, initialRender]);

  const toggleChecbox = category => {
    setCheckedCategory(prevChecked =>
      prevChecked.includes(category)
        ? prevChecked.filter(c => c !== category)
        : [...prevChecked, category]
    );
  };

  const handlePriceChange = event => {
    const { name, value } = event.target;
    setPriceRange(prevRange => ({
      ...prevRange,
      [name]: parseFloat(value),
    }));
  };

  const toggleSortingOrder = () => {
    setSortingOrder(prevOrder => {
      if (prevOrder === 'asc') {
        return 'desc';
      } else if (prevOrder === 'desc') {
        return 'asc';
      } else {
        return 'asc';
      }
    });
  };

  const toggleFilters = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section className="layout">
      <h2 className="text-[24px] text-center font-semibold lg:text-[28px] border-b pb-2 mb-6">
        <span className="inline-block mb-[5px]">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>
        All Products
        <span className="inline-block mb-[5px]">
          <img src="/assets/icons/line.png" aria-hidden />
        </span>
      </h2>

      <div
        className={`z-10 inset-0 bg-[#00000069] backdrop-blur-sm ${
          isOpen ? 'fixed' : 'hidden'
        }`}
        aria-hidden></div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="relative lg:flex lg:gap-8">
          <div
            className={`z-30 ease-out duration-200  ${
              isOpen
                ? 'fixed top-1 left-[10px]'
                : 'absolute top-[-48px] left-[-2px]'
            } flex items-center gap-1 cursor-pointer lg:hidden`}
            onClick={toggleFilters}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={isOpen ? '#d81f27' : '#40444d'}
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <div
            className={`fixed lg:sticky lg:top-[10%] lg:self-start lg:basis-[15%] ease-out duration-200 ${
              isOpen
                ? 'left-0 top-0 bg-slate-100 w-[80%] h-[100%] px-5 py-10 z-20'
                : 'left-[-100%]'
            } `}>
            <div className="border-b pb-3 mb-3">
              <h3 className="font-semibold text-paragraphColor">
                Filter by category
              </h3>
              <ul>
                {categoriesNames.map((category, i) => (
                  <li key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={category}
                      name={category}
                      value={category}
                      onChange={() => toggleChecbox(category)}
                      checked={checkedCategory.includes(category)}
                      className="inline-block"
                    />
                    <label
                      htmlFor={category}
                      className="capitalize text-paragraphColor text-[14px]">
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-b pb-3 mb-3">
              <h3 className="font-semibold text-paragraphColor">
                Filter by price
              </h3>
              <label
                htmlFor="minPrice"
                className=" text-paragraphColor text-[14px]">
                Max price: {priceRange.max}
              </label>
              <input
                type="range"
                id="maxPrice"
                name="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                min="100"
                max="450"
              />
            </div>

            <div className="border-b pb-3 ">
              <h3 className=" font-semibold text-paragraphColor">
                Sort by price
              </h3>
              <span
                className="text-paragraphColor text-[14px] text-normal ml-[2px] cursor-pointer hover:underline"
                onClick={toggleSortingOrder}>
                {sortingOrder === 'asc'
                  ? 'Lowest - Highest'
                  : 'Highest - Lowest '}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-evenly sm:gap-y-10 lg:basis-[85%]">
            {currentProducts.map(product => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
