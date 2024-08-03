"use client";
import FormWrapper from "@/components/common/FormWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC, useRef, useState } from "react";
interface IVerifyNumbersProps {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
}
interface IUserActivationProps {
  params: { lang: string };
}

const UserActivation: FC<IUserActivationProps> = ({ params: { lang } }) => {
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
    console.log(verificationNumbers);
    // if (verificationNumbers.length !== 4) {
    //   toastRef.current.showToast({
    //     type: "error",
    //     title: "Activation Message",
    //     message: "Re-check you verify numbers",
    //     position: "right-bottom",
    //     close: true,
    //   });
    //   setInvalidError(true);
    //   return;
    // }
    // await activation({
    //   activation_token: token,
    //   activation_code: verificationNumbers,
    // });
  };

  const handlerInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <FormWrapper
      size="half"
      heading={lang === "en" ? "Verify Account" : "একাউন্ট ভ্যারিফাই করুন"}
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
                ? "border-common-red animate-pulse"
                : "border-common-bluish_green"
            } w-[45px] lg:w-[70px] h-[45px] lg:h-[70px] block rounded-lg active:bg-transparent focus:bg-transparent bg-transparent  border-2 px-2 py-1 text-xl lg:text-2xl font-bold text-center  duration-200 ease-in border-primary/50`}
            onChange={(e) => handlerInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="my-6 lg:my-8 flex justify-center">
        <Button
          onClick={() => varificationHandler()}
          variant="default"
          size="rounded"
          className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
        >
          {lang === "en" ? "Verify OTP" : "ভেরিফাই ওটিপি"}
        </Button>
      </div>
      <div
        className={`text-center mt-8 ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        <h4 className="inline">
          {lang === "en" ? "Back to," : "পেছনে ফিরুন,"}
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

export default UserActivation;
