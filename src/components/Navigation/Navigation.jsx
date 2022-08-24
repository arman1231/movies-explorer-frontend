import React, { Children } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ children }) {
    return (
      <div className="header__links">
      {children}
    </div>
    )
  }
  
// export default function Navigation({ link }) {
//   return (
//     <div className="header__links">
    // <Link to="/signup" className="header__link">
    //   Регистрация
    // </Link>
    // <Link to={link} className="header__link_green">
    //   Войти
    // </Link>
//   </div>
//   )
// }
