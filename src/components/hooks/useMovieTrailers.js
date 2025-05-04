import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/playNowMovieSlice";
import { useEffect } from "react";

const useMovieTrailers = (trailerId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${trailerId}/videos?language=en-US`,
      API_OPTIONS
    );
    const movieVideos = await data.json();
    const trailers = movieVideos.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = trailers.length == 0 ? movieVideos[0] : trailers[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailers;
