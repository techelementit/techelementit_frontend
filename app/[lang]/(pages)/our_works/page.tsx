import ProjectCard from "@/components/common/cards/ProjectCard";
import { Heading } from "@/components/common/typography/Heading";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ourWorksData, OurWorksProps } from "@/constants/page_data/our_works";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import React, { FC, useState } from "react";

interface IOurWorksProps {
  params: { lang: string };
}

const OurWorks: FC<IOurWorksProps> = ({ params: { lang } }) => {
  return (
    <PageWrapper lang={lang}>
      <SectionWrapper>
        <Heading className="leading-3 -mb-3" size="h4">
          {useCustomTranslator(lang, "Our Projects", "আমাদের প্রকলসমূহ")}
        </Heading>
        <Heading className="text-center" gradient="secondary" size="h3">
          {useCustomTranslator(
            lang,
            "We built already some amazing projects",
            "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
          )}
        </Heading>

        <div className="w-full flex flex-col gap-y-[24px] mt-[50px] mb-[150px]">
          {ourWorksData?.length > 0 &&
            ourWorksData.map((singleWork: OurWorksProps, workIndex: number) => (
              <ProjectCard
                singleWork={singleWork}
                reverse={workIndex % 2 == 0 ? true : false}
                lang={lang}
              />
            ))}
        </div>

        <Button disabled variant="warning" shape="pill">
          See more
        </Button>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OurWorks;
