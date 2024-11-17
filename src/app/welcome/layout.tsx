"use client";

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[100vw] h-[100vh] bg-[#000000]">{children}</div>;
}
