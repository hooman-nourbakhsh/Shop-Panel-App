"use client";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import SendOTPFrom from "./SendOTPFrom";
import CheckOTPForm from "./CheckOTPForm";
import { checkOtp, sendOtp } from "@/services/authServices";
const RESEND_TIME = 90;

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(RESEND_TIME);

  const { data: otpResponse, isPending, mutateAsync: mutateSendOtp } = useMutation({ mutationFn: sendOtp });
  const { mutateAsync: mutateCheckOtp, isPending: isCechkingOtp } = useMutation({ mutationFn: checkOtp });

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateSendOtp({ phoneNumber });
      toast.success(data.message, { duration: 4000 });

      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPFrom
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
            isLoading={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((s) => s - 1)}
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            time={time}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            isCechkingOtp={isCechkingOtp}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderSteps()}</div>
    </div>
  );
}
