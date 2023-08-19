import { connectToDB } from '@/lib/mongoose';
import Order from '@/models/Order';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';

export async function POST(request) {
  await connectToDB();

  const body = await request.json();
  const origin = request.headers.get('origin') || 'http://localhost:3000';

  const { name, email, city, postal, address, country, products, total } = body;
  const productsIds = products.split(',');
  const uniqueIds = [...new Set(productsIds)];
  const productsInfo = await Product.find({ _id: { $in: uniqueIds } }).exec();

  let line_items = [];

  uniqueIds.forEach(productId => {
    const product = productsInfo.find(p => p._id.toString() === productId);
    const quantity = productsIds.filter(id => id === productId).length;

    line_items.push({
      quantity,
      price_data: {
        currency: 'USD',
        product_data: { name: product.name },
        unit_amount: product.price * 100,
      },
    });
  });

  const order = await Order.create({
    products: line_items,
    name,
    email,
    city,
    postal,
    address,
    country,
    paid: 0,
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email: email,
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: { orderId: order._id.toString() },
    });

    return NextResponse.json(session);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
