import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";
import Script from "next/script";

const outfits = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio | Mark Jeff Abasula | Developer",
  description: "Software Engineer that based in The Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfits.className} ${ovo.className} antialiased overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
      {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VECH9YGD5T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VECH9YGD5T');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
