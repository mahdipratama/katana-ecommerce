import { connectToDB } from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const ids = request.nextUrl.searchParams.get('ids');

  if (!ids) {
    return NextResponse.json({ message: 'Cart is empty' });
  }

  const idsArray = ids.split(',');

  const products = await Product.find({ _id: { $in: idsArray } }).exec();

  if (Product.length === 0) {
    return NextResponse.json({
      message: 'No products found for the provided IDs',
    });
  }

  return NextResponse.json(products);
}
