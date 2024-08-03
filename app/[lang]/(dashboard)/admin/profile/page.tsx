"use client";
import EmployeeProfileView from "@/components/profile/EmployeeProfileView";
import React, { FC } from "react";
import { useSelector } from "react-redux";

interface IAdminProfileProps {
  params: { lang: string };
}

const AdminProfile: FC<IAdminProfileProps> = ({ params: { lang } }) => {
  const authData = useSelector((state: any) => state?.auth?.authData);
  return (
    <section className={`${lang === "en" ? "font-poppins" : "font-anek"}`}>
      {authData?.role === "admin" && (
        <EmployeeProfileView editBtn={true} lang={lang} authData={authData} />
      )}
    </section>
  );
};

export default AdminProfile;
