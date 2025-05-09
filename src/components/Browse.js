import React from "react";
import Header from "./Header";
import usePlayNowMovies from "./hooks/usePlayNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import GtpSearch from "./GtpSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  usePlayNowMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const showGtpSearchBox = useSelector((state) => state.gtp.showGtpSearchBox);
  return (
    <div>
      <Header />
      {showGtpSearchBox ? (
        <GtpSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
