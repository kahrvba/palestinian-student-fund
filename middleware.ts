import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Paths that should be restricted when SITE_ENABLED is false
const RESTRICTED_PATHS = [
  '/apply',
  '/contact',

]

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the current path is restricted
  if (RESTRICTED_PATHS.some(restrictedPath => path.startsWith(restrictedPath))) {
    // Redirect to home page
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/apply/:path*', '/contact/:path*']
}
