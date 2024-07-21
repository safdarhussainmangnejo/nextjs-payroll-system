import React from 'react';

interface StatCardProps {
  icon: string;
  value: string;
  change: string;
  label: string;
  isNegative?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, change, label, isNegative = false }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center p-6 mx-auto w-full bg-white rounded-xl border-[1.5px] border-stroke bg-transparent max-md:px-5 max-md:mt-4">
        <div className="flex flex-col justify-center items-start p-4 bg-stone-50 rounded-[48px] max-md:pr-5">
          <img loading="lazy" src={icon} alt="" className="w-5 aspect-square" />
        </div>
        <div className="flex gap-4 mt-4 font-bold whitespace-nowrap">
          <div className="text-3xl text-gray-900">{value}</div>
          <div className={`flex gap-1 justify-center px-2.5 py-1 my-auto text-xs tracking-wide leading-5 ${isNegative ? 'text-red-600 bg-rose-50' : 'text-sky-800 bg-emerald-50'} rounded-xl`}>
            <img loading="lazy" src={isNegative ? "https://cdn.builder.io/api/v1/image/assets/TEMP/68c1c895475159972f4e129c0f66d4be269362b935ad67eee97b98691dbfe0df?apiKey=3134160d320944cb9be378a5d06b0bb6&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/33470d3c2a347bdd50cbe77119a32a2e0f902fe9359bc8d446aea7a048e93e54?apiKey=3134160d320944cb9be378a5d06b0bb6&"} alt="" className="shrink-0 my-auto w-3.5 aspect-square" />
            <div>{change}</div>
          </div>
        </div>
        <div className="mt-4 text-sm font-semibold leading-6 text-gray-900 whitespace-nowrap text-ellipsis">
          {label}
        </div>
      </div>
    </div>
  );
};
export default StatCard;