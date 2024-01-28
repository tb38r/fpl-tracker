import { NextResponse } from 'next/server';
 
export function GET(request) {
  return NextResponse.json(
    {
      body: request.body,
      path: request.nextUrl.pathname,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}