import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import {Ubuntu} from 'next/font/google'



export const metadata: Metadata = {
  title: "LoopStudio",
  description: "Next.js and TailwindCSS project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"/>

    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>{children}</body>
    </html>
  );
}

