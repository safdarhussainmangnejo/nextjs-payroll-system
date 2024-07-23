import React from 'react';

const EvaluationForm: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
      <div className="flex z-10 gap-5 self-stretch my-auto max-md:flex-wrap max-md:mt-0">
        <div className="shrink-0 p-4 my-auto w-14 h-14 bg-white rounded-[100px]" />
        <form className="flex flex-col py-9 bg-white max-md:max-w-full">
          <div className="flex flex-col px-9 max-md:px-5 max-md:max-w-full">
            <h2 className="text-2xl font-bold leading-8 text-gray-900 max-md:max-w-full">
              Mentor Evaluation
            </h2>
            <div className="flex gap-0.5 mt-8 text-sm leading-6 max-md:flex-wrap">
              <label htmlFor="classCode" className="text-gray-900">Class Code</label>
              <span className="text-red-600 max-md:max-w-full">*</span>
            </div>
            <select id="classCode" className="px-5 py-4 mt-2.5 text-sm leading-6 text-gray-900 rounded-xl border border-gray-200 border-solid max-md:max-w-full">
              <option>Select Class Code</option>
            </select>
            <div className="flex gap-0.5 mt-8 text-sm leading-6 max-md:flex-wrap">
              <label htmlFor="tutor" className="text-gray-900">Select Tutor</label>
              <span className="text-red-600 max-md:max-w-full">*</span>
            </div>
            <select id="tutor" className="px-5 py-4 mt-2.5 text-sm leading-6 rounded-xl border border-gray-200 border-solid text-slate-400 max-md:max-w-full">
              <option>Select Tutor</option>
            </select>
            <div className="flex gap-0.5 mt-8 text-sm leading-6 max-md:flex-wrap">
              <label htmlFor="date" className="text-gray-900">Date, Month, Year</label>
              <span className="text-red-600 max-md:max-w-full">*</span>
            </div>
            <input type="date" id="date" className="px-5 py-4 mt-2.5 text-sm leading-6 rounded-xl border border-gray-200 border-solid text-slate-400 max-md:max-w-full" value="2024-02-24" />
            <div className="flex gap-0.5 mt-8 text-sm leading-6 max-md:flex-wrap">
              <label htmlFor="startTime" className="text-gray-900">Session Start Time</label>
              <span className="text-red-600 max-md:max-w-full">*</span>
            </div>
            <input type="time" id="startTime" className="px-5 py-4 mt-2.5 text-sm leading-6 rounded-xl border border-gray-200 border-solid text-slate-400 max-md:max-w-full" value="14:00" />
            <div className="flex gap-0.5 mt-8 text-sm leading-6 whitespace-nowrap max-md:flex-wrap">
              <label htmlFor="detail" className="text-gray-900">Detail</label>
              <span className="text-red-600 max-md:max-w-full">*</span>
            </div>
            <div className="flex flex-col py-4 mt-2 bg-white rounded-2xl border border-gray-100 border-solid max-md:max-w-full">
              <div className="flex justify-center items-center px-6 max-md:px-5 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb6993004b5e7af02d7b5a8f15ecbf119f618ad9ab123013a5bfed3538c85a2b?apiKey=3134160d320944cb9be378a5d06b0bb6&" alt="" className="w-6 aspect-[1.2]" />
              </div>
              <textarea id="detail" className="self-start mt-8 mb-2 ml-6 text-sm leading-6 text-slate-400 max-md:ml-2.5" placeholder="Job description"></textarea>
            </div>
          </div>
          <div className="flex gap-2.5 px-6 pt-6 pb-2.5 mt-44 text-base tracking-wide leading-6 text-center bg-white shadow-2xl max-md:flex-wrap max-md:px-5 max-md:mt-10">
            <div className="my-auto font-semibold text-sky-800">
              Save & Assign Employee
            </div>
            <div className="flex flex-1 gap-5 pl-20 font-bold whitespace-nowrap max-md:flex-wrap">
              <button type="button" className="px-6 py-5 text-gray-900 rounded-xl border border-gray-900 border-solid max-md:px-5">
                Cancel
              </button>
              <button type="submit" className="px-6 py-5 text-white bg-gray-900 rounded-xl max-md:px-5">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EvaluationForm;