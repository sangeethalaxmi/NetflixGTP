import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addPlayNowMovie } from "../../utils/playNowMovieSlice";
import { useEffect } from "react";
const usePlayNowMovies = () => {
  const dispatch = useDispatch();
  const getPlayNowMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movieData.json();
    console.log(data.results);
    dispatch(addPlayNowMovie(data.results));
  };
  useEffect(() => {
    getPlayNowMovies();
  }, []);
};
export default usePlayNowMovies;
