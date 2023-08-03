import { connectToDB, initMongoose } from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request, response) {
  await connectToDB();
  return NextResponse.json(await Product.find().exec());
}
