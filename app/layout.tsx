import type { Metadata } from "next";
import MainHeader from "../components/main-header/main-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Louis Marais's portfolio",
  description: "Louis Marais's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
