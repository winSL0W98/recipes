import { FILTER_ADD, FILTER_CLEAR } from "../../constants/reducersConst";

const defaultState = {
  name: "",
  kitchens: [],
};

/** Редьюсер фильтра */
export default function FilterReducer(state = defaultState, payload) {
  switch (payload.type) {
    /** Добавление фильтров */
    case FILTER_ADD:
      return {
        ...state,
        ...payload.data,
      };
    /** Отчистка фильтров*/
    case FILTER_CLEAR:
      return {
        ...defaultState,
      };

    default:
      return state;
  }
}
