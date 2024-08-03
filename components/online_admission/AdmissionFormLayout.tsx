"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import StudentInfo from "./StudentInfo";
import ParentsInfo from "./ParentsInfo";
import Address from "./Address";
import OthersInfo from "./OthersInfo";
import { Button } from "../ui/button";
import { ADMISSION_FORM, IAdmissionForm } from "@/constants/student";
import { useAppContext } from "@/context";
import PageLoader from "../common/PageLoader";

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
import { shareWithLocal } from "@/share";

interface IAdmissionFormLayout {
  lang: string;
  step: number;
  setStep: (step: number) => void;
  formik: any;
  clear: boolean;
  setClear: (clear: boolean) => void;
}

const AdmissionFormLayout: FC<IAdmissionFormLayout> = ({
  lang,
  step,
  setStep,
  formik,
  clear,
  setClear,
}) => {
  const { studentInfo, parentsInfo, address, othersInfo } =
    ADMISSION_FORM as IAdmissionForm;

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

  // LOADER FOR LOCAL STORAGE DATA
  if (load) {
    return <PageLoader />;
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* STUDENT INFORMATION FORM */}
        <div>
          {step === 0 && (
            <StudentInfo
              studentInfo={studentInfo}
              lang={lang}
              formik={formik}
            />
          )}
        </div>
        {/* STUDENT PARENTS INFORMATION FORM */}
        <div>
          {step === 1 && (
            <ParentsInfo
              parentsInfo={parentsInfo}
              formik={formik}
              lang={lang}
            />
          )}
        </div>
        {/* STUDENT ADDRESS FORM */}
        <div>
          {step === 2 && (
            <Address address={address} lang={lang} formik={formik} />
          )}
        </div>
        {/* OTHER INFORMATION FORM */}
        <div>
          {step === 3 && (
            <OthersInfo othersInfo={othersInfo} lang={lang} formik={formik} />
          )}
        </div>
        <button className="hidden" ref={submitRef} type="submit"></button>
      </form>

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
                  className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
                >
                  {lang === "en" ? "Cancel" : "বাতিল করুন"}
                </AlertDialogCancel>
                <AlertDialogAction
                  className={`btn-destructive-fill ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                  onClick={() => {
                    setClear(!clear);
                    shareWithLocal("remove", "ahpa_admission");
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
        {step === 3 ? (
          <Button
            disabled={
              Object.keys(formik.errors).length > 0 ||
              formik?.values?.othersInfo?.termCondition === false
            }
            type="button"
            onClick={onSubmitHandler}
            variant="default"
            size="rounded"
            className={`${
              lang === "en" ? "font-poppins" : "font-anek"
            } medium-14 select-none`}
          >
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

export default AdmissionFormLayout;
