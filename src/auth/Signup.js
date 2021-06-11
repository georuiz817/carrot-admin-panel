import React, { useState, useContext } from "react";
import { signUpWithFireBase } from "../config/fireBaseFunctions";
import { AuthContext } from "../App";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  const [displayName, setdisplayName] = useState("");
  const Auth = useContext(AuthContext);

  return (
    <div className="auth-body">
      <h1>Sign up</h1>
      <form
        className="auth-form"
        onSubmit={(e) =>
          signUpWithFireBase(
            e,
            password,
            email,
            Auth,
            setErrors,
            error,
            history,
            displayName
          )
        }
      >
                <TextField
          className="signup-field"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required
          value={displayName}
          onChange={(e) => setdisplayName(e.target.value)}
          name="displayName"
          placeholder="Name"
        />
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
          Sign Up
        </Button>
        <Link to="/login">Already have an account? Login</Link>
      </form>
         <div className="error">{error}</div>
    </div>
  );
};

export default SignUp;
