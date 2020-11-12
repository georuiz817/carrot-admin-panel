import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
  const api_key = process.env.REACT_APP_API_KEY;
  let logger = window.sessionStorage.getItem(
    `firebase:authUser:${api_key}:[DEFAULT]`
  );

  const clearFormFields = () => {
    setName("");
    setPrice("");
    setCategory("Vegetable");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <NavBar logger={logger} history={history} />
      <Switch>
        <Route exact path="/">
          {logger ? <Read history={history} /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/create">
          {logger ? (
            <Create
              history={history}
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              clearFormFields={clearFormFields}
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/update/:id/:oldName/:oldPrice/:oldCategory">
          {logger ? (
            <Update
              history={history}
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              clearFormFields={clearFormFields}
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/signup">
          {!logger ? <Signup history={history} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
          {!logger ? <Login history={history} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
