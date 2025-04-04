import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const handler = async (req, res) => {
  try {
    return await NextAuth({
      providers: [
        EmailProvider({
          server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: Number(process.env.EMAIL_SERVER_PORT),
            auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD,
            },
          },
          from: process.env.EMAIL_FROM,
        }),
      ],
      secret: process.env.NEXTAUTH_SECRET,
    })(req, res);
  } catch (error) {
    console.error("❌ Ошибка в NextAuth:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export { handler as GET, handler as POST };
