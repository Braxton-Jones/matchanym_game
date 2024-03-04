import type { Metadata } from "next";
import {Montserrat , Cabin} from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  display: "swap",
  variable: '--montserrat'
});

const cabin = Cabin({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--cabin'
});


export const metadata: Metadata = {
  title: "Matchanym",
  description: `
  Matchanym is a word game that challenges you to match words with their synonyms. 
  It's a fun way to expand your vocabulary and challenge your brain. 
  It's currently in development, but you can check out the progress here @brxjonesdev`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cabin.variable} `}>
      <body>{children}</body>
    </html>
  );
}
