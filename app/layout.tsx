import type { Metadata } from "next";
import { Montserrat, Cabin } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--cabin",
});

export const metadata: Metadata = {
  title: "Matchanym",
  description: `
  Matchanym is a word game that challenges you to match words with their synonyms. 
  It's a fun way to expand your vocabulary and challenge your brain. 
  It's currently in development, but you can check out the progress here @brxjonesdev`,
};

{
  /*
  Current Tasks:
  - Implement game start and end logic
  - Update UI for tutorial and toasts
  - Implement leaderboard
  - Implement user authentication
  - Implement daily word fetching
  - Implement users can play three words a day and that is saved even on page refresh
*/
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cabin.variable}`}>
      <body className="bg-nymBackground">
        <main className="flex items-center flex-col font-montserrat p-6  h-screen gap-10 ">
          <header>
            <Link href="/">
              <h4 className="text-nymText font-black text-xl hover:text-nymPurple1 transition-all ease-in-out h-full">
                Matchanym 🍵
              </h4>
            </Link>
          </header>

          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
