import React from "react";
import GtpSearchBox from "./GtpSearchBox";
import GtpMovieBox from "./GtpMovieBox";
import { BACKGROUND_URL } from "../utils/constants";

const GtpSearch = () => {
  return (
    <div className="">
      <div>
        <img className="absolute -z-10" src={BACKGROUND_URL} alt="background" />
      </div>
      <GtpSearchBox />
      <GtpMovieBox />
    </div>
  );
};

export default GtpSearch;
