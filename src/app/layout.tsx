import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvestorPersona — Discover Your Investing Personality | Mutual Fund Dost",
  description:
    "Take our fun 2-minute quiz to discover your investor persona. Are you a Trailblazer, Wise Owl, or Zen Investor? Get personalized investment insights.",
  keywords: [
    "investor persona",
    "investing personality quiz",
    "investment style",
    "mutual fund",
    "financial planning",
    "investor type",
  ],
  openGraph: {
    title: "InvestorPersona — What Kind of Investor Are You?",
    description:
      "Take this fun 2-minute quiz to discover your investing personality and get personalized insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
