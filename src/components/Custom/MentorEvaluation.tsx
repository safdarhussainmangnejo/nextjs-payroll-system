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
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 12v6m0 0l3-2m-3 2l-3-2m4-13H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055c.204.05.399.13.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72c.11.18.19.374.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"
                />
              </svg>
          <span className="ml-2">{buttonText}</span>
        </button>
      )}
    </div>
  );
};

export default MentorEvaluation;
