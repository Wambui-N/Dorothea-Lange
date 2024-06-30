import type { Metadata } from "next";
import { Playfair_Display_SC } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const playfairDisplaySC = Playfair_Display_SC({ subsets: ["latin"], weight: ['400']});
const roboto = Roboto({subsets: ["latin"], weight: ['400']});

export const metadata: Metadata = {
  title: "Dorothea Lange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
