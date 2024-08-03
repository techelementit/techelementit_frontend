"use client";
import DataLoader from "@/components/common/DataLoader";
import DataTable from "@/components/common/DataTable";
import { Button } from "@/components/ui/button";
import { LucidePlusSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface IClassroomListProps {
  params: { lang: string };
}

const ClassroomList: FC<IClassroomListProps> = ({ params: { lang } }) => {
  // CLASS DATA STATE
  const [data, setData] = useState([]);
  // ROUTER DECLARATION
  const router = useRouter();

  // GET CLASS DATA QUERY
  // const {
  //   data: classList,
  //   isLoading: classLoading,
  //   error: classError,
  // } = useGetClassListQuery(undefined) as any;

  // DELETE CLASS MUTATION
  // const [
  //   deleteClass,
  //   { isLoading: deleteLoading, isSuccess: deleteSuccess, error: deleteError },
  // ] = useDeleteClassMutation() as any;
  // REFETCH THE QUERY AFTER DELETE THE DATA SUCCEFULLY

  // CALLBACK FUNCTION FOR DELETE ITEM
  const deleteHandler = async (id: string) => {
    // await deleteClass(id);
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

  // useEffect(() => {
  //   if (classList?.classes?.length > 0) {
  //     setData(classList.classes);
  //   }
  //   if (deleteSuccess) {
  //     toast({
  //       title: "Class Delete Message",
  //       description: "Class deleted successfully",
  //     });
  //   }
  // }, [classList, deleteSuccess]);

  // if (classLoading || deleteLoading) {
  //   return <DataLoader />;
  // }

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
        <Link href={`../../../${lang}/admin/classroom_list/add`}>
          <Button type="button" variant="link">
            <LucidePlusSquare className="w-4 h-4 mr-1" />
            {lang === "en" ? "Add New Classroom" : "নতুন শ্রেণিকক্ষ যুক্ত করুন"}
          </Button>
        </Link>
      </div>
      {/* {(deleteError && "data" in deleteError) ||
        (classError && "data" in classError && (
          <Message
            varient="destructive"
            message={deleteError?.data?.message || classError?.data?.message}
          />
        ))} */}
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

export default ClassroomList;
