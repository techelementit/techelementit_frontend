import React, { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import IconWrapper from "../wrapper/IconWrapper";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { Button } from "@/components/ui/button";
import { LucideSendHorizonal } from "lucide-react";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";

interface IServiceCardProps {
  lang: string;
}

const ServiceCard: FC<IServiceCardProps> = ({ lang }) => {
  return (
    <CardWrapper
      className={(fontSwitcher(lang), "w-full relative")}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <span className="absolute top-[5px] right-[50px] text-[120px] font-extrabold text-secondary/20">
        {useCustomTranslator(lang, "01", "")}
      </span>

      <Heading size="h3" className="w-full lg:w-3/4">
        {useCustomTranslator(
          lang,
          "Custom software solutions tailored to your specific needs",
          ""
        )}
      </Heading>

      <Paragraph className="mt-[30px] w-10/12" size="md">
        {useCustomTranslator(
          lang,
          "Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. It involves a variety of activities such as coding, testing, debugging, and refining to ensure that the final product meets user needs and performs efficiently. This process often begins with requirement analysis, where developers work closely with stakeholders to understand the desired features and functionalities.",
          ""
        )}
      </Paragraph>
      <div className="mt-10 flex items-center gap-x-3 md:gap-x-5 lg:gap-x-[30px]">
        <Button gradient="secondary" shape="rounded">
          {useCustomTranslator(lang, "Live Demo", "")}
          <LucideSendHorizonal className="size-5 ml-2 hidden md:block" />
        </Button>
        <Button variant="outline" shape="rounded">
          {useCustomTranslator(lang, "Live Demo", "")}
          <LucideSendHorizonal className="size-5 ml-2 hidden md:block" />
        </Button>
      </div>
    </CardWrapper>
  );
};

export default ServiceCard;
