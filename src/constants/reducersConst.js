/** Префикс рецепта */
export const recipesPrefix = "RECIPES";
/** Добавления все рецептов */
export const RECIPES_ADD_ALL = `${recipesPrefix}_ADD_ALL`;
/** Добавление детализированного рецепта */
export const RECIPES_ADD_DETAILING = `${recipesPrefix}_ADD_DETAILING`;

/** Префикс стека модальных окон */
export const modalStackPrefix = "MODAL_STACK";
/** Переопределение компонентов */
export const MODAL_STACK_OPEN = `${modalStackPrefix}_OPEN`;
/** Закрытие последнего модального окна */
export const MODAL_STACK_CLOSE = `${modalStackPrefix}_CLOSE`;
/** Закрытие всех модальных окон */
export const MODAL_STACK_CLOSE_ALL = `${modalStackPrefix}_CLOSE_ALL`;
/** Обновление пропсов для модального окна */
export const MODAL_STACK_EDIT_PROPS = `${modalStackPrefix}_EDIT_PROPS`;

/** Префикс фильтра */
export const filterPrefix = "FILTER";
/** Добавление фильтра */
export const FILTER_ADD = `${filterPrefix}_ADD`;
/** Отчистка фильтра */
export const FILTER_CLEAR = `${filterPrefix}_CLEAR`;
