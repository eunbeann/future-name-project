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
    <div className="flex justify-between w-[100vw] bg-black z-50 px-[29px] py-[12px] text-[#ffffff]">
      <div>FUTURE NAMING CENTER</div>
      <div className="flex gap-[26px]">
        <p>2100</p>
        <p>
          {DAY[thisDay]} {MONTH[thisMonth]} {thisDate}
        </p>
        <p>
          {hours12}:{thisMinute}
          {meridiem}
        </p>
      </div>
    </div>
  );
}
