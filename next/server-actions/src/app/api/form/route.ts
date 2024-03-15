import { mydb } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
    const res = mydb
    return NextResponse.json({res})
}

export async function POST(request : NextRequest) {
    const requestBody = await request.json();
    mydb.push(requestBody);      
    return Response.json({status : 200})
  }