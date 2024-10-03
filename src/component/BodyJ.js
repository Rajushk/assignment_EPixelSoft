import React from "react";
import photo from "../photo/bodyjj.jpg"; 

function BodyJ() {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Have you ever posted any photo on social media?
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        <div className="flex flex-col space-y-8 w-full lg:w-1/2 pr-4">
          <Card title="Sed ut perspiciatis" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur." />
          <Card title="Lorem ipsum dolor" description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Card title="Nemo enim ipsam" description="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem." />
        </div>

       
        <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0">
          <img src={photo} alt="Body" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
    <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">{title}</h2> 
    <p className="text-base text-gray-600 mb-4">{description}</p>
  </div>
);

export default BodyJ;
