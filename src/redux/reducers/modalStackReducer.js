import {
  MODAL_STACK_CLOSE,
  MODAL_STACK_CLOSE_ALL,
  MODAL_STACK_EDIT_PROPS,
  MODAL_STACK_OPEN,
} from "../../constants/reducersConst";

/**
 * Редьюсер для стека модальных окон
 */
export default function ModalStackReducer(state = [], action) {
  switch (action.type) {
    /** Открытие модального окна */
    case MODAL_STACK_OPEN:
      return [...state, action.data];
    /** Закрытие последнего модального окна */
    case MODAL_STACK_CLOSE: {
      const modalStackTmp = [...state];
      modalStackTmp.pop();
      return modalStackTmp;
    }
    /** Закрытие всех модальных окон */
    case MODAL_STACK_CLOSE_ALL:
      return [];
    /** Обновление пропсов для модального окна */
    case MODAL_STACK_EDIT_PROPS: {
      const modalTmp = [...state];
      modalTmp[action.key || modalTmp.length - 1].props = action.data;
      return [...modalTmp];
    }
    default:
      return state;
  }
}
