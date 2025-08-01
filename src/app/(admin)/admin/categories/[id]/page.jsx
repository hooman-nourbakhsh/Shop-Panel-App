"use client";
import { useParams } from "next/navigation";
import Loading from "@/common/Loading";
import { useGetCategoryById } from "@/hooks/useCategories";

export default function CategoryDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetCategoryById(id);
  const { category } = data || {};
  // fetch based on CategoryId to get category detail

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="mb-4 font-bold text-xl">{`عنوان : ${category.title}`}</h1>
    </div>
  );
}
