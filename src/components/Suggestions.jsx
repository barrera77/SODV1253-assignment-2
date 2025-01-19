import { useState, useEffect } from "react";
import { fetchData } from "../services/api-client.js";
import { PulseLoader } from "react-spinners";
import { recipeImage } from "../assets/index.js";
import { Link } from "react-router-dom";

const END_POINT_RANDOM = "/random?number=10";

const Suggestions = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="suggestions-wrapper py-5 mt-5">
      <div className="pt-5 mb-5 border-b border-indigo-300 ">
        <h2 className="text-4xl">Trending Now</h2>
      </div>
      <div className="grid-container py-5">
        <div className="grid xs:grid-flow-row sm:grid-flow-col gap-3 sm:overflow-x-auto xs:overflow-y-auto max-h-[450px]">
          {data &&
            data.map((recipe, index) => (
              <div className="random-recipe-card overflow-hidden" key={index}>
                <div className="suggestions-card-image">
                  <Link to={`/recipe/${recipe.id}`}>
                    <img
                      src={recipe.image || recipeImage}
                      alt="Recipe Image"
                      className="circled-image"
                    />
                  </Link>
                </div>
                <div className="card-content h-[180px] truncate-card-title">
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className=".truncate-card-title text-xl hover:text-indigo-300"
                  >
                    {recipe.title}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
