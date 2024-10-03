import React from 'react';
import laptop from "../photo/laptopp.jpg";
import idea from "../photo/ideas.jpg";
import hand from "../photo/hand.jpg";

function BodyL() {
  return (
    <div className="w-screen h-auto flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
     
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Make your photos more stylish
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
      
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src={laptop} alt="laptop" className="w-full h-56 object-cover rounded-md mb-4" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Sed ut perspiciatis</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src={idea} alt="idea" className="w-full h-56 object-cover rounded-md mb-4" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Lorem ipsum dolor</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

     
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src={hand} alt="hand" className="w-full h-56 object-cover rounded-md mb-4" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Nemo enim ipsam</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyL;
