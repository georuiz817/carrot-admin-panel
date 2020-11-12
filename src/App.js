import React, { useState, useEffect } from "react";
import {Redirect, Route, Switch } from "react-router-dom";
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
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("vegetable");
  let history = useHistory();

  useEffect(() => {
   const api_key = process.env.REACT_APP_API_KEY;
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${api_key}:[DEFAULT]`
    );
    if (user) setLoggedIn(true);
  }, []);


  
console.log(loggedIn)
  const handleLogOut = () => {
    history.push("/login");
    sessionStorage.clear();
    setLoggedIn(false);
  };

  const clearFormFields = () => {
    setName("");
    setPrice("");
    setCategory("Vegetable");
    history.push("/");
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
          render={(routerProps) => <Read {...routerProps} history={history} loggedIn={loggedIn} />}
        />
        <Route
          exact
          path="/create"
          render={(routerProps) => (
            <Create
              {...routerProps}
              history={history}
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              clearFormFields={clearFormFields}
            />
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
          path="/update/:id/:oldName/:oldPrice/:oldCategory"
          render={(routerProps) => (
            <Update
              {...routerProps}
              history={history}
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              clearFormFields={clearFormFields}
            />
          )}
        />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
