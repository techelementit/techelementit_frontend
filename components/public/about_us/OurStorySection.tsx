import { Heading } from "@/components/common/typography/Heading";
import { Paragraph } from "@/components/common/typography/Paragraph";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import {
  aboutUsData,
  AboutUsParagraphProps,
} from "@/constants/page_data/about_us";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import React, { FC } from "react";

interface IOurStorySectionProps {
  lang: string;
}

const OurStorySection: FC<IOurStorySectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading gradient="secondary" size="h3">
        {useCustomTranslator(
          lang,
          aboutUsData?.ourStory.heading?.en,
          aboutUsData?.ourStory?.heading?.bn
        )}
      </Heading>
      <div className="mt-[50px] flex flex-col gap-y-8">
        {aboutUsData?.ourStory?.paragraph.length > 0 &&
          aboutUsData?.ourStory?.paragraph.map(
            (
              singleParagraph: AboutUsParagraphProps,
              paragraphIndex: number
            ) => (
              <Paragraph key={paragraphIndex} size="md">
                {useCustomTranslator(
                  lang,
                  singleParagraph?.en,
                  singleParagraph.bn
                )}
              </Paragraph>
            )
          )}
      </div>
    </SectionWrapper>
  );
};

export default OurStorySection;
