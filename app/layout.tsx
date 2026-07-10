import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PreviewPasswordGate } from "@/components/PreviewPasswordGate";

export const metadata: Metadata = {
  title: {
    default: "SAISAICOOMI JAPAN",
    template: "%s | SAISAICOOMI JAPAN",
  },
  description:
    "SAISAICOOMI JAPAN 株式会社は、素材や製法、生産者の想いにこだわった食品をご紹介する食品輸入・販売会社です。",
  manifest: "/icon/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon/favicon.ico" },
      { url: "/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <PreviewPasswordGate password={process.env.NEXT_PUBLIC_PREVIEW_PASSWORD}>
          <div className="page-shell">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PreviewPasswordGate>
      </body>
    </html>
  );
}
