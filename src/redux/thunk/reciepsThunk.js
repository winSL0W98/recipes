import {
  RECIPES_ADD_ALL,
  RECIPES_ADD_DETAILING,
} from "../../constants/reducersConst";

/**
 * Добавление всех рецептов
 * @param {array} data - Рецепты
 * @returns {Function}
 */
const addAllRecipes = (data) => (dispatch) => {
  dispatch({ type: RECIPES_ADD_ALL, data });
};

/**
 * Добавление детализированного рецепта
 * @param {object} data - Детализированый рецепт
 * @returns {Function}
 */
const addDetailingRecipe = (data) => (dispatch) => {
  dispatch({ type: RECIPES_ADD_DETAILING, data });
};

export default { addAllRecipes, addDetailingRecipe };
