"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import FormWrapper from "@/components/common/FormWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ADD_OR_EDIT_EXAMINATION } from "@/constants/configaration";
import {
  useEditExaminationMutation,
  useGetSingleExaminationQuery,
} from "@/redux/features/admin/examination/examinationApi";
import { addOrEditExaminationSchema } from "@/schemas/configaration/schemas_for_configaration";
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

const EditExamination: FC<IEditSectionProps> = ({ params: { lang } }) => {
  // SELECTED EXAMINATION ID
  const { examination_id } = useParams() as any;
  // GET SINGLE SUBJECT QUERY
  const {
    data,
    isLoading: examinationLoading,
    error: examinationError,
  } = useGetSingleExaminationQuery(examination_id) as any;

  // EDIT SUBJECT MUTATION
  const [
    editExamination,
    { isLoading: editLoading, isSuccess, error: editError },
  ] = useEditExaminationMutation({}) as any;

  // TOAST HOOK
  const { toast } = useToast();
  // FORM LABEL INFORMATION
  const { examinationName } = ADD_OR_EDIT_EXAMINATION as any;

  // FORMIK FORM
  const formik: any = useFormik({
    initialValues: { examinationName: { en: "", bn: "" } },
    validationSchema: addOrEditExaminationSchema,
    onSubmit: async ({ examinationName }) => {
      await editExamination({ id: examination_id, data: examinationName });
    },
  });

  // DESTRUCTURE FORMIK HOOK
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
        title: "Update Examination Message",
        description: "Examination updated successfully",
      });
      // REDIRECT THE EXAMINATION LIST PAGE
      return redirect(`../../../../${lang}/admin/examination_list`);
    }
    if (data) {
      setValues({
        examinationName: {
          en: data?.examination?.examinationName?.en,
          bn: data?.examination?.examinationName?.bn,
        },
      });
    }
  }, [isSuccess, data]);
  if (examinationLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/section_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en"
              ? "Back To Examination List"
              : "পরীক্ষার তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      {/* EDIT EXAMINATION FORM */}
      <FormWrapper
        size="half"
        heading={
          lang === "en"
            ? "Update Existing Examination"
            : "বিদ্যমান পরীক্ষা সম্পাদন করুন"
        }
      >
        <form onSubmit={handleSubmit}>
          {/* EXAMINATION NAME ENGLISH */}
          <div className="w-full my-1">
            <label
              htmlFor="examinationNameEn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {examinationName?.en?.label[lang]}
            </label>
            <input
              type="text"
              name="examinationName.en"
              value={values?.examinationName?.en}
              onChange={handleChange}
              onBlur={handleBlur}
              id="examinationNameEn"
              placeholder={examinationName?.en?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.examinationName?.en && touched?.examinationName?.en && (
              <span className="input-error">{errors?.examinationName?.en}</span>
            )}
          </div>
          {/* EXAMINATION NAME BANGLA */}
          <div className="w-full my-1">
            <label
              htmlFor="examinationNameBn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {examinationName?.bn?.label[lang]}
            </label>
            <input
              type="text"
              name="examinationName.bn"
              value={values?.examinationName?.bn}
              onChange={handleChange}
              onBlur={handleBlur}
              id="examinationNameBn"
              placeholder={examinationName?.bn?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.examinationName?.bn && touched.examinationName?.bn && (
              <span className="input-error">{errors.examinationName?.bn}</span>
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
          {(examinationError && "data" in examinationError) ||
            (editError && "data" in editError && (
              <div className="mt-6">
                <Message
                  variant="destructive"
                  message={
                    examinationError?.data?.message || editError?.data?.message
                  }
                />
              </div>
            ))}
        </form>
      </FormWrapper>
    </section>
  );
};

export default EditExamination;
