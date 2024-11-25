import type { Metadata } from "next";
import { geistSans } from "@/fonts";
import { LandingLayout } from "@/features/landing-layout";
import Providers from "@/configs/react-query/react-query-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Meta Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-geist-sans`}>
        <Providers>
          <LandingLayout>{children}</LandingLayout>
        </Providers>
      </body>
    </html>
  );
}
