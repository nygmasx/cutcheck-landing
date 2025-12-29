import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validation basique
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Récupérer l'origin du client
    const origin = request.headers.get('origin') || request.headers.get('referer') || '';

    // Envoi à Waitlister
    const response = await fetch(
      `https://waitlister.me/s/${process.env.WAITLIST_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': origin,
          'Referer': origin
        },
        body: new URLSearchParams({ email })
      }
    );

    if (!response.ok) {
      console.error('Waitlister API error:', await response.text());
      return NextResponse.json(
        { success: false, message: 'Failed to join waitlist' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
