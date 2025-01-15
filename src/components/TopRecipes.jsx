import React from "react";
import { SectionWrapper } from "../hoc";

const TopRecipes = () => {
  return (
    <div>
      <h2>Top 10 Recipes</h2>
    </div>
  );
};

export default SectionWrapper(TopRecipes, "topTen");
