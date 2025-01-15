import { FaSearch } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import Suggestions from "./Suggestions";
import SearchResults from "./SearchResults";

const Search = () => (
  <div className="recipe-search-wrapper">
    <div className="sm:flex xs:hidden sm:w-[100%] lg:w-[70%] m-auto justify-center">
      <select name="recipe-category" className="recipe-category p-2 border">
        <option value="0">Select Category</option>
      </select>
      <input
        type="text"
        className="search-input border sm:w-[60%] w-[50%]"
        placeholder="Search Recipe. . ."
      />
      <button className="btn-search p-2 bg-indigo-300 text-white">
        <FaSearch />
      </button>
    </div>
    {/* mobile */}
    <div className="flex flex-col gap-3 xs:w-[100%] justify-center sm:hidden">
      <select name="recipe-category" className="p-3 border rounded-md">
        <option value="0">Select Category</option>
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

export default SectionWrapper(Search, "search");
