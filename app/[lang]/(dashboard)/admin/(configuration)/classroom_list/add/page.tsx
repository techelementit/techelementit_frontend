"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import DataLoader from "@/components/common/DataLoader";
import FormWrapper from "@/components/common/FormWrapper";
import LabelInputErrorWrapper from "@/components/common/LabelInputErrorWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ADD_OR_EDIT_CLASSROOM } from "@/constants/configaration";
import { useAddClassMutation } from "@/redux/features/admin/class/classApi";
import {
  useAddClassroomMutation,
  useGetClassroomUtilityQuery,
} from "@/redux/features/admin/classroom/classroomApi";
import {
  addOrEditClassSchema,
  addOrEditClassroomSchema,
} from "@/schemas/configaration/schemas_for_configaration";
import { useFormik } from "formik";
import {
  LucideChevronLeftCircle,
  LucidePlusCircle,
  LucideTrash2,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

import { digitConverter } from "@/utils/HelperFunctions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface IAddClassProps {
  params: { lang: string };
}

const AddClass: FC<IAddClassProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();

  // ADD CLASSROOM UTILITY QUERY
  const {
    data: utility,
    isLoading: utilityLoading,
    error: utilityError,
  } = useGetClassroomUtilityQuery(undefined) as any;

  // FORM LABEL INFORMATION
  const {
    classId,
    sectionId,
    subjectsTeachersList: {
      teacherId,
      subjectId,
      subjectFullMark,
      subjectPassMark,
    },
  } = ADD_OR_EDIT_CLASSROOM as any;
  const [update, setUpdate] = useState(false);

  // ADD CLASSROOM MUTATION
  const [
    addClassroom,
    { data: addData, isLoading: addLoading, isSuccess, error: addError },
  ] = useAddClassroomMutation({}) as any;

  // ADD CLASSROOM INITIAL DATA
  const initialValues = {
    classId: "",
    sectionId: "",
    subjectsTeachersList: [
      {
        teacherId: "",
        subjectId: "",
        subjectFullMark: "",
        subjectPassMark: "",
      },
    ],
  };

  // FORMIK FORM
  const formik: any = useFormik({
    initialValues,
    validationSchema: addOrEditClassroomSchema,
    onSubmit: async (initialValues) => {
      await addClassroom(initialValues);
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
      // toast({
      //   title: "Add Classroom Message",
      //   description: "New classroom added successfully",
      // });
      // // REDIRECT THE PROFILE PAGE
      // return redirect(`../../../../${lang}/admin/classroom_list`);
    }
  }, [isSuccess]);

  console.log(addError, "addError");
  // console.log(values, "va");
  console.log(addData, "addDtat");

  if (utilityLoading) {
    return <DataLoader />;
  }

  return (
    <section className="pb-8">
      {/* NAVIGATION BUTTON */}
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/classroom_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en"
              ? "Back To Classroom List"
              : "শ্রেণিকক্ষ তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      {/* ADD NEW CLASS FORM */}
      <FormWrapper
        size="full"
        heading={
          lang === "en" ? "Add New Classroom" : "নতুন শ্রেণিকক্ষ সংযুক্ত করুন"
        }
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
            {/* TEACHER FOR CLASS */}
            <LabelInputErrorWrapper>
              <label
                htmlFor="classId"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {classId.label[lang]}
              </label>
              <Select
                value={values?.classId}
                onOpenChange={(value) => setUpdate(value)}
                onValueChange={(value) => {
                  if (update) {
                    setValues({
                      ...values,
                      classId: value,
                    });
                  }
                }}
              >
                <SelectTrigger
                  className={`dropdown-triger-form  ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  <SelectValue placeholder={classId.placeholder[lang]} />
                </SelectTrigger>
                <SelectContent className="flex flex-col">
                  {utility?.classes?.length > 0 &&
                    utility?.classes?.map((classItem: any) => (
                      <SelectItem
                        key={classItem._id}
                        className={`cursor-pointer regular-16 ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                        value={classItem._id}
                      >
                        {classItem?.className[lang]}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {errors?.classId && (
                <span className="input-error">{errors?.classId}</span>
              )}
            </LabelInputErrorWrapper>
            {/* TEACHER FOR SECTION */}
            <LabelInputErrorWrapper>
              <label
                htmlFor="sectionId"
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {sectionId.label[lang]}
              </label>
              <Select
                value={values?.sectionId}
                onOpenChange={(value) => setUpdate(value)}
                onValueChange={(value) => {
                  if (update) {
                    setValues({
                      ...values,
                      sectionId: value,
                    });
                  }
                }}
              >
                <SelectTrigger
                  className={`dropdown-triger-form  ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  <SelectValue placeholder={sectionId.placeholder[lang]} />
                </SelectTrigger>
                <SelectContent className="flex flex-col">
                  {utility?.sections?.length > 0 &&
                    utility?.sections?.map((sectionItem: any) => (
                      <SelectItem
                        key={sectionItem._id}
                        className={`cursor-pointer regular-16 ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                        value={sectionItem._id}
                      >
                        {sectionItem?.sectionName[lang]}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {errors?.sectionId && (
                <span className="input-error">{errors?.sectionId}</span>
              )}
            </LabelInputErrorWrapper>
          </div>

          <div className="mt-12">
            {values?.subjectsTeachersList?.length > 0 &&
              values?.subjectsTeachersList.map(
                (_: any, subjectTeacherIndex: number) => (
                  <div
                    className="border-t-2  my-6 border-primary/5 relative"
                    key={subjectTeacherIndex}
                  >
                    <div className="text-center !absolute left-1/2 top-0 -translate-y-[63%] md:-translate-y-[53%] -translate-x-1/2 select-none">
                      <span
                        className={`bg-primary/5 text-xs md:text-base  text-center px-2 md:px-4 leading-none rounded-full w-full -z-10 !backdrop-blur-sm ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                      >
                        {lang === "en"
                          ? `Subject  ${subjectTeacherIndex + 1}`
                          : `বিষয় ${digitConverter(
                              subjectTeacherIndex + 1,
                              lang
                            )}`}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 md:gap-x-4 mt-6">
                      {/* SUBJECT */}
                      <LabelInputErrorWrapper>
                        <label
                          htmlFor={`subjectsTeachersList.sujectId${subjectTeacherIndex}`}
                          className={`input-label ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        >
                          {subjectId.label[lang]}
                        </label>
                        <Select
                          value={
                            values?.subjectsTeachersList[subjectTeacherIndex]
                              .subjectId
                          }
                          onOpenChange={(value) => setUpdate(value)}
                          onValueChange={(value) => {
                            if (update) {
                              const updateSujcetsTeachersList =
                                values.subjectsTeachersList.map(
                                  (item: any, currentIndex: number) => {
                                    if (currentIndex === subjectTeacherIndex) {
                                      return { ...item, subjectId: value };
                                    }
                                    return item;
                                  }
                                );
                              setValues({
                                ...values,
                                subjectsTeachersList: updateSujcetsTeachersList,
                              });
                            }
                          }}
                        >
                          <SelectTrigger
                            className={`dropdown-triger-form  ${
                              lang === "en" ? "font-poppins" : "font-anek"
                            }`}
                          >
                            <SelectValue
                              placeholder={subjectId.placeholder[lang]}
                            />
                          </SelectTrigger>
                          <SelectContent className="flex flex-col">
                            {utility?.subjects?.length > 0 &&
                              utility?.subjects?.map((subjectItem: any) => (
                                <SelectItem
                                  key={subjectItem._id}
                                  className={`cursor-pointer regular-16 ${
                                    lang === "en" ? "font-poppins" : "font-anek"
                                  }`}
                                  value={subjectItem._id}
                                >
                                  {subjectItem?.subjectName[lang]}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        {errors?.subjectsTeachersList?.length > 0 &&
                          errors?.subjectsTeachersList[subjectTeacherIndex]
                            ?.subjectId && (
                            <span className="input-error">
                              {
                                errors?.subjectsTeachersList[
                                  subjectTeacherIndex
                                ]?.subjectId
                              }
                            </span>
                          )}
                      </LabelInputErrorWrapper>
                      {/* TEACHER */}
                      <LabelInputErrorWrapper>
                        <label
                          htmlFor={`subjectsTeachersList.teacherId${subjectTeacherIndex}`}
                          className={`input-label ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        >
                          {teacherId.label[lang]}
                        </label>
                        <Select
                          value={
                            values?.subjectsTeachersList[subjectTeacherIndex]
                              .teacherId
                          }
                          onOpenChange={(value) => setUpdate(value)}
                          onValueChange={(value) => {
                            if (update) {
                              const updateSujcetsTeachersList =
                                values.subjectsTeachersList.map(
                                  (item: any, currentIndex: number) => {
                                    if (currentIndex === subjectTeacherIndex) {
                                      return { ...item, teacherId: value };
                                    }
                                    return item;
                                  }
                                );
                              setValues({
                                ...values,
                                subjectsTeachersList: updateSujcetsTeachersList,
                              });
                            }
                          }}
                        >
                          <SelectTrigger
                            className={`dropdown-triger-form  ${
                              lang === "en" ? "font-poppins" : "font-anek"
                            }`}
                          >
                            <SelectValue
                              placeholder={teacherId.placeholder[lang]}
                            />
                          </SelectTrigger>
                          <SelectContent className="flex flex-col">
                            {utility?.employees?.length > 0 &&
                              utility?.employees?.map((employeeItem: any) => (
                                <SelectItem
                                  key={employeeItem._id}
                                  className={`cursor-pointer regular-16 ${
                                    lang === "en" ? "font-poppins" : "font-anek"
                                  }`}
                                  value={employeeItem._id}
                                >
                                  {`${employeeItem?.name?.firstName} ${
                                    employeeItem?.name?.sureName
                                      ? employeeItem?.name?.sureName
                                      : ""
                                  }`}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        {errors?.subjectsTeachersList?.length > 0 &&
                          errors?.subjectsTeachersList[subjectTeacherIndex]
                            ?.teacherId && (
                            <span className="input-error">
                              {
                                errors?.subjectsTeachersList[
                                  subjectTeacherIndex
                                ]?.teacherId
                              }
                            </span>
                          )}
                      </LabelInputErrorWrapper>

                      {/* FULL MARK */}
                      <LabelInputErrorWrapper>
                        <label
                          htmlFor="subjectFullMark"
                          className={`input-label ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        >
                          {subjectFullMark.label[lang]}
                        </label>
                        <input
                          type="number"
                          name={`subjectsTeachersList[${subjectTeacherIndex}].subjectFullMark`}
                          value={
                            values?.subjectsTeachersList[subjectTeacherIndex]
                              ?.subjectFullMark
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="subjectFullMark"
                          placeholder={subjectFullMark.placeholder[lang]}
                          className={`input-field ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        />
                        {errors?.subjectsTeachersList?.length > 0 &&
                          touched?.subjectsTeachersList?.length > 0 &&
                          errors?.subjectsTeachersList[subjectTeacherIndex]
                            ?.subjectFullMark &&
                          touched?.subjectsTeachersList[subjectTeacherIndex]
                            ?.subjectFullMark && (
                            <span className="input-error">
                              {
                                errors?.subjectsTeachersList[
                                  subjectTeacherIndex
                                ]?.subjectFullMark
                              }
                            </span>
                          )}
                      </LabelInputErrorWrapper>
                      {/* PASS MARK */}
                      <LabelInputErrorWrapper>
                        <label
                          htmlFor="subjectPassMark
"
                          className={`input-label ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        >
                          {subjectPassMark.label[lang]}
                        </label>
                        <input
                          type="number"
                          name={`subjectsTeachersList[${subjectTeacherIndex}].subjectPassMark`}
                          value={
                            values?.subjectsTeachersList[subjectTeacherIndex]
                              ?.subjectPassMark
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="subjectPassMark"
                          placeholder={subjectPassMark.placeholder[lang]}
                          className={`input-field ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        />
                        {errors?.subjectsTeachersList?.length > 0 &&
                          touched?.subjectsTeachersList?.length > 0 &&
                          errors?.subjectsTeachersList[subjectTeacherIndex]
                            ?.subjectPassMark &&
                          touched?.subjectsTeachersList[subjectTeacherIndex]
                            ?.subjectPassMark && (
                            <span className="input-error">
                              {
                                errors?.subjectsTeachersList[
                                  subjectTeacherIndex
                                ]?.subjectPassMark
                              }
                            </span>
                          )}
                      </LabelInputErrorWrapper>
                    </div>

                    <div className="flexEnd">
                      <AlertDialog>
                        <AlertDialogTrigger
                          className={`${
                            lang === "en" ? "font-poppins" : "font-anek"
                          } mt-2 btn-destructive-fill-rounded !text-xs ${
                            subjectTeacherIndex === 0 && "invisible"
                          }`}
                        >
                          <LucideTrash2 className="mr-1 w-4 h-4 -mt-[4px]" />
                          {lang === "en" ? "Remove" : "সরিয়ে ফেলুন"}
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle
                              className={`${
                                lang === "en" ? "font-poppins" : "font-anek"
                              }`}
                            >
                              {lang === "en"
                                ? "  Are you absolutely sure?"
                                : "আপনি কি পুরোপুরিভাবে নিশ্চিত"}
                            </AlertDialogTitle>
                            <AlertDialogDescription
                              className={`${
                                lang === "en" ? "font-poppins" : "font-anek"
                              }`}
                            >
                              {lang === "en"
                                ? " This action cannot be undone. This will permanently delete your storage."
                                : "এই কাজটি পুনরায় করা যাবে না। এটি স্থায়ীভাবে আপনার সঞ্চয়স্থান থেকে মুছে ফেলবে।"}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              className={` ${
                                lang === "en" ? "font-poppins" : "font-anek"
                              }`}
                            >
                              {lang === "en" ? "Cancel" : "বাতিল করুন"}
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className={`btn-destructive-fill ${
                                lang === "en" ? "font-poppins" : "font-anek"
                              }`}
                              onClick={() => {
                                const updatedSubjectsTeachersList =
                                  values.subjectsTeachersList.filter(
                                    (_: any, index: number) =>
                                      index !== subjectTeacherIndex
                                  );
                                setValues({
                                  ...values,
                                  subjectsTeachersList:
                                    updatedSubjectsTeachersList,
                                });
                              }}
                            >
                              {lang === "en" ? "Confirm" : "নিশ্চিত করুন"}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                )
              )}
            {/* BUTTON FOR ADDING NEW CLASS INFORMATION */}
            <div>
              <Button
                type="button"
                onClick={() =>
                  setValues({
                    ...values,
                    subjectsTeachersList: [
                      ...values.subjectsTeachersList,
                      {
                        subjectId: "",
                        teacherId: "",
                        subjectFullMark: "",
                        subjectPassMark: "",
                      },
                    ],
                  })
                }
                variant="link"
                size="rounded"
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                <LucidePlusCircle className="mr-1 w-4 h-4 -mt-[2px]" />
                {lang === "en" ? "Add Another Subject" : "নতুন বিষয় যুক্ত করুন"}
              </Button>
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {(utilityError && "data" in utilityError) ||
            (addError && "data" in addError && (
              <div className="mt-6">
                <Message
                  variant="destructive"
                  message={
                    utilityError?.data?.message || addError?.data?.message
                  }
                />
              </div>
            ))}

          {/* SUBMIT BUTTON */}

          <div className="mt-4 w-full flex justify-between">
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
      </FormWrapper>
    </section>
  );
};

export default AddClass;
