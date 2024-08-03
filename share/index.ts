// FUNCTION FOR MANAGE LOCAL STORAGE
export const shareWithLocal = (
  option: "set" | "get" | "remove",
  key: string,
  value?: any
) => {
  if (option === "set") {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  if (option === "get") {
    const storeValue =
      typeof localStorage !== "undefined" ? localStorage.getItem(key) : null;
    return storeValue ? JSON.parse(storeValue) : null;
  }
  if (option === "remove") {
    return localStorage.removeItem(key);
  }
};

// FUNCTION FOR MANAGE COOKIE

export const shareWithCookies = (
  option: "set" | "get" | "remove",
  expireByMin: number,
  key: string,
  value?: any
) => {
  if (option === "set") {
    return (document.cookie = `${key}=${value}; path=/; expires=${new Date(
      Date.now() + expireByMin * 60 * 1000
    ).toUTCString()}`);
  }
  if (option === "remove") {
    return (document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);
  }
};
