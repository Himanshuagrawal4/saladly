import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
    key_secret: process.env.RAZORPAY_SECRET_KEY || '',
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { amount, currency = 'INR', receipt, notes } = body;

        // Validate amount
        if (!amount || amount < 100) {
            return NextResponse.json(
                { success: false, message: 'Amount must be at least ₹1 (100 paise)' },
                { status: 400 }
            );
        }

        // Create Razorpay order
        const options = {
            amount: Math.round(amount), // Amount in paise (already passed as paise from frontend)
            currency,
            receipt: receipt || `receipt_${Date.now()}`,
            notes: notes || {},
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error('Razorpay Order Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to create order' },
            { status: 500 }
        );
    }
}
