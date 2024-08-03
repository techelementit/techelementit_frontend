"use client";
import DataLoader from "@/components/common/DataLoader";
import InfoWrapper from "@/components/common/InfoWrapper";
import Message from "@/components/common/Message";
import TitleDescriptionWrapper from "@/components/common/TitleDescriptionWrapper";
import { Button } from "@/components/ui/button";
import { useGetSingleSubjectQuery } from "@/redux/features/admin/subject/subjectApi";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC } from "react";

interface ISubjectDetailsProps {
  params: { lang: string };
}

const SubjectDetails: FC<ISubjectDetailsProps> = ({ params: { lang } }) => {
  // SELECTED SUBJECT ID
  const { subject_id } = useParams() as any;

  // GET SINGLE SUBJECT QUERY
  const {
    data,
    isLoading: subjectLoading,
    error: subjectError,
  } = useGetSingleSubjectQuery(subject_id) as any;

  if (subjectLoading) {
    return <DataLoader />;
  }
  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/subject_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Subject List" : "বিষয় তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      {subjectError && "data" in subjectError && (
        <Message variant="destructive" message={subjectError?.data?.message} />
      )}

      {/* DETAILS SECTION */}
      <InfoWrapper
        heading={lang === "en" ? "Subject Information" : "বিষয়ের তথ্য"}
      >
        <TitleDescriptionWrapper
          title={lang === "en" ? "Subject Name English" : "বিষয়ের ইংরেজি নাম"}
          description={data?.subject?.subjectName?.en}
        />
        <TitleDescriptionWrapper
          title={lang === "en" ? "Subject Name Bangla" : "বিষয়ের বাংলা নাম"}
          description={data?.subject?.subjectName?.bn}
        />
      </InfoWrapper>
    </section>
  );
};

export default SubjectDetails;
