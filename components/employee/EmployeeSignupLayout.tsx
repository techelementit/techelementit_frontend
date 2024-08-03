import { useAppContext } from "@/context";
import React, { FC, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import PageLoader from "../common/PageLoader";
import EmployeeSignupInfo from "./EmployeeSignupInfo";
import {
  EMPLOYEE_REGISTRATION_FORM,
  IEmployeeRegisterForm,
} from "@/constants/employee";
import EmployeePersonalAcademicInfo from "./EmployeePersonalAcademicInfo";
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
import ButtonLoader from "../common/ButtonLoader";
import { shareWithLocal } from "@/share";

interface IEmployeeSignupLayoutProps {
  lang: string;
  step: number;
  setStep: (step: number) => void;
  formik: any;
  clear: boolean;
  setClear: (clear: boolean) => void;
  error: any;
  isLoading: boolean;
}

const EmployeeSignupLayout: FC<IEmployeeSignupLayoutProps> = ({
  lang,
  step,
  setStep,
  formik,
  clear,
  setClear,
  error,
  isLoading,
}) => {
  const { generalInfo, personalInfo, educations } =
    EMPLOYEE_REGISTRATION_FORM as IEmployeeRegisterForm;

  const { load, setLoad } = useAppContext();

  const submitRef = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = () => {
    submitRef.current?.click();
  };

  useEffect(() => {
    setLoad(false);
  }, []);

  // console.log(formik.errors, "erro");
  // console.log(step);
  // console.log(formik.errors);

  // LOADER FOR LOCAL STORAGE DATA
  if (load) {
    return <PageLoader />;
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* EMPLOYEE SIGNUP INFORMATION */}
        <div>
          {step === 0 && (
            <EmployeeSignupInfo
              generalInfo={generalInfo}
              lang={lang}
              formik={formik}
            />
          )}
        </div>
        {/* EMPLOYEE PERSONAL AND ACADEMIC INFORMATION */}
        <div>
          {step === 1 && (
            <EmployeePersonalAcademicInfo
              personalInfo={personalInfo}
              educations={educations}
              formik={formik}
              lang={lang}
            />
          )}
        </div>
        <button className="hidden" ref={submitRef} type="submit"></button>
      </form>
      {/* {error && "data" in error && (
        <Message varient="destructive" message={error.data.message} />
      )} */}

      {/* FORM NAVIGATE BUTTONS */}
      <div className="flexBetween mt-12">
        {step === 0 ? (
          <AlertDialog>
            <AlertDialogTrigger
              className={`${
                lang === "en" ? "font-poppins" : "font-anek"
              } btn-destructive-fill-rounded`}
            >
              {lang === "en" ? "Clear" : "ফর্ম মুছুন"}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle
                  className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
                >
                  {lang === "en"
                    ? "  Are you absolutely sure?"
                    : "আপনি কি পুরোপুরিভাবে নিশ্চিত ?"}
                </AlertDialogTitle>
                <AlertDialogDescription
                  className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
                >
                  {lang === "en"
                    ? " This action cannot be undone. This will permanently delete your storage."
                    : "এই কাজটি পুনরায় করা যাবে না। এটি স্থায়ীভাবে আপনার সঞ্চয়স্থান থেকে মুছে ফেলবে।"}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  className={` ${lang === "en" ? "font-poppins" : "font-anek"}`}
                >
                  {lang === "en" ? "Cancel" : "বাতিল করুন"}
                </AlertDialogCancel>
                <AlertDialogAction
                  className={`btn-destructive-fill ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                  onClick={() => {
                    setClear(!clear);
                    shareWithLocal("remove", "ahpa_employee_registration");
                  }}
                >
                  {lang === "en" ? "Confirm" : "নিশ্চিত করুন"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Button
            type="button"
            onClick={() => setStep(step > 0 ? step - 1 : step)}
            variant="default"
            size="rounded"
            className={`${
              lang === "en" ? "font-poppins" : "font-anek"
            } medium-14`}
          >
            {lang === "en" ? "Previous" : "পূর্ববর্তী"}
          </Button>
        )}

        {/* NEXT AND SUBMIT BUTTON */}
        {step === 1 ? (
          <Button
            disabled={Object.keys(formik.errors).length > 0 || isLoading}
            type="button"
            onClick={onSubmitHandler}
            variant="secondary"
            size="rounded"
            className={`${
              lang === "en" ? "font-poppins" : "font-anek"
            } medium-14 select-none duration-300`}
          >
            {isLoading && <ButtonLoader />}
            {lang === "en" ? "Apply Now" : "আবেদন করুন"}
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => setStep(step >= 3 ? step : step + 1)}
            variant="default"
            size="rounded"
            className={`${
              lang === "en" ? "font-poppins" : "font-anek"
            } medium-14`}
          >
            {lang === "en" ? "Next" : "পরবর্তী"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmployeeSignupLayout;
