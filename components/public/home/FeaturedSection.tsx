import {
  InfiniteCarousel,
  InfiniteCarouselItem,
} from "@/components/common/InfiniteCarousel";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import React, { FC } from "react";
import Ashrafee from "../../../public/brands/ashrafee.png";
import Fntabulous from "../../../public/brands/fantabulous_main.png";
import GenerationAppleBD from "../../../public/brands/generation-apple-bd.png";
import KRY from "../../../public/brands/kry-favicon.png";
import PhoneFeatureBD from "../../../public/brands/phone-features-bd.png";
import Safwans from "../../../public/brands/safwans_favicon.png";
import RupushiBangla from "../../../public/brands/rupushi_bangla.png";
import Iconic from "../../../public/brands/iconic.gif";
import JSTelecom from "../../../public/brands/js_telecom.png";
import Image from "next/image";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { cn } from "@/lib/utils";

interface IFeaturedSectionProps {
  lang: string;
}

const FeaturedSection: FC<IFeaturedSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper className={cn("!w-full overflow-hidden")}>
      <Heading position="center" gradient="secondary" size="h3">
        {useCustomTranslator(
          lang,
          "The companies trust our platform",
          "যারা আমাদের সেবায় সফল হয়েছেন"
        )}
      </Heading>
      <div className="flex flex-col gap-y-[30px] mt-[25px] xl:mt-[50px] overflow-hidden w-full">
        <InfiniteCarousel
          className="gap-x-[15px] xl:gap-x-[30px]"
          speed="medium"
        >
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[85px] xl:size-[110px]"
                src={Ashrafee}
                alt="Ashrafee"
                width={115}
                height={115}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={Fntabulous}
                alt="Fntabulous"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={GenerationAppleBD}
                alt="GenerationAppleBD"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={KRY}
                alt="KRY"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={PhoneFeatureBD}
                alt="PhoneFeatureBD"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={Safwans}
                alt="Safwans"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={Iconic}
                alt="Safwans"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={JSTelecom}
                alt="Safwans"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-secondary m-2 to-foreground dark:to-white size-[80px]  xl:size-[115px] flex justify-center items-center">
              <Image
                className="size-[75px] xl:size-[110px]"
                src={RupushiBangla}
                alt="Safwans"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
        </InfiniteCarousel>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedSection;
