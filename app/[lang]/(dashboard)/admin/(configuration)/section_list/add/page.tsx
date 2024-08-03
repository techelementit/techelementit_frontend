"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import FormWrapper from "@/components/common/FormWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ADD_OR_EDIT_SECTION } from "@/constants/configaration";
import { useAddSectionMutation } from "@/redux/features/admin/section/sectionApi";
import { addOrEditSectionSchema } from "@/schemas/configaration/schemas_for_configaration";
import { useFormik } from "formik";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FC, useEffect } from "react";

interface IAddSectionProps {
  params: { lang: string };
}

const AddSection: FC<IAddSectionProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();
  // FORM LABEL & PLACEHOLDER INFORMATION
  const { sectionName } = ADD_OR_EDIT_SECTION as any;

  // ADD SECTION MUTATION
  const [addSection, { isLoading: addLoading, isSuccess, error: addError }] =
    useAddSectionMutation({}) as any;

  // FORMIK FORM
  const formik: any = useFormik({
    initialValues: { sectionName: { en: "", bn: "" } },
    validationSchema: addOrEditSectionSchema,
    onSubmit: async ({ sectionName }) => {
      await addSection(sectionName);
    },
  });

  // DESTRUCTURE FOMMIK HOOK
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Add Subject Message",
        description: "New subject added successfully",
      });
      // REDIRECT THE SECTION LIST
      return redirect(`../../../../${lang}/admin/section_list`);
    }
  }, [isSuccess]);
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
      {/* ADD NEW SECTION FORM */}
      <FormWrapper
        size="half"
        heading={lang === "en" ? "Add New Section" : "নতুন শাখা সংযুক্ত করুন"}
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
              disabled={addLoading}
              className={`duration-500 ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
              type="submit"
              variant="default"
              size="rounded"
            >
              {addLoading && <ButtonLoader />}
              {`${lang === "en" ? "Add Now" : "এখন সংযুক্ত করুন"}`}
            </Button>
          </div>
        </form>
        {addError && "data" in addError && (
          <div className="mt-6">
            <Message variant="destructive" message={addError?.data?.message} />
          </div>
        )}
      </FormWrapper>
    </section>
  );
};

export default AddSection;
