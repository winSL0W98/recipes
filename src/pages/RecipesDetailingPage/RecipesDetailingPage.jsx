import "./RecipesDetailingPage.scss";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import difficulty from "../../assets/difficultyIcon.svg";
import Stroke from "../../assets/Stroke.svg";
import cuisine from "../../assets/cuisineIcon.svg";
import time from "../../assets/timeIcon.svg";
import Slider from "../../components/slider/Slider";
import { isEmpty } from "../../utils/commonUtils";
import useRecipes from "../../hooks/useRecipes";

/**
 * Страница карточки рецепта
 * @returns {JSX.Element}
 * @constructor
 */
const RecipesDetailingPage = () => {
  const {
    params: { recipesId },
  } = useRouteMatch();
  const { detailingRecipe, getDetailedRecipe } = useRecipes();
  const [timeValue, setTimeValue] = useState("");
  const [kCal, setKCal] = useState("");
  /**
   * Присвоение значений дефолтным полям
   * @param {object} recipe - Рецепт
   */
  const setDefaultValues = (recipe) => {
    const calcTimeValue =
      recipe.cookTime > 60
        ? recipe.cookTime / 60 + " " + "hours"
        : recipe.cookTime + " " + "min";
    const calcKCal = recipe && recipe.caloricity + " " + "kCal";
    setTimeValue(calcTimeValue);
    setKCal(calcKCal);
  };

  /**
   * Поиск и сеттер детализированного рецепта
   */
  useEffect(() => {
    getDetailedRecipe(recipesId);
    if (!isEmpty(detailingRecipe)) {
      setDefaultValues(detailingRecipe);
    }
  }, [recipesId, detailingRecipe]);

  return (
    <>
      {!isEmpty(detailingRecipe) && (
        <div className="recipe-detailing">
          <div>
            <div className="recipe-detailing__info">
              <h2 className="recipe-detailing__title">
                {detailingRecipe.title}
              </h2>
              <div className="recipe-detailing__description">
                <span>{detailingRecipe.description}</span>
              </div>

              <div className="recipe-detailing__info-with-icons">
                <div className="recipe-detailing__wrapper-icons">
                  <img src={difficulty} alt="diff" />
                  <span>{detailingRecipe.difficulty}</span>
                </div>
                <div className="recipe-detailing__wrapper-icons">
                  <img src={time} alt="time" />
                  <span>{timeValue}</span>
                </div>
                <div className="recipe-detailing__wrapper-icons">
                  <img src={Stroke} alt="Stroke" />
                  <span>{kCal}</span>
                </div>
                <div className="recipe-detailing__wrapper-icons">
                  <img src={cuisine} alt="cuisine" />
                  <span>{detailingRecipe.cuisine.title}</span>
                </div>
              </div>
              <div className="recipe-detailing__ingredients">
                <span className="recipe-detailing__wrapper-block-name">
                  Ingredients
                </span>
                <ul>
                  {detailingRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="recipe-detailing__instructions">
                <span className="recipe-detailing__wrapper-block-name">
                  Instructions
                </span>
                <ul>
                  {detailingRecipe.instructions.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Slider viewedRecipes={detailingRecipe} />
        </div>
      )}
    </>
  );
};

export default RecipesDetailingPage;
