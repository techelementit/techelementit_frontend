"use client";
import DataLoader from "@/components/common/DataLoader";
import InfoWrapper from "@/components/common/InfoWrapper";
import Message from "@/components/common/Message";
import TitleDescriptionWrapper from "@/components/common/TitleDescriptionWrapper";
import { Button } from "@/components/ui/button";
import { useGetSingleSectionQuery } from "@/redux/features/admin/section/sectionApi";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC } from "react";

interface ISubjectDetailsProps {
  params: { lang: string };
}

const SectionDetails: FC<ISubjectDetailsProps> = ({ params: { lang } }) => {
  //  SELECTED SECTION ID
  const { section_id } = useParams() as any;
  // GET SINGLE SUBJECT QUERY
  const {
    data,
    isLoading: sectionLoading,
    error: sectionError,
  } = useGetSingleSectionQuery(section_id) as any;

  if (sectionLoading) {
    return <DataLoader />;
  }
  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/section_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Section List" : "শাখার তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>

      {sectionError && "data" in sectionError && (
        <Message variant="destructive" message={sectionError?.data?.message} />
      )}

      {/* DETAILS SECTION */}
      <InfoWrapper
        heading={lang === "en" ? "Subject Information" : "বিষয়ের তথ্য"}
      >
        <TitleDescriptionWrapper
          title={lang === "en" ? "Subject Name English" : "বিষয়ের ইংরেজি নাম"}
          description={data?.section?.sectionName?.en}
        />
        <TitleDescriptionWrapper
          title={lang === "en" ? "Subject Name Bangla" : "বিষয়ের বাংলা নাম"}
          description={data?.section?.sectionName?.bn}
        />
      </InfoWrapper>
    </section>
  );
};

export default SectionDetails;
