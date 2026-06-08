import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request, 
  { params }: { params: Promise<{ code: string }> }
) {
  // Await the params before destructuring
  const { code } = await params;

  const { data, error } = await supabase
    .from('short_urls') 
    .select('original_url') 
    .eq('code', code) 
    .single();

  if (data?.original_url) {
    return NextResponse.redirect(data.original_url);
  }

  return NextResponse.redirect(new URL('/404', request.url));
}