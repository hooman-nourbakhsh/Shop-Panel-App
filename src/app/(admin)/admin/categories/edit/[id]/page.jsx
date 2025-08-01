"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Loading from "@/common/Loading";
import { CategoryForm, categoryTypes } from "@/components/CategoryForm";
import { useGetCategoryById, useUpdateCategory } from "@/hooks/useCategories";
import { includeObj } from "@/utils/objectUtils";

const includesCategoryKey = ["title", "englishTitle", "description"];

export default function EditCategoryPage() {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading: isLoadingCategory } = useGetCategoryById(id);
  const { category } = data || {};
  const [formData, setFormData] = useState({});
  const [selectedType, setSelectedType] = useState("");
  const { isPending, mutateAsync } = useUpdateCategory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        data: {
          ...formData,
          type: selectedType.value,
        },
        id: category._id,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (category) {
      setSelectedType(categoryTypes.find((c) => c.value === category.type));
      setFormData(includeObj(category, includesCategoryKey));
    }
  }, [data]);

  if (isLoadingCategory) return <Loading />;
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">ویرایش دسته بندی جدید</h1>
      <CategoryForm
        category={formData}
        handleChange={handleChange}
        isLoading={isPending}
        onSubmit={handleSubmit}
        selectedType={categoryTypes.find((c) => c.value === category.type)}
        setSelectedType={setSelectedType}
      />
    </div>
  );
}
