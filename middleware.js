import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let cookie = request.cookies.get('nextjs')
    console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
    const allCookies = request.cookies.getAll()
    console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
   
    request.cookies.has('nextjs') // => true
    request.cookies.delete('nextjs')
    request.cookies.has('nextjs')
  return NextResponse.redirect(new URL('/blog', request.url))
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}