"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import FormWrapper from "@/components/common/FormWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ADD_OR_EDIT_SECTION } from "@/constants/configaration";
import {
  useEditSectionMutation,
  useGetSingleSectionQuery,
} from "@/redux/features/admin/section/sectionApi";
import { addOrEditSectionSchema } from "@/schemas/configaration/schemas_for_configaration";
import { useFormik } from "formik";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import React, { FC, useEffect } from "react";
import DataLoader from "@/components/common/DataLoader";

interface IEditSectionProps {
  params: {
    lang: string;
  };
}

const EditSection: FC<IEditSectionProps> = ({ params: { lang } }) => {
  // SELECTED SECTION ID
  const { section_id } = useParams() as any;
  // GET SINGLE SUBJECT QUERY

  const {
    data,
    isLoading: sectionLoading,
    error: sectionError,
  } = useGetSingleSectionQuery(section_id) as any;

  // EDIT SUBJECT MUTATION
  const [editSection, { isLoading: editLoading, isSuccess, error: editError }] =
    useEditSectionMutation({}) as any;

  // TOAST HOOK
  const { toast } = useToast();
  // FORM LABEL INFORMATION
  const { sectionName } = ADD_OR_EDIT_SECTION as any;

  // FORMIK FORM
  const formik: any = useFormik({
    initialValues: { sectionName: { en: "", bn: "" } },
    validationSchema: addOrEditSectionSchema,
    onSubmit: async ({ sectionName }) => {
      await editSection({ id: section_id, data: sectionName });
    },
  });
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Update Section Message",
        description: "Section updated successfully",
      });
      // REDIRECT THE SECTION PAGE
      return redirect(`../../../../${lang}/admin/section_list`);
    }
    if (data) {
      setValues({
        sectionName: {
          en: data?.section?.sectionName?.en,
          bn: data?.section?.sectionName?.bn,
        },
      });
    }
  }, [isSuccess, data]);

  if (sectionLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/section_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Section List" : "শাখার তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      {/* EDIT SECTION FORM */}
      <FormWrapper
        size="half"
        heading={
          lang === "en"
            ? "Update Existing Section"
            : "বিদ্যমান শাখা সম্পাদন করুন"
        }
      >
        <form onSubmit={handleSubmit}>
          {/* SECTION NAME ENGLISH */}
          <div className="w-full my-1">
            <label
              htmlFor="sectionNameEn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {sectionName?.en?.label[lang]}
            </label>
            <input
              type="text"
              name="sectionName.en"
              value={values?.sectionName?.en}
              onChange={handleChange}
              onBlur={handleBlur}
              id="sectionNameEn"
              placeholder={sectionName?.en?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.sectionName?.en && touched?.sectionName?.en && (
              <span className="input-error">{errors?.sectionName?.en}</span>
            )}
          </div>
          {/* SECTION NAME BANGLA */}
          <div className="w-full my-1">
            <label
              htmlFor="sectionNameBn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {sectionName?.bn?.label[lang]}
            </label>
            <input
              type="text"
              name="sectionName.bn"
              value={values?.sectionName?.bn}
              onChange={handleChange}
              onBlur={handleBlur}
              id="sectionNameBn"
              placeholder={sectionName?.bn?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.sectionName?.bn && touched.sectionName?.bn && (
              <span className="input-error">{errors.sectionName?.bn}</span>
            )}
          </div>

          <div className="mt-4 w-full flex justify-between ">
            <div className="w-full"></div>
            <Button
              disabled={editLoading}
              className={`duration-500 ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
              type="submit"
              variant="default"
              size="rounded"
            >
              {editLoading && <ButtonLoader />}
              {`${lang === "en" ? "Update Now" : "এখন সম্পাদন করুন"}`}
            </Button>
          </div>
          {(sectionError && "data" in sectionError) ||
            (editError && "data" in editError && (
              <div className="mt-6">
                <Message
                  variant="destructive"
                  message={
                    sectionError?.data?.message || editError?.data?.message
                  }
                />
              </div>
            ))}
        </form>
      </FormWrapper>
    </section>
  );
};

export default EditSection;
