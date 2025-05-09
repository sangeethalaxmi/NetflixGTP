import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addPopularMovie } from "../../utils/playNowMovieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movieData.json();
    dispatch(addPopularMovie(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
