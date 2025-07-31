"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import TextField from "@/common/TextField";
import { completeProfile } from "@/services/authServices";
import Loading from "@/common/Loading";

export default function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ name, email });
      toast.success(message);
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={submitHandler}>
          <TextField name="name" label="نام و نام خانوادگی" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField name="email" label="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
