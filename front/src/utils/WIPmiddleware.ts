// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(request: NextRequest) {
//     const currentUserCookie = request.cookies.get('user')

//     if (!currentUserCookie) {
//         return NextResponse.redirect(new URL('/auth/login', request.url))
//     }
//     return NextResponse.next()
// }

// export const config = {
//     matcher: "/store/:path"
// }