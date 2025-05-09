import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.movies.playNowMovie);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  return (
    <div>
      <MovieList title={"Now playing Movies"} movies={nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={popularMovies} />
      <MovieList title={"Top rated Movies"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      <MovieList title={"Now playing Movies"} movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
