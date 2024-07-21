import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex gap-2.5 justify-center self-end mt-64 text-sm leading-6 text-gray-900 max-md:flex-wrap max-md:mt-10 max-md:mr-1.5">
      <div className="text-slate-400">
        © 2024 Kobi Education . Alrights reserved.
      </div>
      <a href="#" className="text-gray-900">Terms & Conditions</a>
      <a href="#" className="text-gray-900">Privacy Policy</a>
    </footer>
  );
};

export default Footer;