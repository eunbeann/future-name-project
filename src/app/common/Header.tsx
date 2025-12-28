import HeaderLogo from "@/app/assets/icon/headerLogoWhite.png";
import exit from "@/app/assets/icon/pinkExit.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const month = now.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const date = now.getDate();
  const hours = now.getHours() % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const meridiem = now.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between bg-[#000000] z-50 px-[16px] py-[8px] text-[#ffffff] text-[14px]">
      <div className="flex gap-[12px] items-center">
        <Image src={HeaderLogo} alt="HeaderLogo" className="h-[20px] w-auto" />
        <div>FUTURE NAMING CENTER</div>
      </div>
      <div className="flex items-center gap-[16px]">
        <p>2050</p>
        <p>
          {day} {month} {date}
        </p>
        <p>
          {hours}:{minutes} {meridiem}
        </p>
        <Link href="/">
          <Image className="w-[80px]" src={exit} alt="exit" />
        </Link>
      </div>
    </div>
  );
}
