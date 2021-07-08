import {
  RECIPES_ADD_ALL,
  RECIPES_ADD_DETAILING,
} from "../../constants/reducersConst";

const defaultState = {
  allRecipes: [],
  detailingRecipes: [],
};

/** Редьюсер рецептов */
export default function RecipesReducer(state = defaultState, payload) {
  switch (payload.type) {
    /** Добавление всех рецептов */
    case RECIPES_ADD_ALL:
      return {
        ...state,
        allRecipes: payload.data,
      };
    /** Добавление детализированного рецепта */
    case RECIPES_ADD_DETAILING: {
      return {
        ...state,
        detailingRecipes: [...state.detailingRecipes, payload.data],
      };
    }
    default:
      return state;
  }
}
