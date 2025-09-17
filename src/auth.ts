import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb, User } from "./actions/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const userData = await getUserFromDb(email, password);

        if (!userData) {
          return null;
        }

        return userData as User;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as User).role;
        token.UID = (user as User).UID;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as string;
        session.user.UID = token.UID as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
