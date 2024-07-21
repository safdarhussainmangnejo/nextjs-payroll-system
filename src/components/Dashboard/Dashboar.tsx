import React from "react";
import StatCard from "./StarCard";
import FeatureCard from "./FeatureCard";
import TimeframeSelector from "./TimeFrameSelector";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/044522a985a981026eabf24529aec848cafec4bc18b0d2ae9cb0290adb823e74?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      value: "3,540",
      change: "+25,5%",
      label: "Total Students",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fd7fc7eb99503568c6236a7ecf1e80aaa564526993fbd22cdfffaefa8f56a5d?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      value: "1,150",
      change: "+4,10%",
      label: "Tutor/Mentor",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb217d25c6650c52c99bf6efbcc5dbe32b2ac35ff2ba5365a215295cd3396626?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      value: "0",
      change: "+5,1%",
      label: "Instalment",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f760ffe1d70f8a4c5dc6ef39e7f4d579374bc33e14598616d0098f5ee07b0e?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      value: "400",
      change: "+25,5%",
      label: "Paid Off",
      isNegative: true,
    },
  ];

  const features = [
    {
      title: "Schedule",
      description: "Request and set schedule for meetings and class",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c1171d52b78f509c29a9792efc065e3a0617215d63df0c2df46452a33780395b?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      color: "bg-slate-300",
    },
    {
      title: "Mentor",
      description: "Materials, Class Zoom Link, Recording, Assignments",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf74fe5121d86c1638d02fa640cf7b25dbbc6fd20d65c1e57e12f67c34e1650d?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      color: "light-green",
    },
    {
      title: "Tutor",
      description: "Materials, Class Zoom Link, Recording, Assignments",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e03208137311fb003ae76188e0b3793cb7a77eb50b73fc227aadcf2a0ced595?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      color: "bg-indigo-300",
    },
    {
      title: "Setting",
      description: "Materials, Class Zoom Link, Recording, Assignments",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/328705cd3ecbef373e39b81dcc724cf56c21a5fad1fe0bfec8fbf77932dc26ef?apiKey=3134160d320944cb9be378a5d06b0bb6&",
      color: "bg-orange-300",
      className: "mt-8 w-[304px]",
    },
  ];

  return (
    <main className="flex flex-col items-start p-9 max-md:px-5">
      <h1 className="text-2xl font-bold leading-8 text-gray-900 max-md:max-w-full">
        Dashboard Operasional
      </h1>
      <TimeframeSelector />
      <section className="mt-8 w-full max-w-[982px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </section>
      <h2 className="mt-8 text-2xl font-bold leading-8 text-gray-900 max-md:max-w-full">
        Fitur
      </h2>
      <section className="mt-8 max-w-full w-[982px] max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
      {/* <FeatureCard
        title="Setting"
        description="Materials, Class Zoom Link, Recording, Assignments"
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/328705cd3ecbef373e39b81dcc724cf56c21a5fad1fe0bfec8fbf77932dc26ef?apiKey=3134160d320944cb9be378a5d06b0bb6&"
        color="bg-orange-300"
        className="mt-8 w-[304px]"
      /> */}
    </main>
  );
};

export default Dashboard;
