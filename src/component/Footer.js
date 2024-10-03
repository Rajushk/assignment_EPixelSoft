import React, { useState } from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../photo/logo.jpg"

function Footer() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: ""
  });
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">

   
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">Ready to take a free trial?</h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="bg-white shadow-md p-8 rounded-lg w-full sm:w-96 mb-12 mx-4">
  <form onSubmit={submitHandler} className="space-y-4">
    <p className="text-xl font-semibold text-gray-700 text-center mb-4">Sign up for a free account</p>

   
    <div className="flex space-x-4">
      <input
        type="text"
        name='first_name'
        value={formData.first_name}
        onChange={changeHandler}
        required
        placeholder='First name'
        className="w-1/2 px-4 py-2 border rounded-md"
      />
      <input
        type="text"
        name='last_name'
        value={formData.last_name}
        onChange={changeHandler}
        required
        placeholder='Last name'
        className="w-1/2 px-4 py-2 border rounded-md"
      />
    </div>

  
    <div className="flex space-x-4">
      <input
        type="email"
        name='email'
        value={formData.email}
        onChange={changeHandler}
        placeholder='Email Address'
        required
        className="w-1/2 px-4 py-2 border rounded-md"
      />
      <input
        type="number"
        name='phone'
        value={formData.phone}
        onChange={changeHandler}
        required
        placeholder='Phone number'
        className="w-1/2 px-4 py-2 border rounded-md"
      />
    </div>

    <input
      type="password"
      name='password'
      value={formData.password}
      onChange={changeHandler}
      required
      minLength={8}
      placeholder='Create Password'
      className="w-full px-4 py-2 border rounded-md"
    />

    <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4">Register</button>
  </form>
</div>


      
      <div className="w-full bg-gray-800 py-8 px-6 sm:px-20">
        <div className="flex item-center">
          <img src={logo} alt="" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold text-white">Logo</h1>
        </div>

  
        <div className="w-full flex flex-col md:flex-row justify-between items-start text-white">
      
          <div className="flex flex-col sm:flex-row sm:space-x-20 w-full md:w-auto space-y-6 sm:space-y-0 ml-auto mt-8 sm:mt-0">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold mb-2">Mobile app</h1>
              <p>Features</p>
              <p>Live share</p>
              <p>Video record</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold mb-2">Community</h1>
              <p>Featured artists</p>
              <p>The Portal</p>
              <p>Live events</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold mb-2">Company</h1>
              <p>About us</p>
              <p>Contact us</p>
              <p>History</p>
            </div>
            <div className="flex flex-col space-y-4 sm:ml-auto mt-6 md:mt-0">
            <button className="bg-blue-600 px-6 py-2 rounded-md">Register</button>
            <button className="bg-gray-700 px-6 py-2 rounded-md">Log in</button>
          </div>
          </div>
        </div>

       
        <div className="w-full border-t border-gray-600 mt-8 pt-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white space-y-4 md:space-y-0">
            <p>© Photo, Inc. 2019. We love our users!</p>
            <div className="flex space-x-4">
              <FaFacebook size={24} onClick={() => handleSocialClick('https://www.linkedin.com/in/raju-kumar-668216261/')} />
              <FaTwitter size={24} onClick={() => handleSocialClick('https://x.com/i/flow/login?redirect_after_login=%2Frajushk62')} />
              <AiFillInstagram size={24}  onClick={() => handleSocialClick('https://www.linkedin.com/in/raju-kumar-668216261/')} />
              <FaLinkedin size={24} onClick={() => handleSocialClick('https://www.linkedin.com/in/raju-kumar-668216261/')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
