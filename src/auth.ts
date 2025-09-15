import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./actions/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: (credentials) => {
        let user = null;

        const email = credentials.email as string;
        const password = credentials.password as string;

        // logic to verify if the user exists
        const userData = getUserFromDb(email, password);

        if (!userData) {
          return null;
        }

        user = userData;

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
