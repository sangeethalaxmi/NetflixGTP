import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-black ">
      <h3 className="md:text-xl text-md text-white">{title}</h3>

      <div className="flex overflow-x-auto ">
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
