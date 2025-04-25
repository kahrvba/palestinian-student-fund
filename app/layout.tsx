import type React from "react"
import { Inter, Poppins, Amiri } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})
const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
})

const SITE_ENABLED = false;

export const metadata: Metadata = {
  title: {
    default: "Palestinian Student Support Fund",
    template: "%s | Palestinian Student Support Fund",
  },
  description:
    "Providing scholarships, university admissions, and academic support for Palestinian students across the world.",
  keywords: ["scholarships", "education", "palestinian students", "academic support", "university admissions"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${amiri.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
