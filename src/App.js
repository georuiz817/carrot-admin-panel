import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Read from "./read/Read";
import Create from "./create/Create";
import "./App.scss";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Update from "./update/Update";

export const AuthContext = React.createContext(null);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  let history = useHistory();

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:AIzaSyBTLA8KL6rAJzjHpk8Hr2d4Qb5AItE8Mbo:[DEFAULT]`
    );
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);

  const handleLogOut = () => {
    history.push("/login");
    sessionStorage.clear();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <NavBar
        handleLogOut={handleLogOut}
        loggedIn={loggedIn}
        history={history}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Read {...routerProps} history={history} />}
        />
        <Route
          exact
          path="/create"
          render={(routerProps) => (
            <Create {...routerProps} history={history} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(routerProps) => (
            <Signup {...routerProps} history={history} />
          )}
        />
        <Route
          exact
          path="/login"
          render={(routerProps) => <Login {...routerProps} history={history} />}
        />
        <Route
          exact
          path="/update/:id"
          render={(routerProps) => <Update {...routerProps} history={history} />}
        />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
