'use client';

import ProductsContext from '../context/ProductsContext';
import { useContext, useEffect, useState } from 'react';

function Products() {
  const { products, categoriesNames } = useContext(ProductsContext);
  const [currentProducts, setCurrentProducts] = useState(products || []);
  const [checkedCategory, setCheckedCategory] = useState([]);

  useEffect(() => {
    // Filter products
    const filteredProducts = products.filter(product => {
      if (checkedCategory.length === 0) {
        return true; // Display all products
      } else {
        return checkedCategory.includes(product.category);
      }
    });

    setCurrentProducts(filteredProducts);
  }, [, checkedCategory, products]);

  const toggleChecbox = category => {
    setCheckedCategory(prevChecked =>
      prevChecked.includes(category)
        ? prevChecked.filter(c => c !== category)
        : [...prevChecked, category]
    );
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
        </div>
        <div>
          {currentProducts.map(product => (
            <p key={product._id}>{product.name}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
