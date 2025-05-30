import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio/sb",
  description:
    "Portfolio of Shudhanshu, a passionate full-stack web developer specializing in React, Next.js, and modern web technologies.",
  keywords: "web developer, full-stack, React, Next.js, JavaScript, TypeScript, portfolio",
  authors: [{ name: "Shudhanshu" }],
  openGraph: {
    title: "Shudhanshu - Full-Stack Web Developer",
    description: "Building beautiful and functional web experiences with modern technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
