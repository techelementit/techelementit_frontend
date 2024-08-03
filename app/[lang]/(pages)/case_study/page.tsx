import { Heading } from "@/components/common/typography/Heading";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";

import React, { FC } from "react";

interface IOurWorksProps {
  params: { lang: string };
}

const OurWorks: FC<IOurWorksProps> = ({ params: { lang } }) => {
  return (
    <PageWrapper lang={lang}>
      <SectionWrapper>
        <Heading
          className="w-8/12 mx-auto"
          position="center"
          gradient="secondary"
          size="h4"
        >
          {useCustomTranslator(
            lang,
            "This page is still under development! We're working hard to bring you a fantastic new experience. Check back soon for exciting updates!",
            "এই পৃষ্ঠাটি এখনও উন্নয়নাধীন! আমরা আপনাকে একটি দুর্দান্ত নতুন অভিজ্ঞতা দেওয়ার জন্য কঠোর পরিশ্রম করছি। উত্তেজনাপূর্ণ আপডেটের জন্য শীঘ্রই ফিরে আসুন!"
          )}
        </Heading>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OurWorks;
