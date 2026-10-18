import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Figtree, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Adrián Iraegui",
  description:
    "Ingeniería de datos e IA para decisiones de producto y de operación.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${figtree.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-canvas font-body text-body text-ink">
        <div className="mx-auto w-full max-w-page px-gutter">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
