"use client";
import EmployeeSignupLayout from "@/components/employee/EmployeeSignupLayout";
import { useEmployeeRegisterMutation } from "@/redux/features/auth/authApi";
import { employeeRegisterSchema } from "@/schemas/auth/employeeAuthSchemas";
import { useFormik } from "formik";
import { redirect } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { shareWithLocal } from "@/share";

interface IEmployeeSignupProps {
  params: { lang: string };
}

const EmployeeSignup: FC<IEmployeeSignupProps> = ({ params: { lang } }) => {
  // TOAST HOOK
  const { toast } = useToast();

  const [clear, setClear] = useState(false);
  // STEP STATE
  const [step, setStep] = useState(0);

  // REDUX
  const [employeeRegister, { data, error, isSuccess, isLoading }] =
    useEmployeeRegisterMutation();

  // GET THE PRIVIOUS DATA FROM LOCAL STORAGE
  const storedFormData = shareWithLocal("get", "ahpa_employee_registration");

  // FORMIK INITIAL VALUSE
  const initialValues = storedFormData
    ? storedFormData
    : {
        name: {
          firstName: "",
          sureName: "",
        },
        email: "",
        phone: "",
        password: "",
        personalInfo: {
          sex: "",
          bloodGroup: "",
          BCN: "",
          NID: "",
          religion: "",
          dateOfBirth: "",
          address: {
            town: "",
            postOffice: "",
            district: "",
            upazila: "",
            division: "",
            nationality: "",
          },
        },
        avatar: "",

        educations: [
          {
            examName: "",
            examYear: "",
            examBoard: "",
            examResult: "",
          },
        ],
      };

  // FORMIK FORM HOOK
  const formik = useFormik({
    initialValues,
    validationSchema: employeeRegisterSchema,
    onSubmit: async (initialValues: any) => {
      const { name, email, password } = initialValues;

      await employeeRegister({ name, email, password });
    },
  });

  // REDIRECT AND SHOW MESSAGE
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Activation message",
        description: data?.message,
      });
      // REDIRECT THE EMPLOYEE ACTIVATION PAGE
      return redirect(`/${lang}/auth/employee_activation`);
    }
  }, [isSuccess, data]);

  // UPDATE LOCAL STORAGE WHENEVER FROM VALUSE CHANGE
  useEffect(() => {
    if (clear) {
      formik.resetForm();
      // RESET THE FORM VALUES
      formik.setValues(initialValues);
      // CLEAT ERROR IF ANY (OPTIONAL, DEPENDING ON YOUR USE CASE)
      formik.setErrors({});
      setClear(false);
    } else {
      // SET THE FORM DATA TO THE LOCAL STORAGE, WHEN CHANGE THE FORM VALUE
      shareWithLocal("set", "ahpa_employee_registration", formik.values);
    }
  }, [formik.values, clear]);

  return (
    <section className="max-container padding-container">
      <EmployeeSignupLayout
        error={error}
        clear={clear}
        setClear={setClear}
        formik={formik}
        lang={lang}
        step={step}
        setStep={setStep}
        isLoading={isLoading}
      />
    </section>
  );
};

export default EmployeeSignup;
