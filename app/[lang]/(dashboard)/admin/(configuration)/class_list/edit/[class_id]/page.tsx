"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import FormWrapper from "@/components/common/FormWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ADD_OR_EDIT_CLASS } from "@/constants/configaration";
import {
  useEditClassMutation,
  useGetClassListQuery,
  useGetSingleClassQuery,
} from "@/redux/features/admin/class/classApi";

import { addOrEditClassSchema } from "@/schemas/configaration/schemas_for_configaration";
import { useFormik } from "formik";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import React, { FC, useEffect } from "react";
import DataLoader from "@/components/common/DataLoader";

interface IAddClassProps {
  params: { lang: string };
}

const EditClass: FC<IAddClassProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();

  // FORM LABEL INFORMATION
  const { className } = ADD_OR_EDIT_CLASS as any;

  // SELECTED CLASS ID
  const { class_id } = useParams() as any;

  // QUERY FOR SELECTED CLASS DATA
  const {
    data,
    isLoading: classLoading,
    error: classError,
  } = useGetSingleClassQuery(class_id) as any;

  // EDIT CLASS MUTATION
  const [editClass, { isLoading: editLoading, isSuccess, error: editError }] =
    useEditClassMutation({}) as any;

  // FORMIK FORM
  const formik: any = useFormik({
    initialValues: {
      className: { en: "", bn: "" },
    },
    validationSchema: addOrEditClassSchema,
    onSubmit: async ({ className }) => {
      await editClass({ class_id, updateClass: className });
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
        title: "Class Update Message",
        description: "Class updated successfully",
      });

      // REDIRECT THE CLASS LIST PAGE
      return redirect(`../../../../${lang}/admin/class_list`);
    }
    if (data) {
      setValues({
        className: {
          en: data?.class?.className?.en,
          bn: data?.class?.className?.bn,
        },
      });
    }
  }, [isSuccess, data]);

  if (classLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/class_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Class List" : "শ্রেণি তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      {/* EDIT CLASS FORM */}
      <FormWrapper
        size="half"
        heading={
          lang === "en"
            ? "Update Existing Class"
            : "বিদ্যমান শ্রেণি সম্পাদন করুন"
        }
      >
        <form onSubmit={handleSubmit}>
          {/* CLASS NAME ENGLISH */}
          <div className="w-full my-1">
            <label
              htmlFor="classNameEn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {className?.en?.label[lang]}
            </label>
            <input
              type="text"
              name="className.en"
              value={values?.className?.en}
              onChange={handleChange}
              onBlur={handleBlur}
              id="classNameEn"
              placeholder={className?.en?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.className?.en && touched?.className?.en && (
              <span className="input-error">{errors?.className?.en}</span>
            )}
          </div>
          {/* CLASS NAME BANGLA */}
          <div className="w-full my-1">
            <label
              htmlFor="classNameBn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {className?.bn?.label[lang]}
            </label>
            <input
              type="text"
              name="className.bn"
              value={values?.className?.bn}
              onChange={handleChange}
              onBlur={handleBlur}
              id="classNameBn"
              placeholder={className?.bn?.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.className?.bn && touched.className?.bn && (
              <span className="input-error">{errors.className?.bn}</span>
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
              size="default"
            >
              {editLoading && <ButtonLoader />}
              {`${lang === "en" ? "Update Now" : "এখনই সম্পাদন করুন"}`}
            </Button>
          </div>
          {(classError && "data" in classError) ||
            (editError && "data" in editError && (
              <div className="mt-6">
                <Message
                  variant="destructive"
                  message={
                    classError?.data?.message || editError?.data?.message
                  }
                />
              </div>
            ))}
        </form>
      </FormWrapper>
    </section>
  );
};

export default EditClass;
