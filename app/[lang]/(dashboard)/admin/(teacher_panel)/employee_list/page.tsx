"use client";
import { LucideMessageSquare } from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDeleteClassMutation } from "@/redux/features/admin/class/classApi";
import DataTable from "@/components/common/DataTable";
import GuideViewer from "@/components/common/GuideViewer";
import { ADD_EMPLOYEE_GUIDE } from "@/constants/employee";
import { useGetEmployeeListQuery } from "@/redux/features/admin/employee/employeeApi";
import DataLoader from "@/components/common/DataLoader";

interface IEmployeeListPageProps {
  params: { lang: string };
}

const EmployeeListPage: FC<IEmployeeListPageProps> = ({ params: { lang } }) => {
  // CLASS DATA STATE
  // const employeeList = useSelector(
  //   (state: any) => state?.employee?.employee_list
  // );
  const [data, setData] = useState([]);

  const router = useRouter();

  // GET CLASS DATA QUERY
  const {
    data: employeeList,
    isLoading: employeeLoading,
    error: employeeError,
    refetch,
  } = useGetEmployeeListQuery(undefined) as any;

  // DELETE CLASS MUTATION
  const [
    deleteClass,
    { isLoading: deleteLoading, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteClassMutation();
  // REFETCH THE QUERY AFTER DELETE THE DATA SUCCESSFULLY

  // CALLBACK FUNCTION FOR DELETE ITEM
  const deleteHandler = async (id: string) => {
    await deleteClass(id);
  };
  // CALLBACK FUNCTION FOR UPDATE ITEM
  const updateHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(`../../../../${lang}/admin/employee_list/edit/${id}`);
    }
  };
  // CALLBACK FUNCTION FOR VIEW DETAILS
  const viewDetailsHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(
        `../../../../${lang}/admin/employee_list/details/${id}`
      );
    }
  };
  useEffect(() => {
    if (employeeList?.employees?.length > 0) {
      setData(
        employeeList?.employees?.map((employee: any) => {
          return {
            name: `${employee.name.firstName}${
              employee.name.sureName && " " + employee.name.sureName
            }`,
            email: employee.email,
            _id: employee._id,
            role: employee.role,
            isVerified: employee.isVerified ? "verified" : "not verified",
          };
        })
      );
    }

    if (employeeError?.data?.message === "jwt expired") {
      refetch();
    }
  }, [employeeList, employeeError]);

  if (employeeLoading || deleteLoading) {
    return <DataLoader />;
  }

  // TABLE COLUMNS
  const columns = [
    {
      accessorKey: "name",
      header: lang === "en" ? "Name" : "নাম",
    },
    {
      accessorKey: "email",
      header: lang === "en" ? "Email" : "ইমেইল",
    },
    {
      accessorKey: "role",
      header: lang === "en" ? "Role" : "ভূমিকা",
    },
    {
      accessorKey: "isVerified",
      header: lang === "en" ? "Status" : "অবস্থা",
    },
    {
      accessorKey: "action",
      header: lang === "en" ? "Action" : "কার্যকলাপ",
    },
  ];
  return (
    <section className="overscroll-contain">
      <div className="my-4 flex justify-end">
        {/* GUIDE FOR ADDING NEW EMPLOYEE */}
        <HoverCard>
          <HoverCardTrigger className="inline-flex items-center text-sm cursor-help">
            <LucideMessageSquare className="w-4 h-4 mr-1" />
            {lang === "en" ? "Add New Employee" : "নতুন শ্রেণি যুক্ত করুন"}
          </HoverCardTrigger>

          <HoverCardContent align="end">
            <GuideViewer
              guideSteps={ADD_EMPLOYEE_GUIDE || []}
              lang={lang}
              heading={
                lang === "en"
                  ? "How to add new employee."
                  : "কিভাবে নতুন এমপ্লয়ই যুক্ত করবেন।"
              }
            />
          </HoverCardContent>
        </HoverCard>
      </div>
      {/* DATA TABLES */}
      <DataTable
        lang={lang}
        data={data}
        columns={columns}
        hiddenHeader={"email, role, isVerified"}
        actionButtons={"edit, details, delete"}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        viewDetailsHandler={viewDetailsHandler}
      />
    </section>
  );
};

export default EmployeeListPage;
