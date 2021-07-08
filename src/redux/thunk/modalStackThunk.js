import {
  MODAL_STACK_CLOSE,
  MODAL_STACK_CLOSE_ALL,
  MODAL_STACK_EDIT_PROPS,
  MODAL_STACK_OPEN,
} from "../../constants/reducersConst";

/**
 * Открытие модального окна
 * @param {Object} modal - модальное окно
 * @return {function(*): void}
 */
const open = (modal) => (dispatch) => {
  dispatch({ type: MODAL_STACK_OPEN, data: modal });
};

/**
 * Закрытие последнего модального окна
 * @return {function(*): void}
 */
const close = () => (dispatch) => {
  dispatch({ type: MODAL_STACK_CLOSE });
};

/**
 * Закрытие всех модальных окон
 * @return {function(*): void}
 */
const closeAll = () => (dispatch) => {
  dispatch({ type: MODAL_STACK_CLOSE_ALL });
};

/**
 * Изменение пропсов модального окна
 * @param {Object} props - пропсы модального окна
 * @param {number} key - Порядковый номер модального окна
 * @return {function(*): void}
 */
const editProps =
  (props, key = undefined) =>
  (dispatch) => {
    dispatch({ type: MODAL_STACK_EDIT_PROPS, data: props, key });
  };

export default { open, close, closeAll, editProps };
