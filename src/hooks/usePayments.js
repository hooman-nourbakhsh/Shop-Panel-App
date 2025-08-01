import { useQuery } from "@tanstack/react-query";
import { getAllPayments, getOnePaymentById } from "@/services/paymentService";

export const useGetPayments = () =>
  useQuery({
    queryKey: ["payments"],
    queryFn: getAllPayments,
    retry: false,
  });

export const useGetPaymentsById = (id) =>
  useQuery({
    queryKey: ["get-payments", id],
    queryFn: () => getOnePaymentById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
