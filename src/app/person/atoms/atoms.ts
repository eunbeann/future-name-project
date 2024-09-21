import { atom } from "recoil";

export const stepNumbers = atom<number>({
  key: "stepNumbers",
  default: 1,
});
