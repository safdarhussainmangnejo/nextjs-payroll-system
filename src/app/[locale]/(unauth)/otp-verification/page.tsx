"use client";
import SubmitButton from "@/components/PasswordUpdate/SubmitButton";
import Footer from "@/components/ResetPassword/Footer";
import React from "react";

interface OtpVerificationProps {
  email: string;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  email = "demo@gmail.com",
}) => {
  const [otp, setOtp] = React.useState(new Array(4).fill(""));

  const handleChange = (element: any, index: number) => {
    const value = element.value;
    if (isNaN(value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('OTP Submitted: ' + otp.join(''));
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col items-center px-20 pt-64 pb-6 w-full min-h-[1023px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5386cd3cb253dd501d301b370c7da7d8542f3643bbe1071d9ec1611938cb5e?apiKey=3134160d320944cb9be378a5d06b0bb6&&apiKey=3134160d320944cb9be378a5d06b0bb6"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full w-[486px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full rounded-2xl max-md:mr-1.5 max-md:max-w-full"
          >
            <header className="flex flex-col justify-center w-full text-center max-md:max-w-full">
              <h1 className="text-3xl font-bold leading-none text-gray-900">
                OTP Verification
              </h1>
              <p className="mt-4 text-lg leading-7 text-sky-800">
                We have sent a verification code to email address{" "}
                <span className="font-semibold">{email}</span>.{" "}
                <a href="#" className="text-blue-800">
                  Wrong Email?
                </a>
              </p>
            </header>
            <div className="flex gap-5 w-full text-sm whitespace-nowrap">
              {otp.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col flex-1 shrink leading-6 text-gray-900 basis-0"
                  >
                    <input
                      type="text"
                      name="otp"
                      maxLength={1}
                      key={index}
                      value={data}
                      onFocus={(e) => e.target.select()}
                      id="otp"
                      className="flex-1 shrink gap-2.5 px-5 py-4 w-full rounded-xl text-center border border-red-600 border-solid"
                      onChange={(e) => handleChange(e.target, index)}
                    />
                  </div>
                );
              })}
            </div>
            <SubmitButton />
          </form>
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default OtpVerification;
