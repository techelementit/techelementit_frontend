"use client";
import { ReactNode } from "react";
import DashboardLayout from "@/components/common/DashboardLayout";
export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  return <DashboardLayout params={params}> {children}</DashboardLayout>;
}
