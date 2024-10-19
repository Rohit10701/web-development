import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest, res : NextResponse){
    // simulating logged in user
    const isLoggedIn  = req.cookies.get("token") || false
    const protectedPaths  = ["/private"]
    const currentPath = req.nextUrl.pathname
    
    console.log({currentPath})
    if (!isLoggedIn && protectedPaths.includes(currentPath)){
        return NextResponse.redirect(new URL("/login", req.url))
    }
    return  NextResponse.next()
    
}