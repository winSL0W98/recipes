import "./Header.scss";
import React from "react";
import mainIcon from "../../assets/headerIcon.svg";
import Filter from "../filter/Filter";

/**
 * Компонент шапки
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <div className="header">
      <div className="header__filter-wrapper">
        <h4>Air Recipes</h4>
        <span className="header__filter-description">
          Best Recipes for Best People
        </span>
        <div className="header__filter">
          <Filter />
        </div>
      </div>
      <div className="header__main-icon">
        <img src={mainIcon} alt={mainIcon} />
      </div>
    </div>
  );
};

export default Header;
