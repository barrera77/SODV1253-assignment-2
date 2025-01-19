import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../services/api-client";
import Navbar from "../components/Navbar";
import { campbells, recipeImage } from "../assets";
import { FaClock, FaPrint } from "react-icons/fa";
import { FaBowlFood, FaCubesStacked } from "react-icons/fa6";
import { recommendedBrands } from "../constants";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const END_POINT_RECIPE_BY_ID = `/${id}/information?includeNutrition=false`;

  //Clean up text from request removing all htmltags
  const stripHtmlTags = (htmlString) =>
    htmlString.replace(/<\/?[^>]+(>|$)/g, "");

  const getRecipeDetails = async () => {
    try {
      setLoading(true);

      const recipeDetails = await fetchData(END_POINT_RECIPE_BY_ID);

      if (recipeDetails) {
        setRecipe(recipeDetails);
        setError(null);
      } else {
        setRecipe([]);
        setError(null);
      }
    } catch (err) {
      setError("Failed to fetch data", err);
      setRecipe([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  const renderInstructions = () => {
    if (!recipe) {
      return null;
    }

    if (
      !recipe.analyzedInstructions ||
      recipe.analyzedInstructions.length === 0
    )
      return <p>No instructions available.</p>;

    const steps = recipe.analyzedInstructions[0].steps;

    return (
      <div className="flex-col w-[100%] m-auto">
        {steps.map((step) => (
          <>
            <div
              key={step.number}
              className="py-2 flex w-[100%] instructions-step"
            >
              <div className="step-index content-center w-[10%]">
                {step.number}
              </div>
              <div className="step-description w-[90%]">{step.step}</div>
            </div>
          </>
        ))}
      </div>
    );
  };

  return (
    <div className="recipe-details-wrapper">
      <div className="nav-bar">
        <Navbar />
      </div>
      {loading && <p>Loading recipe details...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !recipe && <p>No recipe details available.</p>}

      {recipe && (
        <div className="recipe-details-content m-auto xs:w-[100%] xs:px-3 py-7 xl:w-[80%]  ">
          <div className="grid xs:grid-flow-row lg:grid-cols-2">
            <div className="col-one py-6">
              <div className="recipe-details-card m-auto xs:w-100% sm:w-[90%] xl:w-[80%]">
                <div className="details-card-header">
                  <div className="py-3">
                    <h2 className="xs:text-2xl md:text-3xl text-indigo-300 font-semibold">
                      {recipe.title || "Recipe Title"}
                    </h2>
                  </div>
                  <p>
                    {stripHtmlTags(recipe.summary || "No summary available")}
                  </p>
                </div>
                <div className="details-card-image-container xs:h-[250px] sm:h-[450px] md:h-[500px] lg:h-[350px] w-[100%] overflow-hidden">
                  <img
                    src={recipe.image || recipeImage}
                    alt=""
                    className="details-card-image"
                  />
                </div>
              </div>
              <div className="m-auto flex xs:justify-between md:justify-center md:gap-[4rem] py-[1rem] xs:w-[100%] sm:w-[90%] xl:w-[80%]">
                <div className="flex items-center gap-2 xs:text-[12px] sm:text-[1em]">
                  <FaClock className="xs:text-lg sm:text-xl text-indigo-300" />
                  <span>{recipe.readyInMinutes || 0}min </span>
                </div>
                <div className="flex items-center gap-2 xs:text-[12px] sm:text-[1em]">
                  <FaBowlFood className="xs:text-lg sm:text-xl text-indigo-300" />
                  <span>{recipe.servings || 0} serves</span>
                </div>
                <div className="flex items-center gap-2 xs:text-[12px] sm:text-[1em]">
                  <FaCubesStacked className="xs:text-lg sm:text-xl text-indigo-300" />
                  <span>
                    {recipe.extendedIngredients
                      ? recipe.extendedIngredients.length
                      : 0}{" "}
                    ingredients
                  </span>
                </div>
              </div>
              <div className="xs:w-[100%] sm:w-[90%] xl:w-[60%] m-auto">
                <button
                  onClick={() => window.print()}
                  className="print-button w-[100%] mt-4 "
                >
                  <FaPrint className="text-xl text-indigo-300" />
                  <span className="text-[14px]">Print Recipe</span>
                </button>
              </div>
              <div className="recipe-instructions m-auto xs:w-[100%] sm:w-[90%] xl:w-[80%]">
                <h3 className="py-3 my-6 text-2xl text-indigo-300 font-semibold">
                  Recipe Instructions
                </h3>
                {renderInstructions()}
              </div>
            </div>
            <div className="col-two py-6">
              <div className="recipe-ingredients m-auto xs:w-[100%] sm:w-[90%] xl:w-[90%]">
                <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] m-auto">
                  <div className="flex justify-between">
                    <h3 className="py-6 text-2xl text-indigo-300 font-semibold">
                      Ingredients
                    </h3>
                  </div>
                  {recipe.extendedIngredients.map((ingredient, index) => (
                    <div
                      key={`${ingredient.id}-${index}`}
                      className="ingredient my-4 flex xs:w-[100%] "
                    >
                      <div className="ingredient-ammount xs:w-[30%]">
                        <span>
                          {ingredient.amount} {ingredient.unit}
                        </span>
                      </div>
                      <div className="ingredient-name xs:w-[70%]">
                        {ingredient.name}
                      </div>
                    </div>
                  ))}
                  <div className="mt-[4rem]">
                    {recipe.diets.map((diet, index) => (
                      <div
                        key={index}
                        className="diet-tags mt-[1rem] flex xs:w-[100%]"
                      >
                        <div className="tag xs:w-[100%]">{diet}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="recommended-brands w-[90%] m-auto">
                <div className="mt-[3rem]">
                  <p className="text-[1em] py-4 italic">
                    &quot;Handpicked from the most renowned grocery brands, our
                    recommendations are crafted to meet the highest standards of
                    taste and quality&quot;
                  </p>
                </div>
                <div className="flex justify-between py-5 xs:flex-wrap xs:gap-3">
                  {recommendedBrands.map((brand) => (
                    <div key={brand.id} className="brand-card">
                      <img
                        src={brand.logo}
                        alt="campbells logo"
                        className="logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
