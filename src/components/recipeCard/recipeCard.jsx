import "./recipeCard.scss";
import React from "react";
import { useHistory } from "react-router";
import useRecipes from "../../hooks/useRecipes";

/**
 * Карточка рецепта
 * @param {object} recipe - Рецепт
 * @returns {JSX.Element}
 */
const RecipeCard = ({ recipe }) => {
  const history = useHistory();
  const { calcTimeAndKCal } = useRecipes();
  const timeAndKCal = calcTimeAndKCal(recipe);
  const details = [timeAndKCal.time, timeAndKCal.kCal, recipe.cuisine.title];

  /**
   * Редирект на карточку рецепта
   * @param {string} id - ID рецепта
   */
  const viewRecipe = (id) => {
    history.push(`/viewRecipe/${id}`);
  };

  return (
    <div className="recipe-card" onClick={() => viewRecipe(recipe.id)}>
      <div className="recipe-card__icon">
        <img src={recipe.thumbnail} alt="Иконка" />
        <div className="recipe-card__details">
          {details.map((detail, index) => (
            <div key={index} className="recipe-card__details-item">
              {detail}
            </div>
          ))}
        </div>
      </div>
      <div className="recipe-card__info">
        <h3 className="recipe-card__name">{recipe.title}</h3>
        <span className="recipe-card__description">{recipe.description}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
