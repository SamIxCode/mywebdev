import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/nav";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rybar.ITsolutions",
  description: "Posunťe svoje Online podnikanie na novú úroveň.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={inter.className}>
        <Providers>
          <Nav />

          {children}
        </Providers>
      </body>


    </html>
  );
}
