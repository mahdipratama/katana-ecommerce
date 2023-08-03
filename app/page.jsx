'use client';

import Image from 'next/image';

export default function Home() {
  return <section></section>;
}

/* 
const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await fetch('/api/products');

      if (!res) throw new Error("Could'nt get the data");

      const data = await res.json();

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const categoriesNames = [
    ...new Set(products.map(product => product.category)),
  ];


<div>
<h1 className="text-xl uppercase">Featured</h1>

<div>
  {products
    .filter(product => product.isFeatured === true)
    .map(product => (
      <p key={product.id}>{product.name}</p>
    ))}
</div>
</div>

<div>
{categoriesNames.map(categoryName => (
  <div key={categoryName}>
    <h1 className="text-xl uppercase">{categoryName}</h1>
    {products
      .filter(product => product.category === categoryName)
      .slice(0, 6)
      .map(product => (
        <p key={product._id}>{product.name}</p>
      ))}
  </div>
))}
</div>
*/
