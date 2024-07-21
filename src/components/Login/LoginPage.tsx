import React from 'react';
import LoginForm from './LoginForm';
import Footer from './Footer';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-end w-full text-white bg-gray-900 max-md:max-w-full">
            <img loading="lazy" src="/assets/login.png" alt="" className="w-full aspect-[0.99]  max-md:max-w-full" />
            <div className="flex flex-col justify-center px-12 pt-12 pb-20 border-emerald-500 border-solid border-t-[5px] max-md:px-5 max-md:max-w-full">
              <h1 className="text-5xl font-bold tracking-tight leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Payroll & LMS Kobi Education
              </h1>
              <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                Study Overseas, Have a Better Life, and Make Big Impact 🇦🇺🇨🇦🇺🇸🇬🇧🇮🇩
              </p>
            </div>
          </div>
        </section>
        <main className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center px-2.5 pt-6 pb-5 max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e62246b60f75ddc02d7a885d80a9e240637b0e8f5cea9bb32de8cef86be172?apiKey=3134160d320944cb9be378a5d06b0bb6&" alt="Company Logo" className="self-start mt-12 max-w-full aspect-[1.64] fill-gray-200 w-[100px] max-md:mt-10" />
            <h2 className="mt-28 text-2xl font-bold leading-8 text-center text-gray-900 max-md:mt-10 max-md:max-w-full">
              Login first to your account
            </h2>
            <LoginForm />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;