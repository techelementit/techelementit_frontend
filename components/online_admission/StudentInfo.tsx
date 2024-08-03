"use client";
import React, { FC, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BLOOD_GROUP_LIST,
  CLASS_LIST,
  GENDER_LIST,
  RELIGION_LIST,
} from "@/constants/student";
import DatePicker from "../common/DatePicker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import PhotoCropperBundle from "../common/PhotoCropperBundle";
import FormWrapper from "../common/FormWrapper";
import LabelInputErrorWrapper from "../common/LabelInputErrorWrapper";

interface IStudentInfoProps {
  formik: any;
  lang: string;
  studentInfo: any;
}

const StudentInfo: FC<IStudentInfoProps> = ({ lang, formik, studentInfo }) => {
  const {
    name,
    sex,
    bloodGroup,
    dateOfBirth,
    religion,
    BCN,
    admitClass,
    avatar,
    admissionTestRoll,
  } = studentInfo;

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  const addDate = (date: string) => {
    setValues({
      ...values,
      studentInfo: {
        ...values.studentInfo,
        dateOfBirth: date,
      },
    });
  };

  const addPhotoHandler = (photo: string) => {
    setValues({
      ...values,
      studentInfo: {
        ...values.studentInfo,
        avatar: photo,
      },
    });
  };

  return (
    <FormWrapper
      size="full"
      heading={lang === "en" ? "Student Information" : "শিক্ষার্থীর তথ্য"}
    >
      {/*ENGLISH FIRST & SURE NAME */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
        {/* ENGLISH FIRST NAME */}

        <LabelInputErrorWrapper>
          <label
            htmlFor="firstNameEn"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {name.firstName.en.label[lang]}
          </label>
          <input
            type="text"
            name="studentInfo.name.firstName.en"
            value={values?.studentInfo?.name?.firstName?.en}
            onChange={handleChange}
            onBlur={handleBlur}
            id="firstNameEn"
            placeholder={name.firstName.en.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.studentInfo?.name?.firstName?.en &&
            touched.studentInfo?.name?.firstName?.en && (
              <span className="input-error">
                {errors.studentInfo?.name?.firstName?.en}
              </span>
            )}
        </LabelInputErrorWrapper>
        {/* ENGLISH LAST NAEME */}
        <LabelInputErrorWrapper>
          <label
            htmlFor="sureNameEn"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {name.sureName.en.label[lang]}
          </label>
          <input
            type="text"
            name="studentInfo.name.sureName.en"
            value={values?.studentInfo?.name?.sureName?.en}
            onChange={handleChange}
            onBlur={handleBlur}
            id="sureNameEn"
            placeholder={name.sureName.en.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.studentInfo?.name?.sureName?.en &&
            touched.studentInfo?.name?.sureName?.en && (
              <span className="input-error">
                {errors.studentInfo?.name?.sureName?.en}
              </span>
            )}
        </LabelInputErrorWrapper>
      </div>
      {/*BANGLA FIRST & SURE NAME */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
        {/* BANGLA FIRST NAME */}
        <LabelInputErrorWrapper>
          <label
            htmlFor="firstNameBn"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {name.firstName.bn.label[lang]}
          </label>
          <input
            type="text"
            name="studentInfo.name.firstName.bn"
            value={values?.studentInfo?.name?.firstName?.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            id="firstNameBn"
            placeholder={name.firstName.bn.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.studentInfo?.name?.firstName?.bn &&
            touched.studentInfo?.name?.firstName?.bn && (
              <span className="input-error">
                {errors.studentInfo?.name?.firstName?.bn}
              </span>
            )}
        </LabelInputErrorWrapper>
        {/* BANGLA LAST NAME */}
        <LabelInputErrorWrapper>
          <label
            htmlFor="sureNameBn"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {name.sureName.bn.label[lang]}
          </label>
          <input
            type="text"
            name="studentInfo.name.sureName.bn"
            value={values?.studentInfo?.name?.sureName?.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            id="sureNameBn"
            placeholder={name.sureName.bn.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.studentInfo?.name?.sureName?.bn &&
            touched.studentInfo?.name?.sureName?.bn && (
              <span className="input-error">
                {errors.studentInfo?.name?.sureName?.bn}
              </span>
            )}
        </LabelInputErrorWrapper>
      </div>

      {/*CLASS, SEX, RELIGION BLOOD GROUP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 md:gap-x-4">
        {/*CLASS, SEX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* CLASS  */}
          <LabelInputErrorWrapper>
            <label
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {admitClass.label[lang]}
            </label>
            <Select
              value={values?.studentInfo?.admitClass}
              onValueChange={(value) =>
                setValues({
                  ...values,
                  studentInfo: {
                    ...values.studentInfo,
                    admitClass: value,
                  },
                })
              }
            >
              <SelectTrigger
                className={`dropdown-triger-form ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                <SelectValue placeholder={admitClass.placeholder[lang]} />
              </SelectTrigger>
              <SelectContent className="flex flex-col">
                {CLASS_LIST.length > 0 &&
                  CLASS_LIST.map((classItem: any) => (
                    <SelectItem
                      key={classItem.class.en}
                      className={`cursor-pointer regular-16 ${
                        lang === "en" ? "font-poppins" : "font-anek"
                      }`}
                      value={classItem.class.en}
                    >
                      {classItem.class[lang]}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {errors.studentInfo?.admitClass && (
              <span className="input-error">
                {errors.studentInfo?.admitClass}
              </span>
            )}
          </LabelInputErrorWrapper>
          {/* SEX  */}
          <LabelInputErrorWrapper>
            <label
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {sex.label[lang]}
            </label>
            <Select
              value={values?.studentInfo?.sex}
              onValueChange={(value) =>
                setValues({
                  ...values,
                  studentInfo: {
                    ...values.studentInfo,
                    sex: value,
                  },
                })
              }
            >
              <SelectTrigger
                className={`dropdown-triger-form ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                <SelectValue placeholder={sex.placeholder[lang]} />
              </SelectTrigger>
              <SelectContent className="flex flex-col">
                {GENDER_LIST.length > 0 &&
                  GENDER_LIST.map((genderItem: any) => (
                    <SelectItem
                      key={genderItem.gender.en}
                      className={`cursor-pointer regular-16 ${
                        lang === "en" ? "font-poppins" : "font-anek"
                      }`}
                      value={genderItem.gender.en}
                    >
                      {genderItem.gender[lang]}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {errors.studentInfo?.sex && (
              <span className="input-error">{errors.studentInfo?.sex}</span>
            )}
          </LabelInputErrorWrapper>
        </div>
        {/* RELIGION, BLOOD GROUP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* RELIGION  */}
          <LabelInputErrorWrapper>
            <label
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {religion.label[lang]}
            </label>
            <Select
              value={values?.studentInfo?.religion}
              onValueChange={(value) =>
                setValues({
                  ...values,
                  studentInfo: {
                    ...values.studentInfo,
                    religion: value,
                  },
                })
              }
            >
              <SelectTrigger
                className={`dropdown-triger-form  ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                <SelectValue placeholder={religion.placeholder[lang]} />
              </SelectTrigger>
              <SelectContent className="flex flex-col">
                {RELIGION_LIST.length > 0 &&
                  RELIGION_LIST.map((religionItem: any) => (
                    <SelectItem
                      key={religionItem.religion.en}
                      className={`cursor-pointer regular-16 ${
                        lang === "en" ? "font-poppins" : "font-anek"
                      }`}
                      value={religionItem.religion.en}
                    >
                      {religionItem.religion[lang]}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {errors.studentInfo?.religion && (
              <span className="input-error">
                {errors.studentInfo?.religion}
              </span>
            )}
          </LabelInputErrorWrapper>
          {/* BLOOD GROUP */}
          <LabelInputErrorWrapper>
            <label
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {bloodGroup.label[lang]}
            </label>
            <Select
              value={values?.studentInfo?.bloodGroup}
              onValueChange={(value) =>
                setValues({
                  ...values,
                  studentInfo: {
                    ...values.studentInfo,
                    bloodGroup: value,
                  },
                })
              }
            >
              <SelectTrigger
                className={`dropdown-triger-form ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                <SelectValue placeholder={bloodGroup.placeholder[lang]} />
              </SelectTrigger>
              <SelectContent className="flex flex-col">
                {BLOOD_GROUP_LIST.length > 0 &&
                  BLOOD_GROUP_LIST.map((bloodGruop: any) => (
                    <SelectItem
                      key={bloodGruop.blood.en}
                      className={`cursor-pointer regular-16 ${
                        lang === "en" ? "font-poppins" : "font-anek"
                      }`}
                      value={bloodGruop.blood.en}
                    >
                      {bloodGruop.blood[lang]}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {errors.studentInfo?.bloodGroup && (
              <span className="input-error">
                {errors.studentInfo?.bloodGroup}
              </span>
            )}
          </LabelInputErrorWrapper>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-4 ">
        {/* DATE OF BIRTH & ADMISSION TEST ROLL */}

        {/* DATE OF BIRTH */}
        <LabelInputErrorWrapper>
          <label
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
            htmlFor=""
          >
            {dateOfBirth.label[lang]}
          </label>

          <DatePicker
            value={values.studentInfo.dateOfBirth || new Date()}
            addDate={addDate}
            placeholder={dateOfBirth.placeholder[lang]}
            lang={lang}
          />
        </LabelInputErrorWrapper>
        {/* ADMISSION TEST ROLL */}
        <LabelInputErrorWrapper>
          <label
            htmlFor="admissionTestRoll"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {admissionTestRoll.label[lang]}
          </label>
          <input
            type="number"
            name="studentInfo.admissionTestRoll"
            value={values?.studentInfo?.admissionTestRoll}
            onChange={handleChange}
            onBlur={handleBlur}
            id="admissionTestRoll"
            placeholder={admissionTestRoll.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.studentInfo?.admissionTestRoll &&
            touched.studentInfo?.admissionTestRoll && (
              <span className="input-error">
                {errors.studentInfo?.admissionTestRoll}
              </span>
            )}
        </LabelInputErrorWrapper>
        {/* AVATAR */}
        <LabelInputErrorWrapper>
          <Dialog>
            <label
              htmlFor="admissionTestRoll"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {avatar.label[lang]}
            </label>
            <DialogTrigger
              className={`input-field !flex !justify-center !px-0 !text-muted-foreground ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {values?.studentInfo?.avatar === ""
                ? avatar.placeholder[lang]
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
          {errors.studentInfo?.avatar && (
            <span className="input-error">{errors.studentInfo?.avatar}</span>
          )}
        </LabelInputErrorWrapper>
      </div>
      {/* BIRTH DAY CERTIFICATE NUMBER */}
      <div className="grid grid-cols-1">
        <LabelInputErrorWrapper>
          <label
            htmlFor="birthDayNumber"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {BCN.label[lang]}
          </label>
          <input
            type="text"
            name="studentInfo.BCN"
            value={values?.studentInfo?.BCN}
            onChange={handleChange}
            onBlur={handleBlur}
            id="birthDayNumber"
            placeholder={BCN.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.studentInfo?.BCN && touched.studentInfo?.BCN && (
            <span className="input-error">{errors.studentInfo?.BCN}</span>
          )}
        </LabelInputErrorWrapper>
      </div>
    </FormWrapper>
  );
};

export default StudentInfo;
