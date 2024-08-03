"use client";
import React, { FC } from "react";
import FormWrapper from "../common/FormWrapper";
import LabelInputErrorWrapper from "../common/LabelInputErrorWrapper";

interface IParentsInfoProps {
  formik: any;
  lang: string;
  parentsInfo: any;
}

const ParentsInfo: FC<IParentsInfoProps> = ({ formik, lang, parentsInfo }) => {
  const { fathersInfo, mothersInfo } = parentsInfo;
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  // console.log("values", values);
  return (
    <div>
      <FormWrapper
        size="full"
        heading={lang === "en" ? "Parents Information" : "পিতা-মাতার তথ্য"}
      >
        {/* FATHERS INFORMATION */}
        <h5
          className={`form-heading-secondary ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {lang === "en" ? "Father's Information" : "পিতার তথ্য"}
        </h5>
        {/*  FATHERS ENGLISH AND BANGLA NAME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* FATHERS ENGLISH NAME */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="fatherNameEn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {fathersInfo.name.en.label[lang]}
            </label>
            <input
              type="text"
              name="parentsInfo.fathersInfo.name.en"
              value={values?.parentsInfo?.fathersInfo?.name?.en}
              onChange={handleChange}
              onBlur={handleBlur}
              id="fatherNameEn"
              placeholder={fathersInfo.name.en.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.fathersInfo?.name?.en &&
              touched.parentsInfo?.fathersInfo?.name?.en && (
                <span className="input-error">
                  {errors.parentsInfo?.fathersInfo?.name?.en}
                </span>
              )}
          </LabelInputErrorWrapper>
          {/* FATHERS BANGLA NAME */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="fatherNameBn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {fathersInfo.name.bn.label[lang]}
            </label>
            <input
              type="text"
              name="parentsInfo.fathersInfo.name.bn"
              value={values?.parentsInfo?.fathersInfo?.name?.bn}
              onChange={handleChange}
              onBlur={handleBlur}
              id="fatherNameBn"
              placeholder={fathersInfo.name.bn.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.fathersInfo?.name?.bn &&
              touched.parentsInfo?.fathersInfo?.name?.bn && (
                <span className="input-error">
                  {errors.parentsInfo?.fathersInfo?.name?.bn}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>

        {/*  FATHERS PHONE AND EMAIL ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* FATHERS PHONE NUMBER */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="fatherPhone"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {fathersInfo.phone.label[lang]}
            </label>
            <input
              type="phone"
              name="parentsInfo.fathersInfo.phone"
              value={values?.parentsInfo?.fathersInfo?.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="fatherPhone"
              placeholder={fathersInfo.phone.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.fathersInfo?.phone &&
              touched.parentsInfo?.fathersInfo?.phone && (
                <span className="input-error">
                  {errors.parentsInfo?.fathersInfo?.phone}
                </span>
              )}
          </LabelInputErrorWrapper>
          {/* FATHERS EMAIL ADDRESS */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="fatherEmail"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {fathersInfo.email.label[lang]}
            </label>
            <input
              type="email"
              name="parentsInfo.fathersInfo.email"
              value={values?.parentsInfo?.fathersInfo?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="fatherEmail"
              placeholder={fathersInfo.email.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.fathersInfo?.email &&
              touched.parentsInfo?.fathersInfo?.email && (
                <span className="input-error">
                  {errors.parentsInfo?.fathersInfo?.email}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>

        {/* MOTHER'S INFORMATION */}
        <h5
          className={`form-heading-secondary ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {lang === "en" ? "Mothers's Information" : "মাতার তথ্য"}
        </h5>
        {/*  MOTHERS ENGLISH AND BANGLA NAME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* MOTHERS ENGLISH NAME */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="motherNameEn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {mothersInfo.name.en.label[lang]}
            </label>
            <input
              type="text"
              name="parentsInfo.mothersInfo.name.en"
              value={values?.parentsInfo?.mothersInfo?.name?.en}
              onChange={handleChange}
              onBlur={handleBlur}
              id="motherNameEn"
              placeholder={mothersInfo.name.en.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.mothersInfo?.name?.en &&
              touched.parentsInfo?.mothersInfo?.name?.en && (
                <span className="input-error">
                  {errors.parentsInfo?.mothersInfo?.name?.en}
                </span>
              )}
          </LabelInputErrorWrapper>
          {/* MOTHERSs BANGLA NAME */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="motherNameBn"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {mothersInfo.name.bn.label[lang]}
            </label>
            <input
              type="text"
              name="parentsInfo.mothersInfo.name.bn"
              value={values?.parentsInfo?.mothersInfo?.name?.bn}
              onChange={handleChange}
              onBlur={handleBlur}
              id="motherNameBn"
              placeholder={mothersInfo.name.bn.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.mothersInfo?.name?.bn &&
              touched.parentsInfo?.mothersInfo?.name?.bn && (
                <span className="input-error">
                  {errors.parentsInfo?.mothersInfo?.name?.bn}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>
        {/*  MOTHERS PHONE AND EMAIL ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* MOTHERS PHONE NUMBER */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="motherPhone"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {mothersInfo.phone.label[lang]}
            </label>
            <input
              type="phone"
              name="parentsInfo.mothersInfo.phone"
              value={values?.parentsInfo?.mothersInfo?.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="motherPhone"
              placeholder={mothersInfo.phone.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.mothersInfo?.phone &&
              touched.parentsInfo?.mothersInfo?.phone && (
                <span className="input-error">
                  {errors.parentsInfo?.mothersInfo?.phone}
                </span>
              )}
          </LabelInputErrorWrapper>
          {/* MOTHERS EMAIL ADDRESS */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="motherEmail"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {mothersInfo.email.label[lang]}
            </label>
            <input
              type="email"
              name="parentsInfo.mothersInfo.email"
              value={values?.parentsInfo?.mothersInfo?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="motherEmail"
              placeholder={mothersInfo.email.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.parentsInfo?.mothersInfo?.email &&
              touched.parentsInfo?.mothersInfo?.email && (
                <span className="input-error">
                  {errors.parentsInfo?.mothersInfo?.email}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>
      </FormWrapper>
    </div>
  );
};

export default ParentsInfo;
