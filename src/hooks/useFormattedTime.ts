import { useMemo } from "react";

interface TimeOptions extends Intl.DateTimeFormatOptions {
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  hour12?: boolean;
}

const useFormattedTime = (
  isoDateString: string,
  options: TimeOptions = { hour: "2-digit", minute: "2-digit", hour12: true }
): string => {
  const formattedTime = useMemo(() => {
    if (!isoDateString) return "";

    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) return "Invalid Date";

    return date.toLocaleTimeString(undefined, options);
  }, [isoDateString, options]);

  return formattedTime;
};

export default useFormattedTime;
