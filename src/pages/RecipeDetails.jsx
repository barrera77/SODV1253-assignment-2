import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { fetchData } from "../services/api-client";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getRecipeDetails = async () => {
    try {
      setLoading(true);

      const recipeDetails = await fetchData("");

      if (recipeDetails) {
        setRecipe(recipeDetails);
        setError(null);
      }
    } catch (err) {
      setError("Failed to fetch data", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  /*   useEffect(() => {
    getRecipeDetails();
  }, []); */

  return (
    <div>
      <h2>Recipe Details Page</h2>
    </div>
  );
};

export default SectionWrapper(RecipeDetails, "recipeDetails");
