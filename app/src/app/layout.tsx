import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { TIKTOK_PIXEL_ID } from "@/config";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e0e13",
};

export const metadata: Metadata = {
  title: "Nep Of Niet | De Ultieme Real vs AI Challenge",
  description:
    "Test je waarneming met onze Telegram-bot en verdien geld bij elke juiste keuze. De ultieme Real vs AI uitdaging.",
  keywords: ["AI", "Real vs AI", "Telegram", "verdien geld", "challenge"],
  openGraph: {
    title: "Nep Of Niet | De Ultieme Real vs AI Challenge",
    description: "Verdien geld door AI van echt te onderscheiden. Start nu op Telegram.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <head>
        {/* Preload icon font to prevent text flash */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0&display=block"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-on-surface">
        {children}

        {/* TikTok Pixel */}
        {TIKTOK_PIXEL_ID && TIKTOK_PIXEL_ID !== "ВАШТИКТОКПИКСЕЛЬ" && (
          <Script id="tiktok-pixel" strategy="afterInteractive">
            {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var i=d.createElement("script");i.type="text/javascript",i.async=!0,i.src=r+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(i,a)};ttq.load("${TIKTOK_PIXEL_ID}");ttq.page();}(window,document,"ttq");`}
          </Script>
        )}
      </body>
    </html>
  );
}
