import { useState, useEffect } from "react";
import { fetchData } from "../services/api-client.js";
import { PulseLoader } from "react-spinners";
import { recipeImage } from "../assets/index.js";

const END_POINT_RANDOM = "/random?number=10";

const Suggestions = () => {
  const [data, setData] = useState(null);
  const [randomRecipes, setRandomRecipes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomRecipes = async () => {
    try {
      const randomRecipes = await fetchData(END_POINT_RANDOM);

      if (randomRecipes.length > 0) {
        setData(randomRecipes);
        setError(null);
      } else {
        throw new Error("Failed to fetch recipes");
      }
    } catch (err) {
      setError("Failed to fetch data", err);
      setData([]);
    }
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <div className="suggestions-wrapper py-5 mt-5">
      <div className="pt-5 mb-5 border-b border-indigo-300 ">
        <h2 className="text-4xl font-bold">Trending Now</h2>
      </div>
      <div className="grid-container">
        <div className="grid grid-flow-col gap-3 overflow-x-auto">
          {data &&
            data.map((recipe, index) => (
              <div className="recipe-card" key={index}>
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
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
