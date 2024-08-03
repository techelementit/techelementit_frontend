"use client";
import DataLoader from "@/components/common/DataLoader";
import DataTable from "@/components/common/DataTable";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteSectionMutation,
  useGetSectionListQuery,
} from "@/redux/features/admin/section/sectionApi";
import { LucidePlusSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface ISectionListProps {
  params: { lang: string };
}

const SectionList: FC<ISectionListProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();
  // ROUTER DECLARATION
  const router = useRouter();
  // SECTION STATE
  const [data, setData] = useState([]);
  // GET SECTION QUERY
  const {
    data: sectionList,
    isLoading: sectionLoading,
    error: sectionError,
  } = useGetSectionListQuery(undefined) as any;

  // DELETE SECTION MUTATION
  const [
    deleteSection,
    { isLoading: deleteLoading, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteSectionMutation({}) as any;

  // CALLBACK FUNCTION FOR DELETE ITEM
  const deleteHandler = async (id: string) => {
    await deleteSection(id);
  };
  // CALLBACK FUNCTION FOR UPDATE ITEM
  const updateHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(`../../../../${lang}/admin/section_list/edit/${id}`);
    }
  };
  // CALLBACK FUNCTION FOR VIEW DETAILS
  const viewDetailsHandler = async (id: string) => {
    if (typeof window !== "undefined") {
      return router.push(
        `../../../../${lang}/admin/section_list/details/${id}`
      );
    }
  };

  useEffect(() => {
    setData(sectionList?.sections);

    if (deleteSuccess) {
      toast({
        title: "Section Delete Message",
        description: "Section deleted successfully",
      });
    }
  }, [sectionList, deleteSuccess]);

  const columns = [
    {
      accessorKey: "sectionName",
      header: lang === "en" ? "Section Name" : "শাখার নাম",
    },
    { accessorKey: "_id", header: lang === "en" ? "Section ID" : "শাখা আইডি" },
    {
      accessorKey: "action",
      header: lang === "en" ? "Action" : "কার্যকলাপ",
    },
  ];

  if (sectionLoading || deleteLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTONS */}
      <div className="my-2 flex justify-end">
        <Link href={`../../../${lang}/admin/section_list/add`}>
          <Button type="button" variant="link">
            <LucidePlusSquare className="w-4 h-4 mr-1" />
            {lang === "en" ? "Add New Section" : "নতুন শাখা যুক্ত করুন"}
          </Button>
        </Link>
      </div>

      {(sectionError && "data" in sectionError) ||
        (deleteError && "data" in deleteError && (
          <Message
            variant="destructive"
            message={sectionError?.data?.message || deleteError?.data?.message}
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

export default SectionList;
