export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[100vh] w-[100vw] bg-[#000]">{children}</div>;
}
