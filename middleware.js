import NextAuth from "next-auth";

import authConfig from "./auth.config";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {


    // const registeredUser = sessionStorage.getItem('registeredEmail')

    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const pathname = req.nextUrl.pathname
    const isApiAuthRoute = apiAuthPrefix.includes(nextUrl.pathname); //api/auth
    const isPublicRoute = publicRoutes.some(route => req.nextUrl.pathname.startsWith(route)); // / , /auth/password,all public aroutes //what to give access to
    // const isAuthRoute = authRoutes.includes(nextUrl.pathname); //auth/login, /auth/register
    const callbackUrl = pathname || "/"
    // Check if the user is not logged in, not on HomeRoute, not on PublicRoute, not on ApiAuthRoute, and not on AuthRoute
    const emailPage = nextUrl.pathname === "/auth/email-verification";

    if (nextUrl.pathname === "/") { return null }

    // if (!isLoggedIn && isPublicRoute) { return null }



    // if (isLoggedIn && isPublicRoute && nextUrl.pathname === "/register") {
    //     return NextResponse.redirect(new URL("/login", nextUrl)); //redirect to user accound latter
    // }



    // if (isLoggedIn && isPublicRoute && nextUrl.pathname === "/register") {
    //     return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, nextUrl)); //redirect to user accound latter
    // }



    // if (!isLoggedIn) {
    //     return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, nextUrl));
    // }




    // // if (isLoggedIn && emailPage && !req.auth?.user.isVerified) { return null }



    // // Check if the user is logged in, not verified, and not on the email verification page
    // if (isLoggedIn && !req.auth?.user.isVerified && isApiAuthRoute) {
    //     return NextResponse.redirect(new URL("/auth/email-verification", nextUrl));
    // }
    // // if (isLoggedIn && emailPage && req.auth?.user.isVerified) {
    // //     return NextResponse.redirect(new URL("/", nextUrl));

    // // }

    return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}



// import { withAuth } from "next-auth/middleware";



// export default withAuth({

//     callbacks: {

//         authorized: ({ req, token }) => {
//         }
//     }
// })


// export { default } from "next-auth/middleware"

// export const config = {
//     matcher: ['/dashboard'],
// }


// if (isApiAuthRoute) {
//     return NextResponse.redirect(new URL("/register", nextUrl))
// }

// Exclude unnecessary paths from redirection



// if (!isPublicRoute && !isAuthRoute && !isApiAuthRoute) {
//     // Redirect unauthenticated users to the login page
//     if (!isLoggedIn) {
//         return NextResponse.redirect(new URL("/login", nextUrl));
//     }

//     // Redirect authenticated users away from public and auth routes
//     if (isLoggedIn && !req?.auth?.isVerified) {
//         return NextResponse.redirect(new URL("/email-verification", nextUrl));
//     }
// }



// if (isAuthRoute) {
//     if (isLoggedIn) {
//         return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
//     }
//     return null;
// }

// if (!isLoggedIn && !isPublicRoute && !isApiAuthRoute) {

//     let callbackUrl = nextUrl.pathname;
//     if (nextUrl.search) {
//         callbackUrl += nextUrl.search;
//     }

//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);

//     return NextResponse.redirect(new URL(
//         `/login?callbackUrl=${encodedCallbackUrl}`,
//         nextUrl
//     ));
// }

// if (isLoggedIn && !req.auth.isVerified && !isPublicRoute) {
//     let callbackUrl = nextUrl.pathname;
//     if (nextUrl.search) {
//         callbackUrl += nextUrl.search;
//     }

//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);

//     return NextResponse.redirect(new URL(
//         `/emailverification?=${encodedCallbackUrl}`,
//         nextUrl
//     ));
// }