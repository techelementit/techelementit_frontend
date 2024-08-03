"use client";
import DataLoader from "@/components/common/DataLoader";
import EmployeeEditLayoutByAdmin from "@/components/employee/EmployeeEditLayoutByAdmin";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  useEditEmployeeAdminMutation,
  useGetSingleEmployeeQuery,
} from "@/redux/features/admin/employee/employeeApi";
import { employeeEditSchemaByAdmin } from "@/schemas/auth/employeeAuthSchemas";
import { useFormik } from "formik";
import { LucideChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface IEditEmployeeProps {
  params: { lang: string };
}

const EditEmployee: FC<IEditEmployeeProps> = ({ params: { lang } }) => {
  const { employee_id } = useParams() as any;
  const [update, setUpdate] = useState(false);

  // GER PREVIOUS EMPLOYEE DATA QUERY
  const { data: employee, isLoading: employeeLoading } =
    useGetSingleEmployeeQuery(employee_id);

  // EDIT EMPLOYEE INFO MUTATION
  const [
    editEmployeeAdmin,
    { isLoading: editLoading, error: editError, isSuccess },
  ] = useEditEmployeeAdminMutation({});

  // TOAST HOOK
  const { toast } = useToast();

  // FORMIK INITIAL VALUSE
  const initialValues = {
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
        nationality: "",
        town: "",
        postOffice: "",
        district: "",
        division: "",
        upazila: "",
      },
    },
    avatar: "",
    employmentRef: "",
    role: "",
    isVerified: false,
    classTeacher: {
      classId: "",
      sectionId: "",
    },
    educations: [
      {
        examName: "",
        examYear: "",
        examBoard: "",
        examResult: "",
      },
    ],
    classList: [{ subjectId: "", classId: "", sectionId: "" }],
  };

  // FORMIK FORM HOOK
  const formik = useFormik({
    initialValues,
    validationSchema: employeeEditSchemaByAdmin,
    onSubmit: async (initialValues: any) => {
      await editEmployeeAdmin({ id: employee_id, data: initialValues });
    },
  });

  useEffect(() => {
    if (employee?.success) {
      formik.setValues({
        name: {
          firstName: employee?.employee?.name?.firstName,
          sureName: employee?.employee?.name?.sureName,
        },
        email: employee?.employee?.email,
        phone: employee?.employee?.phone,
        password: employee?.employee?.password,
        personalInfo: {
          sex: employee?.employee?.personalInfo?.sex,
          bloodGroup: employee?.employee?.personalInfo?.bloodGroup,
          BCN: employee?.employee?.personalInfo?.BCN,
          NID: employee?.employee?.personalInfo?.NID,
          religion: employee?.employee?.personalInfo?.religion,
          dateOfBirth: employee?.employee?.personalInfo?.dateOfBirth,
          address: {
            nationality: employee?.employee?.personalInfo?.address?.nationality,
            town: employee?.employee?.personalInfo?.address?.town,
            postOffice: employee?.employee?.personalInfo?.address?.postOffice,
            district: employee?.employee?.personalInfo?.address?.district,
            division: employee?.employee?.personalInfo?.address?.division,
            upazila: employee?.employee?.personalInfo?.address?.upazila,
          },
        },
        avatar: employee?.employee?.avatar?.url,
        employmentRef: employee?.employee?.employmentRef,
        role: employee?.employee?.role,
        isVerified: employee?.employee?.isVerified,
        classTeacher: {
          classId: employee?.employee?.classTeacher?.classId?._id,
          sectionId: employee?.employee?.classTeacher?.sectionId?._id,
        },
        educations: employee?.employee?.educations?.map((education: any) => {
          return {
            examName: education?.examName,
            examYear: education?.examYear,
            examBoard: education?.examBoard,
            examResult: education?.examResult,
          };
        }),
        classList: employee?.employee?.classList?.map((classItem: any) => {
          return {
            subjectId: classItem?.subjectId?._id,
            classId: classItem?.classId?._id,
            sectionId: classItem.sectionId?._id,
          };
        }),
      });
    }

    if (isSuccess) {
      toast({
        title: "Employee Update Message",
        description: "Employee informations updated successfully",
      });
      // REDIRECT THE CLASS LIST PAGE

      return redirect(`../../../../${lang}/admin/employee_list`);
    }
  }, [employee, isSuccess]);

  if (employeeLoading) {
    return <DataLoader />;
  }

  return (
    <section>
      <div className="my-8 flex justify-start">
        <Link href={`../../../../${lang}/admin/employee_list`}>
          <Button type="button" variant="link">
            <LucideChevronLeftCircle className="w-4 h-4 mr-1" />
            {lang === "en" ? "Back To Employee List" : "এমপ্লয়ই তালিকায় ফিরুন"}
          </Button>
        </Link>
      </div>
      <EmployeeEditLayoutByAdmin
        error={editError}
        formik={formik}
        lang={lang}
        isLoading={editLoading}
      />
    </section>
  );
};

export default EditEmployee;

const test = {
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
      nationality: "",
      town: "",
      postOffice: "",
      district: "",
      division: "",
      upazila: "",
    },
  },
  avatar: "",
  employmentRef: "",
  role: "",
  isVerified: false,
  classTeacher: {
    classId: "",
    sectionId: "",
  },
  educations: [
    {
      examName: "",
      examYear: "",
      examBoard: "",
      examResult: "",
    },
  ],
  classList: [{ subjectId: "", classId: "", sectionId: "" }],
};
