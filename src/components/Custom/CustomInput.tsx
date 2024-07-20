'use client';
import { FC, useState } from 'react';

const Input: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(event.target.value)
    console.log("Searching for:", searchTerm);
    // Implement your search logic here
  };

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-6">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
      <div className="mt-2">
        <input type="text" name="first-name" id="first-name"  value={searchTerm} onChange={handleChange} 
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>
    </div>
    </div>
  );
};

export default Input;