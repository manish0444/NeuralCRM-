import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

// This is a mock user database. In a real application, you would use a proper database.
const users = [
  {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    password: bcrypt.hashSync("password123", 10),
  },
]

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) {
          return null
        }
        const user = users.find(user => user.email === credentials.login || user.username === credentials.login)
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, name: user.name, email: user.email, username: user.username }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.username = token.username as string
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }

