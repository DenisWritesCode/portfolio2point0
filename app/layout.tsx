import type { Metadata } from "next";
import Script from "next/script";
import ServerMetadataLayout from "./serverMetaDataLayout";

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
    <html>
      <head>
        {/* Cookiebot Script */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="e38300eb-0921-4e2c-b24a-810d7e84e0dd"
          type="text/javascript"
          async
          strategy="beforeInteractive"
        />

        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7GHLVQJV1F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7GHLVQJV1F');
            gtag('config', 'AW-394829124');
          `}
        </Script>
      </head>
      <body>
        {/* <Script id="tawk-to" strategy="afterInteractive">
          {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/672300624304e3196adaf906/1ibgbj10g";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
        `}
        </Script> */}
        <ServerMetadataLayout>{children}</ServerMetadataLayout>
      </body>
    </html>
  );
}
