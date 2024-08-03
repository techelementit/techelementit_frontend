import PageWrapper from "@/components/common/wrapper/PageWrapper";
import OurMissionSection from "@/components/public/about_us/OurMissionSection";
import OurStorySection from "@/components/public/about_us/OurStorySection";
import OurTeamSection from "@/components/public/about_us/OurTeamSection";
import OurVisionSection from "@/components/public/about_us/OurVisionSection";
import CallToActionSection from "@/components/public/home/CallToActionSection";
import React, { FC } from "react";

interface IAboutUsProps {
  params: { lang: string };
}

const AboutUs: FC<IAboutUsProps> = ({ params: { lang } }) => {
  return (
    <PageWrapper lang={lang}>
      <OurStorySection lang={lang} />
      <OurMissionSection lang={lang} />
      <OurVisionSection lang={lang} />
      <OurTeamSection lang={lang} />
      <CallToActionSection lang={lang} />
    </PageWrapper>
  );
};

export default AboutUs;
