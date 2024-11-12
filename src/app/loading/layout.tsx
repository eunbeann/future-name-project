export default function LoadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[100vw] h-[100vh]">{children}</div>;
}
