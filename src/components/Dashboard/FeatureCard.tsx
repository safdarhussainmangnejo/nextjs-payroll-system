import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, color }) => {
  return (
    // <div className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${className}`}>
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center shadow-lg max-md:mt-4">
        <div className="flex flex-col pb-3.5 bg-white rounded-xl">
          <div className={`flex flex-col px-4 pt-9 pb-3.5 text-2xl font-bold leading-8 text-white whitespace-nowrap rounded-xl ${color} max-md:pr-5`}>
            <img loading="lazy" src={image} alt="" className="self-end aspect-square w-[90px]" />
            <div className="mt-7">{title}</div>
          </div>
          <div className="mt-2 ml-4 text-sm leading-6 text-gray-900 max-md:ml-2.5">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
