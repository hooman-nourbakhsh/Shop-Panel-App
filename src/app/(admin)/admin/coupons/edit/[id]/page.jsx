"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import CouponForm from "@/components/CouponForm";
import { useGetProducts } from "@/hooks/useProducts";
import { useGetOneCoupon, useUpdateCoupon } from "@/hooks/useCoupons";
import Loading from "@/common/Loading";

export default function EditCoupon() {
  const router = useRouter();
  const { id } = useParams();
  const { data: productsData } = useGetProducts();
  const { products } = productsData || {};
  const [type, setType] = useState("");
  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const { isPending, mutateAsync } = useUpdateCoupon();
  const [formData, setFormData] = useState({});

  const { isLoading, data } = useGetOneCoupon(id);
  const { coupon } = data || {};
  
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        id: coupon._id,
        data: {
          ...formData,
          type,
          expireDate: new Date(expireDate).toISOString(),
          productIds: productIds.map((p) => p._id),
        },
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (coupon) {
      setType(coupon.type);
      setProductIds(coupon.productIds);
      setFormData({
        code: coupon.code,
        amount: coupon.amount,
        usageLimit: coupon.usageLimit,
      });
      setExpireDate(new Date(coupon.expireDate));
    }
  }, [coupon]);

  if (isPending) return <Loading />;

  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">ویرایش کد تخفیف</h1>
      <CouponForm
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        type={type}
        setType={setType}
        formData={formData}
        isLoading={isLoading}
        onChangeSelect={setProductIds}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        options={products}
        defaultValue={coupon.productIds}
      />
    </div>
  );
}
