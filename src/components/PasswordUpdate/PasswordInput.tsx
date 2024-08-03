import React from 'react';

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col w-full min-h-[88px] max-md:max-w-full">
      <label className="flex gap-0.5 items-start w-full text-sm leading-6 max-md:max-w-full">
        <span className="text-gray-900">{label}</span>
        <span className="text-red">*</span>
      </label>
      {/* <div className="flex gap-2.5 px-5 py-4 mt-2.5 w-full rounded-xl max-md:max-w-full"> */}
      <div className="flex gap-2.5 px-5 py-4 mt-2.5 max-w-full rounded-xl border border-red-600 border-solid w-[480px] max-md:flex-wrap focus-within:border-black">
        {/* <input
          type="password"
          value={value}
          onChange={onChange}
          className="flex flex-1 shrink gap-1.5 h-5 basis-0 min-w-[240px] w-[410px]"
          required
        />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762585a426a3ea4d7254d9305ff6d16fc18547ed1ef24b6737e1d14a91241d18?apiKey=3134160d320944cb9be378a5d06b0bb6&&apiKey=3134160d320944cb9be378a5d06b0bb6" alt="" className="object-contain shrink-0 self-start w-5 aspect-square" /> */}
      

      <input
          type="password"
          id="password"
          value={value}
          onChange={onChange}
          className="flex-1 min-w-0 px-0 py-0 bg-transparent border-none text-gray-900 focus:ring-0"
          style={{ outline: "none" }}
          required
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba593af0359970680554d119704e8febd81b641f0a9556392e4d610b0f08f753?apiKey=3134160d320944cb9be378a5d06b0bb6&"
          alt="Toggle password visibility"
          className="shrink-0 w-5 aspect-square"
        />
        </div>
    </div>
  );
};

export default PasswordInput;