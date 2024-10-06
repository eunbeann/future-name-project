import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import Header from "./common/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const dunggeunmo = localfont({
  src: [{ path: "../../public/fonts/DungGeunMo.ttf", weight: "500" }],
  variable: "--font-dunggeunmo",
});

const pixardisplay = localfont({
  src: [
    { path: "../../public/fonts/PixterDisplay.ttf", weight: "500" },
    { path: "../../public/fonts/PixterDisplayBold.ttf", weight: "900" },
  ],
  variable: "--font-pixardisplay",
});

export const metadata: Metadata = {
  title: "Future Name Center",
  description: "Future naming center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* <body className={inter.className}> */}
      <body
        className={`${inter.className} ${pixardisplay.variable} ${dunggeunmo.variable} `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
