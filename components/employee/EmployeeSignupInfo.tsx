import { LucideEye, LucideEyeOff } from "lucide-react";
import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import PhotoCropperBundle from "../common/PhotoCropperBundle";
import Link from "next/link";
import { Button } from "../ui/button";
import FormWrapper from "../common/FormWrapper";
import LabelInputErrorWrapper from "../common/LabelInputErrorWrapper";

interface IEmployeeSignupInfoProps {
  formik: any;
  lang: string;
  generalInfo: any;
}

const EmployeeSignupInfo: FC<IEmployeeSignupInfoProps> = ({
  formik,
  lang,
  generalInfo,
}) => {
  const [visible, setVisible] = useState(false);
  const { name, email, password, phone, avatar } = generalInfo;
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  // ADD EMPLOYEE PHOTO HANDLER
  const addPhotoHandler = (photo: string) => {
    setValues({
      ...values,
      avatar: photo,
    });
  };

  // console.log("values", values);
  return (
    <FormWrapper
      size="half"
      heading={lang === "en" ? "Signup" : "সাইনআপ"}
      subheading={lang === "en" ? "For Teacher" : "শিক্ষক/ শিক্ষিকাদের জন্য"}
    >
      {/* EMPLOYEE FRIST NAME */}
      <LabelInputErrorWrapper>
        <label
          htmlFor="employeeFirstName"
          className={`input-label ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {name.firstName.label[lang]}
        </label>
        <input
          type="text"
          name="name.firstName"
          value={values?.name?.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          id="employeeFirstName"
          placeholder={name.firstName.placeholder[lang]}
          className={`input-field ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        />
        {errors?.name?.firstName && touched?.name?.firstName && (
          <span className="input-error">{errors?.name?.firstName}</span>
        )}
      </LabelInputErrorWrapper>
      {/* EMPLOYEE LAST NAME */}
      <LabelInputErrorWrapper>
        <label
          htmlFor="employeeSureName"
          className={`input-label ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {name.sureName.label[lang]}
        </label>
        <input
          type="text"
          name="name.sureName"
          value={values?.name?.sureName}
          onChange={handleChange}
          onBlur={handleBlur}
          id="employeeSureName"
          placeholder={name.sureName.placeholder[lang]}
          className={`input-field ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        />
        {errors?.name?.sureName && touched?.name?.sureName && (
          <span className="input-error">{errors?.name?.sureName}</span>
        )}
      </LabelInputErrorWrapper>

      {/* EMPLOYEE EMAIL */}
      <LabelInputErrorWrapper>
        <label
          htmlFor="employeeEmail"
          className={`input-label ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {email.label[lang]}
        </label>
        <input
          type="phone"
          name="email"
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="employeeEmail"
          placeholder={email.placeholder[lang]}
          className={`input-field ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        />
        {errors?.email && touched?.email && (
          <span className="input-error">{errors?.email}</span>
        )}
      </LabelInputErrorWrapper>

      {/*  EMPLOYEE PASSWORD */}
      <LabelInputErrorWrapper>
        <label
          htmlFor="employeePassword"
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
            id="employeePassword"
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
        {errors?.password && touched?.password && (
          <span className="input-error">{errors?.password}</span>
        )}
      </LabelInputErrorWrapper>

      {/* EMPLOYEE PHONE */}
      <LabelInputErrorWrapper>
        <label
          htmlFor="employeePhone"
          className={`input-label ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        >
          {phone.label[lang]}
        </label>
        <input
          type="phone"
          name="phone"
          value={values?.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          id="employeePhone"
          placeholder={phone.placeholder[lang]}
          className={`input-field ${
            lang === "en" ? "font-poppins" : "font-anek"
          }`}
        />
        {errors?.phone && touched?.phone && (
          <span className="input-error">{errors?.phone}</span>
        )}
      </LabelInputErrorWrapper>
      {/*  EMPLOYEE AVATAR */}
      <LabelInputErrorWrapper>
        <Dialog>
          <label
            className={`input-label ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {avatar.label[lang]}
          </label>
          <DialogTrigger
            className={`input-field !flex !justify-center !px-0 !text-muted-foreground ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {values?.avatar === ""
              ? avatar.placeholder[lang]
              : lang === "en"
              ? "Photo selected succussfully ✔"
              : "ছবি সফলভাবে সনাক্ত করা হয়েছে ✔"}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex items-center justify-center">
              <PhotoCropperBundle
                ratio={3 / 4}
                addPhotoHandler={addPhotoHandler}
                lang={lang}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {errors?.avatar && (
          <span className="input-error">{errors?.avatar}</span>
        )}
      </LabelInputErrorWrapper>
      {/* NAVIGATION */}
      <div
        className={`text-center mt-8 ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        <h4 className="inline">
          {lang === "en"
            ? "If you have an teacher's account already,"
            : "যদি ইতিমধ্যেই একাউন্ট থেকে থাকে,"}
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

export default EmployeeSignupInfo;
