import "./Recipes.scss";
import React, { useEffect } from "react";
import RecipeCard from "../../components/recipeCard/recipeCard";
import Header from "../../components/header/Header";
import { isEmpty } from "../../utils/commonUtils";
import useRecipes from "../../hooks/useRecipes";

/**
 * Главная страница со всеми рецептами
 * @returns {JSX.Element}
 */
const RecipesPage = () => {
  const { allRecipes, getAllRecipes, getFilteredRecipes } = useRecipes();

  /**
   * Получение рецептов
   */
  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
      <div className="recipe-page">
        <Header />
        <div className="recipe-page__cards">
          {!isEmpty(allRecipes) &&
            getFilteredRecipes().map((recipe) => (
              <div key={recipe.id} className="recipe-page__card">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecipesPage;
