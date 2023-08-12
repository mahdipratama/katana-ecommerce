import { connectToDB } from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await connectToDB;

  const ids = request.nextUrl.searchParams.get('ids');

  if (ids) {
    const idsArray = ids.split(',');

    // Fetch products by specific IDs
    const products = await Product.find({ _id: { $in: idsArray } }).exec();
    return NextResponse.json(products);
  }
}