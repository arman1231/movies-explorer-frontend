import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search.svg";

export default function SearchForm({
  handleSearchSubmit,
  name,
  state,
  handleValueChange,
  handleShortFilmsSearch,
}) {
  const [search, setSearch] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    handleSearchSubmit(search);
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }
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
            name={name}
            checked={state}
            onChange={handleValueChange}
            onInput={handleShortFilmsSearch}
          />
          <span className="search-form__slider"></span>
        </label>
        <span>Короткометражки</span>
      </div>
    </form>
  );
}
