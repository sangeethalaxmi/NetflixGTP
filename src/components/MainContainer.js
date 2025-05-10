import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.playNowMovie);
  if (!movies) return;
  const movie = movies[1];
  const { original_title, overview, id } = movie;
  return (
    <div className="md:p-0 pt-[25%] bg-black">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground trailerId={id} />
    </div>
  );
};

export default MainContainer;
