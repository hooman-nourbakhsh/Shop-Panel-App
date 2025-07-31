"use client";
import Loading from "@/common/Loading";
import ProductListTable from "./ProductListTable";
import { useGetProducts } from "@/hooks/useProducts";

export default function ProductPage() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1>محصولات</h1>
      <ProductListTable products={products} />
    </div>
  );
}
