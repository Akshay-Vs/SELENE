import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SELENE: Aethelpheia Lampadophora",
  description: "Aethelpheia Lampadophora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{"SELENE: Aethelpheia Lampadophora"}</title>
        <meta name="description" content={metadata.description || ""} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.25"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
