import OTPInput from "react-otp-input";
import { IoIosRefresh } from "react-icons/io";

import { CiEdit } from "react-icons/ci";
import Loading from "@/common/Loading";

export default function CheckOTPForm({ otpResponse, onSubmit, otp, setOtp, onBack, time, onResendOtp, isCechkingOtp }) {
  return (
    <div>
      {otpResponse && (
        <button onClick={onBack} className="flex mb-3 gap-1">
          <CiEdit className="w-6 h-6 text-primary-900" />
          ویرایش شماره ؟
        </button>
      )}
      <div className="flex mb-3 text-secondary-500 gap-2">
        <IoIosRefresh />
        {time > 0 ? <p>{time} ثانیه تا ارسال مجدد کد</p> : <button onClick={onResendOtp}>ارسال مجدد کد !</button>}
      </div>

      <form className="space-y-10" onSubmit={onSubmit}>
        <p className="font-bold">کد تایید را وارد کنید:</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          renderInput={(props) => <input type="number" {...props} />}
        />
        <div>
          {isCechkingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
