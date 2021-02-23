import React from "react";
import { handleLogOut } from "../config/otherfunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";

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
        ) : null}
      </div>
    </nav>
  );
}
