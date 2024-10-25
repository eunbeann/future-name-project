import { AtomEffect } from "recoil";

export const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    if (typeof window === "undefined") {
      return;
    }

    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      try {
        setSelf(JSON.parse(savedValue) as T);
      } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error);
      }
    }
    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        try {
          localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
          console.error(`Error setting localStorage key "${key}":`, error);
        }
      }
    });
  };
