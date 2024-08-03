import ProjectCard from "@/components/common/cards/ProjectCard";
import BlurEffect from "@/components/common/effect/BlurEffect";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ourWorksData, OurWorksProps } from "@/constants/page_data/our_works";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import Link from "next/link";
import React, { FC } from "react";

interface IOurProjectSectionProps {
  lang: string;
}

const OurProjectSection: FC<IOurProjectSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading position="center" className="leading-3 -mb-3" size="h4">
        {useCustomTranslator(lang, "Our Projects", "আমাদের প্রকলসমূহ")}
      </Heading>
      <Heading position="center" gradient="secondary" size="h3">
        {useCustomTranslator(
          lang,
          "We built already some amazing projects",
          "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
        )}
      </Heading>

      <div className="w-full flex flex-col gap-y-[24px] mt-[50px] mb-[150px]">
        {ourWorksData?.length > 0 &&
          ourWorksData
            .slice(0, 2)
            .map((singleWork: OurWorksProps, workIndex: number) => (
              <ProjectCard
                key={workIndex}
                singleWork={singleWork}
                reverse={workIndex % 2 == 0 ? true : false}
                lang={lang}
              />
            ))}
      </div>
      <Button variant="warning" shape="pill">
        <Link href={`../../../${lang}/our_works`}>
          {useCustomTranslator(lang, "See more", "আরো দেখুন")}
        </Link>
        <BlurEffect align="center" variant="warning" blur="sm" size="md" />
      </Button>
    </SectionWrapper>
  );
};

export default OurProjectSection;
