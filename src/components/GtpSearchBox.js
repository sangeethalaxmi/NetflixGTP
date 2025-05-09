import React, { useRef } from "react";
import lang from "../utils/language";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGTPSearchMovies } from "../utils/gtpSlice";
const GtpSearchBox = () => {
  const selectedLan = useSelector((state) => state.config.lang);
  const gtpSearch = useRef();
  const dispatch = useDispatch();
  // not working
  const getOpenAIResult = async () => {
    const response = await client.responses.create({
      model: "gpt-4o",
      instructions:
        "Act as a search engine to get movie list similar to example.Eg gaga,eaee,qwrr,esdd,teee",
      input: gtpSearch.current.value,
    });
    console.log(response);
  };
  const getSearchMovies = async () => {
    const searchText = gtpSearch.current.value;
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addGTPSearchMovies(data.results));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getSearchMovies();

    // getOpenAIResult();
  };
  return (
    <div className="pt-[10%]">
      <div className=" bg-black w-1/2 p-4 mx-auto">
        <form className="grid grid-cols-12">
          <input
            type="text"
            ref={gtpSearch}
            placeholder={lang[selectedLan].gtpSearchPlaceHolder}
            className="col-span-9 p-2 mr-2"
          />
          <button
            className="text-white p-2 bg-red-500 rounded-sm col-span-3"
            onClick={handleSearch}
          >
            {lang[selectedLan].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GtpSearchBox;
