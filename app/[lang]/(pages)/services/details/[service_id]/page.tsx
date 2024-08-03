import ServiceCard from "@/components/common/cards/ServiceCard";
import { Heading } from "@/components/common/typography/Heading";
import { Subheading } from "@/components/common/typography/Subheading";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import React, { FC } from "react";
interface IServiceDetailsProps {
  params: { lang: string };
}

const ServiceDetails: FC<IServiceDetailsProps> = ({ params: { lang } }) => {
  return (
    <PageWrapper lang={lang}>
      <SectionWrapper>
        <Subheading case="upper" variant="success" size="h4">
          {useCustomTranslator(
            lang,
            "Software Development",
            "কাস্টম পয়েন্ট অফ সেল অ্যাপ্লিকেশান"
          )}
        </Subheading>
        <Heading className="text-center" gradient="secondary" size="h3">
          {useCustomTranslator(
            lang,
            "We build this application for Smart Gadget & Gear",
            "এই অ্যাপটি আমরা স্মার্ট গ্যাজেট এবং গিয়ারের জন্য তৈরি করেছি।"
          )}
        </Heading>
        <div className="w-full mt-[50px] flex flex-col gap-y-[30px]">
          <ServiceCard lang={lang} />
          <ServiceCard lang={lang} />
          <ServiceCard lang={lang} />
          <ServiceCard lang={lang} />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default ServiceDetails;
