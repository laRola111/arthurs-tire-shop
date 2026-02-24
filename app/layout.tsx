import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Arthur's Tire Shop | Premium Tire Services",
  description:
    "Your trusted partner for tires and automotive services. We offer top-quality brands and professional installations.",
  openGraph: {
    title: "Arthur's Tire Shop | Premium Tire Services",
    description:
      "Your trusted partner for tires and automotive services. We offer top-quality brands and professional installations.",
    url: "https://arthurstire.com", // Aquí asumo arthurstire.com, el usuario puede cambiarlo luego // TODO: change url
    siteName: "Arthur's Tire Shop",
    images: [
      {
        url: "/logo_arthurs_para_negro.png", // Usando el logo oscuro como fallback de preview
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur's Tire Shop | Premium Tire Services",
    description: "Your trusted partner for tires and automotive services.",
    images: ["/logo_arthurs_para_negro.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={`${workSans.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
