/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import ProductsContext from '../context/ProductsContext';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const categoryMap = {
  anime: ['anime'],
  custom: ['custom'],
  tanto: ['tanto'],
};

function Products() {
  const { products, categoriesNames } = useContext(ProductsContext);

  const categoryParams = useSearchParams();
  const category = categoryParams.get('category');

  const initialCheckedCategory = categoryMap[category] || [];

  const [currentProducts, setCurrentProducts] = useState(products || []);
  const [checkedCategory, setCheckedCategory] = useState(
    initialCheckedCategory
  );
  const [priceRange, setPriceRange] = useState({ min: 100, max: 450 });
  const [sortingOrder, setSortingOrder] = useState('none');
  const [initialRender, setInitialRender] = useState(true);

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

  return (
    <section className="layout">
      <div>
        <h2 className="text-[24px] text-center font-semibold lg:text-[28px] border-b pb-2 mb-6">
          <span className="inline-block mb-[5px]">
            <img src="/assets/icons/line.png" aria-hidden />
          </span>
          All Products
          <span className="inline-block mb-[5px]">
            <img src="/assets/icons/line.png" aria-hidden />
          </span>
        </h2>
      </div>
      <div className="flex gap-10 items-start relative ">
        <div className="sticky left-0 top-[80px]">
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

          <div className="border-b pb-3 mb-3">
            <h3 className="font-semibold text-paragraphColor">Sort by price</h3>
            <span
              className="text-paragraphColor text-[14px] text-normal ml-[2px] cursor-pointer hover:underline"
              onClick={toggleSortingOrder}>
              {sortingOrder === 'asc'
                ? 'Lowest - Highest'
                : 'Highest - Lowest '}
            </span>
          </div>
        </div>

        <div className="right">
          {currentProducts.map(product => (
            <p key={product._id}>
              {product.name} : <span>{product.prices.discPrice}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
