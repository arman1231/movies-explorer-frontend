import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  // const backLink = useHistory().goBack();
  return (
    <section className="not-found">
      <h1 className="not-found__heading">404</h1>
      <span className="not-found__subheading">Страница не найдена</span>
      <Link className='not-found__backlink link' to='/signup'>Назад</Link>
    </section>
  );
}
