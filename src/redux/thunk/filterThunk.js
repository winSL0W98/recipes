import { FILTER_ADD, FILTER_CLEAR } from "../../constants/reducersConst";

/**
 * Добавление фильтров
 * @param {object} data - Данные фильтров
 * @returns {Function}
 */
const filterAdd = (data) => (dispatch) => {
  console.log(data)
  dispatch({ type: FILTER_ADD, data });
};

/**
 * Отчистка фильтров
 * @returns {Function}
 */
const filterClear = () => (dispatch) => {
  dispatch({ type: FILTER_CLEAR });
};

export default { filterAdd, filterClear };
