import { recipeImage } from "../assets";
import { FaClock, FaHeart } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { SectionWrapper } from "../hoc";
import { useState, useEffect } from "react";
import { fetchData } from "../services/api-client.js";
import { PulseLoader } from "react-spinners";
import { foodExperts } from "../constants/index.js";
import { Link } from "react-router-dom";

const END_POINT_RANDOM = "/random?number=10";

const TopRecipes = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //Clean up text from request removing all htmltags
  const stripHtmlTags = (htmlString) =>
    htmlString.replace(/<\/?[^>]+(>|$)/g, "");

  const getRandomRecipes = async () => {
    try {
      setLoading(true);
      const randomRecipes = await fetchData(END_POINT_RANDOM);

      if (randomRecipes.recipes && randomRecipes.recipes.length > 0) {
        setData(randomRecipes.recipes);
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

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <div className="results-wrapper pb-5 mb-5">
      <div className="pt-5 mb-5 border-b border-indigo-300">
        <h2 className="text-4xl ">Our Top 10 Recipes</h2>
      </div>
      <div className="grid-container py-5 ">
        <div className="grid xs:grid-flow-row sm:grid-flow-col gap-3 sm:overflow-x-auto xs:overflow-y-auto py-4 xs:max-h-[500px]">
          {data &&
            data.map((recipe, index) => (
              <div key={index} className="recipe-card sm:w-[290px] xs:w-[100%]">
                <div className="card-image h-[160px] overflow-hidden">
                  <Link to={`/recipe/${recipe.id}`}>
                    <img
                      src={recipe.image || recipeImage}
                      alt="Recipe Image"
                      className="squared-image "
                    />
                  </Link>
                </div>
                <div className="recipe-card-content">
                  <div className="likes-display">
                    <FaHeart className="text-indigo-300 text-xl " />
                    <span>{recipe.aggregateLikes}</span>
                  </div>
                  <div className="h-[50px]">
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="text-xl hover:text-indigo-300 truncate-card-title"
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
      <div>
        <div className="flex justify-between mt-[3rem] py-5 xs:flex-wrap xs:gap-3">
          {foodExperts.map((expert) => (
            <div key={expert.id} className="expert-logo">
              <img src={expert.logo} alt="Food Expert Logo" className="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(TopRecipes, "topTen");
