/**
 * Проверка на пустоту
 * @param value - значение
 * @return {boolean}
 */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "number" && Number.isNaN(value)) ||
    (value instanceof Object && Object.keys(value).length === 0)
  );
};
