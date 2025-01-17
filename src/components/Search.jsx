import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import Suggestions from "./Suggestions";
import SearchResults from "./SearchResults";
import { fetchData } from "../services/api-client";

import { foodCategories } from "../constants";

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");

  const END_POINT_SEARCH = `/complexSearch?query=${query}&diet=${diet}&addRecipeInformation=true&number=2`;

  const getRecipes = async () => {
    try {
      setLoading(true);
      const searchResults = await fetchData(END_POINT_SEARCH);

      if (searchResults.results && searchResults.results.length > 0) {
        setData(searchResults.results);
        setError(null);
        console.table(searchResults.results);
      } else {
        throw new Error("Failed to fetch recipes");
      }
    } catch (err) {
      setError("Failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recipe-search-wrapper">
      <div className="pb-[3rem] text-center">
        <p>
          Search your recipe by ingredients or directly or both (e.g. recipe,
          ingredient1, ingredient2)
        </p>
      </div>
      <div className="sm:flex xs:hidden sm:w-[100%] lg:w-[70%] m-auto justify-center">
        <select name="recipe-category" className="recipe-category p-2 border">
          <option value="">Select Category</option>
          {foodCategories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              onChange={(event) => setDiet(event.target.value)}
            >
              {category.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="search-input border sm:w-[60%] w-[50%]"
          placeholder="Search Recipe. . ."
        />
        <button
          onClick={getRecipes}
          className="btn-search py-2 px-4 bg-indigo-300 text-white"
        >
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
        <button
          onClick={getRecipes}
          className="rounded-md p-2 bg-indigo-300 text-white"
        >
          Search
        </button>
      </div>
      <div className="mt-7">
        <SearchResults data={data} loading={loading} error={error} />
      </div>
      <Suggestions />
    </div>
  );
};

export default SectionWrapper(Search, "search");
