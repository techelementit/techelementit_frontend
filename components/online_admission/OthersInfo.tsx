"use client";
import React, { FC } from "react";
import { Checkbox } from "../ui/checkbox";
import FormWrapper from "../common/FormWrapper";
import LabelInputErrorWrapper from "../common/LabelInputErrorWrapper";

interface IOthersInfoProps {
  formik: any;
  lang: string;
  othersInfo: any;
}

const OthersInfo: FC<IOthersInfoProps> = ({ formik, lang, othersInfo }) => {
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  const { previousSchool, guardian, guardianContactNumber, guardianEmail } =
    othersInfo;

  const acceptTermConditionHandler = () => {
    if (values.othersInfo.termCondition) {
      setValues({
        ...values,
        othersInfo: {
          ...values.othersInfo,
          termCondition: false,
        },
      });
    } else {
      setValues({
        ...values,
        othersInfo: {
          ...values.othersInfo,
          termCondition: true,
        },
      });
    }
  };
  return (
    <FormWrapper
      size="full"
      heading={
        lang === "en"
          ? "Others Important Information"
          : "অন্যান্য গুরুত্বপূর্ণ তথ্য"
      }
    >
      {/* STUDENT OTHERS INFORMATION */}

      {/* PREVIOUS SCHOOL NAME  */}

      <LabelInputErrorWrapper>
        <label
          htmlFor="previousSchool"
          className={`input-label ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {previousSchool.label[lang]}
        </label>
        <input
          type="text"
          name="othersInfo.previousSchool"
          value={values?.othersInfo?.previousSchool}
          onChange={handleChange}
          onBlur={handleBlur}
          id="previousSchool"
          placeholder={previousSchool.placeholder[lang]}
          className={`input-field ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        />
        {errors.othersInfo?.previousSchool &&
          touched.othersInfo?.previousSchool && (
            <span className="input-error">
              {errors.othersInfo?.previousSchool}
            </span>
          )}
      </LabelInputErrorWrapper>

      {/*  GUARDIAN NAME*/}

      <LabelInputErrorWrapper>
        <label
          htmlFor="guardianName"
          className={`input-label ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {guardian.label[lang]}
        </label>
        <input
          type="text"
          name="othersInfo.guardian"
          value={values?.othersInfo?.guardian}
          onChange={handleChange}
          onBlur={handleBlur}
          id="guardianName"
          placeholder={guardian.placeholder[lang]}
          className={`input-field ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        />
        {errors.othersInfo?.guardian && touched.othersInfo?.guardian && (
          <span className="input-error">{errors.othersInfo?.guardian}</span>
        )}
      </LabelInputErrorWrapper>

      {/*  GUARDING CONTACT AND EMAIL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4 mb-6">
        {/*  GUARDIAN CONTACT */}
        <LabelInputErrorWrapper>
          <label
            htmlFor="guardianContactNumber"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {guardianContactNumber.label[lang]}
          </label>
          <input
            type="phone"
            name="othersInfo.guardianContactNumber"
            value={values?.othersInfo?.guardianContactNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            id="guardianContactNumber"
            placeholder={guardianContactNumber.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.othersInfo?.guardianContactNumber &&
            touched.othersInfo?.guardianContactNumber && (
              <span className="input-error">
                {errors.othersInfo?.guardianContactNumber}
              </span>
            )}
        </LabelInputErrorWrapper>
        {/* GUARDIAN EMAIL */}
        <LabelInputErrorWrapper>
          <label
            htmlFor="guardianEmail"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {guardianEmail.label[lang]}
          </label>
          <input
            type="email"
            name="othersInfo.guardianEmail"
            value={values?.othersInfo?.guardianEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            id="guardianEmail"
            placeholder={guardianEmail.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.othersInfo?.guardianEmail &&
            touched.othersInfo?.guardianEmail && (
              <span className="input-error">
                Present {errors.othersInfo?.guardianEmail}
              </span>
            )}
        </LabelInputErrorWrapper>
      </div>

      {/* ACCEPT ALL TERM AND CONDITION  */}
      <div
        className={`inline 
        ${
          Object.keys(errors).length > 0 &&
          "cursor-not-allowed opacity-40 pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        }
        
        `}
      >
        <Checkbox
          checked={values?.othersInfo.termCondition}
          className={`mt-1 duration-500 ${
            Object.keys(errors).length > 0 &&
            "cursor-not-allowed opacity-40 pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          }`}
          onClick={() => acceptTermConditionHandler()}
          id="acceptTermCondition"
        />
        <label
          htmlFor="acceptTermCondition"
          className={`ml-2 text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none ${
            lang === "en" ? "font-poppins" : "font-anek"
          } ${
            Object.keys(errors).length > 0 &&
            "cursor-not-allowed opacity-40 pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          }`}
        >
          {lang === "en"
            ? "I acknowledge that I have read and understood the terms and conditions set by ' Al Hera Pre-Academy ' for admission. I agree to abide by these rules. Providing accurate information is important, and I understand that giving false details may lead to the cancellation of my admission.I also accept the rules governing student conduct, academic policies, and other guidelines provided by the institution.By submitting this admission form, I commit to maintaining the highest standards of integrity and behavior throughout my academic journey at the institution."
            : "আমি ' আল হেরা প্রি-একাডেমির ' ভর্তি প্রক্রিয়া সম্পর্কিত শর্তাবলী এবং নীতিমালা পড়েছি এবং বুঝেছি। আমি এই নিয়মগুলি মেনে চলতে সম্মত। সঠিক তথ্য প্রদান খুবই গুরুত্বপূর্ণ, এবং আমি বুঝতে পারি যে ভুল তথ্য দেওয়ার ফলে আমার ভর্তি বাতিল হতে পারে। আমি শিক্ষার্থীর আচরণ, একাডেমিক নীতিমালা এবং প্রতিষ্ঠান দ্বারা প্রদত্ত অন্যান্য নির্দেশিকা সম্পর্কিত নিয়মগুলিও মেনে চলব। এই ভর্তি ফর্ম জমা দিয়ে, আমি প্রতিষ্ঠানে আমার পুরো একাডেমিক যাত্রা জুড়ে সর্বোচ্চ সততা এবং আচরণ বজায় রাখার প্রতিশ্রুতি জানাচ্ছি।"}
        </label>
      </div>
    </FormWrapper>
  );
};

export default OthersInfo;
