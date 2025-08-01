"use client";
import { useParams } from "next/navigation";
import Loading from "@/common/Loading";
import { useGetProductById } from "@/hooks/useProducts";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById(id);
  const { product } = data || {};
  // fetch based on ProductId to get produt detail

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">{`عنوان محصول : ${product.title}`}</h1>
    </div>
  );
}
