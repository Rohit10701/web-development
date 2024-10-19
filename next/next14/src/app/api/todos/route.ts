import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  
  return NextResponse.json({ message: "hello", id, name });
}
