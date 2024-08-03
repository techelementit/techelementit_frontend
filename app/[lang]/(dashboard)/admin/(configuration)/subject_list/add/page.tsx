"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import FormWrapper from "@/components/common/FormWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ADD_OR_EDIT_SUBJECT } from "@/constants/configaration";
import { useAddSubjectMutation } from "@/redux/features/admin/subject/subjectApi";
import { addOrEditSubjectSchema } from "@/schemas/configaration/schemas_for_configaration";
import { useFormik } from "formik";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FC, useEffect } from "react";

interface IAddSubjectProps {
  params: { lang: string };
}

const AddSubject: FC<IAddSubjectProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();
  // FORM LABEL INFORMATION
  const { subjectName } = ADD_OR_EDIT_SUBJECT as any;

  // REDUX
  const [addSubject, { isLoading, isSuccess, error: addError }] =
    useAddSubjectMutation({}) as any;

  // FORMIK FORM
  const formik: any = useFormik({
    initialValues: { subjectName: { en: "", bn: "" } },
    validationSchema: addOrEditSubjectSchema,
    onSubmit: async ({ subjectName }) => {
      await addSubject(subjectName);
    },
  });
  // DESTRUCTURE FORMIK HOOK
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Add Subject Message",
        description: "New subject added successfully",
      });
      // REDIRECT THE SUBJECT LIST PAGE
      return redirect(`../../../../${lang}/admin/subject_list`);
    }
  }, [isSuccess]);
  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/subject_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Subject List" : "বিষয় তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      {/* ADD NEW SUBJECT FORM */}
      <FormWrapper
        size="half"
        heading={lang === "en" ? "Add New Subject" : "নতুন বিষয় সংযুক্ত করুন"}
      >
        <form onSubmit={handleSubmit}>
          {/* SUBJECT NAME ENGLISH */}
          <div className="w-full my-1">
            <label
              htmlFor="subjectNameEn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {subjectName?.en?.label[lang]}
            </label>
            <input
              type="text"
              name="subjectName.en"
              value={values?.subjectName?.en}
              onChange={handleChange}
              onBlur={handleBlur}
              id="subjectNameEn"
              placeholder={subjectName?.en?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.subjectName?.en && touched?.subjectName?.en && (
              <span className="input-error">{errors?.subjectName?.en}</span>
            )}
          </div>
          {/* SUBJECT NAME BANGLA */}
          <div className="w-full my-1">
            <label
              htmlFor="subjectNameBn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {subjectName?.bn?.label[lang]}
            </label>
            <input
              type="text"
              name="subjectName.bn"
              value={values?.subjectName?.bn}
              onChange={handleChange}
              onBlur={handleBlur}
              id="subjectNameBn"
              placeholder={subjectName?.bn?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.subjectName?.bn && touched.subjectName?.bn && (
              <span className="input-error">{errors.subjectName?.bn}</span>
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

export default AddSubject;
