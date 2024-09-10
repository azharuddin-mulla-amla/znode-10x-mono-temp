import NextAuth from "next-auth";
import {authLoginOptions} from "@znode/utils/server"

const handler = NextAuth(authLoginOptions);

export { handler as GET, handler as POST };
