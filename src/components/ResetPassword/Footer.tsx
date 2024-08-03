import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-2.5 justify-center items-center mt-64 text-sm leading-6 text-gray-900 max-md:mt-10">
      <p className="self-stretch my-auto leading-relaxed text-slate-400">
        © 2023 Humanline . Alrights reserved.
      </p>
      <a href="/terms" className="self-stretch my-auto">Terms & Conditions</a>
      <a href="/privacy" className="self-stretch my-auto">Privacy Policy</a>
    </footer>
  );
};

export default Footer;