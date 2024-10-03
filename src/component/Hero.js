import React from "react";
import photo from "../photo/background.jpg";
import logo from "../photo/logo.jpg";

function Hero() {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${photo})` }}>
      
      <header className="flex items-center justify-between px-4 py-4 bg-white/90 backdrop-blur-md h-[15vh] md:px-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-xl md:text-2xl font-bold">Logo</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <h1 className="text-lg cursor-pointer hover:text-blue-600">Features</h1>
          <h1 className="text-lg cursor-pointer hover:text-blue-600">Pricing</h1>
          <h1 className="text-lg cursor-pointer hover:text-blue-600">Community</h1>
          <h1 className="text-lg cursor-pointer hover:text-blue-600">Support</h1>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-lg font-semibold text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
            Login
          </button>
          <button className="px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Register
          </button>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center h-[85vh] text-center px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          The largest community of photo enthusiasts
        </p>
        <button className="mt-6 sm:mt-8 px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700">
          Join Today
        </button>
      </section>
    </div>
  );
}

export default Hero;
