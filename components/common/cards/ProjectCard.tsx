import { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { Subheading } from "../typography/Subheading";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import { Paragraph } from "../typography/Paragraph";
import { Heading } from "../typography/Heading";
import Image from "next/image";
import CardThumbnail from "../../../public/project_thumbnail.png";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { cn } from "@/lib/utils";
import { OurWorksProps } from "@/constants/page_data/our_works";
import { Button } from "@/components/ui/button";
import { LucideArrowUpRight } from "lucide-react";
import Link from "next/link";

interface IProjectCardProps {
  lang: string;
  reverse?: boolean;
  singleWork: OurWorksProps;
}

const ProjectCard: FC<IProjectCardProps> = ({
  lang,
  reverse = false,
  singleWork,
}) => {
  return (
    <CardWrapper
      className={cn(
        fontSwitcher(lang),
        "group transition-all duration-300 p-0 lg:p-0 flex flex-col lg:flex-row overflow-hidden",
        reverse && " flex-col lg:flex-row-reverse"
      )}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <Button
        className={cn(
          "absolute left-1/2 flex lg:hidden items-center justify-center   z-50 size-16 p-0 -translate-x-1/2 bottom-4 transition-all duration-300"
        )}
        shape="circle"
        variant="warning"
        size="square"
      >
        <Link href={`../../../${lang}/our_works/details/${singleWork.id}`}>
          <LucideArrowUpRight className="size-8" />
        </Link>
      </Button>
      <Button
        className={cn(
          "absolute left-1/2 hidden lg:flex items-center justify-center -bottom-1/2  z-50 size-16 p-0 -translate-x-1/2 group-hover:bottom-4 transition-all duration-300"
        )}
        shape="circle"
        variant="warning"
        size="square"
      >
        <Link href={`../../../${lang}/our_works/details/${singleWork.id}`}>
          <LucideArrowUpRight className="size-8" />
        </Link>
      </Button>
      <div className="w-full lg:w-1/2 p-6 lg:p-[38px]">
        <div className="mb-[20px]">
          <Subheading case="upper" variant="success" size="h4">
            {useCustomTranslator(
              lang,
              singleWork?.subHeading?.en,
              singleWork?.subHeading?.bn
            )}
          </Subheading>
          <Heading size="h4">
            {useCustomTranslator(
              lang,
              singleWork?.heading?.en,
              singleWork?.heading?.bn
            )}
          </Heading>
        </div>
        <div className="mt-2 md:mt-4 lg:mt-6">
          <Heading size="h5">
            {useCustomTranslator(lang, "Inspiration", "অনুপ্রেরণা")}
          </Heading>
          {singleWork?.inspiration?.length > 0 && (
            <Paragraph size="md">
              {useCustomTranslator(
                lang,
                singleWork?.inspiration[0].en?.split(" ").length > 25
                  ? singleWork?.inspiration[0].en
                      ?.split(" ")
                      .slice(0, 25)
                      .join(" ") + "..."
                  : singleWork?.inspiration[0].en,
                singleWork?.inspiration[0].bn
              )}
            </Paragraph>
          )}
        </div>
        <div>
          <Heading size="h5">
            {useCustomTranslator(lang, "Case Study", "কেইস স্ট্যাডি")}
          </Heading>
          {singleWork?.caseStudy?.length > 0 && (
            <Paragraph size="md">
              {useCustomTranslator(
                lang,
                singleWork?.caseStudy[0].en?.split(" ").length > 25
                  ? singleWork?.caseStudy[0].en
                      ?.split(" ")
                      .slice(0, 25)
                      .join(" ") + "..."
                  : singleWork?.caseStudy[0].en,
                singleWork?.caseStudy[0].bn
              )}
            </Paragraph>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center  overflow-hidden">
        <Image
          src={CardThumbnail}
          alt="project thumbnail"
          width={584}
          height={471}
          className="scale-[200%] hover:scale-[210%] duration-300 overflow-hidden -rotate-12"
        />
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
