import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nebula — Agencia de Desarrollo Web",
  description: "Creamos sitios web modernos, rápidos y profesionales para tu negocio. Next.js, Tailwind, automatización.",
  metadataBase: new URL("https://nebula.agencia"),
  openGraph: {
    title: "Nebula — Agencia de Desarrollo Web",
    description: "Creamos sitios web modernos, rápidos y profesionales para tu negocio.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
