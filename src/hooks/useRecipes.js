import React, { useState } from "react";
import { isEmpty } from "../utils/commonUtils";
import { useDispatch, useSelector } from "react-redux";
import recipesThunk from "../redux/thunk/reciepsThunk";
import { allRecipesDate, detailedRecipesData } from "../mokData/recipesData";

/**
 * Хук для работы с рецептами
 */
const useRecipes = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const detailingRecipes = useSelector(
    (state) => state.recipes
  ).detailingRecipes;
  /** Все рецепты */
  const [allRecipes, setAllRecipes] = useState([]);
  /** Детализированный рецепт */
  const [detailingRecipe, setDetailingRecipe] = useState({});

  /**
   * Получить все рецепты
   */
  const getAllRecipes = () => {
    setAllRecipes(allRecipesDate);
  };

  /**
   * Получить рецепты с учетом фильтров
   * @returns {array}
   */
  const getFilteredRecipes = () => {
    if (isEmpty(allRecipes)) {
      getAllRecipes();
    }
    if (!isEmpty(filters.kitchens) && !isEmpty(filters.name)) {
      return allRecipes.filter(
        (recipe) =>
          filters.kitchens.includes(recipe.cuisine.title) &&
          recipe.title.slice(0, filters.name.length).toLowerCase() ===
            filters.name.toLowerCase()
      );
    }
    if (!isEmpty(filters.kitchens)) {
      return allRecipes.filter((recipe) =>
        filters.kitchens.includes(recipe.cuisine.title)
      );
    }
    if (!isEmpty(filters.name)) {
      return allRecipes.filter(
        (recipe) =>
          recipe.title.slice(0, filters.name.length).toLowerCase() ===
          filters.name.toLowerCase()
      );
    }
    return allRecipes;
  };

  /**
   * Получать детализированный рецепт
   * @param {string} recipeId - ID рецепта
   */
  const getDetailedRecipe = (recipeId) => {
    const foundViewedRecipe = detailingRecipes.find(
      (recipe) => recipe.id === +recipeId
    );
    if (isEmpty(foundViewedRecipe)) {
      const foundRecipe = detailedRecipesData.filter(
        (recipe) => recipe.id === +recipeId
      )[0];
      dispatch(recipesThunk.addDetailingRecipe(foundRecipe));
      setDetailingRecipe(foundRecipe);
    } else {
      setDetailingRecipe(foundViewedRecipe);
    }
  };

  /**
   * Расчет время приготовления и ккал
   * @param {object} recipe - Рецепт
   * @returns {{kCal: *, time: *}}
   */
  const calcTimeAndKCal = (recipe) => {
    const time =
      recipe.cookTime > 60
        ? recipe.cookTime / 60 + " " + "hours"
        : recipe.cookTime + " " + "min";
    const kCal = recipe.caloricity + " " + "kCal";
    return { time, kCal };
  };

  return {
    allRecipes,
    detailingRecipe,
    getAllRecipes,
    getFilteredRecipes,
    getDetailedRecipe,
    calcTimeAndKCal,
  };
};

export default useRecipes;
