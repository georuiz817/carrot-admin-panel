import React from "react";
import { Button } from "@material-ui/core";

export default function Landing({ history }) {
  return (
    <div className="landing-main">
      <div className="landing-title">
        <h1>Welcome to Carrot...</h1>
        <h3>
          Carrot runs on a React front-end and a Google Firestore back-end.
        </h3>
        <h3>
          Please create a account or login to continue with the website. Once
          your authentication is setup, please feel free to play around with our
          tasty food stock and perform all CRUD actions.
        </h3>
      </div>
      <div className="btn-group">
        <Button
          onClick={() => {
            history.push("/login");
          }}
          variant="outlined"
        >
          Login
        </Button>
        <Button
          onClick={() => {
            history.push("/signup");
          }}
          variant="outlined"
        >
          Signup
        </Button>
      </div>
    </div>
  );
}
