import { login, loginWithGoogle } from "@/app/lib/firebase/services";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        // fullname: { label: 'Fullname', type: 'text' },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
          // fullname: string;
        };

        /* const user: any = {
          id: 1,
          name: "Renz",
          email: "renzcoding@gmail.com",
          role: "admin",
        };
        if (email === "renzcoding@gmail.com" && password === "12345678") {
          return user;
        } else {
          return null;
        } */

        const user: any = await login({ email, password });
        console.log(user);
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user?.email;
        token.fullname = user?.fullname;
        token.username = user?.username;
        token.role = user?.role;
      }

      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          type: "google",
          role: "member",
        };
        await loginWithGoogle(
          data,
          (result: { status: boolean; message: string; data: any }) => {
            if (result.status) {
              token.email = result.data.email;
              token.fullname = result.data.fullname;
              token.role = result.data.role;
            }
          }
        );
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("username" in token) {
        session.user.username = token.username;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
