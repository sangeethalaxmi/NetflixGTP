import React from "react";
import GtpSearchBox from "./GtpSearchBox";
import GtpMovieBox from "./GtpMovieBox";
import { BACKGROUND_URL } from "../utils/constants";

const GtpSearch = () => {
  return (
    <>
      <img
        className="h-full fixed object-cover w-full -z-10"
        src={BACKGROUND_URL}
        alt="background"
      />
      <div className="">
        <GtpSearchBox />
        <GtpMovieBox />
      </div>
    </>
  );
};

export default GtpSearch;
