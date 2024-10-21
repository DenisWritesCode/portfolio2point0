import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Denis Mutunga | Portfolio",
    description: "Portfolio Website for Denis Mutunga Mutinda",
  };
  
  export default function ServerLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }