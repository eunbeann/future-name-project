/**
 * 문자열을 유니코드 이스케이프 시퀀스로 변환하는 함수
 * @param str - 변환할 문자열
 * @returns 유니코드 이스케이프 시퀀스로 변환된 문자열
 */

export function convertToUnicode(str: string): string {
  return Array.from(str)
    .map((char) => {
      const code = char.charCodeAt(0).toString(16).toUpperCase();
      console.log("code", code);
      return `${code.padStart(4, "0")}`;
    })
    .join(" ");
}
