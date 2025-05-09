import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-black scrollbar-hidden">
      <h3 className="text-xl text-white">{title}</h3>

      <div className="flex overflow-x-auto scrollbar-hidden">
        <div className="flex -mt-12 z-20 relative ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
