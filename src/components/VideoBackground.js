import React from "react";
import { YOUTUBE_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useMovieTrailers from "./hooks/useMovieTrailers";

const VideoBackground = ({ trailerId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  //   console.log(trailerVideo.key);
  useMovieTrailers(trailerId);
  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={
          YOUTUBE_URL +
          trailerVideo?.key +
          "?playlist=" +
          trailerVideo?.key +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
