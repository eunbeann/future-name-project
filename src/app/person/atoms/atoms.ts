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

export const userName = atom<userNameType>({
  key: "userName",
  default: {
    lastName: "",
    firstName: "",
  },
  effects_UNSTABLE: [localStorageEffect<userNameType>("userName")],
});
