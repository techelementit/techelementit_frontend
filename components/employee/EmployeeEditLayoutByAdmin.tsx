import {
  LucideBadgeAlert,
  LucideEye,
  LucideEyeOff,
  LucidePlusCircle,
  LucideTrash2,
} from "lucide-react";
import React, { FC, useEffect, useRef, useState } from "react";

import { Button } from "../ui/button";
import ButtonLoader from "../common/ButtonLoader";
import FormWrapper from "../common/FormWrapper";
import { EMPLOYEE_EDIT_FORM_ADMIN } from "@/constants/employee";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import PhotoCropperBundle from "../common/PhotoCropperBundle";
import Link from "next/link";
import EmployeePersonalAcademicInfo from "./EmployeePersonalAcademicInfo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  EMPLOYEE_ROLE_OPTIONS,
  VERIFICATION_OPTIONS,
} from "@/constants/student";
import { useGetEmployeeEditUtilityQuery } from "@/redux/features/admin/employee/employeeApi";
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
} from "../ui/alert-dialog";
import Message from "../common/Message";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import LabelInputErrorWrapper from "../common/LabelInputErrorWrapper";
interface IEmployeeEditLayoutByAdminProps {
  lang: string;
  formik: any;
  error: any;
  isLoading: boolean;
}

const EmployeeEditLayoutByAdmin: FC<IEmployeeEditLayoutByAdminProps> = ({
  lang,
  formik,
  error,
  isLoading: editLoading,
}) => {
  const { generalInfo, personalInfo, educations, othersInfo } =
    EMPLOYEE_EDIT_FORM_ADMIN as any;
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  const {
    data: utility,
    isLoading: utilityLoading,
    error: utilityError,
  } = useGetEmployeeEditUtilityQuery(undefined);

  const submitRef = useRef<HTMLButtonElement>(null);
  const [update, setUpdate] = useState(false);

  const [visible, setVisible] = useState(false);

  const onSubmitHandler = () => {
    submitRef.current?.click();
  };

  // ADD EMPLOYEE PHOTO HANDLER
  const addPhotoHandler = (photo: string) => {
    setValues({
      ...values,
      avatar: photo,
    });
  };
  // console.log(utility, "utils");
  // console.log(values, "values");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* EMPLOYEE GENERAL INFORMATION */}
        <div>
          <FormWrapper
            size="full"
            heading={
              lang === "en"
                ? "Employee General Information"
                : "এমপ্লয়ই তথ্য সম্প্রসারণ"
            }
          >
            {/* EMPLOYEE FIRST & LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
              {/* EMPLOYEE FRIST NAME */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="employeeFirstName"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {generalInfo.name.firstName.label[lang]}
                </label>
                <input
                  type="text"
                  name="name.firstName"
                  value={values?.name?.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="employeeFirstName"
                  placeholder={generalInfo.name.firstName.placeholder[lang]}
                  className={`input-field ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                />
                {errors?.name?.firstName && touched?.name?.firstName && (
                  <span className="input-error">{errors?.name?.firstName}</span>
                )}
              </LabelInputErrorWrapper>
              {/* EMPLOYEE LAST NAME */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="employeeSureName"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {generalInfo.name.sureName.label[lang]}
                </label>
                <input
                  type="text"
                  name="name.sureName"
                  value={values?.name?.sureName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="employeeSureName"
                  placeholder={generalInfo.name.sureName.placeholder[lang]}
                  className={`input-field ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                />
                {errors?.name?.sureName && touched?.name?.sureName && (
                  <span className="input-error">{errors?.name?.sureName}</span>
                )}
              </LabelInputErrorWrapper>
            </div>
            {/* EMPLOYEE EMAIL & BIRTHDAY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
              {/* EMPLOYEE EMAIL */}
              <LabelInputErrorWrapper>
                <div className="flex items-center">
                  <HoverCard>
                    <HoverCardTrigger className="inline-flex items-center text-sm cursor-help">
                      <LucideBadgeAlert className="w-5 h-5 mb-[1px] mr-1.5 text-warning" />
                    </HoverCardTrigger>

                    <HoverCardContent
                      align="start"
                      className="border-2 border-warning bg-warning backdrop-blur-md text-warning-foreground"
                    >
                      <p>
                        {lang === "en"
                          ? "Changing a user's email address can impact their access to the system and may cause communication issues. It is generally not recommended to alter a user's email unless absolutely necessary. Consider alternative solutions or consult with the user before making any changes. If you must change the email address, ensure that the user is informed and aware of the update to avoid any disruptions in their account access or communication."
                          : "একজন ব্যবহারকারীর ইমেইল এড্রেস পরিবর্তন করলে তাদের সিস্টেম অ্যাক্সেস এবং যোগাযোগে সমস্যা হতে পারে। সাধারণত, একেবারে প্রয়োজন না হলে ব্যবহারকারীর ইমেল পরিবর্তন করা ঠিক নয়। পরিবর্তনের আগে, অন্যান্য সমাধান বিবেচনা করুন অথবা ব্যবহারকারীর সাথে পরামর্শ করুন। যদি আপনাকে অবশ্যই ইমেল ঠিকানা পরিবর্তন করতে হয়, তাহলে নিশ্চিত করুন যে ব্যবহারকারীকে অবহিত করা হয়েছে এবং আপডেট সম্পর্কে জানানো হয়েছে যাতে তাদের অ্যাকাউন্ট অ্যাক্সেস বা যোগাযোগে কোনো বিঘ্ন না ঘটে।"}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  <label
                    htmlFor="employeeEmail"
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {generalInfo.email.label[lang]}
                  </label>
                </div>

                <input
                  type="phone"
                  name="email"
                  value={values?.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="employeeEmail"
                  placeholder={generalInfo.email.placeholder[lang]}
                  className={`input-field ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                />
                {errors?.email && touched?.email && (
                  <span className="input-error">{errors?.email}</span>
                )}
              </LabelInputErrorWrapper>

              {/*  EMPLOYEE PASSWORD */}

              <LabelInputErrorWrapper>
                <div className="flex items-center">
                  <HoverCard>
                    <HoverCardTrigger className="inline-flex items-center text-sm cursor-help">
                      <LucideBadgeAlert className="w-5 h-5 mb-[1px] mr-1.5 text-warning" />
                    </HoverCardTrigger>

                    <HoverCardContent
                      align="start"
                      className="border-2 border-warning bg-warning backdrop-blur-md text-warning-foreground"
                    >
                      <p>
                        {lang === "en"
                          ? "Changing a user's password should be handled with caution as it directly affects their account security and access. It is important to prioritize the security and privacy of user accounts. Ensure that the new password meets security standards and is not easily guessable. Additionally, communicate with the user about the password change to avoid confusion or unauthorized access to their account. Encourage users to choose strong, unique passwords to enhance their account security and protect their personal information."
                          : "ব্যবহারকারীর পাসওয়ার্ড পরিবর্তন করা অত্যন্ত সতর্কতার সাথে করতে হবে কারণ এটি সরাসরি তাদের অ্যাকাউন্টের নিরাপত্তা ও অ্যাক্সেসকে প্রভাবিত করে। ব্যবহারকারী অ্যাকাউন্টের নিরাপত্তা ও গোপনীয়তা সর্বদা সবার আগে রাখা গুরুত্বপূর্ণ। নতুন পাসওয়ার্ডটি নিরাপত্তা মান অনুযায়ী নির্দিষ্ট করুন এবং সহজেই অনুমান করা যায় না এমন নিশ্চিত করুন। বিভ্রান্তি ও অননুমোদিত অ্যাক্সেস এড়াতে পাসওয়ার্ড পরিবর্তন সম্পর্কে ব্যবহারকারীকে অবহিত করুন। তাদের অ্যাকাউন্টের নিরাপত্তা জোরদার ও ব্যক্তিগত তথ্য রক্ষার জন্য শক্তিশালী, অনন্য পাসওয়ার্ড নির্বাচন করতে তাদের উৎসাহিত করুন।"}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  <label
                    htmlFor="employeePassword"
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {generalInfo.password.label[lang]}
                  </label>
                </div>

                <div className="relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    id="employeePassword"
                    value={values?.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={generalInfo.password.placeholder[lang]}
                    className={`input-field ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  />

                  <button
                    type="button"
                    className="text-lg absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer whitespace-nowrap rounded-md p-1 hover:bg-accent"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? (
                      <LucideEye className="h-5 w-5" />
                    ) : (
                      <LucideEyeOff className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors?.password && touched?.password && (
                  <span className="input-error">{errors?.password}</span>
                )}
              </LabelInputErrorWrapper>
            </div>
            {/* EMPLOYEE PHONE & AVATAR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
              {/* EMPLOYEE PHONE */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="employeePhone"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {generalInfo.phone.label[lang]}
                </label>
                <input
                  type="phone"
                  name="phone"
                  value={values?.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="employeePhone"
                  placeholder={generalInfo.phone.placeholder[lang]}
                  className={`input-field ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                />
                {errors?.phone && touched?.phone && (
                  <span className="input-error">{errors?.phone}</span>
                )}
              </LabelInputErrorWrapper>
              {/*  EMPLOYEE AVATAR */}
              <LabelInputErrorWrapper>
                <Dialog>
                  <label
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {generalInfo.avatar.label[lang]}
                  </label>
                  <DialogTrigger
                    className={`input-field !flex !justify-center !px-0 !text-muted-foreground ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {values?.avatar === ""
                      ? generalInfo.avatar.placeholder[lang]
                      : lang === "en"
                      ? "Photo selected succussfully ✔"
                      : "ছবি সফলভাবে সনাক্ত করা হয়েছে ✔"}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="flex items-center justify-center">
                      <PhotoCropperBundle
                        ratio={3 / 4}
                        addPhotoHandler={addPhotoHandler}
                        lang={lang}
                      />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                {errors?.avatar && (
                  <span className="input-error">{errors?.avatar}</span>
                )}
              </LabelInputErrorWrapper>
            </div>
          </FormWrapper>
        </div>
        {/* EMPLOYEE PERSONAL AND ACADEMIC INFORMATION */}
        <div>
          <EmployeePersonalAcademicInfo
            personalInfo={personalInfo}
            educations={educations}
            formik={formik}
            lang={lang}
          />
        </div>
        <div>
          {/* EMPLOYMENT INFORMATION */}
          <FormWrapper
            size="full"
            heading={
              lang === "en" ? "Employment Information" : "কর্মসংস্থান তথ্য"
            }
          >
            {/* EMPLOYEE REFERENCE CODE AND VERIFICATION*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-4">
              {/* EMPLOYEE REFERENCE CODE */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="employeeRefCode"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {othersInfo.employmentRef.label[lang]}
                </label>
                <input
                  type="text"
                  name="employmentRef"
                  value={values?.employmentRef}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="employeeRefCode"
                  placeholder={othersInfo.employmentRef.placeholder[lang]}
                  className={`input-field ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                />
                {errors?.employmentRef && touched?.employmentRef && (
                  <span className="input-error">{errors?.employmentRef}</span>
                )}
              </LabelInputErrorWrapper>
              {/* EMPLOYEE VERIFICATION STATUS */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="employeeVerification"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {othersInfo.isVerified.label[lang]}
                </label>
                <Select
                  value={values?.isVerified ? "Verified" : "Not Verified"}
                  onOpenChange={(value) => setUpdate(value)}
                  onValueChange={(value) => {
                    if (update) {
                      setValues({
                        ...values,
                        isVerified: value === "Verified" ? true : false,
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
                      placeholder={othersInfo.isVerified.placeholder[lang]}
                    />
                  </SelectTrigger>
                  <SelectContent className="flex flex-col">
                    {VERIFICATION_OPTIONS.length > 0 &&
                      VERIFICATION_OPTIONS.map((optionItem: any) => (
                        <SelectItem
                          key={optionItem.option.en}
                          className={`cursor-pointer regular-16 ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                          value={optionItem.option.en}
                        >
                          {optionItem.option[lang]}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                {errors?.isVerified && touched?.isVerified && (
                  <span className="input-error">{errors?.isVerified}</span>
                )}
              </LabelInputErrorWrapper>
              {/* EMPLOYEE ROLE STATUS */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="employeeRole"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {othersInfo.role.label[lang]}
                </label>
                <Select
                  value={values?.role.toLowerCase()}
                  onOpenChange={(value) => setUpdate(value)}
                  onValueChange={(value) => {
                    if (update) {
                      setValues({
                        ...values,
                        role: value.toLowerCase(),
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
                      placeholder={othersInfo.role.placeholder[lang]}
                    />
                  </SelectTrigger>
                  <SelectContent className="flex flex-col">
                    {EMPLOYEE_ROLE_OPTIONS.length > 0 &&
                      EMPLOYEE_ROLE_OPTIONS.map((optionItem: any) => (
                        <SelectItem
                          key={optionItem.option.en}
                          className={`cursor-pointer regular-16 ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                          value={optionItem.option.en.toLowerCase()}
                        >
                          {optionItem.option[lang]}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                {errors?.role && touched?.role && (
                  <span className="input-error">{errors?.role}</span>
                )}
              </LabelInputErrorWrapper>
            </div>
          </FormWrapper>
        </div>

        <div>
          {/* EMPLOYEE PRIMARY ROLE FOR CLASS (CLASS TEACHER) */}
          <FormWrapper
            size="full"
            heading={
              lang === "en" ? "Class Teacher Information" : "শ্রেণি শিক্ষক তথ্য"
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
              {/* TEACHER FOR CLASS */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="classIdForTeacher"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {othersInfo.classTeacher.classId.label[lang]}
                </label>
                <Select
                  value={values?.classTeacher?.classId}
                  onOpenChange={(value) => setUpdate(value)}
                  onValueChange={(value) => {
                    if (update) {
                      setValues({
                        ...values,
                        classTeacher: {
                          ...values.classTeacher,
                          classId: value,
                        },
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
                      placeholder={
                        othersInfo.classTeacher.classId.placeholder[lang]
                      }
                    />
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
                {errors?.classTeacher?.classId &&
                  touched?.classTeacher?.classId && (
                    <span className="input-error">
                      {errors?.classTeacher?.classId}
                    </span>
                  )}
              </LabelInputErrorWrapper>
              {/* TEACHER FOR CLASS SECTION */}
              <LabelInputErrorWrapper>
                <label
                  htmlFor="sectionIdForTeacher"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {othersInfo.classTeacher.sectionId.label[lang]}
                </label>
                <Select
                  value={values?.classTeacher?.sectionId}
                  onOpenChange={(value) => setUpdate(value)}
                  onValueChange={(value) => {
                    if (update) {
                      setValues({
                        ...values,
                        classTeacher: {
                          ...values.classTeacher,
                          sectionId: value,
                        },
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
                      placeholder={
                        othersInfo.classTeacher.sectionId.placeholder[lang]
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className="flex flex-col">
                    {utility?.sections?.length > 0 &&
                      utility?.sections.map((sectionItem: any) => (
                        <SelectItem
                          key={sectionItem?._id}
                          className={`cursor-pointer regular-16 ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                          value={sectionItem?._id}
                        >
                          {sectionItem?.sectionName[lang]}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                {errors?.role && touched?.role && (
                  <span className="input-error">{errors?.role}</span>
                )}
              </LabelInputErrorWrapper>
            </div>
          </FormWrapper>
        </div>

        {/* TEACHER CLASS DISTRIBUTION INFORMATION */}
        <div>
          <FormWrapper
            size="full"
            heading={
              lang === "en"
                ? "Teacher's Class Distribution Information"
                : "শিক্ষকের ক্লাস বিতরণের তথ্য"
            }
          >
            <div>
              {values?.classList?.length > 0 &&
                values?.classList.map((classItem: any, classIndex: number) => (
                  <div
                    className="border-t-2  my-6 border-primary/5 relative"
                    key={classIndex}
                  >
                    <div className="text-center !absolute left-1/2 top-0 -translate-y-[63%] md:-translate-y-[53%] -translate-x-1/2 select-none">
                      <span
                        className={`bg-primary/5 text-xs md:text-base  text-center px-2 md:px-4 leading-none rounded-full w-full -z-10 !backdrop-blur-sm ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                      >
                        {lang === "en"
                          ? `Class  ${classIndex + 1}`
                          : `শ্রেণি ${digitConverter(classIndex + 1, lang)}`}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-4 mt-6">
                      {/* TEACHER FOR CLASS */}
                      <LabelInputErrorWrapper>
                        <label
                          htmlFor={`classList.classId${classIndex}`}
                          className={`input-label ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        >
                          {othersInfo.classList.classId.label[lang]}
                        </label>
                        <Select
                          value={values?.classList[classIndex].classId}
                          onOpenChange={(value) => setUpdate(value)}
                          onValueChange={(value) => {
                            if (update) {
                              const updatedClassList = values.classList.map(
                                (item: any, currentIndex: number) => {
                                  if (currentIndex === classIndex) {
                                    return { ...item, classId: value };
                                  }
                                  return item;
                                }
                              );
                              setValues({
                                ...values,
                                classList: updatedClassList,
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
                              placeholder={
                                othersInfo.classList.classId.placeholder[lang]
                              }
                            />
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
                        {errors?.classTeacher?.classId &&
                          touched?.classTeacher?.classId && (
                            <span className="input-error">
                              {errors?.classTeacher?.classId}
                            </span>
                          )}
                      </LabelInputErrorWrapper>
                      {/* TEACHER FOR SECTION */}
                      <LabelInputErrorWrapper>
                        <label
                          htmlFor={`classList.sectionId${classIndex}`}
                          className={`input-label ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        >
                          {othersInfo.classList.sectionId.label[lang]}
                        </label>
                        <Select
                          value={values?.classList[classIndex].sectionId}
                          onOpenChange={(value) => setUpdate(value)}
                          onValueChange={(value) => {
                            if (update) {
                              const updatedClassList = values.classList.map(
                                (item: any, currentIndex: number) => {
                                  if (currentIndex === classIndex) {
                                    return { ...item, sectionId: value };
                                  }
                                  return item;
                                }
                              );
                              setValues({
                                ...values,
                                classList: updatedClassList,
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
                              placeholder={
                                othersInfo.classList.sectionId.placeholder[lang]
                              }
                            />
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
                        {errors?.classTeacher?.sectionId &&
                          touched?.classTeacher?.sectionId && (
                            <span className="input-error">
                              {errors?.classTeacher?.sectionId}
                            </span>
                          )}
                      </LabelInputErrorWrapper>
                      {/* TEACHER FOR CLASS SUBJECT */}
                      <LabelInputErrorWrapper>
                        <label
                          htmlFor={`classList.subjectId${classIndex}`}
                          className={`input-label ${
                            lang === "en" ? "font-poppins" : "font-anek"
                          }`}
                        >
                          {othersInfo.classList.subjectId.label[lang]}
                        </label>
                        <Select
                          value={values?.classList[classIndex].subjectId}
                          onOpenChange={(value) => setUpdate(value)}
                          onValueChange={(value) => {
                            if (update) {
                              const updatedClassList = values.classList.map(
                                (item: any, currentIndex: number) => {
                                  if (currentIndex === classIndex) {
                                    return { ...item, subjectId: value };
                                  }
                                  return item;
                                }
                              );
                              setValues({
                                ...values,
                                classList: updatedClassList,
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
                              placeholder={
                                othersInfo.classList.subjectId.placeholder[lang]
                              }
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
                        {errors?.classTeacher?.subjectId &&
                          touched?.classTeacher?.subjectId && (
                            <span className="input-error">
                              {errors?.classTeacher?.subjectId}
                            </span>
                          )}
                      </LabelInputErrorWrapper>
                    </div>

                    <div className="flexEnd">
                      <AlertDialog>
                        <AlertDialogTrigger
                          className={`${
                            lang === "en" ? "font-poppins" : "font-anek"
                          } mt-2 btn-destructive-fill-rounded !text-xs`}
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
                                const updatedClassList =
                                  values.classList.filter(
                                    (_: any, index: number) =>
                                      index !== classIndex
                                  );
                                setValues({
                                  ...values,
                                  classList: updatedClassList,
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
                ))}
              {/* BUTTON FOR ADDING NEW CLASS INFORMATION */}
              <div>
                <Button
                  type="button"
                  onClick={() =>
                    setValues({
                      ...values,
                      classList: [
                        ...values.classList,
                        {
                          classId: "",
                          sectionId: "",
                          subjectId: "",
                        },
                      ],
                    })
                  }
                  variant="link"
                  size="rounded"
                  className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
                >
                  <LucidePlusCircle className="mr-1 w-4 h-4 -mt-[2px]" />
                  {lang === "en"
                    ? "Add Another Class"
                    : "নতুন শ্রেণি যুক্ত করুন"}
                </Button>
              </div>
            </div>
          </FormWrapper>
        </div>

        <button className="hidden" ref={submitRef} type="submit"></button>
      </form>
      {error && "data" in error && (
        <Message
          variant="destructive"
          message={error?.data?.message || error?.data?.error[0]?.message}
        />
      )}

      {/* FORM NAVIGATE BUTTONS */}
      <div className="flexEnd mt-12 pb-12">
        <Button
          disabled={Object.keys(formik.errors).length > 0 || editLoading}
          type="button"
          onClick={onSubmitHandler}
          variant="secondary"
          size="rounded"
          className={`${
            lang === "en" ? "font-poppins" : "font-anek"
          } medium-14 select-none duration-300`}
        >
          {editLoading && <ButtonLoader />}
          {lang === "en" ? "Update Now" : "এখনই সম্পাদন করুন"}
        </Button>
      </div>
    </div>
  );
};

export default EmployeeEditLayoutByAdmin;
