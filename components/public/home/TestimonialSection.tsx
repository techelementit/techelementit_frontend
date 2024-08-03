import {
  InfiniteCarousel,
  InfiniteCarouselItem,
} from "@/components/common/InfiniteCarousel";
import TestimonialCard from "@/components/common/cards/TestimonialCard";
import BlurEffect from "@/components/common/effect/BlurEffect";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import {
  testimonialsData,
  TestimonialsProps,
} from "@/constants/page_data/tesimonials";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import React, { FC } from "react";

interface ITestimonialSectionProps {
  lang: string;
}

const TestimonialSection: FC<ITestimonialSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper className="!w-full overflow-hidden">
      <Heading position="center" className="leading-3 -mb-3" size="h4">
        {useCustomTranslator(lang, "Testimonials", "ব্যবহারকারী পর্যালোচনা")}
      </Heading>
      <Heading position="center" gradient="secondary" size="h3">
        {useCustomTranslator(
          lang,
          "Our Happy Clients",
          "যারা আমাদের সেবায় সফল হয়েছেন"
        )}
      </Heading>
      <div className="flex flex-col gap-y-[30px] mt-[50px] overflow-hidden w-full">
        <InfiniteCarousel speed="slow" className="w-full gap-x-[30px] ">
          {testimonialsData?.length > 0 &&
            testimonialsData.map(
              (
                singleTestimonial: TestimonialsProps,
                testimonialIndex: number
              ) => (
                <InfiniteCarouselItem key={testimonialIndex}>
                  <TestimonialCard
                    singleTestimonial={singleTestimonial}
                    lang={lang}
                  />
                </InfiniteCarouselItem>
              )
            )}
        </InfiniteCarousel>
        <InfiniteCarousel
          speed="slow"
          direction="right"
          className="w-full gap-x-[30px] "
        >
          {testimonialsData?.length > 0 &&
            testimonialsData.map(
              (
                singleTestimonial: TestimonialsProps,
                testimonialIndex: number
              ) => (
                <InfiniteCarouselItem key={testimonialIndex}>
                  <TestimonialCard
                    key={testimonialIndex}
                    singleTestimonial={singleTestimonial}
                    lang={lang}
                  />
                </InfiniteCarouselItem>
              )
            )}
        </InfiniteCarousel>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialSection;
