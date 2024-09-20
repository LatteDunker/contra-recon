import React, { useState } from 'react';
import '../App.css'; 
import Testimonials from './Testimonials';


function Content() {
    return (
        <div className="flex flex-col space-y-8 font-inter  text-xs tracking-wider p-[60px]">
            <div className="flex space-x-2 items-center">
                <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-purple-500 to-pink-500">FOR HIRING</div>
                <ToggleSwitch></ToggleSwitch>
                <div className="font-medium text-gray-400">FOR FREELANCERS</div>
            </div>
            <div className="flex">
                <div className="w-[40%] flex flex-col space-y-4">
                    <div>
                        <h1 className="text-8xl font-semibold tracking-tight">A new way</h1>
                        <h1 className="text-8xl font-semibold tracking-tight">to work.</h1>
                    </div>
                    <div className="text-xl">Build, manage and grow your flexible workforce — all in one place.</div>
                    <div className="text-xl flex space-x-4 items-center">
                        <div style={{backgroundColor: 'rgb(106, 87, 227)'}} className='text-white font-bold bg-black px-5 py-3 rounded-full'>
                            <a href="#">Get started</a>
                        </div>
                        <div className='text-gray-700 border border-gray-300 font-bold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors duration-600'>
                            <a href="#" className="">Request a demo</a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 w-[60%]">Col 2</div>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    )
};


function ToggleSwitch() {
  // State to manage the toggle's on/off state
  const [isOn, setIsOn] = useState(false);

  // Toggle the state on click
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`w-14 h-6 flex items-center bg-gray-100 rounded-full p-1 cursor-pointer inner-shadow ${
        isOn ? 'bg-gray-200' : 'bg-gray-100'
      }`}
      onClick={handleToggle}
    >
      {/* The sliding circle */}
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out outer-glow ${
          isOn ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
}
export default Content;

