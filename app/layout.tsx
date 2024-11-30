import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const LufgaMedium = localFont({
  src: "./fonts/LufgaMedium.woff",
  variable: "--font-lufga-medium",
  weight: "100 900",
});
const LufgaRegular = localFont({
  src: "./fonts/LufgaRegular.woff",
  variable: "--font-lufga-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FinSet",
  description: "Web App for finance management",
  icons: {
    icon: "./favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LufgaMedium.variable} ${LufgaRegular.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
