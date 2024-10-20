import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
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

export const metadata: Metadata = {
  title: "Denis Mutunga | Portfolio",
  description: "Portfolio Website for Denis Mutunga Mutinda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col items-center justify-between ">
          <header className="w-full sticky top-0 left-0 p-8 bg-foreground">
            <NavBar />
          </header>
          <div className="p-4 bg-background min-h-screen w-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
