import HeaderLogo from "@/app/assets/icon/headerLogoWhite.png";
import exit from "@/app/assets/icon/pinkExit.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const MONTH = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const thisMonth = new Date().getMonth();
  const thisDate = new Date().getDate();
  const thisHour = new Date().getHours();
  const thisMinute = new Date().getMinutes();
  const thisDay = new Date().getDay();

  const hours12 = thisHour % 12 || 12;
  const meridiem = thisHour >= 12 ? "PM" : "AM";

  return (
    <div className="absolute top-0 flex justify-between w-[100vw] bg-[#000000] z-40 px-[29px] py-[12px] text-[#ffffff] xl:text-[25px]">
      <div className="flex gap-[20px] items-center">
        <Image src={HeaderLogo} alt="HeaderLogo" />
        <div>FUTURE NAMING CENTER</div>
      </div>
      <div className="flex items-center gap-[26px] ">
        <p>2050</p>
        <p>
          {DAY[thisDay]} {MONTH[thisMonth]} {thisDate}
        </p>
        <p>
          {hours12}:{thisMinute}
          {meridiem}
        </p>
        <Link href="/">
          <Image className="w-[6rem] xl:w-[10rem]" src={exit} alt="exit" />
        </Link>
      </div>
    </div>
  );
}
