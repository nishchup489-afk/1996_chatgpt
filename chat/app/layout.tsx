import type { Metadata } from "next";
import { Geist, Geist_Mono, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const luckiest = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest",
});

export const metadata: Metadata = {
  title: "Retro ChatGPT",
  description: "Retro 90s style ChatGPT UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${luckiest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}