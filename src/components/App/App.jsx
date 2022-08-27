import React from "react";
import "./App.css";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [responseMessage, setResponseMessage] = React.useState("");
  const location = useLocation();

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        mainApi.getContent(jwt).then((res) => {
          if (res) {
            setIsLoggedIn(true);
            history.push("/");
          }
        });
      }
    }
  }

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setInitialMovies(movies);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    mainApi
      .getUser()
      .then((user) => {
        if (!user) {
          console.log("Вы не авторизованны");
        } else {
          setCurrentUser(user);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }, [isLoggedIn]);

  function handleRegisterSubmit(name, email, password) {
    mainApi
      .createUser(name, email, password)
      .then((res) => {
        console.log(res);
        setResponseMessage("Регистрация прошла успешно");
        setIsLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        setResponseMessage(err);
        console.log(err);
      });
  }

  function handleLoginSubmit(email, password) {
    mainApi
      .login(email, password)
      .then((data) => {
        if (!data) {
          console.log("Что-то пошло не так!");
        }
        if (data.token) {
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleProfileSubmit(name, email) {
    mainApi
      .updateUser(name, email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    mainApi
      .logout()
      .then(()=> {
        setIsLoggedIn(false);
        history.push("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies initialMovies={initialMovies} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile" handleProfileSubmit={handleProfileSubmit}>
            <Profile handleLogout={handleLogout} />
          </Route>
          <Route path="/signin">
            <Login handleLoginSubmit={handleLoginSubmit} />
          </Route>
          <Route path="/signup">
            <Register
              handleRegisterSubmit={handleRegisterSubmit}
              responseMessage={responseMessage}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
