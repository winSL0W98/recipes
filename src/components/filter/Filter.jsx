import "./Filter.scss";
import React from "react";
import filterVector from "../../assets/filterVector.svg";
import searchIcon from "../../assets/searchIcon.svg";
import useModal from "../../hooks/useModal";
import AdditionalFilter from "../modals/AdditionalFilter/AdditionalFilter";
import filterThunk from "../../redux/thunk/filterThunk";
import { useDispatch } from "react-redux";

/**
 * Компонент фильтра на главной странице
 * @returns {JSX.Element}
 */
const Filter = () => {
  const { openModal } = useModal();
  const dispatch = useDispatch();

  /**
   * Открыть МО с расширенными фильтрами
   */
  const handleOpenAdditionalFilter = () => {
    openModal(<AdditionalFilter />);
  };

  /**
   * Поиск рецепта по наименованию
   * @param {object} event - Событие ввода
   */
  const handleFilterName = (event) => {
    dispatch(filterThunk.filterAdd({ name: event.target.value }));
  };

  return (
    <div className="filter">
      <div className="filter__input filter__wrapper">
        <img src={searchIcon} alt={searchIcon} />
        <input placeholder="search" onChange={handleFilterName} />
      </div>
      <div
        className="filter__wrapper filter__additional-filter"
        onClick={handleOpenAdditionalFilter}
      >
        <img src={filterVector} alt={filterVector} />
      </div>
    </div>
  );
};

export default Filter;
