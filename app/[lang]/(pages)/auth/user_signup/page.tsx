"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import { userRegistrationSchema } from "@/schemas/auth/userAuthSchemas";
import { LucideEye, LucideEyeOff } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { USER_REGISTRATIOIN } from "@/constants/auth";
import FormWrapper from "@/components/common/FormWrapper";
interface ISignupProps {
  params: { lang: string };
}
const Signup: FC<ISignupProps> = ({ params: { lang } }) => {
  const { name, email, password, studentRefCode } = USER_REGISTRATIOIN as any;
  const [visible, setVisible] = useState(false);

  const initialValues = {
    firstName: "",
    sureName: "",
    email: "",
    password: "",
    studentRefCode: "",
  };
  const formik: any = useFormik({
    initialValues,
    validationSchema: userRegistrationSchema,
    onSubmit: async ({
      firstName,
      sureName,
      email,
      password,
      studentRefCode,
    }) => {
      // await login({ email, password });
      console.log("reg info", {
        firstName,
        sureName,
        email,
        password,
        studentRefCode,
      });
    },
  });
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;
  return (
    <FormWrapper size="half" heading={lang === "en" ? "Sign Up" : "সাইনআপ"}>
      {/* USER SIGNUP FORM  */}
      <form onSubmit={handleSubmit}>
        <div className="full grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="w-full my-1">
            <label
              htmlFor="firstName"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {name.firstName.label[lang]}
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="firstName"
              placeholder={name.firstName.label[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.firstName && touched.firstName && (
              <span className="input-error">{errors.firstName}</span>
            )}
          </div>
          <div className="w-full my-1">
            <label
              htmlFor="sureName"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {name.sureName.label[lang]}
            </label>
            <input
              type="text"
              name="sureName"
              value={values.sureName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="sureName"
              placeholder={name.sureName.label[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
          </div>
        </div>
        <div className="w-full my-1">
          <label
            htmlFor="email"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {email.label[lang]}
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            placeholder={email.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.email && touched.email && (
            <span className="input-error">{errors.email}</span>
          )}
        </div>
        <div className="w-full my-1">
          <label
            htmlFor="password"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {password.label[lang]}
          </label>
          <div className="relative">
            <input
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={password.placeholder[lang]}
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
          {errors.password && touched.password && (
            <span className="input-error">{errors.password}</span>
          )}
        </div>
        <div className="w-full my-1">
          <label
            htmlFor="studentRefCode"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {studentRefCode.label[lang]}
          </label>
          <input
            type="text"
            name="studentRefCode"
            value={values.studentRefCode}
            onChange={handleChange}
            onBlur={handleBlur}
            id="studentRefCode"
            placeholder={studentRefCode.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.studentRefCode && touched.studentRefCode && (
            <span className="input-error">{errors.studentRefCode}</span>
          )}
        </div>
        <div className="mt-4 w-full flex justify-between ">
          <div className="w-full"></div>
          <input
            className={`btn-default-fill ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
            type="submit"
            value={`${lang === "en" ? "Signup" : "সাইনআপ"}`}
          />
        </div>
      </form>

      {/* NAVIGATION FOR LOGIN OR OTHERS */}
      <div
        className={`text-center mt-8 ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        <h4 className="inline">
          {lang === "en"
            ? "If you have an account already,"
            : "যদি ইতিমধ্যেই একাউন্ট থেকে থাকে,"}
        </h4>
        <Link href="../auth/user_login" className="inline">
          <Button
            variant="link"
            className={`px-2 text-base font-semibold ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {lang === "en" ? "Login" : "লগইন"}
          </Button>
        </Link>
      </div>
    </FormWrapper>
  );
};

export default Signup;
