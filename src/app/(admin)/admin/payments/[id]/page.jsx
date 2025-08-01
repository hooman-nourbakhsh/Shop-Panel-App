"use client";
import { useParams } from "next/navigation";
import Loading from "@/common/Loading";
import { useGetPaymentsById } from "@/hooks/usePayments";

export default function PaymentDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentsById(id);
  console.log(data);
  const payment = data?.payment?.[0] || {};
  // fetch based on paymentId to get payment detail

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">{`شماره فاکتور : ${payment.invoiceNumber}`}</h1>
    </div>
  );
}
