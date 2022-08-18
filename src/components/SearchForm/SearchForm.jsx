import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search.svg";

export default function SearchForm() {
  return (
    <form className="search-form">
      <fieldset className="search-form__data">
        <img
          className="search-form__icon"
          src={searchIcon}
          alt="иконка поиска"
        />
        <button className="search-form__submit" type="submit">
          Найти
        </button>
        <input className="search-form__input" type="text" placeholder="Фильм" />
      </fieldset>
      <div className="search-form__controls">
        <label className="search-form__switch">
          <input className="search-form__checkbox" type="checkbox" />
          <span className="search-form__slider"></span>
        </label>
        <span>Короткометражки</span>
      </div>
    </form>
  );
}
