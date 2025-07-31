"use client";
import { useParams } from "next/navigation";

export default function UserDetails() {
  const { id } = useParams();
  // get user data based on Id =>
  console.log(id);
  return (
    <div className="max-w-sm">
      <h1 className=" flex">{`اطلاعات کاربر با آیدی --->  ${id}`}</h1>
    </div>
  );
}
