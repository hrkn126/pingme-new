import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// ✅ サーバー用環境変数を使う！
console.log('🧪 Stripe key:', process.env.STRIPE_SECRET_KEY);
console.log('🧪 Price ID:', process.env.STRIPE_PRICE_ID); // ← 修正！

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2022-11-15',
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID ?? '', // ← 修正！
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('🔥 Stripe error:', err.message);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
