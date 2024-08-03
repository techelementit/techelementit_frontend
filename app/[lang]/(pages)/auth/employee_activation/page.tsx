"use client";
import ButtonLoader from "@/components/common/ButtonLoader";
import FormWrapper from "@/components/common/FormWrapper";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAppContext } from "@/context";
import { useEmployeeActivationMutation } from "@/redux/features/auth/authApi";
import { shareWithCookies, shareWithLocal } from "@/share";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
interface IVerifyNumbersProps {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
}
interface IEmployeeActivationProps {
  params: { lang: string };
}

const EmployeeActivation: FC<IEmployeeActivationProps> = ({
  params: { lang },
}) => {
  // TOAST HOOK
  const { toast } = useToast();
  // REDUX
  const { token } = useSelector((state: any) => state.auth);
  const [employeeActivation, { data, error, isSuccess, isLoading }] =
    useEmployeeActivationMutation();

  const activateError = error as any;
  // GET THE PRIVIOUS DATA FROM LOCAL STORAGE
  const storedFormData = shareWithLocal("get", "ahpa_employee_registration");

  const [verifyNumber, setVerifyNumber] = useState<IVerifyNumbersProps>({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const varificationHandler = async () => {
    const verificationNumbers = Object.values(verifyNumber).join("");
    if (verificationNumbers.length !== 4) {
      setInvalidError(true);
    }
    await employeeActivation({
      activation_token: token,
      activation_code: verificationNumbers,
      data: storedFormData,
    });
  };

  const handlerInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);
    // CHECK THE EMPTY VALUE
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Registration message",
        description: "Registration have been done successfully",
      });
      // DELETE FORM DATA FROM THE LOCAL STORAGE AFTER FINISH THE REGISTRATION
      shareWithLocal("remove", "ahpa_employee_registration");
      // REMOVE THE EMPLOYEE REFERENCE COOKIE
      shareWithCookies("remove", 0, "ahpa_employee_ref");
      // REDIRECT THE EMPLOYEE LOGIN PAGE
      return redirect(`../../../../${lang}/auth/employee_login`);
    }
  }, [isSuccess]);

  return (
    <FormWrapper
      size="half"
      heading={lang === "en" ? "Verify Account" : "একাউন্ট ভ্যারিফাই করুন"}
      subheading={lang === "en" ? "For Teacher" : "শিক্ষক/ শিক্ষিকাদের জন্য"}
    >
      <div className="flex justify-center mt-12 gap-x-2 lg:gap-x-4">
        {Object.keys(verifyNumber).map((input, index) => (
          <input
            type="number"
            key={index}
            ref={inputRefs[index]}
            maxLength={1}
            value={verifyNumber[input as keyof IVerifyNumbersProps]}
            className={`${
              invalidError
                ? "border-destructive/80 animate-pulse"
                : "border-primary"
            } w-[45px] lg:w-[70px] h-[45px] lg:h-[70px] block rounded-lg active:bg-transparent focus:bg-transparent bg-transparent  border-2 px-2 py-1 text-xl lg:text-2xl font-bold text-center duration-1000 ease-linear`}
            onChange={(e) => handlerInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="block text-center mt-4">
        {invalidError && (
          <span className="input-error">Re-check the verification code</span>
        )}
      </div>
      <div className="my-6 lg:my-8 flex justify-center">
        <Button
          disabled={isLoading || invalidError}
          onClick={() => varificationHandler()}
          variant="default"
          size="rounded"
          className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
        >
          {isLoading && <ButtonLoader />}
          {lang === "en" ? "Verify OTP" : "ভেরিফাই ওটিপি"}
        </Button>
      </div>
      {error && "data" in error && (
        <div>
          <Message
            variant="destructive"
            message={
              (activateError?.data?.error?.length > 0 &&
                activateError.data.error[0].message) ||
              activateError?.data.message
            }
          />
        </div>
      )}
      <div
        className={`text-center mt-8 ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        <h4 className="inline">
          {lang === "en" ? "Back to," : "পেছনে ফিরুন,"}
        </h4>
        <Link href="../auth/employee_login" className="inline">
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

export default EmployeeActivation;
