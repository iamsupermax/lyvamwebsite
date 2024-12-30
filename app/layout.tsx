import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ClimateCrisis = localFont({
  src : "./fonts/ClimateCrisis-2050.woff2",
  variable: "--font-climate-crisis",
  weight: "436 70",

export const metadata: Metadata = {
  title: "LYVAM Studio",
  description: "new way to educate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ClimateCrisis.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
