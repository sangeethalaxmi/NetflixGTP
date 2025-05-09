import React from "react";
import lang from "../utils/language";
import { useSelector } from "react-redux";
const GtpSearchBox = () => {
  const selectedLan = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%]">
      <div className=" bg-black w-1/2 p-4 mx-auto">
        <form className="grid grid-cols-12">
          <input
            type="text"
            placeholder={lang[selectedLan].gtpSearchPlaceHolder}
            className="col-span-8 p-2 mr-2"
          />
          <button className="text-white p-2 bg-red-500 rounded-sm col-span-4">
            {lang[selectedLan].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GtpSearchBox;
