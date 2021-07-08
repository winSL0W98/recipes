import "./Recipes.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import recipesThunk from "../../redux/thunk/reciepsThunk";
import RecipeCard from "../../components/recipeCard/recipeCard";
import Header from "../../components/header/Header";
import { isEmpty } from "../../utils/commonUtils";
import { allRecipesDate } from "../../mokData/recipesData";

/**
 * Главная страница со всеми рецептами
 * @returns {JSX.Element}
 */
const RecipesPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters).filters;
  const recipes = useSelector((state) => state.recipes).allRecipes;

  /**
   * Получение рецептов
   */
  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(recipesThunk.addAllRecipes(allRecipesDate));
    }
  }, [recipes]);

  /**
   * Получить рецепты с учетом фильтров
   * @returns {array}
   */
  const getFilteredRecipes = () => {
    if (!isEmpty(filters.kitchens) && !isEmpty(filters.name)) {
      return recipes.filter(
        (recipe) =>
          filters.kitchens.includes(recipe.cuisine.title) &&
          recipe.title.slice(0, filters.name.length).toLowerCase() ===
            filters.name.toLowerCase()
      );
    }
    if (!isEmpty(filters.kitchens)) {
      return recipes.filter((recipe) =>
        filters.kitchens.includes(recipe.cuisine.title)
      );
    }
    if (!isEmpty(filters.name)) {
      return recipes.filter(
        (recipe) =>
          recipe.title.slice(0, filters.name.length).toLowerCase() ===
          filters.name.toLowerCase()
      );
    }
    return recipes;
  };

  return (
    <>
      <div className="recipe-page">
        <Header />
        <div className="recipe-page__cards">
          {recipes.length !== 0 &&
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
