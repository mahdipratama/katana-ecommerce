import { connectToDB } from '@/lib/mongoose';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await connectToDB();

    const product = await Product.findById(params.id);

    if (!product) return new Response('Product not found', { status: 404 });

    return new Response(JSON.stringify(product), {
      status: 200,
    });
  } catch (err) {
    return NextResponse.error('An error occured.', { status: 500 });
  }
}
