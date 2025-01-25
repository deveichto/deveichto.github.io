import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";

const outfits = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Eichto. | Portfolio | Mark Jeff Abasula | Developer",
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
        {children}
      </body>
    </html>
  );
}
