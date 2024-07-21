import React from 'react';

const TimeframeSelector: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-4 py-2 mt-8 max-w-full text-sm tracking-normal leading-5 text-center bg-white rounded-lg border border-solid border-zinc-100 text-zinc-800 w-[195px]">
      <div className="flex gap-2">
        <div>Timeframe: All-time</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13827829c9d25310cec8da3b8813f982051bc038014b9e634bcb19886fce2397?apiKey=3134160d320944cb9be378a5d06b0bb6&" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </div>
  );
};

export default TimeframeSelector;
