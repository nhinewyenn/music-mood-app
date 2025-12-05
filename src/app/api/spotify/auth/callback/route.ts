/** @format */

import { clientID, clientSecret, redirectUrl } from '@/constant';
import { NextRequest, NextResponse } from 'next/server';

/** @format */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const error = searchParams.get('error');
  const code = searchParams.get('code');
  if (error) NextResponse.redirect('/?error=access_denied');

  // POST REQUEST to spotify
  try {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: redirectUrl as string,
    });

    // AUTH HEADER
    const authHeader = Buffer.from(`${clientID}:${clientSecret}`).toString(
      'base64'
    );

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${authHeader}`,
      },
      body: body.toString(),
    });

    if (!res.ok) throw new Error('Failed to get token from spotify');

    const data = await res.json();
    const redirectDefault = new URL('/dashboard', req.url);
    redirectDefault.searchParams.set('access_token', data.access_token);
    redirectDefault.searchParams.set('refresh_token', data.refresh_token);

    return NextResponse.redirect(redirectDefault.toString());
  } catch (err) {
    console.error('Error during token exchange:', err);
  }
}
