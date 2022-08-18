import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <>      
     { loggedIn && <Header />} 
        <Switch>
          <Route exact path='/'><Main /></Route>
          <Route path='/movies'><Movies /></Route>
          <Route path='/saved-movies'><SavedMovies /></Route>
          <Route path='/profile'><Profile /></Route>
          <Route path='/signin'><Login /></Route>
          <Route path='/signup'><Register /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      { loggedIn && <Footer /> }
    </>
  );
}

export default App;
