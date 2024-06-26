/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";

const Footer = dynamic(() => import("@/app/components/Footer"), { ssr: true });
const Nav = dynamic(() => import("@/app/components/NavBar"), { ssr: true });

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R E V U S | Software Engineer",
  description:
    "Portfolio of Sarath Teja Revu, a skilled software engineer specializing in Java, Spring Boot, Express, Angular, and React.",
  keywords:
    "Sarath Teja Revu, Software Engineer, Java Developer, Spring Boot, Angular, React, Portfolio, Revus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script>document.documentElement.classList.add('js')</script>
      </Head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <Script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></Script>
      </body>
    </html>
  );
}
