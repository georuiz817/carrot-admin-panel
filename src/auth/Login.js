import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import { logInWithFireBase } from "../config/fireBaseFunctions";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);

  return (
    <div className="auth-body">
      <h1>Login</h1>
      <form
        className="auth-form"
        onSubmit={(e) =>
          logInWithFireBase(e, password, email, Auth, setErrors, error, history)
        }
      >
        <TextField
          className="signup-field"
          id="outlined-basic"
          label="email"
          variant="outlined"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          required
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
 
        />
        <Button variant="outlined" type="submit">
          Login
        </Button>
        <Link to="/signup">Dont have an account? Signup</Link>
      </form>
      <div className="error">{error}</div>
    </div>
  );
};

export default Login;
