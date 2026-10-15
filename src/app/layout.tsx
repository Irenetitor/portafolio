import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
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
  title: "Irene | Full Stack Developer",
  description:
    "Portfolio of Irene, full stack developer: web apps with Python, Django, Flask, FastAPI, PostgreSQL and MongoDB, now learning React, Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
