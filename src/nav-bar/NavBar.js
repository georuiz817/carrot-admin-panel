import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";

export default function NavBar({ history, logger}) {
  const handleLogOut = () => {
    history.push("/login");
    sessionStorage.clear();

  };

  return (
    <nav className="nav">
      <h1
        onClick={() => {
          history.push("/");
        }}
        className="heading"
      >
        <FontAwesomeIcon icon={faCarrot} /> | Admin
      </h1>
      <div className="nav-btn">
        {logger ? (
          <Button variant="outlined" onClick={() => handleLogOut()}>
            Logout
          </Button>
        ) : null}
      </div>
    </nav>
  );
}