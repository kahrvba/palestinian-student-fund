import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

 

  return NextResponse.next()
}

export const config = {
  matcher: ['/apply/:path*', '/contact/:path*']
}
