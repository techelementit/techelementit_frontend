"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import FormWrapper from "@/components/common/FormWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ADD_OR_EDIT_EXAMINATION } from "@/constants/configaration";
import { useAddExaminationMutation } from "@/redux/features/admin/examination/examinationApi";
import { addOrEditExaminationSchema } from "@/schemas/configaration/schemas_for_configaration";
import { useFormik } from "formik";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FC, useEffect } from "react";

interface IAddExaminationProps {
  params: { lang: string };
}

const AddExamination: FC<IAddExaminationProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();
  // FORM LABEL & PLACEHOLDER INFORMATION
  const { examinationName } = ADD_OR_EDIT_EXAMINATION as any;

  // ADD NEW EXAMINATION MUTATION
  const [addExamination, { isLoading, isSuccess, error: addError }] =
    useAddExaminationMutation({}) as any;

  // FORMIK FORM
  const formik: any = useFormik({
    initialValues: { examinationName: { en: "", bn: "" } },
    validationSchema: addOrEditExaminationSchema,
    onSubmit: async ({ examinationName }) => {
      await addExamination(examinationName);
    },
  });

  // DESTRUCTURE FORMIK HOOK
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Add Examination Message",
        description: "Examination added successfully",
      });
      // REDIRECT THE EXAMINATION LIST PAGE
      return redirect(`../../../../${lang}/admin/examination_list`);
    }
  }, [isSuccess]);
  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/examination_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en"
              ? "Back To Examination List"
              : "পরীক্ষার তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      {/* ADD NEW EXAMINATION FORM */}
      <FormWrapper
        size="half"
        heading={
          lang === "en" ? "Add New Examination" : "নতুন পরীক্ষা সংযুক্ত করুন"
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
              disabled={isLoading}
              className={`duration-500 ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
              type="submit"
              variant="default"
              size="rounded"
            >
              {isLoading && <ButtonLoader />}
              {`${lang === "en" ? "Add Now" : "এখন সংযুক্ত করুন"}`}
            </Button>
          </div>
          {addError && "data" in addError && (
            <div className="mt-6">
              <Message
                variant="destructive"
                message={addError?.data?.message}
              />
            </div>
          )}
        </form>
      </FormWrapper>
    </section>
  );
};

export default AddExamination;
