import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="px-2 w-48 cursor-pointer hover:transition-transform hover:scale-110">
      <img alt="movie poster" src={POSTER_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
