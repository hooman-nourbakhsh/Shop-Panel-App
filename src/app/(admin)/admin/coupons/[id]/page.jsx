"use client";
import { useParams } from "next/navigation";
import Loading from "@/common/Loading";
import { useGetOneCoupon } from "@/hooks/useCoupons";

export default function CouponDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetOneCoupon(id);
  const { coupon } = data || {};
  // fetch based on couponId to get produt detail

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">{`کد تخفیف : ${coupon.code}`}</h1>
    </div>
  );
}
