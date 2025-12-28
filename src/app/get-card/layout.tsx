import ClientRecoilRoot from "../common/ClientRecoilRoot";
import MainContainer from "../common/MainContainer";

export default function GetCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRecoilRoot>
      <div className="absolute inset-0 w-[2560px] h-[1333px] flex justify-center items-center bg-[#0a1628]">
        <MainContainer>
          <div>{children}</div>
        </MainContainer>
      </div>
    </ClientRecoilRoot>
  );
}
