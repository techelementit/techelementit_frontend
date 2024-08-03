import Footer from "@/components/public/Footer";
import { Locale } from "../../../i18n-config";
import NavigationBar from "@/components/common/NavigationBar";

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <>
      <NavigationBar lang={lang} />
      <main className="mt-20">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
