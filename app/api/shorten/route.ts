import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { randomBytes } from 'crypto';

function generateCode(length: number = 6): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const bytes = randomBytes(length);
  return Array.from(bytes)
    .map((byte) => chars[byte % chars.length])
    .join('');
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const code = generateCode(8);
    
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    const { error } = await supabase
      .from('short_urls')
      .insert([{ code, original_url: url, expires_at: expiresAt.toISOString() }]);

    if (error) {
      throw error;
    }

    return NextResponse.json({ code }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}