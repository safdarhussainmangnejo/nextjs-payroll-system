import React from 'react';

const TableHeader: React.FC = () => {
  const headers = [
    { label: 'No', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e5b04acc5b166165c8baa73e7de40c954e75bb94c8577475029f1c0f7ec51f93?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Date', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d965e01b5f2bbf5eda9c409847fb6adeeff89b8d058577519fca3118f4226ab2?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Class Code', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/219414e4571ae460545b006ab5c13aa3752ef519abcc77a1a4b28af38b00f818?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: "Participant's Name", icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/219414e4571ae460545b006ab5c13aa3752ef519abcc77a1a4b28af38b00f818?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Service Type', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/40a73a5c44ac6c70ee452df65872b9fdee0156107dd9d7b2fdb2287ea7c63d3d?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Document Type', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a71590c3ea0fd44863dd4b23f5d329260ec2f49e9e9309c8d86f3ab5b70e9082?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Word Count', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1d72745f227c4633989c103b25835b44582e2dd236a2335a62d9efde50a23f61?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Extra Word Count', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0eac4c4400fb2c8c2f5cd1bf0908991cdc64de16da30affd10920f13e50989f0?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Correction', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9e4af7377a49fed5cc4b4cf273c66084412123f508e18947281c180b459eadc7?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
    { label: 'Action', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e5b04acc5b166165c8baa73e7de40c954e75bb94c8577475029f1c0f7ec51f93?apiKey=3134160d320944cb9be378a5d06b0bb6&' },
  ];

  return (
    <>
      {headers.map((header, index) => (
        <div key={index} className="flex flex-col text-xs text-gray-900 whitespace-nowrap">
          <div className="flex gap-2.5 p-4 font-bold tracking-wide rounded-xl bg-neutral-50 text-slate-500">
            <div className="flex-1">{header.label}</div>
            <img loading="lazy" src={header.icon} className="shrink-0 my-auto w-3.5 aspect-square" alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default TableHeader;