import { Anek_Bangla, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import { AppWrapper } from "@/context";
import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "@/get-dictionary";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";

const anek_bangla = Anek_Bangla({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["bengali"],
  variable: "--font-anek",
});
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "vietnamese", "greek"],
  variable: "--font-inter",
});
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  await getDictionary(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${anek_bangla.variable} duration-500  transition-colors ease-linear w-full !overflow-y-auto font-inter}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
