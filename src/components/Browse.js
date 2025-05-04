import React from "react";
import Header from "./Header";
import usePlayNowMovies from "./hooks/usePlayNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  usePlayNowMovies();
  return (
    <div>
      <Header />
      {/* main container */}
      {/*  - video play with title */}
      {/* secondary container */}
      {/* -  multiple cards * n */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
