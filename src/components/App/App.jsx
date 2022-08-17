import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./App.css";
import Movies from "../Movies/Movies";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <>      
      { loggedIn && <Header /> }
      <div className="container">
        <Switch>
          <Route exact path='/'><Main /></Route>
          <Route path='/movies'><Movies /></Route>
          <Route path='/saved-movies'></Route>
          <Route path='/profile'></Route>
          <Route path='/signin'><Login /></Route>
          <Route path='/signup'><Register /></Route>
        </Switch>
      </div>
      { loggedIn && <Footer /> }
      {/* <Register></Register>
      <Login></Login> */}
    </>
  );
}

export default App;
