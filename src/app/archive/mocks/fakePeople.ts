import person1 from "@/app/assets/people/person1.png";
import person10 from "@/app/assets/people/person10.png";
import person11 from "@/app/assets/people/person11.png";
import person12 from "@/app/assets/people/person12.png";
import person13 from "@/app/assets/people/person13.png";
import person14 from "@/app/assets/people/person14.png";
import person15 from "@/app/assets/people/person15.png";
import person16 from "@/app/assets/people/person16.png";
import person17 from "@/app/assets/people/person17.png";
import person18 from "@/app/assets/people/person18.png";
import person2 from "@/app/assets/people/person2.png";
import person3 from "@/app/assets/people/person3.png";
import person4 from "@/app/assets/people/person4.png";
import person5 from "@/app/assets/people/person5.png";
import person6 from "@/app/assets/people/person6.png";
import person7 from "@/app/assets/people/person7.png";
import person8 from "@/app/assets/people/person8.png";
import person9 from "@/app/assets/people/person9.png";

import { StaticImageData } from "next/image"; // Next.js의 이미지 타입

type FakePerson = {
  name: string;
  intelligence: number;
  number: number;
  date: string;
  futureName: string;
  img: StaticImageData;
};

export const fakePeople: FakePerson[] = [
  {
    name: "김영수",
    intelligence: 3,
    number: 1,
    date: "2050. 12. 04",
    futureName: "AE40 C601 C218",
    img: person1,
  },
  {
    name: "박민준",
    intelligence: 3,
    number: 2,
    date: "2050. 12. 04",
    futureName: "BC15 BBFC C900",
    img: person2,
  },
  {
    name: "김지영",
    intelligence: 4,
    number: 3,
    date: "2050. 12. 04",
    futureName: "AE40 C9C0 C601",
    img: person3,
  },
  {
    name: "이미숙",
    intelligence: 4,
    number: 4,
    date: "2050. 12. 04",
    futureName: "C774 BBF8 C219",
    img: person4,
  },
  {
    name: "김지호",
    intelligence: 4,
    number: 5,
    date: "2050. 12. 04",
    futureName: "AE40 C9C0 D638",
    img: person5,
  },
  {
    name: "이지은",
    intelligence: 4,
    number: 6,
    date: "2050. 12. 04",
    futureName: "RE40 C9C0 D61C",
    img: person6,
  },
  {
    name: "배영희",
    intelligence: 4,
    number: 7,
    date: "2050. 12. 04",
    futureName: "C815 BBFC 0020",
    img: person7,
  },
  {
    name: "김재호",
    intelligence: 1,
    number: 8,
    date: "2050. 12. 04",
    futureName: "ACBD D76C 0020",
    img: person8,
  },
  {
    name: "박지훈",
    intelligence: 4,
    number: 9,
    date: "2050. 12. 04",
    futureName: "C720 D604 C815",
    img: person9,
  },
  {
    name: "김영철",
    intelligence: 4,
    number: 10,
    date: "2050. 12. 04",
    futureName: "C815 BC15 C9C0",
    img: person10,
  },
  {
    name: "이은정",
    intelligence: 4,
    number: 11,
    date: "2050. 12. 04",
    futureName: "0020 C720 D604",
    img: person11,
  },
  {
    name: "이유진",
    intelligence: 2,
    number: 12,
    date: "2050. 12. 04",
    futureName: "B435 A124 O123",
    img: person12,
  },
  {
    name: "이은경",
    intelligence: 4,
    number: 13,
    date: "2050. 12. 04",
    futureName: "C720 D604 C815",
    img: person13,
  },
  {
    name: "김재영",
    intelligence: 5,
    number: 14,
    date: "2050. 12. 04",
    futureName: "F604 C815 BC15",
    img: person14,
  },
  {
    name: "정순옥",
    intelligence: 4,
    number: 15,
    date: "2050. 12. 04",
    futureName: "B120 O604 C815",
    img: person15,
  },
  {
    name: "김정희",
    intelligence: 2,
    number: 16,
    date: "2050. 12. 04",
    futureName: "C720 D604 C815",
    img: person16,
  },
  {
    name: "이진호",
    intelligence: 4,
    number: 17,
    date: "2050. 12. 04",
    futureName: "0020 C720 D604",
    img: person17,
  },
  {
    name: "이혜진",
    intelligence: 2,
    number: 18,
    date: "2050. 12. 04",
    futureName: "B435 A124 O123",
    img: person18,
  },
];
