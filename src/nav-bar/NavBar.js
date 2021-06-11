import React from "react";
import { handleLogOut } from "../config/otherfunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
export default function NavBar({ history, logger }) {
  return (
    <nav className="nav">
      <h1
        onClick={() => {
          history.push("/read");
        }}
        className="heading"
      >
        <FontAwesomeIcon icon={faCarrot} /> Admin
      </h1>
      <div className="nav-btn">
        {logger ? (
          <Button variant="outlined" onClick={() => handleLogOut(history)}>
            Logout
          </Button>
        ) : (
          <div className="sign-up-buttons">
            <Box component="span" m={1}>
              <Button variant="outlined" onClick={() => history.push("/login")}>
                Login
              </Button>
            </Box>
            <Box component="span" m={1}>
              <Button
 
                variant="outlined"
                onClick={() => history.push("/signup")}
              >
                Signup
              </Button>
            </Box>
          </div>
        )}
      </div>
    </nav>
  );
}
