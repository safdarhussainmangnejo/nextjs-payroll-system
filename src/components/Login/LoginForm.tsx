'use client';
import React, { useState } from "react";
// import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const router = useRouter();

    const dummyEmail= 'demo@gmail.com';
    const dummyPassword= '123'

    const handleSubmit = async (e: React.FormEvent) => {
      console.log("email: ", email);
      console.log("password: ", password);
        e.preventDefault();

        try {

            if(email == dummyEmail && password==dummyPassword){
              window.location.href = '/';
              // router.push('/');
            }

            setError("Email or Password Incorrect, please try again");
            // const response = await fetch('/api/auth/signin', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, password }),
            // });

            // const data = await response.json();

            // if (!response.ok) {
            //     throw new Error(data.message);
            // }

            

            // Handle successful sign-in (e.g., redirect to dashboard)
        } catch (error: any) {
            setError("Email or Password Incorrect, please try again");
        }
    };


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[480px]">
      {error && <p className="text-red">{error}</p>}
      <div className="flex gap-0.5 mt-8 max-w-full text-sm leading-6 w-[480px] max-md:flex-wrap">
        <label htmlFor="email" className="text-gray-900">
          Email Address
        </label>
        <span className="text-red-600">*</span>
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        className="justify-center px-5 py-4 mt-2.5 max-w-full text-sm leading-6 text-gray-900 whitespace-nowrap rounded-xl border border-red-600 border-solid w-[480px] max-md:max-w-full"
        defaultValue="duarte@gmail.com"
        aria-invalid="true"
        aria-describedby="email-error"
      />
      {/* <div
        id="email-error"
        className="flex gap-1 mt-2.5 max-w-full text-xs leading-5 text-red-600 w-[480px] max-md:flex-wrap"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa452d12a19d318665e97fba3533940cc0cc6e6338e75ef30aadef3bc0ffddc2?apiKey=3134160d320944cb9be378a5d06b0bb6&"
          alt=""
          className="shrink-0 aspect-[1.2] w-[18px]"
        />
        <div className="flex-1 max-md:max-w-full">
          The email you entered is not registered, please check again
        </div>
      </div> */}
      <div className="flex gap-0.5 mt-6 max-w-full text-sm leading-6 whitespace-nowrap w-[480px] max-md:flex-wrap">
        <label htmlFor="password" className="text-gray-900">
          Password
        </label>
        <span className="text-red-600">*</span>
      </div>

      <div className="flex gap-2.5 px-5 py-4 mt-2.5 max-w-full rounded-xl border border-red-600 border-solid w-[480px] max-md:flex-wrap focus-within:border-black">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="flex-1 min-w-0 px-0 py-0 bg-transparent border-none text-gray-900 focus:ring-0"
          style={{ outline: "none" }}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba593af0359970680554d119704e8febd81b641f0a9556392e4d610b0f08f753?apiKey=3134160d320944cb9be378a5d06b0bb6&"
          alt="Toggle password visibility"
          className="shrink-0 w-5 aspect-square"
        />
      </div>

      <div className="flex gap-4 mt-6 max-w-full text-sm leading-6 text-slate-500 w-[480px] max-md:flex-wrap">
        <div className="flex gap-2">
          <input type="checkbox" id="remember-me" className="sr-only" />
          <label
            htmlFor="remember-me"
            className="flex gap-2 items-center cursor-pointer"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/adfee93b2a1cca7dee4ec144cc18afc637cd9e8e3784c2cf3afece499a865b30?apiKey=3134160d320944cb9be378a5d06b0bb6&"
              alt=""
              className="shrink-0 my-auto w-5 aspect-square"
            />
            <span>Remember Me</span>
          </label>
        </div>
        <a href="#" className="flex-1 text-right">
          Forgot Password
        </a>
      </div>
      <button
        type="submit"
        className="justify-center items-center px-6 py-4 mt-8 max-w-full text-base font-bold tracking-wide leading-6 text-center text-white whitespace-nowrap bg-gray-800 rounded-xl w-[480px] max-md:px-5"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
