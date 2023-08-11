const getProductsChekcout = async productsId => {
  try {
    const res = await fetch(`/api/products?ids=${productsId.join(',')}`);

    if (!res) throw new Error(`Request failed with status: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error('Error fetching product: ', err);
  }
};

export default getProductsChekcout;