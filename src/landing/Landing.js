import React from "react";
import { Button } from "@material-ui/core";
import art from '../art.png'

export default function Landing({ history }) {
  return (
    <div className="landing-main">
      <img id='landing-img' width='100%'  alt='' src={art} />
      <div className='landing-col-1'>
      <div className="landing-title">
        <h1>Welcome to Carrot...</h1>
        <h3>
        Made with React and Firebase, Carrot allows our users to manage food stock from an adminstrative perspective.
        </h3>
        <h3>
          Please create a account or login to continue with the website. Once
          your authentication is setup, please feel free to play around a explore.
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
    </div>
  );
}