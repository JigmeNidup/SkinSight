import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session }) {
      // const sessionUser = await User.findOne({
      //   email: session.user.email,
      // });
      // session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        // await connectToDB();
        //check if user existss
        const userExists = true; //await User.findOne({ email: profile.email });
        //if not, redirect to register page
        if (!userExists) {
          return "/Auth/Register";
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
