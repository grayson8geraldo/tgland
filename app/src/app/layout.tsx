import type { Metadata, Viewport } from "next";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
