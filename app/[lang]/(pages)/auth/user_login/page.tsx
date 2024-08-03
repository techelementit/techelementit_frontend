"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import { userLoginSchema } from "@/schemas/auth/userAuthSchemas";
import { LucideEye, LucideEyeOff } from "lucide-react";
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

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { USER_LOGIN } from "@/constants/auth";
import { useRouter } from "next/navigation";
import { shareWithCookies } from "@/share";
import FormWrapper from "@/components/common/FormWrapper";
import LabelInputErrorWrapper from "@/components/common/LabelInputErrorWrapper";
interface ILoginProps {
  params: {
    lang: string;
  };
}

const Login: FC<ILoginProps> = ({ params: { lang } }) => {
  // EMPLOYEE REFERENCE CODE STATE
  const [referCode, setReferCode] = useState(false);

  const { email, password } = USER_LOGIN as any;
  const router = useRouter();
  const refCode = "AHPA2020EMPLOYEEREF";

  const [visible, setVisible] = useState(false);
  const formik: any = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: userLoginSchema,
    onSubmit: async ({ email, password }) => {
      // await login({ email, password });
    },
  });
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  // EMPLOYEE REDIRECT HANDLER
  const employeeRedirect = (code: string, path: string) => {
    if (code === "Submit" && referCode && path === "login") {
      return router.push(`../../${lang}/auth/employee_login`);
    }
    if (code === "Submit" && referCode && path === "signup") {
      return router.push(`../../${lang}/auth/employee_signup`);
    }
    if (refCode === code) {
      // SET REF ON COOKIES
      shareWithCookies("set", 60, "ahpa_employee_ref", true);
      return setReferCode(true);
    } else {
      //  REMOVE REF ON COOKIES
      shareWithCookies("remove", 0, "ahpa_employee_ref");
      return setReferCode(false);
    }
  };
  return (
    <FormWrapper size="half" heading={lang === "en" ? "Login" : "লগইন"}>
      {/* LOGIN FORM */}
      <form onSubmit={handleSubmit}>
        {/* EMAIL INPUT  */}
        <LabelInputErrorWrapper>
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
            placeholder="example@mail.com"
            className="input-field font-poppins"
          />
          {errors.email && touched.email && (
            <span className="input-error">{errors.email}</span>
          )}
        </LabelInputErrorWrapper>
        {/* PASSWORD INPUT */}
        <LabelInputErrorWrapper>
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
          <div className="mt-4 w-full flex justify-between ">
            <div className="w-full"></div>
            <input
              className={`btn-default-fill ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
              type="submit"
              value={`${lang === "en" ? "Login" : "লগইন"}`}
            />
          </div>
        </LabelInputErrorWrapper>
      </form>
      {/* FORM FOOTER */}
      {/* USER SIGNUP REDIRECTION */}
      <div
        className={`text-center mt-8 ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        <h4 className="inline">
          {lang === "en"
            ? "If you don't have any account,"
            : "যদি কোন একাউন্ট না থেকে থাকে,"}
        </h4>
        <Link href="../auth/user_signup" className="inline">
          <Button
            variant="link"
            className={`px-2 text-base font-semibold inline ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {lang === "en" ? "Signup" : "সাইনআপ"}
          </Button>
        </Link>
      </div>
      {/* EMPLOYEE LOGIN & SIGNUP REDIRECTION */}
      <div
        className={`text-center mt-2 ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        <h4 className="inline">
          {lang === "en" ? "Teacher" : "শিক্ষক/ শিক্ষিকাদের"}
        </h4>

        <AlertDialog>
          <AlertDialogTrigger
            className={`px-2 text-base font-semibold inline text-primary underline-offset-4 hover:underline ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {lang === "en" ? "Login" : "লগইন"}
          </AlertDialogTrigger>
          <AlertDialogContent className="overflow-y-auto max-h-full scroll-hidden">
            <AlertDialogHeader>
              <AlertDialogTitle
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                {lang === "en"
                  ? "Important Notice: Ethical Use and Access to Website Information"
                  : "গুরুত্বপূর্ণ বিজ্ঞপ্তি: ওয়েবসাইট তথ্যের নৈতিক ব্যবহার এবং অ্যাক্সেস"}
              </AlertDialogTitle>
              <AlertDialogDescription
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                {lang === "en"
                  ? "It seems like you're asking for login credentials or code to access a website, which I cannot provide. It's important to remember that sharing or requesting login information without authorization is against ethical guidelines and can be illegal. If you need access to a website or specific information, I recommend contacting the website administrator or support team directly. They will be able to guide you on the proper steps to obtain the necessary access or information in a secure and authorized manner."
                  : "আমার মনে হচ্ছে আপনি একটি ওয়েবসাইট অ্যাক্সেস করার জন্য লগইন তথ্য বা কোড চাচ্ছেন, যা আমি দিতে পারছি না। এটা মনে রাখা গুরুত্বপূর্ণ যে অনুমোদন ছাড়া লগইন তথ্য শেয়ার করা বা অনুরোধ করা নৈতিক নীতিমালার পরিপন্থী এবং অবৈধ হতে পারে। যদি আপনার কোনো ওয়েবসাইট বা নির্দিষ্ট তথ্য অ্যাক্সেস করার প্রয়োজন হয়, তাহলে আমি সরাসরি ওয়েবসাইট প্রশাসক বা সহায়তা দলের সাথে যোগাযোগ করার পরামর্শ দিচ্ছি। তারা আপনাকে নিরাপদ এবং অনুমোদিত পদ্ধতিতে প্রয়োজনীয় অ্যাক্সেস বা তথ্য পাওয়ার সঠিক পদক্ষেপগুলি সম্পর্কে গাইড করতে পারবে।"}
              </AlertDialogDescription>

              <LabelInputErrorWrapper>
                <label
                  htmlFor="employeeReferenceCode"
                  className={`input-label ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {lang === "en"
                    ? "Write The Employee Reference Code"
                    : "এমপ্লয়ই রেফারেন্স কোডটি লিখুন"}
                </label>
                <input
                  type="text"
                  name="employeeReferenceCode"
                  onChange={(e: any) => employeeRedirect(e.target.value, "")}
                  id="employeeReferenceCode"
                  placeholder={`${
                    lang === "en"
                      ? "Write the employee reference code"
                      : "এমপ্লয়ই রেফারেন্স কোডটি ইংরেজিতে লিখুন"
                  }`}
                  className={`input-field ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                />
                {referCode || (
                  <span className="input-error">Invalid reference code</span>
                )}
              </LabelInputErrorWrapper>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() =>
                  shareWithCookies("remove", 0, "ahpa_employee_ref")
                }
                type="button"
                className={`btn-destructive-fill ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {lang === "en" ? " Cancel" : "বাতিল করুন"}
              </AlertDialogCancel>
              <AlertDialogAction
                type="button"
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
                onClick={() => employeeRedirect("Submit", "login")}
                disabled={!referCode}
              >
                {lang === "en" ? " Continue" : "চালিয়ে যান"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <span className="inline">{lang === "en" ? "Or," : "অথবা,"}</span>
        <AlertDialog>
          <AlertDialogTrigger
            className={`px-2 text-base font-semibold inline text-primary underline-offset-4 hover:underline ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {lang === "en" ? "Signup" : "সাইনআপ"}
          </AlertDialogTrigger>
          <AlertDialogContent className="overflow-y-auto max-h-full scroll-hidden">
            <AlertDialogHeader>
              <AlertDialogTitle
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                {lang === "en"
                  ? "Important Notice: Ethical Use and Access to Website Information"
                  : "গুরুত্বপূর্ণ বিজ্ঞপ্তি: ওয়েবসাইট তথ্যের নৈতিক ব্যবহার এবং অ্যাক্সেস"}
              </AlertDialogTitle>
              <AlertDialogDescription
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                {lang === "en"
                  ? "It seems like you're asking for login credentials or code to access a website, which I cannot provide. It's important to remember that sharing or requesting login information without authorization is against ethical guidelines and can be illegal. If you need access to a website or specific information, I recommend contacting the website administrator or support team directly. They will be able to guide you on the proper steps to obtain the necessary access or information in a secure and authorized manner."
                  : "আমার মনে হচ্ছে আপনি একটি ওয়েবসাইট অ্যাক্সেস করার জন্য লগইন তথ্য বা কোড চাচ্ছেন, যা আমি দিতে পারছি না। এটা মনে রাখা গুরুত্বপূর্ণ যে অনুমোদন ছাড়া লগইন তথ্য শেয়ার করা বা অনুরোধ করা নৈতিক নীতিমালার পরিপন্থী এবং অবৈধ হতে পারে। যদি আপনার কোনো ওয়েবসাইট বা নির্দিষ্ট তথ্য অ্যাক্সেস করার প্রয়োজন হয়, তাহলে আমি সরাসরি ওয়েবসাইট প্রশাসক বা সহায়তা দলের সাথে যোগাযোগ করার পরামর্শ দিচ্ছি। তারা আপনাকে নিরাপদ এবং অনুমোদিত পদ্ধতিতে প্রয়োজনীয় অ্যাক্সেস বা তথ্য পাওয়ার সঠিক পদক্ষেপগুলি সম্পর্কে গাইড করতে পারবে।"}
              </AlertDialogDescription>
              <div>
                <div className="w-full my-2">
                  <label
                    htmlFor="employeeReferenceCode"
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {lang === "en"
                      ? "Write The Employee Reference Code"
                      : "এমপ্লয়ই রেফারেন্স কোডটি লিখুন"}
                  </label>
                  <input
                    type="text"
                    name="employeeReferenceCode"
                    onChange={(e: any) => employeeRedirect(e.target.value, "")}
                    id="employeeReferenceCode"
                    placeholder={`${
                      lang === "en"
                        ? "Write the employee reference code"
                        : "এমপ্লয়ই রেফারেন্স কোডটি ইংরেজিতে লিখুন"
                    }`}
                    className={`input-field ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  />
                  {referCode || (
                    <span className="input-error">Invalid reference code</span>
                  )}
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() =>
                  shareWithCookies("remove", 0, "ahpa_employee_ref")
                }
                type="button"
                className={`btn-destructive-fill ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {lang === "en" ? " Cancel" : "বাতিল করুন"}
              </AlertDialogCancel>
              <AlertDialogAction
                type="button"
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
                onClick={() => employeeRedirect("Submit", "signup")}
                disabled={!referCode}
              >
                {lang === "en" ? " Continue" : "চালিয়ে যান"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </FormWrapper>
  );
};

export default Login;
