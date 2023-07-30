import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hospitality job listing website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${inter.className} container mx-auto relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
