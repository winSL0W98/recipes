import "./AdditionalFilter.scss";
import React, { useState } from "react";
import closeBtn from "../../../assets/closeBtnIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import filterThunk from "../../../redux/thunk/filterThunk";
import useModal from "../../../hooks/useModal";

/**
 * Модальное окно с расширенными фильтрами
 * @returns {JSX.Element}
 */
const AdditionalFilter = () => {
  const filters = useSelector((state) => state.filters);
  const [formFields, setFormFields] = useState(filters.kitchens);
  const { closeLast } = useModal();
  const dispatch = useDispatch();
  const filtersConst = ["Caribbean", "Greek", "French", "Indian", "Chinese"];

  /**
   * Обработка выбора конкретной кухни
   * @param {string} kitchen - Наименование кухни
   */
  const handleChangeKitchen = (kitchen) => {
    setFormFields((prevState) => {
      const isSelectedKitchen = prevState.includes(kitchen);
      return isSelectedKitchen
        ? prevState.filter((el) => el.toLowerCase() !== kitchen.toLowerCase())
        : [...prevState, kitchen];
    });
  };

  /**
   * Отрисовка кухни
   * @param {string} kitchen - Наименование кухни
   * @returns {JSX.Element}
   */
  const renderKitchen = (kitchen) => {
    const isChecked = filters.kitchens.includes(kitchen);
    return (
      <div className="additional-filter__kitchen" key={kitchen}>
        <span>{kitchen}</span>
        <input
          type="checkbox"
          onChange={() => handleChangeKitchen(kitchen)}
          defaultChecked={isChecked}
        />
      </div>
    );
  };

  /**
   * Применить фильтр
   */
  const handleSearch = () => {
    dispatch(filterThunk.filterAdd({ kitchens: formFields }));
    closeLast();
  };

  /**
   * Отчистить фильтр
   */
  const handleClear = () => {
    dispatch(filterThunk.filterClear());
    closeLast();
  };

  return (
    <div className="additional-filter">
      <div className="additional-filter__close" onClick={closeLast}>
        <img src={closeBtn} alt={closeBtn} />
      </div>
      <h3 className="additional-filter__title">Фильтр</h3>
      {filtersConst.map(renderKitchen)}
      <div className="additional-filter__control-btns">
        <button
          className="additional-filter__button additional-filter__button--clear"
          onClick={handleClear}
        >
          Отчистить
        </button>
        <button
          className="additional-filter__button additional-filter__button--submit"
          onClick={handleSearch}
        >
          Показать рецепты
        </button>
      </div>
    </div>
  );
};

export default AdditionalFilter;
