"use client";
import DataLoader from "@/components/common/DataLoader";
import DataTable from "@/components/common/DataTable";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteExaminationMutation,
  useGetExaminationListQuery,
} from "@/redux/features/admin/examination/examinationApi";
import { LucidePlusSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface IExaminationListProps {
  params: { lang: string };
}

const ExaminationList: FC<IExaminationListProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();
  // ROUTER DECLARATION
  const router = useRouter();

  // EXAMINATION DATA STATE
  const [data, setData] = useState([]);

  // GET EXAMINATION QUERY
  const {
    data: examinationList,
    isLoading: examinationLoading,
    error: examinationError,
  } = useGetExaminationListQuery(undefined) as any;

  // DELETE EXAMINATION MUTATION
  const [
    deleteExamination,
    { isLoading: deleteLoading, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteExaminationMutation({}) as any;

  // CALLBACK FUNCTION FOR DELETE ITEM
  const deleteHandler = async (id: string) => {
    await deleteExamination(id);
  };
  // CALLBACK FUNCTION FOR UPDATE ITEM
  const updateHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(
        `../../../../${lang}/admin/examination_list/edit/${id}`
      );
    }
  };
  // CALLBACK FUNCTION FOR VIEW DETAILS
  const viewDetailsHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(
        `../../../../${lang}/admin/examination_list/details/${id}`
      );
    }
  };
  useEffect(() => {
    setData(examinationList?.examinations);
    if (deleteSuccess) {
      toast({
        title: "Examination Delete Message",
        description: "Examination deleted successfully",
      });
    }
  }, [examinationList, deleteSuccess]);

  const columns = [
    {
      accessorKey: "examinationName",
      header: lang === "en" ? "Examination Name" : "পরীক্ষার নাম",
    },
    {
      accessorKey: "_id",
      header: lang === "en" ? "Examination ID" : "পরীক্ষা আইডি",
    },
    {
      accessorKey: "action",
      header: lang === "en" ? "Action" : "কার্যকলাপ",
    },
  ];

  if (examinationLoading || deleteLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTONS */}
      <div className="my-2 flex justify-end">
        <Link href={`../../../${lang}/admin/examination_list/add`}>
          <Button type="button" variant="link">
            <LucidePlusSquare className="w-4 h-4 mr-1" />
            {lang === "en" ? "Add New Examination" : "নতুন পরীক্ষা যুক্ত করুন"}
          </Button>
        </Link>
      </div>
      {(examinationError && "data" in examinationError) ||
        (deleteError && "data" in deleteError && (
          <Message
            variant="destructive"
            message={
              examinationError?.data?.message || deleteError?.data?.message
            }
          />
        ))}
      {/* DATA TABLES */}
      <DataTable
        lang={lang}
        data={data}
        columns={columns}
        hiddenHeader={"_id"}
        actionButtons={"edit, details, delete"}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        viewDetailsHandler={viewDetailsHandler}
      />
    </section>
  );
};

export default ExaminationList;
