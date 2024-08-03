import React from 'react';

const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="gap-2 self-stretch px-6 py-4 mt-8 w-full bg-gray-800 font-bold tracking-wide text-center text-white whitespace-nowrap bg-gray-900 rounded-xl min-h-[56px] max-md:px-5 max-md:max-w-full"
    >
      Submit
    </button>
  );
};

export default SubmitButton;