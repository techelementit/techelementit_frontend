"use client";
import DataLoader from "@/components/common/DataLoader";
import PageLoader from "@/components/common/PageLoader";
import EmployeeProfileView from "@/components/profile/EmployeeProfileView";
import { Button } from "@/components/ui/button";
import { useGetSingleEmployeeQuery } from "@/redux/features/admin/employee/employeeApi";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

interface IEmployeeDetailsProps {
  params: { lang: string };
}

const EmployeeDetails: FC<IEmployeeDetailsProps> = ({ params: { lang } }) => {
  // FORM LABEL INFORMATION

  const { employee_id } = useParams() as any;
  const {
    data,
    isLoading: employeeLoading,
    refetch,
  } = useGetSingleEmployeeQuery(employee_id) as any;

  if (employeeLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/employee_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Employee List" : "এমপ্লয়ই তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>

      {/* DETAILS SECTION */}
      <section className={`${lang === "en" ? "font-poppins" : "font-anek"}`}>
        {data?.employee && (
          <EmployeeProfileView lang={lang} authData={data?.employee} />
        )}
      </section>
    </section>
  );
};

export default EmployeeDetails;
