import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from   "./components/Home/Home";
import Header from './components/Header/Header.js'
import Login from './components/Login/Login.js';
import Checkout from './components/Checkout/Checkout';
import {auth} from './components/Firebase/Firebase'
import { useStateValue } from "./components/Context/StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

return (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/">
         <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;