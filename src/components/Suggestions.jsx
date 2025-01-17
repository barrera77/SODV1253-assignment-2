import { useState, useEffect } from "react";
import { fetchData } from "../services/api-client.js";
import { PulseLoader } from "react-spinners";
import { recipeImage } from "../assets/index.js";

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

  /*  useEffect(() => {
    getRandomRecipes();
  }, []); */

  return (
    <div className="suggestions-wrapper py-5 mt-5">
      <div className="pt-5 mb-5 border-b border-indigo-300 ">
        <h2 className="text-4xl font-bold">Trending Now</h2>
      </div>
      <div className="grid-container">
        <div className="grid grid-flow-col gap-3 overflow-x-auto">
          {data &&
            data.map((recipe, index) => (
              <div className="random-recipe-card" key={index}>
                <div className="card-image">
                  <img
                    src={recipe.image}
                    alt="Recipe Image"
                    className="circled-image"
                  />
                </div>
                <div className="card-content">
                  <h3 className="text-2xl font-bold">{recipe.title}</h3>
                </div>
              </div>
            ))}
          <div className="random-recipe-card overflow-hidden">
            <div className="suggestions-card-image">
              <img
                src={/* recipe.image */ recipeImage} //replace later with the object image
                alt="Recipe Image"
                className="circled-image"
              />
            </div>
            <div className="card-content">
              <a href="" className="text-2xl font-bold hover:text-indigo-300">
                Recipe title
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
