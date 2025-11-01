import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ChatBotClient from "@/components/ChatBotClient"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amtronics Power System - PCB Assembly & EMS Manufacturing",
  description:
    "Professional PCB assembly, prototyping, box build, component sourcing, testing, and after-sales support. Trusted EMS partner since 1999.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <ChatBotClient />
        <Analytics />
      </body>
    </html>
  )
}
