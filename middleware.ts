import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// getLocale FUNCTION
function getLocale(request: NextRequest): string | undefined {
  // NEGOTIATOR EXPECTS PLAIN OBJECT SO WE NEED TO TRANSFORM HEADERS
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore LOCALES ARE READONLY
  const locales: string[] = i18n.locales;

  // USE NEGOTIATOR AND INTL-LOCALEMATCHER TO GET BEST LOCALE
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export async function middleware(request: NextRequest) {
  // PATHS
  const pathname = request.nextUrl.pathname;
  // CURRENT PATH
  const currentLocale =
    pathname?.split("/").length > 0 && pathname?.split("/")[1];
  // RETRIEVE THE ACCESS TOKEN FROM THE COOKIE
  let access_token = request.cookies.get("ahpa_access_token");
  let ahpa_employee_ref = request.cookies.get("ahpa_employee_ref");

  //----------------------------------------------------
  // INTERNATIONALIZATION CODES
  //----------------------------------------------------
  // CHECK IF THERE IS ANY SUPPORTED LOCALE IN THE PATHNAME
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  // REDIRECT IF THERE IN NO LOCALE
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. INCOMING REQUEST
    // THE NEW URL IS NOW /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  //----------------------------------------------------
  // REDIRECT CODES
  //----------------------------------------------------
  // GET THE AUTH ROLE BY ACCESS TOKEN
  const getAuthData = async () => {
    try {
      const response = await fetch(`${process.env.AUTHDATA_ROLE_URL}`, {
        method: "GET",
        headers: access_token,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // AUTH ROLE
  const authData = (await getAuthData()) as { authRole: string };

  // REDIRECT WHEN AUTH IS AVAILABLE
  if (
    authData?.authRole === "admin" ||
    authData?.authRole === "teacher" ||
    authData?.authRole === "user" ||
    authData?.authRole === "manager"
  ) {
    // PROTECT THE ADMIN ROUTE
    if (authData?.authRole !== "admin") {
      if (pathname?.split("/")?.slice(2)?.join("/").startsWith("admin")) {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/${authData.authRole}/`, request.url)
        );
      }
    }

    // PROTECT THE TEACHER ROUTE
    if (authData?.authRole !== "teacher") {
      if (pathname?.split("/")?.slice(2)?.join("/").startsWith("teacher")) {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/${authData.authRole}/`, request.url)
        );
      }
    }

    // PROTECT THE MANAGER ROUTE
    if (authData?.authRole !== "manager") {
      if (pathname?.split("/")?.slice(2)?.join("/").startsWith("manager")) {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/${authData.authRole}/`, request.url)
        );
      }
    }
    // PROTECT THE USER ROUTE
    if (authData?.authRole !== "user") {
      if (pathname?.split("/")?.slice(2)?.join("/").startsWith("user")) {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/${authData.authRole}/`, request.url)
        );
      }
    }
    // REDIRECT WHEN AUTHENTICATED IS AVAILABLE
    if (
      pathname === `/${currentLocale}/auth/employee_activation` ||
      pathname === `/${currentLocale}/auth/user_activation` ||
      pathname === `/${currentLocale}/auth/employee_login` ||
      pathname === `/${currentLocale}/auth/user_login` ||
      pathname === `/${currentLocale}/auth/employee_signup` ||
      pathname === `/${currentLocale}/auth/user_signup`
    ) {
      return NextResponse.redirect(new URL(`/${currentLocale}`, request.url));
    }
  }

  // REERECT WHEN AUTH IS NOT AVAILABLE
  if (
    pathname?.split("/")?.slice(2)?.join("/").startsWith("admin") ||
    pathname?.split("/")?.slice(2)?.join("/").startsWith("teacher") ||
    pathname?.split("/")?.slice(2)?.join("/").startsWith("user") ||
    pathname?.split("/")?.slice(2)?.join("/").startsWith("manager") ||
    pathname?.split("/")?.slice(3)?.join("/").startsWith("employee")
  ) {
    if (
      !access_token?.value &&
      !ahpa_employee_ref?.value &&
      !authData?.authRole
    ) {
      return NextResponse.rewrite(
        new URL(`/${currentLocale}/auth/user_login`, request.url)
      );
    }
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
