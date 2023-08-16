'use client';

import ProductsContext from '../context/ProductsContext';
import { useContext, useEffect, useState } from 'react';

function Products() {
  const { products, categoriesNames } = useContext(ProductsContext);
  const [currentProducts, setCurrentProducts] = useState(products || []);
  const [checkedCategory, setCheckedCategory] = useState([]);
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
      <div className="flex gap-10">
        <div>
          <h3>Filter by</h3>
          <ul>
            {categoriesNames.map((category, i) => (
              <li key={category}>
                <input
                  type="checkbox"
                  id={category}
                  name={category}
                  value={category}
                  onChange={() => toggleChecbox(category)}
                  checked={checkedCategory.includes(category)}
                />
                <label htmlFor={category}>{category}</label>
              </li>
            ))}
          </ul>

          <h3>Filter by price</h3>
          <div>
            <label htmlFor="minPrice">Max Price: {priceRange.max}</label>
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

          <h3>Sort by price</h3>
          <button onClick={toggleSortingOrder}>
            {sortingOrder === 'asc' ? 'Sort Ascending' : 'Sort Descending'}
          </button>
        </div>
        <div>
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
