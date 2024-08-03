"use client";
import EmployeeProfileEditByAdmin from "@/components/profile/EmployeeProfileEditByAdmin";
import { useEmployeeEditUtilsQuery } from "@/redux/features/admin/adminApi";

import { useParams } from "next/navigation";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

interface IProfileEditByAdminProps {
  params: { lang: string };
}

const ProfileEditByAdmin: FC<IProfileEditByAdminProps> = ({
  params: { lang },
}) => {
  const { auth_id } = useParams() as any;
  const { data, isSuccess, error } = useEmployeeEditUtilsQuery(undefined);
  // console.log(params);
  const authData = useSelector((state: any) => state?.auth?.authData);

  console.log(data);

  const editAuthInfo = {};
  return (
    <section className={`${lang === "en" ? "font-poppins" : "font-anek"}`}>
      {authData?.role === "admin" && (
        <EmployeeProfileEditByAdmin lang={lang} editAuthInfo={editAuthInfo} />
      )}
    </section>
  );
};

export default ProfileEditByAdmin;
