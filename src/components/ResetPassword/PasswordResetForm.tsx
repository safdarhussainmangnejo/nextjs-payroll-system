import React from 'react';

const PasswordResetForm: React.FC = () => {
  return (
    <div className="flex flex-col justify-center rounded-2xl max-md:mr-1.5 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full text-center text-gray-900 max-md:max-w-full">
        <h1 className="text-3xl font-bold leading-none max-md:max-w-full">
          Reset your password
        </h1>
        <p className="mt-4 text-lg leading-7 max-md:max-w-full">
          Enter your email address and we'll send you password reset instructions.
        </p>
      </div>
      <form className="flex flex-col mt-8 w-full text-sm rounded-xl max-md:max-w-full">
        <label htmlFor="email" className="flex gap-0.5 items-start w-full leading-6 max-md:max-w-full">
          <span className="text-gray-900">Registered Email</span>
          <span className="red-text">*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Input your registered email"
          className="flex-1 shrink gap-2.5 px-5 py-4 mt-2.5 w-full leading-relaxed rounded-xl border border-red-600 border-solid text-slate-400 max-md:max-w-full"
          required
        />
        <div className="flex flex-col mt-8 w-full text-base font-bold tracking-wide text-center max-md:max-w-full">
          <button type="submit" className="gap-2 self-stretch px-6 py-4 w-full text-white bg-gray-800 rounded-xl min-h-[56px] max-md:px-5 max-md:max-w-full">
            Reset Password
          </button>
          <a href="/signin" className="gap-2 self-stretch px-6 py-4 mt-4 w-full text-gray-900 rounded-xl border border-red-600 border-solid min-h-[56px] max-md:px-5 max-md:max-w-full">
            Back To Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default PasswordResetForm;