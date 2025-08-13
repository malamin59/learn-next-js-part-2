// How dose Work Middleware in Next.js ??

import { NextResponse } from "next/server"

 // This function can be marked `async` if using `await` inside
export function middleware(request) { 
    // const cookie = request.cookies.get('nextjs-token');
    // console.log(cookie.value)
    const dummyUserData = {
        role: 'admin',
        email:"test@gmail.com"
    }
    let isServices = request.nextUrl.pathname.includes('/services')
    let isAdmin = dummyUserData.role == 'admin'
   if (isServices && !isAdmin) {
  return NextResponse.redirect(new URL('/login', request.url))
   }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/about/:path*', '/services/:path*']
// }