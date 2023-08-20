const getProductsChekcout = async productsId => {
  try {
    const res = await fetch(`/api/checkout?ids=${productsId}`);

    if (!res.ok) throw new Error(`Request failed with status: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.log('Error fetching product: ', err);
  }
};

export default getProductsChekcout;
