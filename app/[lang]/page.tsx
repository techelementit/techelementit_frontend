"use client";
import NavigationBar from "@/components/common/NavigationBar";
import { Locale } from "../../i18n-config";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import HeroSection from "@/components/public/home/HeroSection";
import ServicesSection from "@/components/public/home/ServicesSection";
import OurProjectSection from "@/components/public/home/OurProjectSection";
import TestimonialSection from "@/components/public/home/TestimonialSection";
import CallToActionSection from "@/components/public/home/CallToActionSection";
import Footer from "@/components/public/Footer";
import FeaturedSection from "@/components/public/home/FeaturedSection";

export default function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <PageWrapper lang={lang}>
      <NavigationBar lang={lang} />
      <HeroSection lang={lang} />
      <FeaturedSection lang={lang} />
      <ServicesSection lang={lang} />
      <OurProjectSection lang={lang} />
      <TestimonialSection lang={lang} />
      <CallToActionSection lang={lang} />
      <Footer lang={lang} />
    </PageWrapper>
  );
}
