import Cors from 'micro-cors';
import { connectToDB } from '@/lib/mongoose';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Order from '@/models/Order';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

export async function POST(request) {
  await connectToDB();

  const signingSecret = process.env.STRIPE_WEBHOOK_SECRET;

  const payload = await request.text();

  const signature = headers().get('stripe-signature');

  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    signingSecret
  );

  if (event?.type === 'checkout.session.completed') {
    const metadata = event.data?.object?.metadata;
    const paymentStatus = event.data?.object?.payment_status;

    if (metadata?.orderId && paymentStatus === 'paid') {
      await Order.findByIdAndUpdate(metadata.orderId, { paid: true });
    }
  }

  return NextResponse.json('ok');
}
