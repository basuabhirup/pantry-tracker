import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PantryProvider } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantry Tracker App",
  description:
    "A pantry management application that allows users to keep track of pantry items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PantryProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </PantryProvider>
  );
}
