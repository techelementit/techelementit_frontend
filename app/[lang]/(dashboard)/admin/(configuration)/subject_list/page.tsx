"use client";
import DataLoader from "@/components/common/DataLoader";
import DataTable from "@/components/common/DataTable";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteSubjectMutation,
  useGetSubjectListQuery,
} from "@/redux/features/admin/subject/subjectApi";
import { LucidePlusSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface ISubjectListProps {
  params: { lang: string };
}

const SubjectList: FC<ISubjectListProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();
  // ROUTER DECLARATION
  const router = useRouter();
  // SUBJECT STATE
  const [data, setData] = useState([]);

  // GET SUBJECTS QUERY
  const {
    data: subjectList,
    isLoading: subjectLoading,
    error: subjectError,
  } = useGetSubjectListQuery(undefined) as any;

  // DELETE SUBJECT MUTATION
  const [
    deleteSubject,
    { isLoading: deleteLoading, isSuccess, error: deleteError },
  ] = useDeleteSubjectMutation({}) as any;

  // CALLBACK FUNCTION FOR DELETE ITEM
  const deleteHandler = async (id: string) => {
    await deleteSubject(id);
  };
  // CALLBACK FUNCTION FOR UPDATE ITEM
  const updateHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(`../../../../${lang}/admin/subject_list/edit/${id}`);
    }
  };
  // CALLBACK FUNCTION FOR VIEW DETAILS
  const viewDetailsHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(
        `../../../../${lang}/admin/subject_list/details/${id}`
      );
    }
  };
  useEffect(() => {
    setData(subjectList?.subjects);
    if (isSuccess) {
      toast({
        title: "Delele Subject Message",
        description: "Subject deleted successfully",
      });
    }
  }, [subjectList, isSuccess]);

  // SUBJECTS LIST COLUMNS
  const columns = [
    {
      accessorKey: "subjectName",
      header: lang === "en" ? "Subject Name" : "বিষয়ের নাম",
    },
    { accessorKey: "_id", header: lang === "en" ? "Class ID" : "বিষয় আইডি" },
    {
      accessorKey: "action",
      header: lang === "en" ? "Action" : "কার্যকলাপ",
    },
  ];
  if (subjectLoading || deleteLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTONS */}
      <div className="my-2 flex justify-end">
        <Link href={`../../../${lang}/admin/subject_list/add`}>
          <Button type="button" variant="link">
            <LucidePlusSquare className="w-4 h-4 mr-1" />
            {lang === "en" ? "Add New Subject" : "নতুন বিষয় যুক্ত করুন"}
          </Button>
        </Link>
      </div>

      {(subjectError && "data" in subjectError) ||
        (deleteError && "data" in deleteError && (
          <Message
            variant="destructive"
            message={subjectError?.data?.message || deleteError?.data?.message}
          />
        ))}
      {/* DATA TABLE */}
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

export default SubjectList;
