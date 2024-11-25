import type { Metadata } from "next";
import { geistSans } from "@/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-geist-sans`}>
        {children}
      </body>
    </html>
  );
}
