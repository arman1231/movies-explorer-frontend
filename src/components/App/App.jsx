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
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(undefined);
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
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        setInitialMovies(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
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
    }, [isLoggedIn]);

    React.useEffect(() => {
      if (isLoggedIn) {
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
      }

      }, [isLoggedIn]);

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
        if (res) {
          setResponseMessage("Регистрация прошла успешно");
          setIsLoggedIn(true);
          history.push("/movies");
        } else {
          setResponseMessage("Произошла ошибка. Повторите еще раз.");
        }
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
          setResponseMessage('Что-то пошло не так!')
        }
        if (data.token) {
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err));
  }
  const [messageProfile, setMessageProfile] = React.useState('')
  function handleProfileSubmit(name, email) {
    mainApi
      .updateUser({ name, email })
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setMessageProfile('Изменения сохранены');
        } else {
          setResponseMessage('Произошла ошибка');
        }

      })
      .catch((err) => {
        console.log(err);
        setResponseMessage('Произошла ошибка');
      });
  }
  function handleLogout() {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({})
        setFilteredMovies([]);
        setSavedMovies([]);
        setResponseMessage('');
        setInitialMovies([]);
        setToggleButtonState(false);
        setSearchResultMovies([]);
        setSearchResult([])
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => console.log(err));
  }

  function handleSearchSubmit(search, toggleButtonState) {
    const filteredMovies = initialMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    filteredMovies.length === 0 ? setResponseMessage('Ничего не найдено') : setResponseMessage('');
    const sortedMovies = filteredMovies.filter((movie) => {
      return movie.duration < SHORT_MOVIE_DURATION;
    });
    if(!toggleButtonState) {
      setFilteredMovies(filteredMovies);
      localStorage.setItem('searchResultMovies', JSON.stringify(filteredMovies));
      localStorage.setItem("toggleButtonState", JSON.stringify(toggleButtonState));
    } else {
      setFilteredMovies(sortedMovies);
      localStorage.setItem('searchResultMovies', JSON.stringify(sortedMovies));
      localStorage.setItem("toggleButtonState", JSON.stringify(toggleButtonState));
    }
    setToggleButtonState(toggleButtonState);
  }

  function handleToggleShortMovie(checked) {
    setSearchResult(filteredMovies);
    const sortedMovies = filteredMovies.filter((movie) => {
      return movie.duration < SHORT_MOVIE_DURATION;
    });
    checked ? setFilteredMovies(sortedMovies) : setFilteredMovies(serachResust);
  }

  function handleToggleShortSavedMovie(checked) {
    setSearchResult(savedMovies);
    const sortedMovies = savedMovies.filter((movie) => {
      return movie.duration < SHORT_MOVIE_DURATION;
    });

    if (checked) {
      setSavedMovies(sortedMovies);
    } else {
      setSavedMovies(serachResust);
    }
  }

  function handleLoadMoreClick() {
    setVisibleMoviesCount((prevCount) => prevCount + defineLoadMoreStep(width));
  }

  function getSavedMovies() {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
        localStorage.setItem('savedMovies2', JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        localStorage.setItem('savedMovies2', JSON.stringify([newMovie, ...savedMovies]));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [searchResultSavedMoviesApp, setSearchResultSavedMoviesApp] = React.useState([])
  function handleSavedMoviesSearch(search, toggleButtonState) {
    const searchKostyl = savedMovies.length < JSON.parse(localStorage.getItem("savedMovies2")).length ? JSON.parse(localStorage.getItem("savedMovies2")) : savedMovies;
    const filteredMovies = searchKostyl.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    filteredMovies.length === 0 ? setResponseMessage('Ничего не найдено') : setResponseMessage('');
    const sortedMovies = filteredMovies.filter((movie) => {
      return movie.duration < SHORT_MOVIE_DURATION;
    });
    if(!toggleButtonState) {
      
      localStorage.setItem('searchResultSavedMovies', JSON.stringify(filteredMovies))
      setSearchResultSavedMoviesApp(filteredMovies)
      // setSavedMovies(filteredMovies);
    } else {
      localStorage.setItem('searchResultSavedMovies', JSON.stringify(sortedMovies))
      setSearchResultSavedMoviesApp(sortedMovies)
      // setSavedMovies(sortedMovies);
    }
    setToggleButtonState(toggleButtonState);
  }

  function deleteMovieFromSaved(savedMovieId) {
    mainApi
      .deleteMovieFromSaved(savedMovieId)
      .then(() => {
        setSavedMovies((prevState) => {
          const stat = prevState.filter((item) => item._id !== savedMovieId);
          localStorage.setItem('savedMovies2', JSON.stringify(stat));
          return stat
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const [searchResultMovies, setSearchResultMovies] = React.useState([]);
  const [moviesFromSavedMoviesPage, setMoviesFromSavedMoviesPage] = React.useState([]);
  React.useEffect(() => {
    if (localStorage.getItem("searchResultMovies")) {
      setSearchResultMovies(JSON.parse(localStorage.getItem("searchResultMovies")))
    }
    // if (localStorage.getItem("setMoviesFromSavedMoviesPage")) {
    //   setMoviesFromSavedMoviesPage(JSON.parse(localStorage.getItem("setMoviesFromSavedMoviesPage")))
    // }
    // localStorage.getItem("searchResultMovies") ? setSearchResultMovies(JSON.parse(localStorage.getItem("searchResultMovies"))) : '';
    // localStorage.getItem("setMoviesFromSavedMoviesPage") ? setMoviesFromSavedMoviesPage(JSON.parse(localStorage.getItem("setMoviesFromSavedMoviesPage"))) : ;
    
    // localStorage.setItem('setMoviesFromSavedMoviesPage', JSON.stringify(movies));
  }, [])
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
              filteredMovies={filteredMovies.length === 0 ? searchResultMovies : filteredMovies}
              savedMovies={savedMovies}
              handleSearchSubmit={handleSearchSubmit}
              visibleMoviesCount={visibleMoviesCount}
              handleLoadMoreClick={handleLoadMoreClick}
              handleSaveMovie={handleSaveMovie}
              deleteMovieFromSaved={deleteMovieFromSaved}
              handleToggleShortMovie={handleToggleShortMovie}
              isLoading={isLoading}
              responseMessage={responseMessage}
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
              responseMessage={responseMessage}
              searchResultSavedMoviesApp={searchResultSavedMoviesApp}
            />
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
              handleLogout={handleLogout}
              handleProfileSubmit={handleProfileSubmit}
              successMessage={messageProfile}
              responseMessage={responseMessage}
            />
            <Route path="/signin">
              {isLoggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login handleLoginSubmit={handleLoginSubmit} responseMessage={responseMessage}/>
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
