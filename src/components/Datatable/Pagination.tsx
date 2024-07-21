import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex justify-center items-center p-2.5 rounded-lg border border-gray-100 border-solid">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5116960baa1068582d579ed220af56d8e946c876de6a79823e46eab8aabb3ab6?apiKey=3134160d320944cb9be378a5d06b0bb6&" className="w-4 aspect-square" alt="Previous page" />
      </div>
      <div className="flex gap-0 text-xs font-semibold leading-5 text-gray-900 whitespace-nowrap">
        <div className="justify-center items-center px-4 py-1.5 w-8 h-8 rounded-xl bg-stone-50">
          1
        </div>
        <div className="flex gap-5 justify-between items-start px-3.5 py-2">
          <div>2</div>
          <div>3</div>
          <div>...</div>
          <div>10</div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2.5 rounded-lg border border-gray-100 border-solid">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/75218fa63f7b53ec5ed38298505b98139bf459d1c04ab1b1818186c6179e82c6?apiKey=3134160d320944cb9be378a5d06b0bb6&" className="w-4 aspect-square" alt="Next page" />
      </div>
    </div>
  );
};

export default Pagination;