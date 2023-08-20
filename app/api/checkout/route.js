import { connectToDB } from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const ids = request.nextUrl.searchParams.get('ids');

  if (!ids) {
    return NextResponse.json({ message: 'Cart is empty' });
  }

  const idsArray = ids.split(',');

  await connectToDB();

  // Fetch products in batches using parallel async queries
  const productsPromises = idsArray.map(id =>
    Product.findOne({ _id: id }).exec()
  );

  const products = await Promise.all(productsPromises);

  const foundProducts = products.filter(product => product !== null);

  if (foundProducts.length === 0) {
    return NextResponse.json({
      message: 'No products found for the provided IDs',
    });
  }

  return NextResponse.json(foundProducts);
}
