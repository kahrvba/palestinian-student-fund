import type React from "react"
import { Inter, Poppins, Amiri, Playfair_Display } from "next/font/google"
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

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
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
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon-precomposed.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${amiri.variable} ${playfair.variable} font-playfair`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
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
