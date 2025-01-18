import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../services/api-client";
import Navbar from "../components/Navbar";
import { recipeImage } from "../assets";
import { FaClock } from "react-icons/fa";
import { FaBowlFood, FaCubesStacked } from "react-icons/fa6";

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

  /*  useEffect(() => {
    getRecipeDetails();
  }, []); */

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
      <Navbar />

      <div className="recipe-details-content m-auto xs:w-[100%] xs:px-3 py-7 xl:w-[80%]  ">
        <div className="grid xs:grid-flow-row lg:grid-cols-2">
          <div className="col-one py-6">
            <div className="recipe-details-card m-auto xs:w-100% sm:w-[90%] xl:w-[90%]">
              <div className="details-card-header">
                <div className="py-3">
                  <h2 className="xs:text-2xl md:text-3xl text-indigo-300 font-semibold">
                    Recipe Title
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam, quia. Vero at maxime odit ut eos doloribus enim
                  veniam nam omnis, labore iure atque ad sint, totam tempora?
                  Ex, culpa?
                </p>
              </div>
              <div className="details-card-image-container xs:h-[250px] sm:h-[450px] md:h-[500px] lg:h-[350px] w-[100%] overflow-hidden">
                <img src={recipeImage} alt="" className="details-card-image" />
              </div>
            </div>
            <div className="m-auto flex xs:justify-between md:justify-center md:gap-[4rem] py-[1rem] xs:w-[100%] sm:w-[90%] xl:w-[90%]">
              <div className="flex items-center gap-2 xs:text-[12px] sm:text-[1em]">
                <FaClock className="xs:text-lg sm:text-xl text-indigo-300" />
                <span>{/* {recipe.readyInMinutes} */}45 min </span>
              </div>
              <div className="flex items-center gap-2 xs:text-[12px] sm:text-[1em]">
                <FaBowlFood className="xs:text-lg sm:text-xl text-indigo-300" />
                <span>{/* {recipe.servings}  */}4 serves</span>
              </div>
              <div className="flex items-center gap-2 xs:text-[12px] sm:text-[1em]">
                <FaCubesStacked className="xs:text-lg sm:text-xl text-indigo-300" />
                <span>
                  {/* {recipe.extendedIngredients.length} */} 15 ingredients
                </span>
              </div>
            </div>
            <div className="recipe-instructions m-auto xs:w-[100%] sm:w-[90%] xl:w-[90%]">
              <h3 className="py-3 my-6 text-2xl text-indigo-300 font-semibold">
                Recipe Instructions
              </h3>
              {/*  {renderInstructions()} */}
              <div className="py-2 flex w-[100%] instructions-step">
                <div className="step-index content-center w-[10%]">1</div>
                <div className="step-description w-[90%] xs:text-[14px]">
                  cook very carefully and with love
                </div>
              </div>
            </div>
          </div>
          <div className="col-two py-6">
            <div className="recipe-ingredients m-auto xs:w-[100%] sm:w-[90%] xl:w-[90%]">
              <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] m-auto">
                <div className="">
                  <h3 className="py-6 text-2xl text-indigo-300 font-semibold">
                    Ingredients
                  </h3>
                </div>
                <div className="ingredient my-4 flex xs:w-[100%] ">
                  <div className="ingredient-ammount xs:w-[30%]">
                    <span>300g</span>
                  </div>
                  <div className="ingredient-name xs:w-[70%]">Butter</div>
                </div>
                <div className="diet-tags mt-[4rem] flex xs:w-[100%]">
                  <div className="tag xs:w-[100%]">Gluten Free</div>
                </div>
                <div className="recommended-brands">
                  <div className="grid xs:grid-flow-row md:grid-flow-col">
                    <div className="brand-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
