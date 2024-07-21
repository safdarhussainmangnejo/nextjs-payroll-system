import React from 'react';

const EntriesInfo: React.FC = () => {
  return (
    <div className="flex gap-4 text-xs leading-5">
      <div className="my-auto text-slate-500">
        Showing 1 to 8 of 50 entries
      </div>
      <div className="flex gap-2.5 justify-center p-2.5 text-gray-900 bg-white rounded-lg border border-gray-100 border-solid">
        <div>Show 8</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13fa8efe4b08a4f94c2b32024e73b99e586260dcf045f77f58166d63f9ebb10?apiKey=3134160d320944cb9be378a5d06b0bb6&" className="shrink-0 my-auto w-4 aspect-square" alt="" />
      </div>
    </div>
  );
};

export default EntriesInfo;