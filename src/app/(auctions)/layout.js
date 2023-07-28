import { Montserrat } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
const montserrat = Montserrat({ subsets: ["latin"] });

import Header from "@/components/Header";

const APP_NAME = "Next13 - PWA";
const APP_DESCRIPTION = "Next13 with PWA";

export const metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "renovatt" },
    { name: "renovatt", url: "https://www.linkedin.com/in/renovatt/" },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",

  openGraph: {
    type: "website",
    url: "https://next13-with-pwa-renovatt.vercel.app",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: "https://next13-with-pwa-renovatt.vercel.app/next-pwa.png",
      },
    ],
  },

  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/favicon.ico" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
