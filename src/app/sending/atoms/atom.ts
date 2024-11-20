import { atom } from "recoil";

export const sendingNumber = atom<number>({
  key: "sendingNumber",
  default: 0,
});
