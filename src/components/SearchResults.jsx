import { FaClock, FaHeart, FaExclamationCircle } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { PulseLoader } from "react-spinners";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchResults = ({ data, loading, error }) => {
  //Clean up text from request removing all htmltags
  const stripHtmlTags = (htmlString) =>
    htmlString.replace(/<\/?[^>]+(>|$)/g, "");

  if (loading) {
    return <PulseLoader className="text-lg text-center" />;
  }

  if (error) {
    return (
      <div className="error-message xs:w-[100%] md:w-[70%]">
        <FaExclamationCircle />
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  if (Array.isArray(data) && data.length === 0) {
    return (
      <div className="warning-message xs:w-[100%] md:w-[70%]">
        <FaExclamationCircle className="text-yellow-600" />
        <p className="text-yellow-700">
          No results found. Try a different search
        </p>
      </div>
    );
  }

  return (
    <div className="results-wrapper py-5 my-5">
      <div className="pt-5 mb-5 border-b border-indigo-300">
        <h2 className="text-4xl ">Top Results</h2>
      </div>
      <div className="grid-container">
        <div className="grid xs:grid-flow-row sm:xs:grid-flow-col gap-3 sm:overflow-x-auto xs:overflow-y-auto ">
          {data.map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card sm:w-[290px] xs:w-[100%]"
            >
              <div className="card-image h-[160px] overflow-hidden">
                <a href="">
                  <img
                    src={recipe.image}
                    alt="Recipe Image"
                    className="squared-image "
                  />
                </a>
              </div>
              <div className="recipe-card-content">
                <div className="likes-display">
                  <FaHeart className="text-indigo-300 text-xl " />
                  <span>{recipe.aggregateLikes}</span>
                </div>
                <div className="h-[50px]">
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="hover:text-indigo-300"
                  >
                    {recipe.title}
                  </Link>
                </div>
                <div className="truncate-card-text text-[14px] my-3">
                  <p>{stripHtmlTags(recipe.summary)}</p>
                </div>
                <div className=" border-t-indigo-300 border-t pt-2">
                  <div className="text-[12px] flex justify-between">
                    <div className="flex items-center gap-1">
                      <FaHeartCirclePlus className="text-xl text-indigo-300" />
                      <span>{recipe.healthScore}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xl text-indigo-300" />
                      <span>{recipe.readyInMinutes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default SearchResults;
