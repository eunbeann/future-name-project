import ClientRecoilRoot from "../common/ClientRecoilRoot";
import MainContainer from "../common/MainContainer";

export default function GetCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRecoilRoot>
      <div className="relative min-h-screen flex justify-center items-center bg-[#000000]">
        <MainContainer>
          <div>{children}</div>
        </MainContainer>
      </div>
    </ClientRecoilRoot>
  );
}
