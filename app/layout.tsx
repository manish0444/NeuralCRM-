import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import SessionProvider from "@/components/SessionProvider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeuralCRM - AI-Powered Customer Relationship Management",
  description: "Revolutionize your customer relationships with AI-driven insights and predictions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}