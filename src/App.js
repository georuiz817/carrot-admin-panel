import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Read from "./read/Read";
import Create from "./create/Create";
import "./App.scss";
import Landing from "./landing/Landing";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Update from "./update/Update";

export const AuthContext = React.createContext(null);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory();
  const api_key = process.env.REACT_APP_API_KEY;
  let logger = window.sessionStorage.getItem(
    `firebase:authUser:${api_key}:[DEFAULT]`
  );

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <NavBar logger={logger} history={history} />
      <Switch>
        <Route exact path="/">
          {!logger ? <Landing history={history} /> : <Redirect to="/read" />}
        </Route>
        <Route exact path="/read">
          {logger ? <Read history={history} /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/create">
          {logger ? <Create history={history} /> : <Redirect to="/login" />}
        </Route>
        <Route
          exact
          path="/update/:id/:oldName/:oldPrice/:oldUnit/:oldCategory"
        >
          {logger ? <Update history={history} /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/signup">
          {!logger ? <Signup history={history} /> : <Redirect to="/read" />}
        </Route>
        <Route exact path="/login">
          {!logger ? <Login history={history} /> : <Redirect to="/read" />}
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
