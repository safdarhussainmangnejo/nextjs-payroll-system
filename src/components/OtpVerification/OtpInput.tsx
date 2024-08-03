import React from 'react';

const OtpInput: React.FC = () => {
  const digits = [1, 3, 6, 2];

  return (
    <div className="flex gap-5 w-full text-sm whitespace-nowrap">
      {digits.map((digit, index) => (
        <div key={index} className="flex flex-col flex-1 shrink leading-6 text-gray-900 basis-0">
          <input
            type="text"
            id="otp"
            className="flex-1 shrink gap-2.5 px-5 py-4 w-full rounded-xl text-center border border-red-600 border-solid"
            value={digit}
          />
        </div>
      ))}
    </div>
  );
}

export default OtpInput;