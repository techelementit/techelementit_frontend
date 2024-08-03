import React, { FC, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  BLOOD_GROUP_LIST,
  GENDER_LIST,
  RELIGION_LIST,
} from "@/constants/student";
import DatePicker from "../common/DatePicker";
import { digitConverter } from "@/utils/HelperFunctions";
import { Button } from "../ui/button";
import { LucidePlusCircle, LucideTrash2 } from "lucide-react";
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
import FormWrapper from "../common/FormWrapper";
import LabelInputErrorWrapper from "../common/LabelInputErrorWrapper";

interface IEmployeePersonalAcademicInfoProps {
  personalInfo: any;
  educations: any;
  formik: any;
  lang: string;
}

const EmployeePersonalAcademicInfo: FC<IEmployeePersonalAcademicInfoProps> = ({
  personalInfo,
  educations,
  formik,
  lang,
}) => {
  const {
    sex,
    religion,
    nationality,
    bloodGroup,
    dateOfBirth,
    address,
    NID,
    BCN,
  } = personalInfo;
  const [update, setUpdate] = useState(false);

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setFieldValue,
  } = formik;

  const addDate = (date: string) => {
    setValues({
      ...values,
      personalInfo: {
        ...values.personalInfo,
        dateOfBirth: date,
      },
    });
  };
  // console.log(values && true, "values");
  // console.log(update, "update");
  // console.log(errors, "errors");
  return (
    <div>
      {/* PERSONAL INFORMATOIN */}
      <FormWrapper
        size="full"
        heading={lang === "en" ? "Personal Information" : "ব্যক্তিগত তথ্য"}
      >
        {/* RELIGION,  BLOOD GROUP, SEX, DATE OF BIRTH  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* RELIGION, BLOOD GROUP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
            {/* RELIGION  */}
            <LabelInputErrorWrapper>
              <label
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {religion.label[lang]}
              </label>
              <Select
                value={values?.personalInfo?.religion}
                onValueChange={(value) => {
                  if (update) {
                    setValues({
                      ...values,
                      personalInfo: {
                        ...values.personalInfo,
                        religion: value,
                      },
                    });
                  }
                }}
                onOpenChange={(value) => setUpdate(value)}
              >
                <SelectTrigger
                  className={`dropdown-triger-form  ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  <SelectValue placeholder={religion.placeholder[lang]} />
                </SelectTrigger>
                <SelectContent className="flex flex-col">
                  {RELIGION_LIST.length > 0 &&
                    RELIGION_LIST.map((religionItem: any) => (
                      <SelectItem
                        key={religionItem.religion.en}
                        className={`cursor-pointer regular-16 ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                        value={religionItem.religion.en}
                      >
                        {religionItem.religion[lang]}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {errors?.personalInfo?.religion && (
                <span className="input-error">
                  {errors?.personalInfo?.religion}
                </span>
              )}
            </LabelInputErrorWrapper>
            {/* BLOOD GROUP */}
            <LabelInputErrorWrapper>
              <label
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {bloodGroup.label[lang]}
              </label>
              <Select
                value={values?.personalInfo?.bloodGroup}
                onOpenChange={(value) => setUpdate(value)}
                onValueChange={(value) => {
                  if (update) {
                    setValues({
                      ...values,
                      personalInfo: {
                        ...values?.personalInfo,
                        bloodGroup: value,
                      },
                    });
                  }
                }}
              >
                <SelectTrigger
                  className={`dropdown-triger-form ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  <SelectValue placeholder={bloodGroup.placeholder[lang]} />
                </SelectTrigger>
                <SelectContent className="flex flex-col">
                  {BLOOD_GROUP_LIST.length > 0 &&
                    BLOOD_GROUP_LIST.map((bloodGruop: any) => (
                      <SelectItem
                        key={bloodGruop.blood.en}
                        className={`cursor-pointer regular-16 ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                        value={bloodGruop.blood.en}
                      >
                        {bloodGruop.blood[lang]}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {errors.personalInfo?.bloodGroup && (
                <span className="input-error">
                  {errors.personalInfo?.bloodGroup}
                </span>
              )}
            </LabelInputErrorWrapper>
          </div>

          {/*  SEX, DATE OF BIRTH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
            {/* SEX */}
            <LabelInputErrorWrapper>
              <label
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {sex.label[lang]}
              </label>
              <Select
                value={values?.personalInfo?.sex}
                onOpenChange={(value) => setUpdate(value)}
                onValueChange={(value) => {
                  if (update) {
                    setValues({
                      ...values,
                      personalInfo: {
                        ...values?.personalInfo,
                        sex: value,
                      },
                    });
                  }
                }}
              >
                <SelectTrigger
                  className={`dropdown-triger-form ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  <SelectValue placeholder={sex.placeholder[lang]} />
                </SelectTrigger>
                <SelectContent className="flex flex-col">
                  {GENDER_LIST.length > 0 &&
                    GENDER_LIST.map((genderItem: any) => (
                      <SelectItem
                        key={genderItem.gender.en}
                        className={`cursor-pointer regular-16 ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                        value={genderItem.gender.en}
                      >
                        {genderItem.gender[lang]}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {errors?.personalInfo?.sex && (
                <span className="input-error">{errors?.personalInfo?.sex}</span>
              )}
            </LabelInputErrorWrapper>
            {/* DATE OF BIRTH */}
            <LabelInputErrorWrapper>
              <label
                className={`input-label ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
                htmlFor=""
              >
                {dateOfBirth.label[lang]}
              </label>

              <DatePicker
                value={values?.personalInfo?.dateOfBirth || new Date()}
                addDate={addDate}
                placeholder={dateOfBirth.placeholder[lang]}
                lang={lang}
              />
              {errors.personalInfo?.dateOfBirth && (
                <span className="input-error">
                  {errors.personalInfo?.dateOfBirth}
                </span>
              )}
            </LabelInputErrorWrapper>
          </div>
        </div>
        {/* BIRTHDAY CERTIFICATE NUMBER, NATIONAL ID CARD NUMBER, NATIONALITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4 ">
          {/* BIRTHDAY CERTIFICATE NUMBER */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="BCN"
              className={`input-label  ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {personalInfo.BCN.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.BCN"
              value={values?.personalInfo?.BCN}
              onChange={handleChange}
              onBlur={handleBlur}
              id="BCN"
              placeholder={personalInfo.BCN.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.personalInfo?.BCN && touched.personalInfo?.BCN && (
              <span className="input-error">{errors.personalInfo?.BCN}</span>
            )}
          </LabelInputErrorWrapper>
          {/* NATIONAL ID CARD NUMBER */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="NID"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {personalInfo.NID.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.NID"
              value={values?.personalInfo?.NID}
              onChange={handleChange}
              onBlur={handleBlur}
              id="NID"
              placeholder={personalInfo.NID.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.personalInfo?.NID && touched.personalInfo?.NID && (
              <span className="input-error">{errors.personalInfo?.NID}</span>
            )}
          </LabelInputErrorWrapper>
        </div>
      </FormWrapper>
      {/* EMPLOYEE ADDRESS */}
      <FormWrapper size="full" heading={lang === "en" ? "Address" : "ঠিকানা"}>
        {/*  EMPLOYEE TOWN AND POST OFFICE ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* EMPLOYEE TOWN OR VILLAGE ADDRESS*/}
          <LabelInputErrorWrapper>
            <label
              htmlFor="employeeTown"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {address.town.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.address.town"
              value={values?.personalInfo?.address?.town}
              onChange={handleChange}
              onBlur={handleBlur}
              id="employeeTown"
              placeholder={address.town.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.personalInfo?.address?.town &&
              touched?.personalInfo?.address?.town && (
                <span className="input-error">
                  {errors?.personalInfo?.address?.town}
                </span>
              )}
          </LabelInputErrorWrapper>

          {/* EMPLOYEE POST OFFICE ADDRESS*/}
          <LabelInputErrorWrapper>
            <label
              htmlFor="employeePostOffice"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {address.postOffice.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.address.postOffice"
              value={values?.personalInfo?.address?.postOffice}
              onChange={handleChange}
              onBlur={handleBlur}
              id="employeePostOffice"
              placeholder={address.postOffice.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.personalInfo?.address?.postOffice &&
              touched?.personalInfo?.address?.postOffice && (
                <span className="input-error">
                  {errors?.personalInfo?.address?.postOffice}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>
        {/*  EMPLOYEE DISTRICT AND UPAZILA OR POLICE STATION ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* EMPLOYEE DISTRICT */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="employeeDistrict"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {address.district.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.address.district"
              value={values?.personalInfo?.address?.district}
              onChange={handleChange}
              onBlur={handleBlur}
              id="employeeDistrict"
              placeholder={address.district.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.personalInfo?.address?.district &&
              touched?.personalInfo?.address?.district && (
                <span className="input-error">
                  {errors?.personalInfo?.address?.district}
                </span>
              )}
          </LabelInputErrorWrapper>

          {/* EMPLOYEE UPAZILA OR POLICE STATION ADDRESS*/}
          <LabelInputErrorWrapper>
            <label
              htmlFor="employeeUpazila"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {address.upazila.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.address.upazila"
              value={values?.personalInfo?.address?.upazila}
              onChange={handleChange}
              onBlur={handleBlur}
              id="employeeUpazila"
              placeholder={address.upazila.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.personalInfo?.address?.upazila &&
              touched?.personalInfo?.address?.upazila && (
                <span className="input-error">
                  {errors?.personalInfo?.address?.upazila}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>
        {/*  EMPLOYEE DIVISION AND NATIONALITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
          {/* EMPLOYEE DISTRICT */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="employeeDivision"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {address.division.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.address.division"
              value={values?.personalInfo?.address?.division}
              onChange={handleChange}
              onBlur={handleBlur}
              id="employeeDivision"
              placeholder={address.division.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors?.personalInfo?.address?.division &&
              touched?.personalInfo?.address?.division && (
                <span className="input-error">
                  {errors?.personalInfo?.address?.division}
                </span>
              )}
          </LabelInputErrorWrapper>
          {/* NATIONALITY */}
          <LabelInputErrorWrapper>
            <label
              htmlFor="nationality"
              className={`input-label ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            >
              {personalInfo.address.nationality.label[lang]}
            </label>
            <input
              type="text"
              name="personalInfo.address.nationality"
              value={values?.personalInfo?.address?.nationality}
              onChange={handleChange}
              onBlur={handleBlur}
              id="nationality"
              placeholder={personalInfo.address.nationality.placeholder[lang]}
              className={`input-field ${
                lang === "en" ? "font-poppins" : "font-anek"
              }`}
            />
            {errors.personalInfo?.address?.nationality &&
              touched.personalInfo?.address?.nationality && (
                <span className="input-error">
                  {errors.personalInfo?.address?.nationality}
                </span>
              )}
          </LabelInputErrorWrapper>
        </div>
      </FormWrapper>

      <FormWrapper
        size="full"
        heading={
          lang === "en" ? "Educational Qualification" : "শিক্ষাগত যোগ্যতা"
        }
      >
        {/* EDUCATIONAL QUALIFICATION */}
        <div>
          {values?.educations?.map((_: any, eduIndex: number) => (
            <div
              className="border-t-2  my-6 border-primary/5 relative"
              key={eduIndex}
            >
              <div className="text-center absolute left-1/2 top-0 -translate-y-[63%] md:-translate-y-[53%] -translate-x-1/2 select-none">
                <span
                  className={`bg-primary/5 text-xs md:text-base  text-center px-2 md:px-4 leading-none rounded-full w-full -z-10 backdrop-blur-sm ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  }`}
                >
                  {lang === "en"
                    ? `Educational Qualification ${eduIndex + 1}`
                    : `শিক্ষাগত যোগ্যতা ${digitConverter(eduIndex + 1, lang)}`}
                </span>
              </div>
              {/* EXAMINATION NAME & BOARD */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4 mt-6">
                {/* EDUCATINAL EXAM NAME */}
                <LabelInputErrorWrapper>
                  <label
                    htmlFor={`educations[${eduIndex}].examName`}
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {educations.examName.label[lang]}
                  </label>
                  <input
                    type="text"
                    name={`educations[${eduIndex}].examName`}
                    value={values?.educations[eduIndex].examName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`educations[${eduIndex}].examName`}
                    placeholder={educations.examYear.placeholder[lang]}
                    className={`input-field ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  />
                  {errors.educations?.length > 0 &&
                    errors?.educations[eduIndex]?.examName &&
                    touched?.educations?.length > 0 &&
                    touched?.educations[eduIndex]?.examName && (
                      <span className="input-error">
                        {errors?.educations[eduIndex]?.examName}
                      </span>
                    )}
                </LabelInputErrorWrapper>
                {/* EDUCATION EXAM BOARD */}
                <LabelInputErrorWrapper>
                  <label
                    htmlFor={`educations[${eduIndex}].examBoard`}
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {educations.examBoard.label[lang]}
                  </label>
                  <input
                    type="text"
                    name={`educations[${eduIndex}].examBoard`}
                    value={values?.educations[eduIndex]?.examBoard}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`educations[${eduIndex}].examBoard`}
                    placeholder={
                      personalInfo.address.nationality.placeholder[lang]
                    }
                    className={`input-field ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  />
                  {errors?.educations?.length > 0 &&
                    errors?.educations[eduIndex]?.examBoard &&
                    touched?.educations?.length > 0 &&
                    touched?.educations[eduIndex]?.examBoard && (
                      <span className="input-error">
                        {errors?.educations[eduIndex]?.examBoard}
                      </span>
                    )}
                </LabelInputErrorWrapper>
              </div>
              <div
                key={eduIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4"
              >
                {/* EDUCATINAL EXAMINATION YEAR */}
                <LabelInputErrorWrapper>
                  <label
                    htmlFor={`educations[${eduIndex}].examYear`}
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {educations.examYear.label[lang]}
                  </label>
                  <input
                    type="text"
                    name={`educations[${eduIndex}].examYear`}
                    value={values?.educations[eduIndex]?.examYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`educations[${eduIndex}].examYear`}
                    placeholder={educations.examYear.placeholder[lang]}
                    className={`input-field ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  />
                  {errors.educations?.length > 0 &&
                    errors?.educations[eduIndex]?.examYear &&
                    touched?.educations?.length > 0 &&
                    touched?.educations[eduIndex]?.examYear && (
                      <span className="input-error">
                        {errors?.educations[eduIndex]?.examYear}
                      </span>
                    )}
                </LabelInputErrorWrapper>

                {/* EDUCATION EXAM BOARD */}
                <LabelInputErrorWrapper>
                  <label
                    htmlFor={`educations[${eduIndex}].examResult`}
                    className={`input-label ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {educations.examResult.label[lang]}
                  </label>
                  <input
                    type="text"
                    name={`educations[${eduIndex}].examResult`}
                    value={values?.educations[eduIndex]?.examResult.toString()}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`educations[${eduIndex}].examResult`}
                    placeholder={educations.examResult.placeholder[lang]}
                    className={`input-field ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  />
                  {errors?.educations?.length > 0 &&
                    errors?.educations[eduIndex]?.examResult &&
                    touched?.educations?.length > 0 &&
                    touched?.educations[eduIndex]?.examResult && (
                      <span className="input-error">
                        {errors?.educations[eduIndex]?.examResult}
                      </span>
                    )}
                </LabelInputErrorWrapper>
              </div>

              <div className="flexEnd">
                <AlertDialog>
                  <AlertDialogTrigger
                    className={`${
                      lang === "en" ? "font-poppins" : "font-anek"
                    } mt-2 btn-destructive-fill-rounded  !text-xs`}
                  >
                    <LucideTrash2 className="mr-1 w-4 h-4 -mt-[4px]" />
                    {lang === "en" ? "Remove" : "সরিয়ে ফেলুন"}
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle
                        className={`${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                      >
                        {lang === "en"
                          ? "  Are you absolutely sure?"
                          : "আপনি কি পুরোপুরিভাবে নিশ্চিত"}
                      </AlertDialogTitle>
                      <AlertDialogDescription
                        className={`${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                      >
                        {lang === "en"
                          ? " This action cannot be undone. This will permanently delete your storage."
                          : "এই কাজটি পুনরায় করা যাবে না। এটি স্থায়ীভাবে আপনার সঞ্চয়স্থান থেকে মুছে ফেলবে।"}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        className={` ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                      >
                        {lang === "en" ? "Cancel" : "বাতিল করুন"}
                      </AlertDialogCancel>
                      <AlertDialogAction
                        className={`btn-destructive-fill ${
                          lang === "en" ? "font-poppins" : "font-anek"
                        }`}
                        onClick={() => {
                          const updatedEducation = values.educations.filter(
                            (_: any, index: number) => index !== eduIndex
                          );
                          setValues({
                            ...values,
                            educations: updatedEducation,
                          });
                        }}
                      >
                        {lang === "en" ? "Confirm" : "নিশ্চিত করুন"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
          {/* BUTTON FOR ADDING NEW EXAM DETAILS FIELD */}
          <div>
            <Button
              type="button"
              onClick={() =>
                setValues({
                  ...values,
                  educations: [
                    ...values.educations,
                    {
                      examName: "",
                      examYear: "",
                      examBoard: "",
                      examResult: "",
                    },
                  ],
                })
              }
              variant="link"
              size="rounded"
              className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
            >
              <LucidePlusCircle className="mr-1 w-4 h-4 -mt-[2px]" />
              {lang === "en"
                ? "Add Another Qualification"
                : "নতুন যোগ্যতা যুক্ত করুন"}
            </Button>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default EmployeePersonalAcademicInfo;
