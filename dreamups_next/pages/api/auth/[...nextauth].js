import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT_SECRET} from "../../../config/config";

import {login, getAuthenticatedUser} from "../../../services/auth.service";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const response = await login({
                        password: credentials?.password ?? '',
                        email: credentials?.username ?? ''
                    });

                    if (response.data) {
                        return response.data;
                    } else {
                        return null
                    }
                } catch (e) {
                    const errorMessage = 'ddd';
                    throw new Error(errorMessage)
                }
            }
        })
    ],

    secret: JWT_SECRET,

    session: {

        strategy: 'jwt'

        // Seconds - How long until an idle session expires and is no longer valid.
        // maxAge: 30 * 24 * 60 * 60, // 30 days

    },

    jwt: {
        secret: JWT_SECRET,
    },


    pages: {
        signIn: '/',  // Displays signin buttons
        signOut: '/', // Displays form with sign out button
        error: '/', // Error code passed in query string as ?error=
        verifyRequest: '/', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },

    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     console.log(account)
        //     return true;
        // },
        // async redirect({ url, baseUrl }) { return baseUrl },
        async session({ session,user, token }) {
            const response = await getAuthenticatedUser(String(token?.accessToken));
            if(token && response?.data) {
                session.accessToken = token.accessToken;
                // @ts-ignore
                session.user = response?.data;
            }
            return session
        },
        async jwt({ token, user,account }) {
            if(user) {
                token.accessToken = user?.token;
                token.user = user?.user;
            }
            return token
        }
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {
        async linkAccount({user, account}){
            console.log()
        }
    },

    // Enable debug messages in the console if you are having problems
    debug: true,
})
