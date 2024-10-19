import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, {params} : { params: { id: string } }) {

  const { searchParams } = new URL(req.url);
  
  const {id} = params
  const id2 = searchParams.get('id');
  const name = searchParams.get('name');
  
  return NextResponse.json({ response: "hello", id2, name, id });
}
