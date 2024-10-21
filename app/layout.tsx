"use client";

import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import MobileNavBar from "@/components/ui/MobileNavBar";
import ServerLayout from "./serverLayout";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileShow, setmobileShow] = useState(false);

  const onHamClick = () => {
    if (!mobileShow) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setmobileShow(!mobileShow);
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col items-center justify-between ">
            <header className="w-full sticky top-0 left-0 p-4 bg-background text-foreground border-b-2 border-foreground z-50">
              <NavBar onHamClick={onHamClick} />
              {mobileShow && <MobileNavBar onHamClick={onHamClick} />}
            </header>
            <div className="p-4 bg-background min-h-screen w-full">
              <ServerLayout>{children}</ServerLayout>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
