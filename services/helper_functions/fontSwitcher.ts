export const fontSwitcher = (lang: string = "en") => {
  if (lang?.toLowerCase() === "bn") {
    return "font-anek";
  } else {
    return "font-inter";
  }
};
