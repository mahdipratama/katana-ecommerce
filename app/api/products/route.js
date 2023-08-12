import { connectToDB } from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await connectToDB();

  // Fetch all products
  return NextResponse.json(await Product.find().exec());
}
