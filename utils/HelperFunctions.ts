// DIGIT CONVERTER FUNCTION (BANGLA, ENGLISH)

export const digitConverter = (number: number, lang: string): string => {
  if (lang === "bn") {
    const englishDigits: string[] = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    const banglaDigits: string[] = [
      "০",
      "১",
      "২",
      "৩",
      "৪",
      "৫",
      "৬",
      "৭",
      "৮",
      "৯",
    ];

    const result: string[] = [];
    for (const digit of number.toString()) {
      if (englishDigits.includes(digit)) {
        const index: number = englishDigits.indexOf(digit);
        result.push(banglaDigits[index]);
      } else {
        result.push(digit);
      }
    }

    return result.join("");
  }
  return number.toString();
};
