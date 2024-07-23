import React from "react";

interface MentorEvaluationProps {
  imageSrc: string;
  heading: string;
  subheading: string;
  buttonText?: string;
  handleOnClick?: () => void;
}

const MentorEvaluation: React.FC<MentorEvaluationProps> = ({
  imageSrc,
  heading,
  subheading,
  buttonText,
  handleOnClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 bg-gray-100">
      <img src={imageSrc} alt="Mentor Evaluation" className="w-40 h-40" />
      <h1 className=" text-xl font-bold -mb-5">{heading}</h1>
      <p className="subheading-font-weight-color">{subheading}</p>
      {buttonText && (
        <button className="mt-2 px-4 py-2 bg-gray-800 text-white flex items-center rounded" onClick={handleOnClick}>
          <img
            width="20"
            height="20"
            src="/icons/upload.jpg"
            alt="file-upload"
          />
          <span className="ml-2">{buttonText}</span>
        </button>
      )}
    </div>
  );
};

export default MentorEvaluation;
