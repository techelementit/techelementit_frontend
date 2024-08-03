"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import { LucideEye, LucideEyeOff } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EMPLOYEE_LOGIN_FORM } from "@/constants/employee";
import { employeeLoginSchema } from "@/schemas/auth/employeeAuthSchemas";
import { useEmployeeLoginMutation } from "@/redux/features/auth/authApi";
import ButtonLoader from "@/components/common/ButtonLoader";
import { useToast } from "@/components/ui/use-toast";
import Message from "@/components/common/Message";
import { redirect } from "next/navigation";
import { shareWithCookies } from "@/share";
import FormWrapper from "@/components/common/FormWrapper";
import LabelInputErrorWrapper from "@/components/common/LabelInputErrorWrapper";

interface IEmployeeLoginProps {
  params: {
    lang: string;
  };
}

const EmployeeLogin: FC<IEmployeeLoginProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();
  // FORM LABEL INFORMATION
  const { email, password, employmentRef } = EMPLOYEE_LOGIN_FORM as any;
  // STATE FOR PASSWORD VISIBILITY
  const [visible, setVisible] = useState(false);
  // REDUX
  const [employeeLogin, { data, error: loginError, isSuccess, isLoading }] =
    useEmployeeLoginMutation();
  const error = loginError as any;
  // FORMIK FORM
  const formik: any = useFormik({
    initialValues: { email: "", password: "", employmentRef: "" },
    validationSchema: employeeLoginSchema,
    onSubmit: async ({ email, password, employmentRef }) => {
      await employeeLogin({ email, password, employmentRef });
    },
  });
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Login message",
        description: "Employee logged in successfully",
      });
      // REMOVE THE EMPLOYEE REFERENCE COOKIE
      shareWithCookies("remove", 0, "ahpa_employee_ref");
      // REDIRECT THE PROFILE PAGE
      return redirect(`../../../../${lang}/${data?.authData?.role}/profile`);
    }
  }, [isSuccess, data]);

  return (
    <FormWrapper
      size="half"
      heading={lang === "en" ? "Login" : "লগইন"}
      subheading={lang === "en" ? "For Teacher" : "শিক্ষক/ শিক্ষিকাদের জন্য"}
    >
      <form onSubmit={handleSubmit}>
        {/* EMPLOYEE EMAIL */}
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
            placeholder={email.placeholder[lang]}
            className="input-field font-poppins"
          />
          {errors.email && touched.email && (
            <span className="input-error">{errors.email}</span>
          )}
        </LabelInputErrorWrapper>
        {/* EMPLOYEE PASSWORD */}
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
        </LabelInputErrorWrapper>
        {/* EMPLOYMENT REFERENCE CODE */}
        <LabelInputErrorWrapper>
          <label
            htmlFor="employmentRef"
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {employmentRef.label[lang]}
          </label>
          <input
            type="text"
            name="employmentRef"
            value={values.employmentRef}
            onChange={handleChange}
            onBlur={handleBlur}
            id="employmentRef"
            placeholder={employmentRef.placeholder[lang]}
            className={`input-field ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          />
          {errors.employmentRef && touched.employmentRef && (
            <span className="input-error">{errors.employmentRef}</span>
          )}
        </LabelInputErrorWrapper>
        <div className="mt-4 w-full flex justify-between ">
          <div className="w-full"></div>
          <Button
            className={`duration-500 ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
            type="submit"
            variant="default"
            size="rounded"
          >
            {isLoading && <ButtonLoader />}
            {`${lang === "en" ? "Login" : "লগইন"}`}
          </Button>
        </div>
        {error && "data" in error && (
          <div className="mt-6">
            <Message
              variant="destructive"
              message={error?.data?.message || ""}
            />
          </div>
        )}
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
            ? "If you don't have any teacehr's account,"
            : "যদি আপনার কোন শিক্ষক একাউন্ট না থেকে থাকে,"}
        </h4>
        <Link href="../auth/employee_signup" className="inline">
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
    </FormWrapper>
  );
};

export default EmployeeLogin;
