import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import HeroThumbnail from "../../../public/hero_thumbnail.png";
import Image from "next/image";
import BlurEffect from "@/components/common/effect/BlurEffect";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";

interface IHeroSectionProps {
  lang: string;
}

const HeroSection: FC<IHeroSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading
        position="center"
        gradient="secondary"
        className="w-11/12 lg:w-10/12"
        size="h2"
      >
        {useCustomTranslator(
          lang,
          "The best performance for your e-commerce",
          "ই-কমার্সের পারফরম্যান্সের সর্বোচ্চ স্তরে পৌঁছানোর কৌশল"
        )}
        <BlurEffect align="center" variant="secondary" blur="sm" size="sm" />
      </Heading>
      <Heading
        position="center"
        className="mt-5 lg:mt-10 w-11/12 lg:w-9/12"
        size="h5"
      >
        {useCustomTranslator(
          lang,
          "Empower yourself to drive customer loyalty and boost recurring revenue. Our software unlocks seamless, personalized communication, allowing you to strategically engage with your customers at every touchpoint, fostering stronger relationships and encouraging repeat business.",
          "আপনার গ্রাহকদের সাথে মজবুত সম্পর্ক গড়ে তোলার এবং গড় পুনঃ আয় বাড়ানোর ক্ষমতা অর্জন করুন। আমাদের সফটওয়্যারটি স্বচ্ছন্দ, ব্যক্তিগতকৃত যোগাযোগের দ্বার খুলে দেয়, যা আপনাকে প্রতিটি যোগাযোগের ক্ষেত্রে কৌশলগতভাবে আপনার গ্রাহকদের সাথে যুক্ত হওয়ার সুযোগ দেয়, ফলে আরও দৃঢ় সম্পর্ক গড়ে তোলে এবং পুনঃ ব্যবসায়কে উৎসাহিত করে "
        )}
      </Heading>
      <Button
        className="mt-10 lg:mt-20 mb-[150px]"
        variant="warning"
        shape="pill"
      >
        {useCustomTranslator(
          lang,
          "Get Started Today",
          "শুরু করার ঠিক সময় এখনই"
        )}
        <BlurEffect align="center" variant="warning" blur="sm" size="md" />
      </Button>
      <Image
        src={HeroThumbnail}
        alt="tech element bd hero thumbnail"
        width={963}
        height={449}
      ></Image>
    </SectionWrapper>
  );
};

export default HeroSection;
