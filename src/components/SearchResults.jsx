import React from "react";
import { recipeImage } from "../assets";

const SearchResults = () => {
  return (
    <div className="results-wrapper py-5 mt-5">
      <div className="pt-5 mb-5 border-b border-indigo-300 ">
        <h2 className="text-4xl ">Top Results</h2>
      </div>
      <div className="grid-container">
        <div className="grid grid-flow-col gap-3 overflow-x-auto">
          <div className="card-container p-[10px] w-[280px] h-[290px]">
            <div className="recipe-card">
              <div className="card-image">
                <img src={recipeImage} alt="" className="squared-image" />
              </div>
              <div>Likes</div>
              <div>
                <h4>Recipe title</h4>
                <div>
                  <p>Summary</p>
                </div>
                <div>
                  <div>Prep Time</div>
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
