import React from 'react';

interface PasswordRequirementProps {
  text: string;
  fulfilled: boolean;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({ text, fulfilled }) => {
  return (
    <div className={`flex gap-2 items-center ${fulfilled ? 'text-sky-800' : 'text-red-600'}`}>
      <img
        loading="lazy"
        src={fulfilled ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/14dc68a034758a9de9688b855a4160bd99cf88780803f6f705109923695cf524?apiKey=3134160d320944cb9be378a5d06b0bb6&&apiKey=3134160d320944cb9be378a5d06b0bb6' : 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb1a899fd5fbdf9a4ce4040b087f0d8844c688ff1ecf7448265aaa4da88ed027?apiKey=3134160d320944cb9be378a5d06b0bb6&&apiKey=3134160d320944cb9be378a5d06b0bb6'}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <div className="flex-1 shrink self-stretch my-auto basis-0">{text}</div>
    </div>
  );
};

export default PasswordRequirement;