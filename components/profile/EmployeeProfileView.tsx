import { LucideClipboardEdit, LucideUser } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import InfoWrapper from "../common/InfoWrapper";
import TitleDescriptionWrapper from "../common/TitleDescriptionWrapper";
import { digitConverter } from "@/utils/HelperFunctions";
import { Button } from "../ui/button";
import Link from "next/link";

interface IEmployeeProfileViewProps {
  authData: any;
  lang: string;
  editBtn?: boolean;
}

const EmployeeProfileView: FC<IEmployeeProfileViewProps> = ({
  authData,
  lang,
  editBtn = false,
}) => {
  const {
    name,
    avatar,
    email,
    role,
    employmentRef,
    phone,
    isVerified,
    classTeacher,
    personalInfo,
    educations,
    classList,
    _id,
  } = authData;

  return (
    <section className="pb-8">
      {/* NAVIGATION BUTTONS */}
      {editBtn && (
        <div className="my-2 flex justify-end">
          <Link href={`../../../${lang}/${role}/employee_list/edit/${_id}`}>
            <Button type="button" variant="link">
              <LucideClipboardEdit className="w-4 h-4 mr-1" />
              {lang === "en" ? "Edit Profile" : "এডিট প্রোফাইল"}
            </Button>
          </Link>
        </div>
      )}
      {/* GENERAL INFORMATION */}
      {/* NAME & EMAIL & PHONE & EMPLOYMENT REFERENCE & ROLE*/}
      <InfoWrapper
        heading={`${lang === "en" ? "General Information" : "সাধারণ তথ্য"}`}
      >
        <div className="flex flex-col md:flex-row gap-2 lg:gap-8">
          {/* EMPLOYEE AVATAR */}
          <div className="w-[150px] h-full overflow-hidden rounded-xl border-2 border-primary/10 mx-auto">
            {avatar?.url ? (
              <Image
                src={avatar?.url}
                alt={name?.firstName || ""}
                width={300}
                height={400}
                className="scale-[1.05]"
              />
            ) : (
              <span className="w-[150px] h-[200px] flex items-center justify-center bg-accent/20">
                <LucideUser className="w-32 h-32 opacity-50" />
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 w-full md:w-10/12">
            {/* NAME  */}
            <TitleDescriptionWrapper
              title={lang === "en" ? "Name" : "নাম"}
              description={`${name?.firstName && name?.firstName} ${
                name?.sureName && " " + name?.sureName
              }`}
            />
            {/* EMAIL  */}
            <TitleDescriptionWrapper
              title={lang === "en" ? "Email" : "ইমেইল"}
              description={email}
            />
            {/* PHONE  */}
            <TitleDescriptionWrapper
              title={lang === "en" ? "Phone" : "ফোন"}
              description={digitConverter(phone, lang)}
            />
            {/* EMPLOYEE REFERENCE */}
            <TitleDescriptionWrapper
              title={
                lang === "en"
                  ? "Employee Reference Code"
                  : "এমপ্লয়ই রেফারেন্স কোড"
              }
              description={employmentRef}
            />
            {/* ROLE */}
            <TitleDescriptionWrapper
              title={lang === "en" ? "Employee Role" : "এমপ্লয়ইর ভূমিকা"}
              description={role}
            />
            {/* CLASS TEACHER CLASS */}
            <TitleDescriptionWrapper
              title={lang === "en" ? "Teacher Of Class" : "শ্রেণি শিক্ষক"}
              description={
                classTeacher?.classId?.className &&
                classTeacher?.classId?.className[lang]
              }
            />
            {/* CLASS TEACHER SECTION */}
            <TitleDescriptionWrapper
              title={lang === "en" ? "Class Section" : "শ্রেণি শাখা"}
              description={
                classTeacher?.classId?.sectionName &&
                classTeacher?.classId?.sectionName[lang]
              }
            />
            {/* VERIFICATION STATUS */}
            <TitleDescriptionWrapper
              title={
                lang === "en" ? "Verification Status" : "যাচাইকরণের অবস্থা"
              }
              description={isVerified ? "Verified" : "Not Verified"}
            />
          </div>
        </div>
      </InfoWrapper>
      {/* PERSONAL INFORMATION */}
      {/* BIRTHDAY CERTIFICATE & NATIONAL ID CARD NUMBER & SEX & BLOOD GROUP & RELIGION  */}
      <InfoWrapper
        heading={lang === "en" ? "Personal Information" : "ব্যক্তিগত তথ্য"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {/* BIRTHDAY CERTIFICATE NUMBER  */}
          <TitleDescriptionWrapper
            title={
              lang === "en" ? "Birthday Certificate Number" : "জন্ম সনদ নম্বর"
            }
            description={digitConverter(personalInfo?.BCN, lang)}
          />
          {/* NATIONAL ID CARD NUMBER  */}
          <TitleDescriptionWrapper
            title={
              lang === "en"
                ? "National ID Card Number"
                : "জাতীয় পরিচয়পত্র নম্বর"
            }
            description={digitConverter(personalInfo?.NID, lang)}
          />
          {/* DATE OF BIRTH  */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Date Of Birth" : "জন্ম তারিখ"}
            description={
              personalInfo?.dateOfBirth &&
              `${digitConverter(
                new Date(personalInfo?.dateOfBirth).getDate(),
                lang
              )}-${
                new Date(personalInfo?.dateOfBirth).getMonth() > 9
                  ? digitConverter(
                      new Date(personalInfo?.dateOfBirth).getMonth(),
                      lang
                    )
                  : "0" +
                    digitConverter(
                      new Date(personalInfo?.dateOfBirth).getMonth(),
                      lang
                    )
              }-${digitConverter(
                new Date(personalInfo?.dateOfBirth).getFullYear(),
                lang
              )}`
            }
          />
          {/* SEX  */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Gender" : "লিঙ্গ"}
            description={personalInfo?.sex}
          />
          {/* BLOOD GROUP  */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Blood Group" : "রক্তের গ্রুপ"}
            description={personalInfo?.bloodGroup}
          />
          {/* RELIGION */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Religion" : "ধর্ম"}
            description={personalInfo?.religion}
          />
        </div>
      </InfoWrapper>
      {/*  ADDRESS */}
      {/* NATIONALITY & TOWN & DISTRICT & POLICE STATION & DIVISION */}
      <InfoWrapper heading={lang === "en" ? "Address" : "ঠিকানা"}>
        {/* NATIONALITY & TOWN & DISTRICT  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {/* TOWN */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Village/ City" : "গ্রাম/ শহর"}
            description={personalInfo?.address?.town}
          />
          {/* POST OFFICE */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Post Office" : "ডাকঘর"}
            description={personalInfo?.address?.postOffice}
          />
          {/* DISTRICT  */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "District" : "জেলা"}
            description={personalInfo?.address?.district}
          />
          {/* UPAZIAL */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Upazila/ Police Station" : "উপজেলা/ থানা"}
            description={personalInfo?.address?.upazila}
          />
          {/* DIVISION  */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Division" : "বিভাগ"}
            description={personalInfo?.address?.division}
          />
          {/* NATIONALITY  */}
          <TitleDescriptionWrapper
            title={lang === "en" ? "Nationality" : "জাতীয়তা"}
            description={personalInfo?.address?.nationality}
          />
        </div>
      </InfoWrapper>
      {/*  EDUCATIONAL QUALIFICATION */}
      {/* EXAM YEAR & BOARD & NAME & RESULT */}
      <InfoWrapper
        heading={
          lang === "en" ? "Educational Qualification" : "শিক্ষাগত যোগ্যতা"
        }
      >
        {educations?.length > 0 &&
          educations.map((education: any, index: number) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2"
            >
              {/* EXAM NAME & YEAR & BOARD & RESULT */}
              <TitleDescriptionWrapper
                title={lang === "en" ? "Examination Name" : "পরীক্ষার নাম"}
                description={education?.examName}
              />
              {/* EXAM YEAR */}
              <TitleDescriptionWrapper
                title={lang === "en" ? "Examination Year" : "পরীক্ষার সাল"}
                description={education?.examYear}
              />
              {/* EXAM BOARD */}
              <TitleDescriptionWrapper
                title={lang === "en" ? "Examination Board" : "পরীক্ষা বোর্ড"}
                description={education?.examBoard}
              />
              {/* EXAM RESULT */}
              <TitleDescriptionWrapper
                title={lang === "en" ? "Examination Result" : "পরীক্ষার ফলাফল"}
                description={education?.examResult}
              />
            </div>
          ))}
      </InfoWrapper>
      {/* CLASS LIST */}
      {/* CLASS NAME, ID, SUBJECT NAME, ID */}
      {classList?.length > 0 && (
        <InfoWrapper
          heading={lang === "en" ? "List Of Classes" : "শ্রেণির তালিকা"}
        >
          {classList.map((list: any, index: number) => (
            <div className="w-full flex" key={index}>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                {/* CLASS NAME */}
                <TitleDescriptionWrapper
                  title={lang === "en" ? "Class Name" : "শ্রেণির নাম"}
                  description={
                    list?.classId?.className && list?.classId?.className[lang]
                  }
                />
                {/* SECTION NAME */}
                <TitleDescriptionWrapper
                  title={lang === "en" ? "Section Name" : "শাখার নাম"}
                  description={
                    list.sectionId?.sectionName &&
                    list.sectionId?.sectionName[lang]
                  }
                />
                {/* SUBJECT NAME */}
                <TitleDescriptionWrapper
                  title={lang === "en" ? "Subject Name" : "বিষয়ের নাম"}
                  description={
                    list.subjectId?.subjectName &&
                    list.subjectId?.subjectName[lang]
                  }
                />
              </div>
            </div>
          ))}
        </InfoWrapper>
      )}
    </section>
  );
};

export default EmployeeProfileView;
