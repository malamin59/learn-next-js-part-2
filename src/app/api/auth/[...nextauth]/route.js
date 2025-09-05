import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { username, password } = credentials;
        // get users collection directly
        const usersCollection = await dbConnect("users-collection");
        const user = await usersCollection.findOne({ username });
        if (!user) return null;

        const isPasswordOk = password === user.password;
        return isPasswordOk ? user : null;
      },
    }),
  ],

  // Callback: {
  //   async session({ session, token, user }) {
  //     if (token) {
  //       session.user.username = token.username;
  //     }
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     if (user) {
  //       token.username = user.username;
  //       token.role = user.role;
  //     }
  //     return token;
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
