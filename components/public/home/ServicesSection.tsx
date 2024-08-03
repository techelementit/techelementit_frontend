import ServiceCategoryCard from "@/components/common/cards/ServiceCategoryCard";
import BlurEffect from "@/components/common/effect/BlurEffect";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import {
  servicesData,
  ServicesDataProps,
} from "@/constants/page_data/services";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import Link from "next/link";
import React, { FC } from "react";

interface IServicesSectionProps {
  lang: string;
}

const ServicesSection: FC<IServicesSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper className="relative">
      <BlurEffect align="right_top" variant="secondary" blur="md" size="sm" />
      <BlurEffect align="left_bottom" variant="warning" blur="sm" size="sm" />
      <Heading position="center" className="leading-3 -mb-3" size="h4">
        {useCustomTranslator(lang, "Our Services", "আমাদের সেবাসমূহ")}
      </Heading>
      <Heading position="center" gradient="secondary" size="h3">
        {useCustomTranslator(lang, "Services We Offer", "আমাদের সেবাসমূহ")}
      </Heading>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-[30px] w-full mt-[50px] mb-[150px]">
        {servicesData?.length > 0 &&
          servicesData
            .slice(0, 4)
            ?.map((singleService: ServicesDataProps, serviceIndex: number) => (
              <ServiceCategoryCard
                singleService={singleService}
                key={serviceIndex}
                lang={lang}
              />
            ))}
      </div>
      <Button variant="warning" shape="pill">
        <Link href={`../../../${lang}/services`}>
          {useCustomTranslator(lang, "See more", "আরো দেখুন")}
        </Link>
        <BlurEffect align="center" variant="warning" blur="sm" size="md" />
      </Button>
    </SectionWrapper>
  );
};

export default ServicesSection;
