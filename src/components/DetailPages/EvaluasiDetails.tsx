"use client";
import { columnsEvaluasiTutor, rowsEvaluasiTutor } from "@/utils/DummyData";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface EvaluasiDetailProps {
  selectedRow: {
    period: string;
    score: number;
    tutor: string;
    pros: string;
    cons: string;
    input: string;
    email: string;
    name: string;
  };
}

const EvaluasiDetails: React.FC<EvaluasiDetailProps> = ({
  selectedRow,
}: EvaluasiDetailProps) => {
  // const router = useRouter();

  //   const goBack = () => {
  //     if (router.isReady) {
  //       // safe to use router functions
  //       router.back();
  //   }

  // };


  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="flex ">
      <div className=" flex-1 w-32 p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="ml-5">
            <h1 className="text-xl font-bold heading-font-weight-color ">Evaluation Score</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sapien felis, commodo
            </p>
          </div>
          <div className="text-5xl font-bold mr-5 text-blue-400">{selectedRow.score}</div>
        </div>
      </div>

      <div className="flex-1 ml-5 p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="ml-5">
            <h1 className="text-xl font-bold heading-font-weight-color ">Penalty Score</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sapien felis, commodo
            </p>
          </div>
          <div className="text-5xl font-bold mr-5 text-red">4.0</div>
        </div>
      </div>
      </div>

      {/* <div className="p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="ml-5">
            <h1 className="text-xl font-bold heading-font-weight-color ">Evaluation Score</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sapien felis, commodo
            </p>
          </div>
          <div className="text-5xl font-bold mr-12 text-blue-400">{selectedRow.score}</div>
        </div>
      </div> */}

      <div className="mt-8">
      <h2 className="text-lg font-bold mb-2 heading-font-weight-color">From Operational</h2>
        <div className="bg-white border-[1.5px] border-stroke bg-transparent border-inherit rounded-lg p-4">
        <div className="flex mt-3">
            <div className="flex-none w-64 pr-4">
              <span className="text-gray-500 font-semibold">Title</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black font-semibold dark:text-white">Details</span>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex-none w-64 pr-4">
              <span className="text-gray-500">Tutor</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">{selectedRow.name}</span>
            </div>
          </div>
          
          <div className="flex mt-3">
            <div className="flex-none w-64 pr-4">
              <span className="text-gray-500">Period</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">{selectedRow.period}</span>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex-none w-64 pr-4">
              <span className="text-gray-500">Score</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">{selectedRow.score}</span>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex-none w-64 pr-4">
              <span className="text-gray-500">Pros</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">{selectedRow.pros}</span>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex-none w-64 pr-4">
              <span className="text-gray-500">Cons</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">{selectedRow.cons}</span>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex-none w-64 pr-4">
              <span className="text-gray-500">Input</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">{selectedRow.input}</span>
            </div>
          </div>
         

        
        </div>
        </div>

        <div className="mt-10">
        <h2 className="text-lg font-bold mb-2 heading-font-weight-color">From Student</h2>
        
        <div className="bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit p-4 mt-4 subheading-font-weight-color">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Pros</h3>
              <p>{selectedRow.pros}</p>
            </div>
            <div>
              <h3 className="font-semibold">Cons</h3>
              <p>{selectedRow.cons}</p>
            </div>
          </div>
        </div>
        </div>

      </div>
    
  );
};

export default EvaluasiDetails;
