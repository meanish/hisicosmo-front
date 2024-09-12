import CredentialsProvider from "next-auth/providers/credentials";



export default {

    // https://next-auth.js.org/configuration/providers
    providers: [

        CredentialsProvider({
            name: 'credentials',

            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter you email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {


                console.log("credentials in the logi account", credentials)


                // const res = await fetch(`${process.env.HiSi_Server}/auth/login`, {
                const res = await fetch(`${process.env.HiSi_Server}/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                });

                const response = await res.json();
                console.log("Respomnse of login", response)

                if (!response.success) {
                    return null
                }


                else {
                    return {
                        id: response.data.id,
                        user_id: response.data.id,
                        name: response.data.name,
                        token: response.data.accessToken,
                        // remember_me: credentials.remember_me,
                        email: response.data.email,
                        // interest: response.data.interest,
                        role: response.data.role || "user"
                    };
                }


            }
        })
    ],
    // pages: {
    //     signIn: "",
    //     error: "/auth/error",
    //     signOut: '/auth/login'
    // },

    //basically for providers // true emailVerified for provider
    events: {
    },

    callbacks: {
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },

        async session({ session, token }) {

            console.log("Usrs and tokemn", session, token)


            if (token.sub && session.user) {
                session.user.token = token.id_token || token.token;
                session.user.role = token.role;
                session.userr.email = token.email;
                session.user.isVerified = true; // Make sure to use the correct property name from the token
                session.user.user_id = token.id
   
            }
            return session;
        },

        async jwt({ token, account, user }) {
            console.log("Token uin the jwt ", token, user)
            token = { ...token, ...user };
            return token;
        },
    },



    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt",
        maxAge: 50 * 24 * 60 * 60
    },


}

/* http://localhost:3000/api/auth/callback/google?code=4/0ATx3LY6oRimQM-DkDRW8PmlEwbV--daw7Unt1AHyAALjixU7w8KVO_5vnpWtB-1SgUjEww&scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&prompt=consent */