import React from 'react';
import PasswordResetForm from './PasswordResetForm';
import Footer from './Footer';


const PasswordResetPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col items-center px-20 pt-80 pb-6 w-full min-h-[1023px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f3907d2dcf356e833926b6a311810e6cd60896b7e35d0f2ae4edd0d6498a1b0?apiKey=3134160d320944cb9be378a5d06b0bb6&&apiKey=3134160d320944cb9be378a5d06b0bb6" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col max-w-full w-[486px]">
          <PasswordResetForm />
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default PasswordResetPage;