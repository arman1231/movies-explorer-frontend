import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <>      
      <Header></Header>
      <div className="container">
        <Switch>
          <Route path='/'></Route>
          <Route path='/movies'></Route>
          <Route path='/saved-movies'></Route>
          <Route path='/profile'></Route>
          <Route path='/signin'></Route>
          <Route path='/signup'></Route>
        </Switch>
        <span>MAIN</span>
      </div>
    </>
  );
}

export default App;
