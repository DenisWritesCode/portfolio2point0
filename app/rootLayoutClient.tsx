"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/Footer";
import MobileNavBar from "@/components/ui/MobileNavBar";
import NavBar from "@/components/ui/NavBar";
import { Poppins } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <>
      {/* Google Analytics tag (gtag.js) - this is for ads added on 2024/10/18 
      
      <Script id="g-tag">
        {`window.dataLayer = window.dataLayer || [];`}
        {`function gtag(){dataLayer.push(arguments);}`}
        {`gtag('js', new Date());`}

        {`gtag('config', 'AW-394829124');`}
      </Script>
      */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div
          className={`${poppins.className} flex flex-col items-center justify-between antialiased min-h-screen`}
        >
          <header className="w-full sticky top-0 left-0 p-4 bg-background text-foreground border-b-2 border-foreground z-50">
            <NavBar onHamClick={onHamClick} />
            {mobileShow && <MobileNavBar onHamClick={onHamClick} />}
          </header>
          <div className="bg-background w-full" id="home">
            {children}
          </div>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
