import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GtpMovieBox = () => {
  const gtpMovie = useSelector((state) => state.gtp.gtpMovies);
  return (
    <div className="p-2 m-2 bg-black ">
      <MovieList title="Result movies" movies={gtpMovie} />
    </div>
  );
};

export default GtpMovieBox;
