import { atom } from "recoil";

export const archiveNumber = atom<number>({
  key: "archiveNumber",
  default: 0,
});
