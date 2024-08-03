import ServiceCategoryCard from "@/components/common/cards/ServiceCategoryCard";
import { Heading } from "@/components/common/typography/Heading";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import {
  servicesData,
  ServicesDataProps,
} from "@/constants/page_data/services";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import React, { FC } from "react";

interface IOurWorksProps {
  params: { lang: string };
}

const OurWorks: FC<IOurWorksProps> = ({ params: { lang } }) => {
  return (
    <PageWrapper lang={lang}>
      <SectionWrapper>
        <Heading className="leading-3 -mb-3" size="h4">
          {useCustomTranslator(lang, "Our Services", "আমাদের সেবাসমূহ")}
        </Heading>
        <Heading gradient="secondary" size="h3">
          {useCustomTranslator(lang, "Services We Offer", "আমাদের সেবাসমূহ")}
        </Heading>

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-[30px] w-full mt-[50px] mb-[150px]">
          {servicesData?.length > 0 &&
            servicesData?.map(
              (singleService: ServicesDataProps, serviceIndex: number) => (
                <ServiceCategoryCard
                  singleService={singleService}
                  key={serviceIndex}
                  lang={lang}
                />
              )
            )}
        </div>
        <Button disabled variant="warning" shape="pill">
          See more
        </Button>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OurWorks;
