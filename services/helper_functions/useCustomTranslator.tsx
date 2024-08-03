import { fallback } from "@/constants/common";

const useCustomTranslator = (lang: string, en: string, bn?: string) => {
  if (lang?.toLowerCase() === "en") {
    return en;
  } else if (lang?.toLowerCase() === "bn") {
    return bn || fallback.notFound;
  } else {
    return en || fallback.notFound;
  }
};

export default useCustomTranslator;
