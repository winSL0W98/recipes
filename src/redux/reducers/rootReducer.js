import { combineReducers } from "redux";
import RecipesReducer from "./recipesReducer";
import modalStackReducer from "./modalStackReducer";
import FilterReducer from "./filterReducer";

/**
 * Корневой редьюсер
 */
export default combineReducers({
  /** Редьюсер рецептов */
  recipes: RecipesReducer,
  /** Редьюсер стека моадльных окон */
  modalStack: modalStackReducer,
  /** Редьюсер фильтров */
  filters: FilterReducer,
});
