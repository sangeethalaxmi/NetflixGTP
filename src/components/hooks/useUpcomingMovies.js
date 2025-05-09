import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/playNowMovieSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movieData.json();
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
