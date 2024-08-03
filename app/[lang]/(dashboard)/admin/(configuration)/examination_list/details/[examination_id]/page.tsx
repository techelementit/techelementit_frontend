"use client";
import DataLoader from "@/components/common/DataLoader";
import InfoWrapper from "@/components/common/InfoWrapper";
import Message from "@/components/common/Message";
import TitleDescriptionWrapper from "@/components/common/TitleDescriptionWrapper";
import { Button } from "@/components/ui/button";
import { useGetSingleExaminationQuery } from "@/redux/features/admin/examination/examinationApi";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC } from "react";

interface IExaminationDetailsProps {
  params: { lang: string };
}

const ExaminationDetails: FC<IExaminationDetailsProps> = ({
  params: { lang },
}) => {
  // SELECTED EXAMINATION ID
  const { examination_id } = useParams() as any;

  // GET SINGLE SUBJECT QUERY
  const {
    data,
    isLoading: examinationLoading,
    error: examinationError,
  } = useGetSingleExaminationQuery(examination_id) as any;

  if (examinationLoading) {
    return <DataLoader />;
  }
  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/examination_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en"
              ? "Back To Examination List"
              : "পরীক্ষার তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>

      {examinationError && "data" in examinationError && (
        <Message
          variant="destructive"
          message={examinationError?.data?.message}
        />
      )}

      {/* DETAILS SECTION */}
      <InfoWrapper
        heading={lang === "en" ? "Examination Information" : "পরীক্ষার তথ্য"}
      >
        <TitleDescriptionWrapper
          title={
            lang === "en" ? "Examination Name English" : "পরীক্ষার ইংরেজি নাম"
          }
          description={data?.examination?.examinationName?.en}
        />
        <TitleDescriptionWrapper
          title={
            lang === "en" ? "Examination Name Bangla" : "পরীক্ষার বাংলা নাম"
          }
          description={data?.examination?.examinationName?.bn}
        />
      </InfoWrapper>
    </section>
  );
};

export default ExaminationDetails;
