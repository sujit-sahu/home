import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prof Sujit Sahu - Statistics and Data Science",
  icons: {
    icon: "/favicon.png"
  },
  description: "Professor of Statistics at the University of Southampton. Author of books on Statistics, Probability, and R Programming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://badge.dimensions.ai/badge.js" />
        <Script
          src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"
          strategy="afterInteractive"
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
