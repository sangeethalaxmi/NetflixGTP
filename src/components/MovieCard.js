import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="px-2 md:w-48 w-36 cursor-pointer hover:transition-transform hover:scale-110">
      <img alt="movie poster" src={POSTER_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
