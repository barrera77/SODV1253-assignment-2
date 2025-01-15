import { FaSearch } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import Suggestions from "./Suggestions";
import SearchResults from "./SearchResults";

const Search = () => (
  <div className="recipe-search-wrapper">
    <div className="flex w-[70%] m-auto justify-center">
      <select name="recipe-category" className="recipe-category p-2 border">
        <option value="0">Select Category</option>
      </select>
      <input
        type="text"
        className="search-input border w-[50%]"
        placeholder="Search Recipe. . ."
      />
      <button className="btn-search p-2 bg-indigo-300 text-white">
        <FaSearch />
      </button>
    </div>
    <SearchResults />
    <Suggestions />
  </div>
);

export default SectionWrapper(Search, "search");
