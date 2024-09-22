// useFormattedTime.ts
import { useMemo } from "react";

// 시간 포맷팅 옵션 타입 정의
interface TimeOptions extends Intl.DateTimeFormatOptions {
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  hour12?: boolean;
}

/**
 * 주어진 ISO 날짜 문자열을 원하는 시간 형식으로 포맷팅하는 훅
 *
 * @param isoDateString - ISO 형식의 날짜 문자열 (예: "2024-09-22T05:17:36.162Z")
 * @param options - 시간 포맷팅 옵션
 * @returns 포맷팅된 시간 문자열 (예: "15:00" 또는 "3:00 PM")
 */
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
