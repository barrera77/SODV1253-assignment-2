import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import Suggestions from "./Suggestions";
import SearchResults from "./SearchResults";
import { fetchData } from "../services/api-client";

import { foodCategories } from "../constants";
import { option } from "framer-motion/client";

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    try {
      setLoading(true);
      const searchResults = await fetchData();

      if (searchResults && searchResults.lenght > 0) {
        setData(searchResults);
        setError(null);
      } else {
        throw new Error("Failed to fetch recipes");
      }
    } catch (err) {
      setError("Failed to fetch data", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recipe-search-wrapper">
      <div className="py-3 text-center">
        <p>Search your recipe by ingredients or directly</p>
      </div>
      <div className="sm:flex xs:hidden sm:w-[100%] lg:w-[70%] m-auto justify-center">
        <select name="recipe-category" className="recipe-category p-2 border">
          <option value="0">Select Category</option>
          {foodCategories.map((category) => (
            <option key={category.id}>{category.title}</option>
          ))}
        </select>
        <input
          type="text"
          className="search-input border sm:w-[60%] w-[50%]"
          placeholder="Search Recipe. . ."
        />
        <button className="btn-search py-2 px-4 bg-indigo-300 text-white">
          <FaSearch />
        </button>
      </div>
      {/* mobile */}
      <div className="flex flex-col gap-3 xs:w-[100%] justify-center sm:hidden">
        <select name="recipe-category" className="p-3 border rounded-md">
          <option value="0">Select Category</option>
          {foodCategories.map((category) => (
            <option key={category.id}>{category.title}</option>
          ))}
        </select>
        <input
          type="text"
          className="p-[10px] border w-[100%] rounded-md"
          placeholder="Search Recipe. . ."
        />
        <button className="rounded-md p-2 bg-indigo-300 text-white">
          Search
        </button>
      </div>
      <SearchResults />
      <Suggestions />
    </div>
  );
};

export default SectionWrapper(Search, "search");
