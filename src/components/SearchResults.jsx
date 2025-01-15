import React from "react";
import { recipeImage } from "../assets";
import { FaHeart } from "react-icons/fa";

const SearchResults = () => {
  return (
    <div className="results-wrapper py-5 my-5">
      <div className="pt-5 mb-5 border-b border-indigo-300">
        <h2 className="text-4xl ">Top Results</h2>
      </div>
      <div className="grid-container">
        <div className="grid xs:grid-flow-row sm:xs:grid-flow-col gap-3 sm:overflow-x-auto xs:overflow-y-auto xs:max-h-[350px]">
          <div className="recipe-card sm:w-[290px] h-[280px] xs:w-[100%]">
            <div className="card-image h-[160px] overflow-hidden">
              <a href="">
                <img
                  src={recipeImage}
                  alt="Recipe Image"
                  className="squared-image "
                />
              </a>
            </div>
            <div className="recipe-card-content">
              <div className="likes-display">
                <FaHeart className="text-indigo-300 text-xl " />
                <span>Likes</span>
              </div>
              <a href="" className="hover:text-indigo-300">
                Recipe title
              </a>
              <div className="text-[14px] my-2">
                <p>Summary</p>
              </div>
              <div>
                <div className="text-[12px] text-end">
                  <span>Prep Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
