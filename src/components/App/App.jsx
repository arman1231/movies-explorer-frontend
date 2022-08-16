import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./App.css";

function App() {
  return (
    <>      
      {/* <Header></Header>
      <div className="container">
        <Switch>
          <Route path='/'></Route>
          <Route path='/movies'></Route>
          <Route path='/saved-movies'></Route>
          <Route path='/profile'></Route>
          <Route path='/signin'></Route>
          <Route path='/signup'></Route>
        </Switch>
      </div>
      <Main></Main>
      <Footer></Footer>
      <Register></Register> */}
      <Login></Login>
    </>
  );
}

export default App;
