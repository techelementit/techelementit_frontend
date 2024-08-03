"use client";
import DataLoader from "@/components/common/DataLoader";
import InfoWrapper from "@/components/common/InfoWrapper";
import Message from "@/components/common/Message";
import TitleDescriptionWrapper from "@/components/common/TitleDescriptionWrapper";
import { Button } from "@/components/ui/button";
import { useGetSingleClassQuery } from "@/redux/features/admin/class/classApi";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC } from "react";

interface IClassDetailsProps {
  params: { lang: string };
}

const ClassDetails: FC<IClassDetailsProps> = ({ params: { lang } }) => {
  // SELECTED CLASS ID
  const { class_id } = useParams() as any;
  // QUERY FOR SELECTED CLASS DATA
  const {
    data,
    isLoading: getClassLoading,
    error: classError,
  } = useGetSingleClassQuery(class_id) as any;

  if (getClassLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/class_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Class List" : "শ্রেণি তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>

      {classError && "data" in classError && (
        <Message variant="destructive" message={classError?.data?.message} />
      )}

      {/* DETAILS SECTION */}
      <InfoWrapper
        heading={lang === "en" ? "Class Information" : "ক্লাসের তথ্য"}
      >
        <TitleDescriptionWrapper
          title={lang === "en" ? "Class Name English" : "ক্লাসের ইংরেজি নাম"}
          description={data?.class?.className?.en}
        />
        <TitleDescriptionWrapper
          title={lang === "en" ? "Class Name Bangla" : "ক্লাসের বাংলা নাম"}
          description={data?.class?.className?.bn}
        />
      </InfoWrapper>
    </section>
  );
};

export default ClassDetails;
