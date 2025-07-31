"use client";
import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import PaymentTable from "./PaymentTable";

export default function Payments() {
  const { data, isLoading } = useGetUser();
  const { payments } = data || {};

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">سفارشات کاربر</h1>
      <PaymentTable payments={payments} />
    </div>
  );
}
