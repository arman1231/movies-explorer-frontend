import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  handleSearchSubmit,
  handleToggleShortMovie
}) {
  const location = useLocation();
  const [search, setSearch] = React.useState("");
  const [toggleButtonState, setToggleButtonState] = React.useState(false);
  const [emptyQuery, setEmptyQuery] = React.useState('');


  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setSearch(localStorage.getItem("searchResult")
      ? JSON.parse(localStorage.getItem("searchResult"))
      : '');
      setToggleButtonState(localStorage.getItem("toggleButtonState")
      ? JSON.parse(localStorage.getItem("toggleButtonState"))
      : false);
      return () => {
        setSearch(search);
        setToggleButtonState(toggleButtonState);
      }
    } 

  }, [])
  
  function handleSubmit(e) {
    e.preventDefault();
    if (search.length >= 1) {
      setEmptyQuery('')
      handleSearchSubmit(search, toggleButtonState);
      localStorage.setItem("searchResult", JSON.stringify(search));
      localStorage.setItem("toggleButtonState", JSON.stringify(toggleButtonState));
    } else {
      setEmptyQuery('Введите поисковый запрос...')
    }
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleValueChange(e) {
    handleToggleShortMovie(e.target.checked)
    setToggleButtonState(e.target.checked)
  }

  // console.log(toggleButtonState);
  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="search-form__data">
        <img
          className="search-form__icon"
          src={searchIcon}
          alt="иконка поиска"
        />
        <button className="search-form__submit button" type="submit">
          Найти
        </button>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          value={search || ""}
          onChange={handleChangeSearch}
          required
        />
      </fieldset>
      <div className="search-form__controls">
        <label className="search-form__switch">
          <input
            className="search-form__checkbox"
            type="checkbox"
            onChange={handleValueChange}
            checked={toggleButtonState}
          />
          <span className="search-form__slider"></span>
        </label>
        <span>Короткометражки</span>
      </div>
      <span className="search-form__empty-query">{emptyQuery}</span>
    </form>
  );
}
