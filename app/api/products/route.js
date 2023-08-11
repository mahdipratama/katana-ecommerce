import { connectToDB } from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function findAllProducts() {
  await connectToDB();

  return Product.find().exec();
}

export async function GET(request) {
  await connectToDB();

  // Fetch all products
  return NextResponse.json(await findAllProducts());
}
