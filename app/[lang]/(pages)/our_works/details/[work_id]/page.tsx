"use client";
import PhotoLazyLoader from "@/components/common/photo/PhotoLazyLoader";
import { Heading } from "@/components/common/typography/Heading";
import { Subheading } from "@/components/common/typography/Subheading";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import React, { FC } from "react";
import Thumb from "../../../../../../public/project_thumbnail.png";
import { Button } from "@/components/ui/button";
import { LucideImage } from "lucide-react";
import { Paragraph } from "@/components/common/typography/Paragraph";
import ProjectCard from "@/components/common/cards/ProjectCard";
import { Tag } from "@/components/common/typography/Tag";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { useParams } from "next/navigation";
import { ourWorksData, OurWorksProps } from "@/constants/page_data/our_works";
interface IOurWorkDetailsProps {
  params: { lang: string };
}

const OurWorkDetails: FC<IOurWorkDetailsProps> = ({ params: { lang } }) => {
  const params = useParams() as any;

  const singleProjectData =
    ourWorksData?.find(
      (singleWork: OurWorksProps) => singleWork.id === +params?.work_id
    ) || ({} as OurWorksProps);
  console.log(singleProjectData);

  return (
    <PageWrapper lang={lang}>
      {/* PROJECT DETAILS SECTION */}
      <SectionWrapper>
        <div className="w-full ">
          <Subheading case="upper" variant="success" size="h4">
            {useCustomTranslator(
              lang,
              singleProjectData?.subHeading?.en,
              singleProjectData?.subHeading?.bn
            )}
          </Subheading>
          <Heading size="h3">
            {useCustomTranslator(
              lang,
              singleProjectData.heading.en,
              singleProjectData.heading.bn
            )}
          </Heading>
        </div>
        <div className="mt-[30px]">
          <PhotoLazyLoader
            className="w-full rounded-xl overflow-hidden border-2 border-secondary/20"
            src={Thumb}
          />
          <div className="mt-3 flex flex-x-6">
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
          </div>
        </div>

        {/* PARAGRAPH SECTIONS */}
        <div className="w-full mt-[50px] flex flex-col gap-y-[50px]">
          {/* INSPIRATION */}
          <div>
            <Heading size="h4">
              {useCustomTranslator(lang, "Inspiration", "অনুপ্রেরণা")}
            </Heading>
            <div className="flex flex-col gap-y-[30px]">
              {singleProjectData?.inspiration?.length > 0 &&
                singleProjectData?.inspiration.map(
                  (
                    singleInspiration: {
                      en: string;
                      bn: string;
                    },
                    inspirationIndex: number
                  ) => (
                    <Paragraph key={inspirationIndex} size="md">
                      {useCustomTranslator(
                        lang,
                        singleInspiration.en,
                        singleInspiration.bn
                      )}
                    </Paragraph>
                  )
                )}
            </div>
          </div>
          {/* CASE STUDY */}
          <div>
            <Heading size="h4">
              {useCustomTranslator(lang, "Case Study", "কেইস স্ট্যাডি")}
            </Heading>
            <div className="flex flex-col gap-y-[30px]">
              {singleProjectData?.caseStudy?.length > 0 &&
                singleProjectData?.caseStudy?.map(
                  (
                    singleCaseStudy: { en: string; bn: string },
                    caseStudyIndex: number
                  ) => (
                    <Paragraph key={caseStudyIndex} size="md">
                      {useCustomTranslator(
                        lang,
                        singleCaseStudy.en,
                        singleCaseStudy.bn
                      )}
                    </Paragraph>
                  )
                )}
            </div>
          </div>
          {/* TECHNOLOGIES */}
          <div className="w-full">
            <Heading size="h4">
              {useCustomTranslator(lang, "Technologies", "টেকনোলজিস")}
            </Heading>
            <div className="flex flex-wrap gap-x-4">
              {singleProjectData.technology?.frameworksLibraries?.length > 0 &&
                singleProjectData.technology?.frameworksLibraries?.map(
                  (singleTech: string, techIndex: number) => (
                    <Tag key={techIndex} variant="secondary" shape="pill">
                      {singleTech}
                    </Tag>
                  )
                )}
            </div>
          </div>
          {/* PURPOSE FOR SELECTING TECHNOLOGIES */}
          <div>
            <Heading className=" text-opacity-80" size="h4">
              {useCustomTranslator(
                lang,
                "Purpose For Selecting These Technologies",
                "এই টেকনোলজিগুলো বেছে নেওয়ার কারণ"
              )}
            </Heading>
            <Paragraph size="md">
              {useCustomTranslator(
                lang,
                singleProjectData?.technology?.purpose?.en,
                singleProjectData?.technology?.purpose?.bn
              )}
            </Paragraph>
          </div>
        </div>
      </SectionWrapper>
      {/* RELATED PRODUCTS */}
      <SectionWrapper className="flex flex-col gap-y-[24px] mt-[50px] mb-[150px]">
        <Heading className="text-left w-full" size="h4">
          {useCustomTranslator(
            lang,
            "Related Projects",
            "আনুষঙ্গিক প্রকল্পগুলো"
          )}
        </Heading>
        <div className="w-full flex flex-col gap-y-[24px] mt-[50px] mb-[150px]">
          {ourWorksData?.length > 0 &&
            ourWorksData
              .slice(0, 2)
              .map((singleWork: OurWorksProps, workIndex: number) => (
                <ProjectCard
                  singleWork={singleWork}
                  reverse={workIndex % 2 == 0 ? true : false}
                  lang={lang}
                />
              ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OurWorkDetails;
