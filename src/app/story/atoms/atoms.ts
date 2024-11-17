import { atom } from "recoil";

export const storyNumbers = atom<number>({
  key: "storyNumbers",
  default: 1,
});
