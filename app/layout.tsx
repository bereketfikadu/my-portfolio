import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bereket Fikadu - Software Engineer & AI/ML Enthusiast",
  description:
    "Personal portfolio of Bereket Fikadu, a passionate software engineer specializing in full-stack development and artificial intelligence.",
  keywords: "software engineer, full-stack developer, AI, machine learning, React, Node.js, JavaScript, portfolio",
  authors: [{ name: "Bereket Fikadu" }],
  openGraph: {
    title: "Bereket Fikadu - Software Engineer",
    description: "Personal portfolio showcasing projects and skills in software engineering and AI/ML",
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
