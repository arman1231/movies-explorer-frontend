import React from "react";
import "./App.css";
import {
  Route,
  Switch,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
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
  const [toggleButtonState, setToggleButtonState] = React.useState(null);
  const [serachResust, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

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
        // console.log(err);
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
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => console.log(err));
  }

  function handleSearchSubmit(search, toggleButtonState) {
    const filteredMovies = initialMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    const sortedMovies = filteredMovies.filter((movie) => {
      return movie.duration < 40;
    });
    !toggleButtonState ? setFilteredMovies(filteredMovies) : setFilteredMovies(sortedMovies);
    // setFilteredMovies(filteredMovies);
    setToggleButtonState(toggleButtonState);
  }

  function handleToggleShortMovie(checked) {
    setSearchResult(filteredMovies);
    // const searchResult = filteredMovies; 
    const sortedMovies = filteredMovies.filter((movie) => {
      return movie.duration < 40;
    });
    checked ? setFilteredMovies(sortedMovies) : setFilteredMovies(serachResust);
  }

  function handleToggleShortSavedMovie(checked) {
    setSearchResult(savedMovies);
    // const searchResult = filteredMovies; 
    const sortedMovies = savedMovies.filter((movie) => {
      return movie.duration < 40;
    });
    checked ? setSavedMovies(sortedMovies) : setSavedMovies(serachResust);
  }

  function handleLoadMoreClick() {
    setVisibleMoviesCount((prevCount) => prevCount + defineLoadMoreStep(width));
  }

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
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


  function handleSavedMoviesSearch(search, toggleButtonState) {
    console.log('click');
    const filteredMovies = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    const sortedMovies = filteredMovies.filter((movie) => {
      return movie.duration < 40;
    });
    !toggleButtonState ? setSavedMovies(filteredMovies) : setSavedMovies(sortedMovies);
    // setFilteredMovies(filteredMovies);
    setToggleButtonState(toggleButtonState);
  }

  // function handleSavedMoviesSearch() {
  //   mainApi
  //     .getSavedMovies()
  //     .then((movies) => {
  //       setSavedMovies(movies);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

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
              handleToggleShortMovie={handleToggleShortMovie}
              isLoading={isLoading}
            />
            <ProtectedRoute
              path="/saved-movies"
              isLoggedIn={isLoggedIn}
              component={SavedMovies}
              handleSavedMoviesSearch={handleSavedMoviesSearch}
              handleSearchSubmit={handleSavedMoviesSearch}
              visibleMoviesCount={visibleMoviesCount}
              savedMovies={savedMovies}
              getSavedMovies={getSavedMovies}
              deleteMovieFromSaved={deleteMovieFromSaved}
              handleToggleShortMovie={handleToggleShortSavedMovie}
              isLoading={isLoading}
            />
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
              handleLogout={handleLogout}
              handleProfileSubmit={handleProfileSubmit}
            />
            <Route path="/signin">
              {isLoggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login handleLoginSubmit={handleLoginSubmit} />
              )}
            </Route>
            <Route path="/signup">
              {isLoggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register
                  handleRegisterSubmit={handleRegisterSubmit}
                  responseMessage={responseMessage}
                />
              )}
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
