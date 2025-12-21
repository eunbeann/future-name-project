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

  const formatTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const meridiem = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;

    return {
      day: DAY[now.getDay()],
      month: MONTH[now.getMonth()],
      date: now.getDate(),
      hours: hours12,
      minutes: String(minutes).padStart(2, "0"),
      meridiem,
    };
  };

  const { day, month, date, hours, minutes, meridiem } = formatTime();

  return (
    <div className="absolute top-0 flex justify-between w-[2560px] bg-[#000000] z-40 px-[29px] py-[12px] text-[#ffffff] text-[25px]">
      <div className="flex gap-[20px] items-center">
        <Image src={HeaderLogo} alt="HeaderLogo" />
        <div>FUTURE NAMING CENTER</div>
      </div>
      <div className="flex items-center gap-[26px] ">
        <p>2050</p>
        <p>
          {day} {month} {date}
        </p>
        <p>
          {hours}:{minutes} {meridiem}
        </p>
        <Link href="/">
          <Image className="w-[6rem] xl:w-[10rem]" src={exit} alt="exit" />
        </Link>
      </div>
    </div>
  );
}
