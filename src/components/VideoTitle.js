import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-full aspect-video absolute p-[18%] px-12  text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/3">{description}</p>
      <div className="pt-4">
        <button className="bg-white text-black rounded-md text-md p-2 px-8 hover:bg-opacity-60">
          Play Now
        </button>
        <button className="mx-2 bg-gray-600 text-white rounded-md text-md p-2 px-8 bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
