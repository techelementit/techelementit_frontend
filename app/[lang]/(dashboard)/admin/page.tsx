"use client";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/admin/profile");
  }
};

export default page;
