import { Heading } from "@/components/common/typography/Heading";
import { Paragraph } from "@/components/common/typography/Paragraph";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import {
  aboutUsData,
  AboutUsParagraphProps,
} from "@/constants/page_data/about_us";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import React, { FC } from "react";

interface IOurVisionSectionProps {
  lang: string;
}

const OurVisionSection: FC<IOurVisionSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading gradient="secondary" size="h3">
        {useCustomTranslator(
          lang,
          aboutUsData?.ourVision?.heading?.en,
          aboutUsData?.ourVision?.heading?.bn
        )}
      </Heading>
      <div className="mt-[50px] flex flex-col gap-y-8">
        {aboutUsData?.ourVision?.paragraph?.length > 0 &&
          aboutUsData?.ourVision?.paragraph.map(
            (singleParagraph: AboutUsParagraphProps) => (
              <Paragraph size="md">
                {useCustomTranslator(
                  lang,
                  singleParagraph?.en,
                  singleParagraph?.bn
                )}
              </Paragraph>
            )
          )}
      </div>
    </SectionWrapper>
  );
};

export default OurVisionSection;
