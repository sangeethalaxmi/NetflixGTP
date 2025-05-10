import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-full aspect-video absolute p-[18%] px-12  text-white bg-gradient-to-r from-black">
      <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-1/3">{description}</p>
      <div className="pt-4">
        <button className="bg-white text-black rounded-md text-sm md:text-md md:p-2 md:px-8 hover:bg-opacity-60 p-2 px-2">
          Play Now
        </button>
        <button className="hidden md:inline-block  mx-2 bg-gray-600 text-white rounded-md text-md p-2 px-8 bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
