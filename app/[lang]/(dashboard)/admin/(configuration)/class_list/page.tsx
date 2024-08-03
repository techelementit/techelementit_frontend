"use client";
import DataLoader from "@/components/common/DataLoader";
import DataTable from "@/components/common/DataTable";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteClassMutation,
  useGetClassListQuery,
} from "@/redux/features/admin/class/classApi";
import { LucidePlusSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface IClassListProps {
  params: { lang: string };
}

const ClassList: FC<IClassListProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();

  // ROUTER DECLARATION
  const router = useRouter();

  // CLASS DATA STATE
  const [data, setData] = useState([]);

  // GET CLASS DATA QUERY
  const {
    data: classList,
    isLoading: classLoading,
    error: classError,
  } = useGetClassListQuery(undefined) as any;

  // DELETE CLASS MUTATION
  const [
    deleteClass,
    { isLoading: deleteLoading, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteClassMutation() as any;
  // REFETCH THE QUERY AFTER DELETE THE DATA SUCCEFULLY

  // CALLBACK FUNCTION FOR DELETE ITEM
  const deleteHandler = async (id: string) => {
    await deleteClass(id);
  };
  // CALLBACK FUNCTION FOR UPDATE ITEM
  const updateHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(`../../../../${lang}/admin/class_list/edit/${id}`);
    }
  };
  // CALLBACK FUNCTION FOR VIEW DETAILS
  const viewDetailsHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(`../../../../${lang}/admin/class_list/details/${id}`);
    }
  };

  useEffect(() => {
    if (classList?.classes?.length > 0) {
      setData(classList.classes);
    }
    if (deleteSuccess) {
      toast({
        title: "Class Delete Message",
        description: "Class deleted successfully",
      });
    }
  }, [classList, deleteSuccess]);

  if (classLoading || deleteLoading) {
    return <DataLoader />;
  }

  // TABLE COLUMNS
  const columns = [
    {
      accessorKey: "className",
      header: lang === "en" ? "Class Name" : "ক্লাসের নাম",
    },
    {
      accessorKey: "_id",
      header: lang === "en" ? "Class ID" : "ক্লাস আইডি",
    },
    {
      accessorKey: "action",
      header: lang === "en" ? "Action" : "কার্যকলাপ",
    },
  ];

  return (
    <section>
      {/* NAVIGATION BUTTONS */}
      <div className="my-2 flex justify-end">
        <Link href={`../../../${lang}/admin/class_list/add`}>
          <Button type="button" variant="link">
            <LucidePlusSquare className="w-4 h-4 mr-1" />
            {lang === "en" ? "Add New Class" : "নতুন শ্রেণি যুক্ত করুন"}
          </Button>
        </Link>
      </div>
      {(deleteError && "data" in deleteError) ||
        (classError && "data" in classError && (
          <Message
            variant="destructive"
            message={deleteError?.data?.message || classError?.data?.message}
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

export default ClassList;
