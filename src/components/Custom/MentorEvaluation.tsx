import React from 'react';

interface MentorEvaluationProps {
  imageSrc: string;
  heading: string;
  subheading: string;
  buttonText: string;
}

const MentorEvaluation: React.FC<MentorEvaluationProps> = ({ imageSrc, heading, subheading, buttonText }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={imageSrc} alt="Mentor Evaluation" className="w-40 h-40" />
      <h1 className="mt-4 text-xl font-bold">{heading}</h1>
      <p className="text-gray-300">{subheading}</p>
      <button className="mt-2 px-4 py-2 bg-gray-800 text-white flex items-center rounded">
        <img width="25" height="25" src="/icons/upload.jpg" alt="file-upload"/>
        <span className='ml-2'>{buttonText}</span>
      </button>
    </div>
  );
}

export default MentorEvaluation;
