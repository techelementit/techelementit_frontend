import React, { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { Subheading } from "../typography/Subheading";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import IconWrapper from "../wrapper/IconWrapper";
import { LucideCommand } from "lucide-react";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { ServicesDataProps } from "@/constants/page_data/services";

interface IServiceCategoryCardProps {
  lang: string;
  singleService: ServicesDataProps;
}

const ServiceCategoryCard: FC<IServiceCategoryCardProps> = ({
  lang,
  singleService,
}) => {
  return (
    <CardWrapper
      className={fontSwitcher(lang)}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <div className="flex gap-x-[20px] lg:gap-x-[30px]">
        <IconWrapper variant="tertiary" size="lg" shape="circle" blur="sm">
          {React.createElement(singleService?.icon, {
            className: "size-[44px] lg:size-[56px]",
          })}
        </IconWrapper>
        <div className="w-9/12 lg:w-8/12">
          <Subheading case="upper" variant="success" size="h4">
            {useCustomTranslator(
              lang,
              singleService?.subHeading?.en,
              singleService?.subHeading?.bn
            )}
          </Subheading>
          <Heading size="h4">
            {useCustomTranslator(
              lang,
              singleService?.heading?.en,
              singleService?.heading?.bn
            )}
          </Heading>
        </div>
      </div>
      <Paragraph className="mt-2 md:mt-5 lg:mt-9" size="md">
        {useCustomTranslator(
          lang,
          singleService?.paragraph?.en,
          singleService?.paragraph?.bn
        )}
      </Paragraph>
    </CardWrapper>
  );
};

export default ServiceCategoryCard;
