import { Heading } from "@/components/common/typography/Heading";
import { Label } from "@/components/common/typography/Label";
import { Paragraph } from "@/components/common/typography/Paragraph";
import CardWrapper from "@/components/common/wrapper/CardWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { LucideAtSign, LucideMapPin, LucideSmartphone } from "lucide-react";
import React, { FC } from "react";

interface ICallToActionSectionProps {
  lang: string;
}

const CallToActionSection: FC<ICallToActionSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading
        position="center"
        gradient="secondary"
        className="mb-[50px]"
        size="h3"
      >
        {useCustomTranslator(
          lang,
          "Partner with us to unlock new possibilities, streamline process, and elevate your digital presence",
          "ব্যবহারকারী পর্যালোচনা"
        )}
      </Heading>
      <div className="flex flex-col lg:flex-row gap-x-4 lg:gap-x-[30px] w-full">
        <div className="w-full flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-10">
          <div className="flex gap-x-4 lg:gap-x-[30px]">
            <Input
              type="text"
              placeholder={useCustomTranslator(
                lang,
                "First Name",
                "নামের প্রথম অংশ"
              )}
            />
            <Input
              type="text"
              placeholder={useCustomTranslator(
                lang,
                "Last Name",
                "নামের শেষ অংশ"
              )}
            />
          </div>
          <Input
            type="email"
            placeholder={useCustomTranslator(
              lang,
              "Email Address",
              "ইমেইল এড্রেস"
            )}
          />
          <div className="flex gap-x-4 lg:gap-x-[30px]">
            <Input
              type="text"
              placeholder={useCustomTranslator(lang, "Country", "দেশ")}
            />
            <Input
              type="phone"
              placeholder={useCustomTranslator(lang, "Phone ", "ফোন")}
            />
          </div>
          <Textarea
            placeholder={useCustomTranslator(lang, "Message", "ম্যাসেজ")}
          />
          <div className="flex justify-end">
            <Button shape="rounded" variant="secondary">
              {useCustomTranslator(lang, "Send us", "আমাদের কাছে পাঠান")}
            </Button>
          </div>
        </div>
        <CardWrapper
          variant="secondary"
          blur="sm"
          rounded="xl"
          className="w-full lg:w-[500px] mt-5 lg:-mt-1.5"
        >
          <Heading size="h4">
            {useCustomTranslator(lang, "Contact Information", "যোগাযোগ করুন")}
          </Heading>
          <ul className="flex flex-col gap-y-3 lg:gap-y-5 mt-8 pr-6">
            <li>
              <span className="flex gap-x-4 items-center">
                <LucideMapPin className="size-6" />
                <Label size="md">
                  {useCustomTranslator(
                    lang,
                    "Office Address:",
                    "অফিসের ঠিকানাঃ"
                  )}
                </Label>
              </span>
              <Paragraph className="ml-10" size="sm">
                {useCustomTranslator(
                  lang,
                  `3, RK Mission Road, (Lily Pond Center), Motijheel,Dhaka-1203, Bangladesh, Level#16`,
                  "৩নং রাম মিশন রোড (লিলি পন্ড সেন্টার), মতিঝিল, ঢাকা ১২০৩, বাংলাদেশ, লেভেল#১৬"
                )}
              </Paragraph>
            </li>
            <li>
              <span className="flex gap-x-4 items-center">
                <LucideAtSign className="size-6" />
                <Label size="md">
                  {useCustomTranslator(lang, "Email Address:", "ইমেইল এড্রেসঃ")}
                </Label>
              </span>
              <Paragraph className="ml-10" size="sm">
                <a href="mailto:techelementbd@gmail.com">
                  techelementbd@gmail.com
                </a>
              </Paragraph>
            </li>
            <li>
              <span className="flex gap-x-4 items-center">
                <LucideSmartphone className="size-6" />
                <Label size="md">
                  {useCustomTranslator(lang, "Phone number:", "ফোন নাম্বারঃ")}
                </Label>
              </span>
              <Paragraph className="ml-10" size="sm">
                {useCustomTranslator(
                  lang,
                  "+8801601-590-591",
                  "+৮৮১৬০১-৫৯০-৫৯১"
                )}
              </Paragraph>
            </li>
          </ul>
        </CardWrapper>
      </div>
    </SectionWrapper>
  );
};

export default CallToActionSection;
