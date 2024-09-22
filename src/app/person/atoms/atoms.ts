import { localStorageEffect } from "@/state/effects/localStorageEffect";
import { atom } from "recoil";

export const stepNumbers = atom<number>({
  key: "stepNumbers",
  default: 1,
});

interface userNameType {
  lastName: string;
  firstName: string;
}

export interface userNamesType {
  id: number;
  futureName: string;
  date: Date;
}

export const userName = atom<userNameType>({
  key: "userName",
  default: {
    lastName: "",
    firstName: "",
  },
});

export const userNames = atom<userNamesType[]>({
  key: "userNames",
  default: [],
  effects_UNSTABLE: [localStorageEffect<userNamesType[]>("userNames")],
});
