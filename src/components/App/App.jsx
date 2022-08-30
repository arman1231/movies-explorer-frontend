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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useCurrentWidth } from "../../hooks/useCurrentWidth";
import {
  defineLoadMoreStep,
  defineCardsPerPageCount,
} from "../../utils/loadMoreConditions";

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [responseMessage, setResponseMessage] = React.useState("");
  const width = useCurrentWidth();
  const [visibleMoviesCount, setVisibleMoviesCount] = React.useState(
    defineCardsPerPageCount(width)
  );
  const location = useLocation();

  function fetchMovies() {
    moviesApi
      .getMovies()
      .then((movies) => {
        setInitialMovies(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  React.useEffect(() => {
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
      .catch((err) => {
        setIsLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        setInitialMovies([]);
        localStorage.clear();
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      const localMovies = localStorage.getItem("movies");
      if (localMovies) {
        try {
          setInitialMovies(JSON.parse(localMovies));
        } catch (err) {
          localStorage.removeItem("movies");
          fetchMovies();
        }
      } else {
        fetchMovies();
      }
    }
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
      .updateUser({ name, email })
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
      .then(() => {
        setIsLoggedIn(false);
        history.push("/");
      })
      .catch((err) => console.log(err));
  }

  function handleSearchSubmit(search) {
    const filteredMovies = initialMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    setFilteredMovies(filteredMovies);
  }

  function handleLoadMoreClick() {
    setVisibleMoviesCount((prevCount) => prevCount + defineLoadMoreStep(width));
  }

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        console.log(movies);
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSavedMoviesSearch() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteMovieFromSaved(savedMovieId) {
    mainApi
      .deleteMovieFromSaved(savedMovieId)
      .then(() => {
        setSavedMovies((prevState) =>
          prevState.filter((item) => item._id !== savedMovieId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              path="/movies"
              isLoggedIn={isLoggedIn}
              component={Movies}
              filteredMovies={filteredMovies}
              savedMovies={savedMovies}
              handleSearchSubmit={handleSearchSubmit}
              visibleMoviesCount={visibleMoviesCount}
              handleLoadMoreClick={handleLoadMoreClick}
              handleSaveMovie={handleSaveMovie}
              deleteMovieFromSaved={deleteMovieFromSaved}
            />
            <ProtectedRoute
              path="/saved-movies"
              isLoggedIn={isLoggedIn}
              component={SavedMovies}
              handleSearchSubmit={handleSearchSubmit}
              visibleMoviesCount={visibleMoviesCount}
              savedMovies={savedMovies}
              getSavedMovies={getSavedMovies}
              deleteMovieFromSaved={deleteMovieFromSaved}
            />
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
              handleLogout={handleLogout}
              handleProfileSubmit={handleProfileSubmit}
            />
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
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
