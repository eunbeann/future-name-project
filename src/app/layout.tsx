import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./common/Header";
import TaskBar from "./common/TaskBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future Name Center",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <TaskBar />
      </body>
    </html>
  );
}
