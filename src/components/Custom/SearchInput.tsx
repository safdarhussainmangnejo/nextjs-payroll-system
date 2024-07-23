"use client";

import { FC, useState } from "react";
import { Input } from "@material-tailwind/react";

const SearchInput: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // const handleSearch = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   setSearchTerm(event.target)
  //   console.log("Searching for:", searchTerm);
  //   // Implement your search logic here
  // };

  const handleSearch = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setSearchTerm(value);
  };

  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
     
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search employee..."
        type="text"
        name="search"
        id="search"
        onChange={handleSearch}
        value={searchTerm}
        required
      />
       <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </span>
    </label>
    // <Input
    //   type="text"
    //   placeholder="Search employee"
    //   variant="outlined"
    //   size="lg"
    //   value={searchTerm}
    //   onChange={handleSearch}
    //   icon={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
    //     <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
    //     </svg>}
    // />
  );
};

export default SearchInput;

// import React from "react";

// const SearchInput = () => {
//   return (
//     <div className="relative mr-8 my-4">
//       <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
//         <svg
//           className="w-4 h-4 text-gray-500 dark:text-gray-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 20 20"
//         >
//           <path
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             strokeWidth="2"
//             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//           />
//         </svg>
//       </div>
//       <input
//         type="search"
//         className="bg-purple-white shadow rounded border-0 p-3"
//         placeholder="Search by name..."
//       />

//     </div>
//   );
// };

// export default SearchInput;
